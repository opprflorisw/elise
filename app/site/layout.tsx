import type { Metadata } from "next";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Studio Verstelle — Residential Transformation Studio",
  description:
    "Interior architecture & property transformation. Stedelijke woningen, getransformeerd tot uitzonderlijke huizen. Amsterdam.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site min-h-screen">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
