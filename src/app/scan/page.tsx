"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import ScanPageContent from "@/features/Scan/ScanPageContent";

const ScanPage = () => {
  const router = useRouter();

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  useEffect(() => {
    if (isAuthenticated) {
      return;
    }

    openAuthRequired();

    router.replace("/");
  }, [
    isAuthenticated,
    openAuthRequired,
    router,
  ]);

  if (!isAuthenticated) {
    return null;
  }

  return <ScanPageContent />;
};

export default ScanPage;