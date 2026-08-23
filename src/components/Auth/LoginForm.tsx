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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
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

    setIsSubmitting(true);

    try {
      // Later:
      // loginMutation.mutate({ email, password });

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
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-[12px] font-medium text-neutral-700"
        >
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
          />

          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Enter your email"
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-11 pr-4 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-[12px] font-medium text-neutral-700"
        >
          Password
        </label>

        <div className="relative">
          <LockKeyhole
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
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
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-11 pr-12 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10"
          />

          <button
            type="button"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            onClick={() =>
              setShowPassword(
                (current) => !current
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-neutral-700"
          >
            {showPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>
      </div>

      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-neutral-300 accent-[#d99a31]"
        />

        <span className="text-[11px] text-neutral-500">
          Remember me
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-12 w-full items-center justify-center rounded-xl bg-[#d99a31] text-sm font-semibold text-black shadow-[0_10px_24px_rgba(217,154,49,0.18)] transition-all hover:bg-[#e6aa43] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting
          ? "Signing In..."
          : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;