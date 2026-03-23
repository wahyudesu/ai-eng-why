import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { AsciiAi } from "@/components/ascii-ai";
import { JobCardList } from "@/components/ui/job-card-list";
import { parseReadme } from "@/lib/readme-parser";

export const metadata: Metadata = {
  title: "Jobs - AI Engineering Opportunities",
  description:
    "Curated AI, ML, and Data Science job openings from top companies. Full-time, part-time, and internship positions available.",
  alternates: {
    canonical: "https://aieng.wahyuikbal.com/jobs",
  },
  openGraph: {
    title: "AI Engineering - Jobs",
    url: "https://aieng.wahyuikbal.com/jobs",
  },
};

export default function JobsPage() {
  const { jobsData } = parseReadme();

  return (
    <div className="min-h-screen font-sans selection:bg-foreground/10 dark:selection:bg-foreground/20">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Navigation />

        <main className="flex flex-col gap-8 py-6">
          <header>
            <AsciiAi />

            <h1 className="text-2xl font-medium text-foreground mb-3">
              Jobs
            </h1>
            <p className="text-base text-muted-foreground">
              {jobsData.description}
            </p>
          </header>


          <section>
            <JobCardList jobs={jobsData.jobs} />
          </section>
        </main>
      </div>
    </div>
  );
}
