import Link from "next/link";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="min-h-[80svh] flex items-center justify-center px-4 pt-24">
        <div className="text-center">
          <p className="font-mono text-xs tracking-widest text-blue-soft mb-4">
            ERROR — 404
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium text-ink mb-4">
            This route doesn&rsquo;t exist.
          </h1>
          <p className="text-muted mb-8">
            The page you&rsquo;re looking for was moved, renamed, or never built.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-ink text-void hover:bg-blue-soft transition-colors"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
