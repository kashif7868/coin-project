"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

import AuthCard from "./AuthCard";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SocialAuthButtons from "./SocialAuthButtons";

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
          y: 12,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          y: -8,
        },
        transition: {
          duration: 0.2,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  return (
    <div className="w-full min-w-0 max-w-[460px]">
      <AnimatePresence mode="wait">
        {mode === "login" && (
          <motion.div
            key="login"
            {...motionProps}
            className="w-full min-w-0"
          >
            <AuthCard
              title="Welcome Back"
              description="Sign in to access your collection, wishlist, cart, auctions and seller account."
            >
              <SocialAuthButtons />

              <LoginForm />

              <div className="mt-5 text-center">
                <button
                  type="button"
                  onClick={() =>
                    changeMode("forgot")
                  }
                  className="text-[11px] font-medium text-[#b87516] transition-colors hover:text-[#8f5c13]"
                >
                  Forgot your password?
                </button>
              </div>

              <div className="mt-5 border-t border-neutral-100 pt-5 text-center">
                <span className="text-[11px] text-neutral-500">
                  Don&apos;t have an account?{" "}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    changeMode("register")
                  }
                  className="text-[11px] font-semibold text-[#b87516] transition-colors hover:text-[#8f5c13]"
                >
                  Create Account
                </button>
              </div>
            </AuthCard>
          </motion.div>
        )}

        {mode === "register" && (
          <motion.div
            key="register"
            {...motionProps}
            className="w-full min-w-0"
          >
            <AuthCard
              title="Create Your Account"
              description="Join CoinHeritage to save coins, buy from sellers, bid in auctions and list your own collection."
            >
              <SocialAuthButtons />

              <RegisterForm />

              <div className="mt-5 border-t border-neutral-100 pt-5 text-center">
                <span className="text-[11px] text-neutral-500">
                  Already have an account?{" "}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    changeMode("login")
                  }
                  className="text-[11px] font-semibold text-[#b87516] transition-colors hover:text-[#8f5c13]"
                >
                  Sign In
                </button>
              </div>
            </AuthCard>
          </motion.div>
        )}

        {mode === "forgot" && (
          <motion.div
            key="forgot"
            {...motionProps}
            className="w-full min-w-0"
          >
            <AuthCard
              title="Reset Your Password"
              description="Recover access to your CoinHeritage account."
            >
              <ForgotPasswordForm
                onBackToLogin={() =>
                  changeMode("login")
                }
              />
            </AuthCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthPanel;