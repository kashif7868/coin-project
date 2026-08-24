"use client";

import Link from "next/link";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import {
  useState,
  type FormEvent,
} from "react";
import { toast } from "sonner";

import styles from "@/components/animations/css/Auth/RegisterForm.module.css";

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [acceptedTerms, setAcceptedTerms] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);
  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanName = fullName.trim();
    const cleanEmail = email.trim();

    if (
      !cleanName ||
      !cleanEmail ||
      !password ||
      !confirmPassword
    ) {
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

    if (password.length < 8) {
      toast.error(
        "Password must be at least 8 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!acceptedTerms) {
      toast.error(
        "Please accept the Terms and Privacy Policy."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      toast.success(
        "Registration form is ready",
        {
          description:
            "Backend account creation will be connected later.",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.registerForm}
      noValidate
    >
      <div className={styles.registerFieldGroup}>
        <label
          htmlFor="fullName"
          className={styles.registerLabel}
        >
          Full Name
        </label>

        <div className={styles.registerInputWrapper}>
          <UserRound
            size={16}
            strokeWidth={1.7}
            className={styles.registerInputIcon}
          />

          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(event) =>
              setFullName(event.target.value)
            }
            placeholder="Enter your full name"
            disabled={isSubmitting}
            className={styles.registerInput}
          />
        </div>
      </div>

      <div className={styles.registerFieldGroup}>
        <label
          htmlFor="registerEmail"
          className={styles.registerLabel}
        >
          Email Address
        </label>

        <div className={styles.registerInputWrapper}>
          <Mail
            size={16}
            strokeWidth={1.7}
            className={styles.registerInputIcon}
          />

          <input
            id="registerEmail"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Enter your email"
            disabled={isSubmitting}
            className={styles.registerInput}
          />
        </div>
      </div>

      <div className={styles.registerFieldGroup}>
        <label
          htmlFor="registerPassword"
          className={styles.registerLabel}
        >
          Password
        </label>

        <div className={styles.registerInputWrapper}>
          <LockKeyhole
            size={16}
            strokeWidth={1.7}
            className={styles.registerInputIcon}
          />

          <input
            id="registerPassword"
            type={
              showPassword
                ? "text"
                : "password"
            }
            autoComplete="new-password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Create a password"
            disabled={isSubmitting}
            className={`${styles.registerInput} ${styles.registerPasswordInput}`}
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
            className={styles.registerPasswordToggle}
          >
            {showPassword ? (
              <EyeOff size={16} />
            ) : (
              <Eye size={16} />
            )}
          </button>
        </div>

        <p className={styles.registerHint}>
          Use at least 8 characters.
        </p>
      </div>

      <div className={styles.registerFieldGroup}>
        <label
          htmlFor="confirmPassword"
          className={styles.registerLabel}
        >
          Confirm Password
        </label>

        <div className={styles.registerInputWrapper}>
          <LockKeyhole
            size={16}
            strokeWidth={1.7}
            className={styles.registerInputIcon}
          />

          <input
            id="confirmPassword"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(
                event.target.value
              )
            }
            placeholder="Confirm your password"
            disabled={isSubmitting}
            className={`${styles.registerInput} ${styles.registerPasswordInput}`}
          />

          <button
            type="button"
            aria-label={
              showConfirmPassword
                ? "Hide confirmed password"
                : "Show confirmed password"
            }
            aria-pressed={showConfirmPassword}
            onClick={() =>
              setShowConfirmPassword(
                (current) => !current
              )
            }
            disabled={isSubmitting}
            className={styles.registerPasswordToggle}
          >
            {showConfirmPassword ? (
              <EyeOff size={16} />
            ) : (
              <Eye size={16} />
            )}
          </button>
        </div>
      </div>

      <label className={styles.registerTerms}>
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(event) =>
            setAcceptedTerms(
              event.target.checked
            )
          }
          disabled={isSubmitting}
          className={styles.registerCheckbox}
        />

        <span className={styles.registerTermsText}>
          I agree to the{" "}
          <Link
            href="/terms"
            className={styles.registerTermsLink}
          >
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className={styles.registerTermsLink}
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.registerSubmitButton}
      >
        {isSubmitting
          ? "Creating Account..."
          : "Create Account"}
      </button>
    </form>
  );
};

export default RegisterForm;