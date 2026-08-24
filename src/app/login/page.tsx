import { Suspense } from "react";

import AuthPanel from "@/components/Auth/AuthPanel";

import styles from "@/components/animations/css/Auth/LoginPage.module.css";

const LoginPageFallback = () => {
  return (
    <section className={styles.loginPageFallback}>
      <div className={styles.loginPageFallbackCard}>
        <div className={styles.loginSkeletonBrand} />
        <div className={styles.loginSkeletonTabs} />
        <div className={styles.loginSkeletonTitle} />
        <div className={styles.loginSkeletonText} />
        <div className={styles.loginSkeletonInput} />
        <div className={styles.loginSkeletonInput} />
        <div className={styles.loginSkeletonButton} />
      </div>
    </section>
  );
};

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginPageFallback />}>
      <section className={styles.loginPage}>
        <div className={styles.loginPageGlowLeft} />
        <div className={styles.loginPageGlowRight} />

        <div className={styles.loginPageContent}>
          <AuthPanel />
        </div>
      </section>
    </Suspense>
  );
}