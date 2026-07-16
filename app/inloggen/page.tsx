import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Studio Verstelle",
  description: "Deze site is nog niet openbaar.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div
      className="site flex min-h-screen items-center justify-center px-6 py-16"
      style={{ background: "var(--night)", color: "var(--warmwhite)" }}
    >
      <div className="w-full max-w-[22rem]">
        <div className="s-wordmark" style={{ fontSize: "clamp(1.9rem, 6vw, 2.6rem)" }}>
          <span className="s-top">Studio</span>
          <span>Verstelle</span>
        </div>

        <p
          className="s-body mt-9 !text-[0.92rem]"
          style={{ color: "var(--travertine)" }}
        >
          Deze site is nog niet openbaar.
        </p>

        <Suspense>
          <LoginForm />
        </Suspense>

        <p
          className="s-body mt-10 !text-[0.78rem] leading-relaxed"
          style={{ color: "rgba(242,237,228,0.38)" }}
        >
          Geen inloggegevens? Vraag Floris.
        </p>
      </div>
    </div>
  );
}
