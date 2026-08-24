"use client";

import { toast } from "sonner";

import styles from "@/components/animations/css/Auth/SocialAuthButtons.module.css";

const SocialAuthButtons = () => {
  const handleGoogleSignIn = () => {
    toast.info("Google Sign-In", {
      description:
        "Google sign-in will be available once account integration is connected.",
    });
  };

  return (
    <div className={styles.socialAuthSection}>
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className={styles.socialAuthGoogleButton}
      >
        <GoogleIcon />

        <span className={styles.socialAuthGoogleLabel}>
          Continue with Google
        </span>
      </button>

      <div className={styles.socialAuthDivider}>
        <div className={styles.socialAuthDividerLine} />

        <div className={styles.socialAuthDividerLabelWrap}>
          <span className={styles.socialAuthDividerLabel}>
            Or continue with email
          </span>
        </div>
      </div>
    </div>
  );
};

const GoogleIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
      focusable="false"
      className={styles.socialAuthGoogleIcon}
    >
      <path
        fill="#4285F4"
        d="M17.64 9.205c0-.638-.057-1.252-.164-1.841H9v3.482h4.844a4.14 4.14 0 0 1-1.797 2.715v2.258h2.909c1.703-1.568 2.684-3.879 2.684-6.614Z"
      />

      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.468-.806 5.956-2.181l-2.909-2.258c-.806.54-1.835.859-3.047.859-2.344 0-4.328-1.585-5.037-3.714H.956v2.332A9 9 0 0 0 9 18Z"
      />

      <path
        fill="#FBBC05"
        d="M3.963 10.706A5.42 5.42 0 0 1 3.682 9c0-.592.102-1.166.281-1.706V4.962H.956A9 9 0 0 0 0 9c0 1.452.347 2.827.956 4.038l3.007-2.332Z"
      />

      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.507.454 3.44 1.345l2.581-2.581C13.464.892 11.426 0 9 0A9 9 0 0 0 .956 4.962l3.007 2.332C4.672 5.165 6.656 3.58 9 3.58Z"
      />
    </svg>
  );
};

export default SocialAuthButtons;