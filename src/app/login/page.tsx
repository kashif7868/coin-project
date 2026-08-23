import AuthPanel from "@/components/Auth/AuthPanel";

export default function LoginPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-[#f7f5f1] px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute left-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-[#d99a31]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-160px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#9b6a28]/10 blur-3xl" />

      <div className="relative z-10 flex w-full justify-center">
        <AuthPanel />
      </div>
    </section>
  );
}