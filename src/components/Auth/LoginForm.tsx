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

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
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
      // Later:
      // loginMutation.mutate({
      //   email: cleanEmail,
      //   password,
      //   rememberMe,
      // });

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
      className="w-full min-w-0 space-y-4 sm:space-y-5"
      noValidate
    >
      {/* Email */}
      <div className="min-w-0">
        <label
          htmlFor="email"
          className="mb-2 block text-[11px] font-medium text-neutral-700 sm:text-[12px]"
        >
          Email Address
        </label>

        <div className="relative min-w-0">
          <Mail
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 sm:left-4"
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
            className="h-11 w-full min-w-0 rounded-xl border border-neutral-200 bg-white pl-10 pr-3 text-[12px] text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10 disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-500 sm:h-12 sm:pl-11 sm:pr-4 sm:text-sm"
          />
        </div>
      </div>

      {/* Password */}
      <div className="min-w-0">
        <label
          htmlFor="password"
          className="mb-2 block text-[11px] font-medium text-neutral-700 sm:text-[12px]"
        >
          Password
        </label>

        <div className="relative min-w-0">
          <LockKeyhole
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 sm:left-4"
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter your password"
            disabled={isSubmitting}
            className="h-11 w-full min-w-0 rounded-xl border border-neutral-200 bg-white pl-10 pr-11 text-[12px] text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10 disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-500 sm:h-12 sm:pl-11 sm:pr-12 sm:text-sm"
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
              setShowPassword((current) => !current)
            }
            disabled={isSubmitting}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 disabled:cursor-not-allowed disabled:opacity-50 sm:right-2.5"
          >
            {showPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <label className="flex w-fit cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(event) =>
            setRememberMe(event.target.checked)
          }
          disabled={isSubmitting}
          className="h-4 w-4 shrink-0 rounded border-neutral-300 accent-[#d99a31]"
        />

        <span className="text-[10px] text-neutral-500 sm:text-[11px]">
          Remember me
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-11 w-full items-center justify-center rounded-xl bg-[#d99a31] px-4 text-[12px] font-semibold text-black shadow-[0_10px_24px_rgba(217,154,49,0.18)] transition-all hover:bg-[#e6aa43] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:h-12 sm:text-sm"
      >
        {isSubmitting
          ? "Signing In..."
          : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;