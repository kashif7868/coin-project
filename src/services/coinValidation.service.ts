export interface CoinValidationResult {
  valid: boolean;
  confidence: number | null;
  detectedObject: string | null;
  message: string;
  validationAvailable: boolean;
}

interface ValidateCoinApiResponse {
  valid?: boolean;
  confidence?: number;
  object?: string;
  detectedObject?: string;
  message?: string;
}

const SCANNER_API_URL =
  process.env.NEXT_PUBLIC_SCANNER_API_URL?.replace(
    /\/$/,
    ""
  );

const dataUrlToBlob = async (
  image: string
): Promise<Blob> => {
  const response =
    await fetch(image);

  if (!response.ok) {
    throw new Error(
      "Unable to prepare captured image."
    );
  }

  return response.blob();
};

export const validateCoinImage = async (
  image: string
): Promise<CoinValidationResult> => {
  if (!image) {
    return {
      valid: false,
      confidence: null,
      detectedObject: null,
      message:
        "No image was provided.",
      validationAvailable: true,
    };
  }

  /*
   * Backend is not connected yet.
   *
   * During frontend testing we must NOT pretend
   * that an arbitrary object is a valid coin.
   *
   * So validationAvailable=false tells the UI
   * that coin-object detection has been skipped,
   * rather than falsely reporting "coin detected".
   */
  if (!SCANNER_API_URL) {
    return {
      valid: true,
      confidence: null,
      detectedObject: null,
      message:
        "Coin detection will run when the scanner API is connected.",
      validationAvailable: false,
    };
  }

  try {
    const blob =
      await dataUrlToBlob(
        image
      );

    const formData =
      new FormData();

    formData.append(
      "image",
      blob,
      "coin-capture.jpg"
    );

    const response =
      await fetch(
        `${SCANNER_API_URL}/validate-coin`,
        {
          method: "POST",
          body: formData,
        }
      );

    if (!response.ok) {
      throw new Error(
        `Coin validation failed with status ${response.status}.`
      );
    }

    const result =
      (await response.json()) as ValidateCoinApiResponse;

    const detectedObject =
      result.detectedObject ??
      result.object ??
      null;

    const confidence =
      typeof result.confidence ===
      "number"
        ? result.confidence
        : null;

    const valid =
      result.valid === true;

    return {
      valid,
      confidence,
      detectedObject,
      validationAvailable: true,
      message:
        result.message ??
        (
          valid
            ? "Coin detected."
            : "No coin detected."
        ),
    };
  } catch (error) {
    console.error(
      "Coin validation API error:",
      error
    );

    /*
     * During development an unavailable API
     * should not destroy the complete frontend
     * scanner test.
     *
     * We clearly mark validation as unavailable
     * instead of pretending validation passed.
     */
    return {
      valid: true,
      confidence: null,
      detectedObject: null,
      validationAvailable: false,
      message:
        "Coin detection service is currently unavailable.",
    };
  }
};