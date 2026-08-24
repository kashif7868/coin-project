"use client";

import {
  ArrowLeft,
  Mail,
} from "lucide-react";
import {
  useState,
  type FormEvent,
} from "react";
import { toast } from "sonner";

import styles from "@/components/animations/css/Auth/ForgotPasswordForm.module.css";

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ForgotPasswordForm = ({
  onBackToLogin,
}: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      toast.error(
        "Please enter your email address."
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

      toast.success(
        "Reset link request received",
        {
          description:
            "Password reset service will be connected later.",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.forgotPasswordSection}>
      <button
        type="button"
        onClick={onBackToLogin}
        className={styles.forgotPasswordBackButton}
      >
        <ArrowLeft
          size={14}
          strokeWidth={1.8}
        />

        <span>Back to Sign In</span>
      </button>

      <div className={styles.forgotPasswordIntro}>
        <h2 className={styles.forgotPasswordTitle}>
          Reset Your Password
        </h2>

        <p
          className={
            styles.forgotPasswordDescription
          }
        >
          Enter the email linked with your CoinHeritage
          account and we&apos;ll send reset instructions.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className={styles.forgotPasswordForm}
        noValidate
      >
        <div
          className={
            styles.forgotPasswordFieldGroup
          }
        >
          <label
            htmlFor="forgotEmail"
            className={styles.forgotPasswordLabel}
          >
            Email Address
          </label>

          <div
            className={
              styles.forgotPasswordInputWrapper
            }
          >
            <Mail
              size={16}
              strokeWidth={1.7}
              className={
                styles.forgotPasswordInputIcon
              }
            />

            <input
              id="forgotEmail"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="Enter your email"
              disabled={isSubmitting}
              className={styles.forgotPasswordInput}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={
            styles.forgotPasswordSubmitButton
          }
        >
          {isSubmitting
            ? "Sending..."
            : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;