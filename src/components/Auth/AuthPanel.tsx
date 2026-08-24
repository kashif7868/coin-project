"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SocialAuthButtons from "./SocialAuthButtons";

import styles from "@/components/animations/css/Auth/AuthPanel.module.css";

type AuthMode = "login" | "register" | "forgot";

const AuthPanel = () => {
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [mode, setMode] = useState<AuthMode>("login");

  useEffect(() => {
    const requestedMode = searchParams.get("mode");

    if (requestedMode === "register") {
      setMode("register");
      return;
    }

    if (requestedMode === "forgot") {
      setMode("forgot");
      return;
    }

    setMode("login");
  }, [searchParams]);

  const changeMode = (nextMode: AuthMode) => {
    setMode(nextMode);

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (nextMode === "login") {
      params.delete("mode");
    } else {
      params.set("mode", nextMode);
    }

    const query = params.toString();

    router.replace(
      query ? `${pathname}?${query}` : pathname,
      {
        scroll: false,
      }
    );
  };

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 8,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          y: -6,
        },
        transition: {
          duration: 0.2,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  return (
    <div className={styles.authPanelShell}>
      <Link
        href="/"
        className={styles.authPanelBrand}
        aria-label="CoinHeritage home"
      >
        <div className={styles.authPanelBrandCoin}>
          CH
        </div>

        <div className={styles.authPanelBrandText}>
          <div className={styles.authPanelBrandName}>
            Coin
            <span>Heritage</span>
          </div>

          <div className={styles.authPanelBrandTagline}>
            Discover. Collect. Own History.
          </div>
        </div>
      </Link>

      <div className={styles.authPanelCard}>
        {mode !== "forgot" && (
          <div className={styles.authPanelTabs}>
            <button
              type="button"
              onClick={() => changeMode("login")}
              className={`${styles.authPanelTab} ${
                mode === "login"
                  ? styles.authPanelTabActive
                  : ""
              }`}
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => changeMode("register")}
              className={`${styles.authPanelTab} ${
                mode === "register"
                  ? styles.authPanelTabActive
                  : ""
              }`}
            >
              Create Account
            </button>
          </div>
        )}

        <div className={styles.authPanelBody}>
          <AnimatePresence mode="wait">
            {mode === "login" && (
              <motion.div
                key="login"
                {...motionProps}
                className={styles.authPanelMode}
              >
                <div className={styles.authPanelIntro}>
                  <h1 className={styles.authPanelTitle}>
                    Welcome Back
                  </h1>

                  <p className={styles.authPanelDescription}>
                    Sign in to access your collection,
                    wishlist, cart and auctions.
                  </p>
                </div>

                <SocialAuthButtons />

                <LoginForm
                  onForgotPassword={() =>
                    changeMode("forgot")
                  }
                />

                <div className={styles.authPanelSwitchRow}>
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() =>
                      changeMode("register")
                    }
                  >
                    Create Account
                  </button>
                </div>
              </motion.div>
            )}

            {mode === "register" && (
              <motion.div
                key="register"
                {...motionProps}
                className={styles.authPanelMode}
              >
                <div className={styles.authPanelIntro}>
                  <h1 className={styles.authPanelTitle}>
                    Create Your Account
                  </h1>

                  <p className={styles.authPanelDescription}>
                    Join CoinHeritage to collect, discover,
                    buy and sell remarkable coins.
                  </p>
                </div>

                <SocialAuthButtons />

                <RegisterForm />

                <div className={styles.authPanelSwitchRow}>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() =>
                      changeMode("login")
                    }
                  >
                    Sign In
                  </button>
                </div>
              </motion.div>
            )}

            {mode === "forgot" && (
              <motion.div
                key="forgot"
                {...motionProps}
                className={styles.authPanelMode}
              >
                <ForgotPasswordForm
                  onBackToLogin={() =>
                    changeMode("login")
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AuthPanel;