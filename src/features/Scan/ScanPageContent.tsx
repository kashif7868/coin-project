"use client";

import {
  Camera,
  CameraOff,
  CheckCircle2,
  LoaderCircle,
  RefreshCcw,
  RotateCcw,
  ScanLine,
  ShieldCheck,
  Upload,
  XCircle,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { toast } from "sonner";

import {
  validateCoinImage,
} from "@/services/coinValidation.service";
import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/scan/ScanPageContent.module.css";

type CameraStatus =
  | "idle"
  | "requesting"
  | "active"
  | "denied"
  | "unavailable";

type CoinSide =
  | "front"
  | "back";

type ValidationStatus =
  | "idle"
  | "checking"
  | "valid"
  | "invalid";

interface CapturedCoinImages {
  front: string | null;
  back: string | null;
}

const ScanPageContent = () => {
  const router =
    useRouter();

  const searchParams =
    useSearchParams();

  const requestedMode =
    searchParams.get("mode");

  const requestedSource =
    searchParams.get("source");

  const isSellerMode =
    requestedMode === "sell";

  const isUploadMode =
    requestedMode === "upload" ||
    requestedSource === "upload";

  const setSellerImages =
    useSellerListingStore(
      (state) => state.setImages
    );

  const videoRef =
    useRef<HTMLVideoElement | null>(
      null
    );

  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null
    );

  const streamRef =
    useRef<MediaStream | null>(
      null
    );

  const fileInputRef =
    useRef<HTMLInputElement | null>(
      null
    );

  const [
    cameraStatus,
    setCameraStatus,
  ] =
    useState<CameraStatus>(
      "idle"
    );

  const [
    currentSide,
    setCurrentSide,
  ] =
    useState<CoinSide>(
      "front"
    );

  const [
    capturedImages,
    setCapturedImages,
  ] =
    useState<CapturedCoinImages>(
      {
        front: null,
        back: null,
      }
    );

  const [
    uploadedFiles,
    setUploadedFiles,
  ] =
    useState<File[]>([]);

  const [
    isProcessing,
    setIsProcessing,
  ] =
    useState(false);

  const [
    validationStatus,
    setValidationStatus,
  ] =
    useState<ValidationStatus>(
      "idle"
    );

  const [
    validationMessage,
    setValidationMessage,
  ] =
    useState(
      "Position the FRONT side inside the guide."
    );

  const [
    captureFlash,
    setCaptureFlash,
  ] =
    useState(false);

  const stopCamera =
    useCallback(() => {
      const stream =
        streamRef.current;

      if (stream) {
        stream
          .getTracks()
          .forEach((track) =>
            track.stop()
          );
      }

      streamRef.current =
        null;

      if (
        videoRef.current
      ) {
        videoRef.current.srcObject =
          null;
      }

      setCameraStatus(
        "idle"
      );
    }, []);

  const startCamera =
    useCallback(async () => {
      if (
        typeof navigator ===
          "undefined" ||
        !navigator.mediaDevices
          ?.getUserMedia
      ) {
        setCameraStatus(
          "unavailable"
        );

        toast.error(
          "Camera is not available on this device."
        );

        return;
      }

      stopCamera();

      setCameraStatus(
        "requesting"
      );

      try {
        const stream =
          await navigator.mediaDevices.getUserMedia(
            {
              video: {
                facingMode: {
                  ideal:
                    "environment",
                },
                width: {
                  ideal: 1920,
                },
                height: {
                  ideal: 1080,
                },
              },
              audio: false,
            }
          );

        streamRef.current =
          stream;

        if (
          videoRef.current
        ) {
          videoRef.current.srcObject =
            stream;

          await videoRef.current.play();
        }

        setCameraStatus(
          "active"
        );
      } catch (error) {
        console.error(
          "Camera access error:",
          error
        );

        if (
          error instanceof
            DOMException &&
          (
            error.name ===
              "NotAllowedError" ||
            error.name ===
              "PermissionDeniedError"
          )
        ) {
          setCameraStatus(
            "denied"
          );

          toast.error(
            "Camera permission was denied.",
            {
              description:
                "Please allow camera access in your browser settings.",
            }
          );

          return;
        }

        setCameraStatus(
          "unavailable"
        );

        toast.error(
          "Unable to open the camera.",
          {
            description:
              "You can upload coin images instead.",
          }
        );
      }
    }, [stopCamera]);

  useEffect(() => {
    if (isUploadMode) {
      stopCamera();

      return;
    }

    void startCamera();

    return () => {
      stopCamera();
    };
  }, [
    isUploadMode,
    startCamera,
    stopCamera,
  ]);

  const triggerFlash =
    () => {
      setCaptureFlash(
        true
      );

      window.setTimeout(
        () => {
          setCaptureFlash(
            false
          );
        },
        180
      );
    };

  const captureCurrentSide =
    async () => {
      const video =
        videoRef.current;

      const canvas =
        canvasRef.current;

      if (
        !video ||
        !canvas ||
        cameraStatus !==
          "active" ||
        validationStatus ===
          "checking"
      ) {
        return;
      }

      const width =
        video.videoWidth ||
        1280;

      const height =
        video.videoHeight ||
        720;

      canvas.width =
        width;

      canvas.height =
        height;

      const context =
        canvas.getContext(
          "2d"
        );

      if (!context) {
        return;
      }

      triggerFlash();

      context.drawImage(
        video,
        0,
        0,
        width,
        height
      );

      const image =
        canvas.toDataURL(
          "image/jpeg",
          0.92
        );

      const sideBeingCaptured =
        currentSide;

      setValidationStatus(
        "checking"
      );

      setValidationMessage(
        `Checking ${sideBeingCaptured.toUpperCase()} side...`
      );

      try {
        const validation =
          await validateCoinImage(
            image
          );

        if (
          !validation.valid
        ) {
          setValidationStatus(
            "invalid"
          );

          setValidationMessage(
            validation.message
          );

          toast.error(
            "Coin not detected",
            {
              description:
                validation.message,
            }
          );

          return;
        }

        /*
         * Scanner API is not available yet.
         *
         * We continue frontend testing, but
         * we do not falsely display
         * "Coin detected".
         */
        if (
          !validation.validationAvailable
        ) {
          setValidationStatus(
            "idle"
          );

          setValidationMessage(
            validation.message
          );
        } else {
          setValidationStatus(
            "valid"
          );

          const confidenceText =
            validation.confidence !==
            null
              ? ` ${Math.round(
                  validation.confidence *
                    100
                )}% confidence.`
              : "";

          setValidationMessage(
            `Coin detected.${confidenceText}`
          );
        }

        setCapturedImages(
          (current) => ({
            ...current,
            [sideBeingCaptured]:
              image,
          })
        );

        if (
          sideBeingCaptured ===
          "front"
        ) {
          setCurrentSide(
            "back"
          );

          setValidationMessage(
            validation.validationAvailable
              ? "Front coin side verified ✓ — flip the coin and capture the BACK side."
              : "Front captured ✓ — flip the coin and capture the BACK side."
          );

          toast.success(
            "Front side captured",
            {
              description:
                "Now flip the coin and capture the back side.",
            }
          );

          window.setTimeout(
            () => {
              setValidationStatus(
                "idle"
              );
            },
            600
          );

          return;
        }

        setValidationMessage(
          validation.validationAvailable
            ? "Back coin side verified ✓ — both sides are ready."
            : "Back captured ✓ — both sides are ready."
        );

        stopCamera();

        toast.success(
          "Back side captured",
          {
            description:
              "Both sides are ready for review.",
          }
        );
      } catch (error) {
        console.error(
          "Coin capture validation error:",
          error
        );

        setValidationStatus(
          "invalid"
        );

        setValidationMessage(
          "Unable to validate this image. Please try again."
        );

        toast.error(
          "Image validation failed"
        );
      }
    };

  const retakeSide = (
    side: CoinSide
  ) => {
    setCapturedImages(
      (current) => ({
        ...current,
        [side]: null,
      })
    );

    setCurrentSide(
      side
    );

    setValidationStatus(
      "idle"
    );

    setValidationMessage(
      side === "front"
        ? "Position the FRONT side inside the guide."
        : "Position the BACK side inside the guide."
    );

    void startCamera();
  };

  const restartCapture =
    () => {
      setCapturedImages({
        front: null,
        back: null,
      });

      setUploadedFiles(
        []
      );

      setCurrentSide(
        "front"
      );

      setValidationStatus(
        "idle"
      );

      setValidationMessage(
        "Position the FRONT side inside the guide."
      );

      void startCamera();
    };

  const openUploadPicker =
    () => {
      fileInputRef.current?.click();
    };

  const handleFileUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const files =
      Array.from(
        event.target.files ??
          []
      );

    if (!files.length) {
      return;
    }

    const validFiles =
      files.filter((file) =>
        [
          "image/jpeg",
          "image/png",
          "image/webp",
        ].includes(file.type)
      );

    if (
      !validFiles.length
    ) {
      toast.error(
        "Please select JPG, PNG or WEBP images."
      );

      event.target.value =
        "";

      return;
    }

    const selected =
      validFiles.slice(
        0,
        2
      );

    setUploadedFiles(
      selected
    );

    setCapturedImages({
      front: null,
      back: null,
    });

    stopCamera();

    toast.success(
      selected.length ===
        2
        ? "Front and back images selected"
        : "Front image selected",
      {
        description:
          selected.length ===
          2
            ? "Front and back are ready for validation."
            : "Please select the back image as well.",
      }
    );

    event.target.value =
      "";
  };

  const fileToDataUrl = (
    file: File
  ): Promise<string> => {
    return new Promise(
      (
        resolve,
        reject
      ) => {
        const reader =
          new FileReader();

        reader.onload =
          () => {
            if (
              typeof reader.result ===
              "string"
            ) {
              resolve(
                reader.result
              );

              return;
            }

            reject(
              new Error(
                "Unable to read image."
              )
            );
          };

        reader.onerror =
          () => {
            reject(
              new Error(
                "Unable to read image."
              )
            );
          };

        reader.readAsDataURL(
          file
        );
      }
    );
  };

  const isCaptureComplete =
    Boolean(
      capturedImages.front &&
        capturedImages.back
    );

  const handleAnalyze =
    async () => {
      if (isProcessing) {
        return;
      }

      if (
        !isCaptureComplete &&
        uploadedFiles.length <
          2
      ) {
        toast.error(
          "Please provide both front and back images."
        );

        return;
      }

      setIsProcessing(
        true
      );

      try {
        let frontImage:
          | string
          | null =
          capturedImages.front;

        let backImage:
          | string
          | null =
          capturedImages.back;

        if (
          uploadedFiles.length >=
          2
        ) {
          const [
            uploadedFront,
            uploadedBack,
          ] =
            await Promise.all([
              fileToDataUrl(
                uploadedFiles[0]
              ),
              fileToDataUrl(
                uploadedFiles[1]
              ),
            ]);

          const [
            frontValidation,
            backValidation,
          ] =
            await Promise.all([
              validateCoinImage(
                uploadedFront
              ),
              validateCoinImage(
                uploadedBack
              ),
            ]);

          if (
            !frontValidation.valid
          ) {
            toast.error(
              "Front image rejected",
              {
                description:
                  frontValidation.message,
              }
            );

            return;
          }

          if (
            !backValidation.valid
          ) {
            toast.error(
              "Back image rejected",
              {
                description:
                  backValidation.message,
              }
            );

            return;
          }

          if (
            !frontValidation.validationAvailable ||
            !backValidation.validationAvailable
          ) {
            toast.info(
              "Coin detection unavailable",
              {
                description:
                  "Frontend testing will continue. Real coin-only validation will activate when the scanner API is connected.",
              }
            );
          }

          frontImage =
            uploadedFront;

          backImage =
            uploadedBack;
        }

        if (
          !frontImage ||
          !backImage
        ) {
          toast.error(
            "Both front and back images are required."
          );

          return;
        }

        /*
         * SELLER FLOW
         */
        if (isSellerMode) {
          setSellerImages(
            frontImage,
            backImage
          );

          stopCamera();

          toast.success(
            "Coin images ready",
            {
              description:
                "Continue to review the coin details.",
            }
          );

          router.push(
            "/sell-review"
          );

          return;
        }

        /*
         * NORMAL COIN SCANNER FLOW
         *
         * Identification API will be
         * connected after object and
         * quality validation.
         */
        toast.info(
          "Coin images ready",
          {
            description:
              "Coin identification API will be connected here.",
          }
        );
      } catch (error) {
        console.error(
          "Coin image processing error:",
          error
        );

        toast.error(
          "Unable to process the coin images."
        );
      } finally {
        setIsProcessing(
          false
        );
      }
    };

  return (
    <section
      className={
        styles.scanPage
      }
    >
      <div
        className={
          styles.scanContainer
        }
      >
        <div
          className={
            styles.scanHeading
          }
        >
          <span
            className={
              styles.scanHeadingBadge
            }
          >
            {isSellerMode
              ? "Seller Coin Scanner"
              : "Coin Identifier"}
          </span>

          <h1>
            {isSellerMode
              ? "Scan Your Coin to Sell"
              : "Scan Your Coin"}
          </h1>

          <p>
            {isSellerMode
              ? "Capture the front and back sides separately. Each image will be checked before continuing."
              : "Capture the front and back sides separately to identify your coin and discover its collectible details."}
          </p>
        </div>

        <div
          className={
            styles.scanWorkspace
          }
        >
          {!isUploadMode && (
            <div
              className={
                styles.cameraPanel
              }
            >
              <div
                className={
                  styles.captureProgress
                }
              >
                <div
                  className={`${styles.captureStep} ${
                    capturedImages.front
                      ? styles.captureStepDone
                      : currentSide ===
                        "front"
                      ? styles.captureStepActive
                      : ""
                  }`}
                >
                  <span>
                    {capturedImages.front
                      ? "✓"
                      : "1"}
                  </span>

                  <div>
                    <p>
                      Front
                    </p>

                    <small>
                      {capturedImages.front
                        ? "Captured"
                        : currentSide ===
                          "front"
                        ? "Capture now"
                        : "Pending"}
                    </small>
                  </div>
                </div>

                <div
                  className={
                    styles.captureProgressLine
                  }
                />

                <div
                  className={`${styles.captureStep} ${
                    capturedImages.back
                      ? styles.captureStepDone
                      : currentSide ===
                        "back"
                      ? styles.captureStepActive
                      : ""
                  }`}
                >
                  <span>
                    {capturedImages.back
                      ? "✓"
                      : "2"}
                  </span>

                  <div>
                    <p>
                      Back
                    </p>

                    <small>
                      {capturedImages.back
                        ? "Captured"
                        : currentSide ===
                          "back"
                        ? "Capture now"
                        : "Waiting"}
                    </small>
                  </div>
                </div>
              </div>

              {!isCaptureComplete ? (
                <>
                  <div
                    className={
                      styles.captureInstruction
                    }
                  >
                    <ScanLine
                      size={16}
                    />

                    <span>
                      Now scanning:{" "}
                      <strong>
                        {currentSide ===
                        "front"
                          ? "FRONT"
                          : "BACK"}
                      </strong>
                    </span>
                  </div>

                  <div
                    className={
                      styles.cameraViewport
                    }
                  >
                    <video
                      ref={
                        videoRef
                      }
                      autoPlay
                      muted
                      playsInline
                      className={
                        styles.cameraVideo
                      }
                    />

                    {captureFlash && (
                      <div
                        className={
                          styles.captureFlash
                        }
                      />
                    )}

                    <div
                      className={
                        styles.liveSideIndicator
                      }
                    >
                      <span>
                        {currentSide ===
                        "front"
                          ? "FRONT SIDE"
                          : "BACK SIDE"}
                      </span>
                    </div>

                    {cameraStatus ===
                      "requesting" && (
                      <div
                        className={
                          styles.cameraMessage
                        }
                      >
                        <Camera
                          size={28}
                        />

                        <p>
                          Opening camera...
                        </p>
                      </div>
                    )}

                    {(
                      cameraStatus ===
                        "denied" ||
                      cameraStatus ===
                        "unavailable"
                    ) && (
                      <div
                        className={
                          styles.cameraMessage
                        }
                      >
                        <CameraOff
                          size={30}
                        />

                        <p>
                          Camera unavailable
                        </p>

                        <span>
                          Allow camera access or upload images instead.
                        </span>
                      </div>
                    )}

                    {cameraStatus ===
                      "active" && (
                      <div
                        className={
                          styles.coinGuide
                        }
                      >
                        <div
                          className={
                            styles.coinGuideCircle
                          }
                        />

                        <div
                          className={
                            styles.coinGuideInstructions
                          }
                        >
                          <strong>
                            {currentSide ===
                            "front"
                              ? "Front Side"
                              : "Back Side"}
                          </strong>

                          <span>
                            Keep one complete coin inside the circle
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className={`${styles.captureStatusMessage} ${
                      validationStatus ===
                      "valid"
                        ? styles.captureStatusSuccess
                        : validationStatus ===
                          "invalid"
                        ? styles.captureStatusError
                        : ""
                    }`}
                  >
                    {validationStatus ===
                    "checking" ? (
                      <LoaderCircle
                        size={16}
                        className={
                          styles.validationSpinner
                        }
                      />
                    ) : validationStatus ===
                      "valid" ? (
                      <CheckCircle2
                        size={16}
                      />
                    ) : validationStatus ===
                      "invalid" ? (
                      <XCircle
                        size={16}
                      />
                    ) : (
                      <ShieldCheck
                        size={16}
                      />
                    )}

                    <span>
                      {validationMessage}
                    </span>
                  </div>

                  <canvas
                    ref={
                      canvasRef
                    }
                    className={
                      styles.hiddenCanvas
                    }
                  />

                  <div
                    className={
                      styles.cameraActions
                    }
                  >
                    {cameraStatus ===
                      "active" && (
                      <button
                        type="button"
                        onClick={() =>
                          void captureCurrentSide()
                        }
                        disabled={
                          validationStatus ===
                          "checking"
                        }
                        className={
                          styles.captureButton
                        }
                      >
                        {validationStatus ===
                        "checking" ? (
                          <LoaderCircle
                            size={18}
                            className={
                              styles.validationSpinner
                            }
                          />
                        ) : (
                          <Camera
                            size={18}
                          />
                        )}

                        {validationStatus ===
                        "checking"
                          ? "Checking Coin..."
                          : currentSide ===
                            "front"
                          ? "Capture Front Side"
                          : "Capture Back Side"}
                      </button>
                    )}

                    {cameraStatus !==
                      "active" && (
                      <button
                        type="button"
                        onClick={() =>
                          void startCamera()
                        }
                        className={
                          styles.captureButton
                        }
                      >
                        <Camera
                          size={17}
                        />

                        Open Camera
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={
                        openUploadPicker
                      }
                      disabled={
                        validationStatus ===
                        "checking"
                      }
                      className={
                        styles.secondaryButton
                      }
                    >
                      <Upload
                        size={17}
                      />

                      Upload Instead
                    </button>
                  </div>
                </>
              ) : (
                <div
                  className={
                    styles.reviewPanel
                  }
                >
                  <div
                    className={
                      styles.reviewHeader
                    }
                  >
                    <CheckCircle2
                      size={20}
                    />

                    <div>
                      <h2>
                        Both sides captured
                      </h2>

                      <p>
                        Front and back are clearly separated. Review them before continuing.
                      </p>
                    </div>
                  </div>

                  <div
                    className={
                      styles.reviewGrid
                    }
                  >
                    <div
                      className={
                        styles.reviewImageCard
                      }
                    >
                      <span>
                        FRONT SIDE
                      </span>

                      {capturedImages.front && (
                        <img
                          src={
                            capturedImages.front
                          }
                          alt="Front side of captured coin"
                        />
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          retakeSide(
                            "front"
                          )
                        }
                      >
                        <RefreshCcw
                          size={14}
                        />

                        Retake Front
                      </button>
                    </div>

                    <div
                      className={
                        styles.reviewImageCard
                      }
                    >
                      <span>
                        BACK SIDE
                      </span>

                      {capturedImages.back && (
                        <img
                          src={
                            capturedImages.back
                          }
                          alt="Back side of captured coin"
                        />
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          retakeSide(
                            "back"
                          )
                        }
                      >
                        <RefreshCcw
                          size={14}
                        />

                        Retake Back
                      </button>
                    </div>
                  </div>

                  <div
                    className={
                      styles.reviewActions
                    }
                  >
                    <button
                      type="button"
                      onClick={
                        restartCapture
                      }
                      disabled={
                        isProcessing
                      }
                      className={
                        styles.secondaryButton
                      }
                    >
                      <RotateCcw
                        size={16}
                      />

                      Start Again
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        void handleAnalyze()
                      }
                      disabled={
                        isProcessing
                      }
                      className={
                        styles.analyzeButton
                      }
                    >
                      <ScanLine
                        size={17}
                      />

                      {isProcessing
                        ? "Processing..."
                        : isSellerMode
                        ? "Continue to Review"
                        : "Analyze Coin"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          <div
            className={
              styles.uploadPanel
            }
          >
            <div
              className={
                styles.uploadIcon
              }
            >
              <Upload
                size={24}
              />
            </div>

            <h2>
              Upload Front &amp; Back
            </h2>

            <p>
              Select two clear coin images. The first image is Front and the second is Back.
            </p>

            <button
              type="button"
              onClick={
                openUploadPicker
              }
              disabled={
                isProcessing
              }
              className={
                styles.uploadButton
              }
            >
              Choose Coin Images
            </button>

            <input
              ref={
                fileInputRef
              }
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={
                handleFileUpload
              }
              className={
                styles.fileInput
              }
            />

            {uploadedFiles.length >
              0 && (
              <div
                className={
                  styles.selectedFiles
                }
              >
                {uploadedFiles.map(
                  (
                    file,
                    index
                  ) => (
                    <div
                      key={`${file.name}-${index}`}
                      className={
                        styles.selectedFile
                      }
                    >
                      <CheckCircle2
                        size={15}
                      />

                      <span>
                        {index ===
                        0
                          ? "FRONT"
                          : "BACK"}
                        :{" "}
                        {file.name}
                      </span>
                    </div>
                  )
                )}

                {uploadedFiles.length ===
                  2 && (
                  <button
                    type="button"
                    onClick={() =>
                      void handleAnalyze()
                    }
                    disabled={
                      isProcessing
                    }
                    className={
                      styles.analyzeButton
                    }
                  >
                    {isProcessing ? (
                      <LoaderCircle
                        size={17}
                        className={
                          styles.validationSpinner
                        }
                      />
                    ) : (
                      <ScanLine
                        size={17}
                      />
                    )}

                    {isProcessing
                      ? "Checking Images..."
                      : isSellerMode
                      ? "Continue to Review"
                      : "Analyze Coin"}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanPageContent;