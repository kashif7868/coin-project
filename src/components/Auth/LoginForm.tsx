"use client";

import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react";
import {
  useState,
  type FormEvent,
} from "react";
import { toast } from "sonner";

import styles from "@/components/animations/css/Auth/LoginForm.module.css";

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface LoginFormProps {
  onForgotPassword?: () => void;
}

const LoginForm = ({
  onForgotPassword,
}: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] =
    useState(false);
  const [showPassword, setShowPassword] =
    useState(false);
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail || !password) {
      toast.error(
        "Please complete all required fields."
      );
      return;
    }

    if (!emailPattern.test(cleanEmail)) {
      toast.error(
        "Please enter a valid email address."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      toast.success("Sign-in UI is ready", {
        description:
          "Backend authentication will be connected later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.loginForm}
      noValidate
    >
      <div className={styles.loginFieldGroup}>
        <label
          htmlFor="email"
          className={styles.loginLabel}
        >
          Email Address
        </label>

        <div className={styles.loginInputWrapper}>
          <Mail
            size={16}
            strokeWidth={1.7}
            className={styles.loginInputIcon}
          />

          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Enter your email"
            disabled={isSubmitting}
            className={styles.loginInput}
          />
        </div>
      </div>

      <div className={styles.loginFieldGroup}>
        <label
          htmlFor="password"
          className={styles.loginLabel}
        >
          Password
        </label>

        <div className={styles.loginInputWrapper}>
          <LockKeyhole
            size={16}
            strokeWidth={1.7}
            className={styles.loginInputIcon}
          />

          <input
            id="password"
            type={
              showPassword
                ? "text"
                : "password"
            }
            autoComplete="current-password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter your password"
            disabled={isSubmitting}
            className={`${styles.loginInput} ${styles.loginPasswordInput}`}
          />

          <button
            type="button"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            aria-pressed={showPassword}
            onClick={() =>
              setShowPassword(
                (current) => !current
              )
            }
            disabled={isSubmitting}
            className={styles.loginPasswordToggle}
          >
            {showPassword ? (
              <EyeOff size={16} />
            ) : (
              <Eye size={16} />
            )}
          </button>
        </div>
      </div>

      <div className={styles.loginOptionsRow}>
        <label className={styles.loginRemember}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) =>
              setRememberMe(
                event.target.checked
              )
            }
            disabled={isSubmitting}
            className={styles.loginCheckbox}
          />

          <span className={styles.loginRememberText}>
            Remember me
          </span>
        </label>

        {onForgotPassword && (
          <button
            type="button"
            onClick={onForgotPassword}
            className={styles.loginForgotButton}
          >
            Forgot password?
          </button>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.loginSubmitButton}
      >
        {isSubmitting
          ? "Signing In..."
          : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;