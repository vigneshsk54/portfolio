import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects, profile } from "@/lib/data";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectDetail } from "@/components/ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const canonicalPath = `/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${project.title} — ${profile.name}`,
      description: project.description,
      type: "article",
      url: canonicalPath,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="relative pt-32 pb-24 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Back to projects
          </Link>

          <ProjectDetail project={project} />

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-ink text-void hover:bg-blue-soft transition-colors"
            >
              <Github size={16} /> View on GitHub
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium glass text-ink hover:border-blue/40 transition-colors"
            >
              Discuss this project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
