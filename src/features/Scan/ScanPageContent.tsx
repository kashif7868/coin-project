"use client";

import {
  Camera,
  CameraOff,
  CheckCircle2,
  RefreshCcw,
  RotateCcw,
  ScanLine,
  Upload,
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

interface CapturedCoinImages {
  front: string | null;
  back: string | null;
}

const ScanPageContent = () => {
  const router = useRouter();
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

  const [cameraStatus, setCameraStatus] =
    useState<CameraStatus>("idle");

  const [currentSide, setCurrentSide] =
    useState<CoinSide>("front");

  const [
    capturedImages,
    setCapturedImages,
  ] = useState<CapturedCoinImages>({
    front: null,
    back: null,
  });

  const [
    uploadedFiles,
    setUploadedFiles,
  ] = useState<File[]>([]);

  const [isProcessing, setIsProcessing] =
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

      streamRef.current = null;

      if (videoRef.current) {
        videoRef.current.srcObject =
          null;
      }

      setCameraStatus("idle");
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

        if (videoRef.current) {
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

  const captureCurrentSide =
    () => {
      const video =
        videoRef.current;

      const canvas =
        canvasRef.current;

      if (
        !video ||
        !canvas ||
        cameraStatus !==
          "active"
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

      setCapturedImages(
        (current) => ({
          ...current,
          [currentSide]:
            image,
        })
      );

      if (
        currentSide ===
        "front"
      ) {
        setCurrentSide(
          "back"
        );

        toast.success(
          "Front side captured",
          {
            description:
              "Now turn the coin over and capture the back.",
          }
        );

        return;
      }

      stopCamera();

      toast.success(
        "Both sides captured"
      );
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

    setCurrentSide(side);

    void startCamera();
  };

  const restartCapture =
    () => {
      setCapturedImages({
        front: null,
        back: null,
      });

      setUploadedFiles([]);

      setCurrentSide(
        "front"
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
      selected.length === 2
        ? "Front and back images selected"
        : "Coin image selected",
      {
        description:
          selected.length ===
          2
            ? "Review the selected files, then analyze the coin."
            : "Please select both front and back images.",
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

      setIsProcessing(true);

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
         *
         * We save the images
         * before leaving the
         * scanner so the next
         * seller page can use
         * them.
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
         * NORMAL SCANNER FLOW
         *
         * Keep the current
         * behaviour until the
         * identification API is
         * connected.
         */
        toast.info(
          "Coin analysis ready",
          {
            description:
              "Next step is connecting these images to your quality and identification API.",
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
              ? "Capture clear images of both sides of your coin. We will use them to begin your marketplace listing."
              : "Capture clear images of both sides of your coin to discover its identity, history and collectible details."}
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
                    1
                  </span>

                  <p>
                    Front
                  </p>
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
                    2
                  </span>

                  <p>
                    Back
                  </p>
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
                      size={
                        16
                      }
                    />

                    <span>
                      Capture
                      the{" "}
                      <strong>
                        {
                          currentSide
                        }
                      </strong>{" "}
                      side of
                      the coin
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

                    {cameraStatus ===
                      "requesting" && (
                      <div
                        className={
                          styles.cameraMessage
                        }
                      >
                        <Camera
                          size={
                            28
                          }
                        />

                        <p>
                          Opening
                          camera...
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
                          size={
                            30
                          }
                        />

                        <p>
                          Camera
                          unavailable
                        </p>

                        <span>
                          Allow
                          camera
                          access or
                          upload
                          images
                          instead.
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

                        <span
                          className={
                            styles.coinGuideLabel
                          }
                        >
                          Keep
                          the full
                          coin
                          inside
                          the
                          circle
                        </span>
                      </div>
                    )}
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
                        onClick={
                          captureCurrentSide
                        }
                        className={
                          styles.captureButton
                        }
                      >
                        <Camera
                          size={
                            18
                          }
                        />

                        Capture{" "}
                        {currentSide ===
                        "front"
                          ? "Front"
                          : "Back"}
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
                          size={
                            17
                          }
                        />

                        Open
                        Camera
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={
                        openUploadPicker
                      }
                      className={
                        styles.secondaryButton
                      }
                    >
                      <Upload
                        size={
                          17
                        }
                      />

                      Upload
                      Instead
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
                      size={
                        20
                      }
                    />

                    <div>
                      <h2>
                        Both
                        sides
                        captured
                      </h2>

                      <p>
                        Review
                        the
                        images
                        before
                        analysis.
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
                        Front
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
                          size={
                            14
                          }
                        />

                        Retake
                      </button>
                    </div>

                    <div
                      className={
                        styles.reviewImageCard
                      }
                    >
                      <span>
                        Back
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
                          size={
                            14
                          }
                        />

                        Retake
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
                        size={
                          16
                        }
                      />

                      Start
                      Again
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
                        size={
                          17
                        }
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
              Upload Front
              &amp; Back
            </h2>

            <p>
              Use sharp,
              well-lit images
              with minimal
              glare and the
              complete coin
              visible.
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
              Choose Coin
              Images
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
                        size={
                          15
                        }
                      />

                      <span>
                        {index ===
                        0
                          ? "Front"
                          : "Back"}
                        :{" "}
                        {
                          file.name
                        }
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
                    <ScanLine
                      size={
                        17
                      }
                    />

                    {isProcessing
                      ? "Processing..."
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