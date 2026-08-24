import { Suspense } from "react";

import AuthPanel from "@/components/Auth/AuthPanel";

const LoginPageFallback = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-60px)] w-full min-w-0 items-center justify-center bg-[#f7f5f1] px-4 py-8 sm:min-h-[calc(100dvh-64px)] sm:px-6 lg:min-h-[calc(100dvh-72px)]">
      <div className="w-full max-w-[460px] animate-pulse rounded-3xl border border-black/[0.06] bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
        <div className="h-5 w-32 rounded bg-neutral-200" />
        <div className="mt-5 h-8 w-48 rounded bg-neutral-200" />
        <div className="mt-3 h-4 w-full rounded bg-neutral-100" />
        <div className="mt-6 h-12 w-full rounded-xl bg-neutral-100" />
        <div className="mt-4 h-12 w-full rounded-xl bg-neutral-100" />
        <div className="mt-5 h-12 w-full rounded-xl bg-[#d99a31]/20" />
      </div>
    </section>
  );
};

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginPageFallback />}>
      <section className="relative flex min-h-[calc(100dvh-60px)] w-full min-w-0 items-center justify-center overflow-hidden bg-[#f7f5f1] px-4 py-8 sm:min-h-[calc(100dvh-64px)] sm:px-6 lg:min-h-[calc(100dvh-72px)] lg:py-10">
        <div className="pointer-events-none absolute left-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-[#d99a31]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-160px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#9b6a28]/10 blur-3xl" />

        <div className="relative z-10 flex w-full min-w-0 justify-center">
          <AuthPanel />
        </div>
      </section>
    </Suspense>
  );
}