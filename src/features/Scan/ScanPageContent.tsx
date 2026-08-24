"use client";

import {
  Camera,
  CameraOff,
  CheckCircle2,
  RefreshCcw,
  Upload,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import styles from "@/components/animations/css/scan/ScanPageContent.module.css";

type CameraStatus =
  | "idle"
  | "requesting"
  | "active"
  | "denied"
  | "unavailable";

const ScanPageContent = () => {
  const searchParams = useSearchParams();

  const requestedMode =
    searchParams.get("mode");

  const videoRef =
    useRef<HTMLVideoElement | null>(null);

  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  const streamRef =
    useRef<MediaStream | null>(null);

  const fileInputRef =
    useRef<HTMLInputElement | null>(null);

  const [cameraStatus, setCameraStatus] =
    useState<CameraStatus>("idle");

  const [capturedImage, setCapturedImage] =
    useState<string | null>(null);

  const [uploadedFiles, setUploadedFiles] =
    useState<File[]>([]);

  const stopCamera = useCallback(() => {
    const stream = streamRef.current;

    if (stream) {
      stream
        .getTracks()
        .forEach((track) => {
          track.stop();
        });
    }

    streamRef.current = null;

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraStatus("idle");
  }, []);

  const startCamera = useCallback(async () => {
    if (
      typeof navigator === "undefined" ||
      !navigator.mediaDevices?.getUserMedia
    ) {
      setCameraStatus("unavailable");

      toast.error(
        "Camera is not available on this device."
      );

      return;
    }

    stopCamera();

    setCapturedImage(null);
    setCameraStatus("requesting");

    try {
      /*
       * Mobile:
       * prefer rear/environment camera.
       *
       * Desktop:
       * browser automatically selects
       * the available webcam.
       */
      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: {
              ideal: "environment",
            },

            width: {
              ideal: 1920,
            },

            height: {
              ideal: 1080,
            },
          },

          audio: false,
        });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject =
          stream;

        await videoRef.current.play();
      }

      setCameraStatus("active");
    } catch (error) {
      console.error(
        "Camera access error:",
        error
      );

      if (
        error instanceof DOMException &&
        (
          error.name === "NotAllowedError" ||
          error.name ===
            "PermissionDeniedError"
        )
      ) {
        setCameraStatus("denied");

        toast.error(
          "Camera permission was denied.",
          {
            description:
              "Please allow camera access in your browser settings.",
          }
        );

        return;
      }

      setCameraStatus("unavailable");

      toast.error(
        "Unable to open the camera.",
        {
          description:
            "You can upload coin images instead.",
        }
      );
    }
  }, [stopCamera]);

  /*
   * If normal /scan is opened,
   * immediately request the camera.
   *
   * If /scan?mode=upload is opened,
   * show upload mode instead.
   */
  useEffect(() => {
    if (requestedMode === "upload") {
      stopCamera();
      return;
    }

    void startCamera();

    return () => {
      stopCamera();
    };
  }, [
    requestedMode,
    startCamera,
    stopCamera,
  ]);

  const captureCoin = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (
      !video ||
      !canvas ||
      cameraStatus !== "active"
    ) {
      return;
    }

    const width =
      video.videoWidth || 1280;

    const height =
      video.videoHeight || 720;

    canvas.width = width;
    canvas.height = height;

    const context =
      canvas.getContext("2d");

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

    setCapturedImage(image);

    stopCamera();

    toast.success(
      "Coin image captured"
    );

    /*
     * Later:
     *
     * Convert canvas image to Blob/File
     * and send it to:
     *
     * 1. image quality endpoint
     * 2. coin identification service
     */
  };

  const retakeImage = () => {
    setCapturedImage(null);

    void startCamera();
  };

  const openUploadPicker = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(
      event.target.files ?? []
    );

    if (!files.length) {
      return;
    }

    const validFiles = files.filter(
      (file) =>
        [
          "image/jpeg",
          "image/png",
          "image/webp",
        ].includes(file.type)
    );

    if (!validFiles.length) {
      toast.error(
        "Please select JPG, PNG or WEBP images."
      );

      return;
    }

    /*
     * Front + back only for now.
     */
    const selected =
      validFiles.slice(0, 2);

    setUploadedFiles(selected);

    toast.success(
      selected.length === 2
        ? "Front and back images selected"
        : "Coin image selected"
    );

    /*
     * Later:
     *
     * selected files →
     * quality API →
     * identification API
     */
  };

  return (
    <section className={styles.scanPage}>
      <div className={styles.scanContainer}>
        <div className={styles.scanHeading}>
          <span
            className={
              styles.scanHeadingBadge
            }
          >
            Coin Identifier
          </span>

          <h1>
            Scan Your Coin
          </h1>

          <p>
            Capture clear images of the front and
            back of your coin to discover its
            identity, history and collectible details.
          </p>
        </div>

        <div className={styles.scanWorkspace}>
          {requestedMode !== "upload" && (
            <div
              className={
                styles.cameraPanel
              }
            >
              <div
                className={
                  styles.cameraViewport
                }
              >
                {!capturedImage && (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className={
                      styles.cameraVideo
                    }
                  />
                )}

                {capturedImage && (
                  <img
                    src={capturedImage}
                    alt="Captured coin"
                    className={
                      styles.capturedImage
                    }
                  />
                )}

                {!capturedImage &&
                  cameraStatus ===
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

                {!capturedImage &&
                  (
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
                        Allow camera access or
                        upload images instead.
                      </span>
                    </div>
                  )}

                {cameraStatus ===
                  "active" &&
                  !capturedImage && (
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
                    </div>
                  )}
              </div>

              <canvas
                ref={canvasRef}
                className={
                  styles.hiddenCanvas
                }
              />

              <div
                className={
                  styles.cameraActions
                }
              >
                {!capturedImage &&
                  cameraStatus ===
                    "active" && (
                    <button
                      type="button"
                      onClick={
                        captureCoin
                      }
                      className={
                        styles.captureButton
                      }
                    >
                      <Camera
                        size={18}
                      />

                      Capture Coin
                    </button>
                  )}

                {capturedImage && (
                  <button
                    type="button"
                    onClick={
                      retakeImage
                    }
                    className={
                      styles.secondaryButton
                    }
                  >
                    <RefreshCcw
                      size={16}
                    />

                    Retake
                  </button>
                )}

                {cameraStatus !==
                  "active" &&
                  !capturedImage && (
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
                  className={
                    styles.secondaryButton
                  }
                >
                  <Upload
                    size={17}
                  />

                  Upload Images
                </button>
              </div>
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
              <Upload size={24} />
            </div>

            <h2>
              Upload Front &amp; Back
            </h2>

            <p>
              Use sharp, well-lit images with
              minimal glare and the entire coin
              visible.
            </p>

            <button
              type="button"
              onClick={openUploadPicker}
              className={
                styles.uploadButton
              }
            >
              Choose Coin Images
            </button>

            <input
              ref={fileInputRef}
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
                  (file, index) => (
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
                        {index === 0
                          ? "Front"
                          : "Back"}
                        :{" "}
                        {file.name}
                      </span>
                    </div>
                  )
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