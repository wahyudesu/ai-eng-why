import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { AsciiAi } from "@/components/ascii-ai";

export default function NotFound() {
  return (
    <div className="min-h-screen font-sans selection:bg-foreground/10 dark:selection:bg-foreground/20">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Navigation />

        <main className="flex flex-col gap-8 py-6">
          <header>
            <AsciiAi />
            <h1 className="text-2xl font-medium text-foreground mb-3">
              404
            </h1>
            <p className="text-base text-muted-foreground">
              Page not found
            </p>
          </header>

          <section className="text-center py-12">
            <p className="text-muted-foreground mb-6">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Go Home
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
