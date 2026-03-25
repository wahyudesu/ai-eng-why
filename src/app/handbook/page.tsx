import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Handbook",
  description:
    "AI Engineering handbook - comprehensive guides and best practices for building AI applications.",
  alternates: {
    canonical: "https://aieng.wahyuikbal.com/handbook",
  },
  openGraph: {
    title: "AI Engineering - Handbook",
    url: "https://aieng.wahyuikbal.com/handbook",
  },
};

import { BookOpen } from "lucide-react";
import { AsciiLarge } from "@/components/ascii-large";

export default function HandbookPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-foreground/10 dark:selection:bg-foreground/20">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Navigation />

        <main>
          {/* ASCII Art */}
          <AsciiLarge />

          {/* Coming Soon */}
          <section className="py-20 text-center">
            <h2 className="text-xl font-medium text-foreground mb-2">
              Coming Soon
            </h2>
            <p className="text-base text-muted-foreground">
              We&apos;re working on something great. Stay tuned!
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
