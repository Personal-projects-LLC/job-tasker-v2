import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
          Job Tasker
        </h1>
        <p className="text-xl text-muted-foreground">
          Intelligent job task analyzer and manager. Simplify your workflow with
          AI-powered insights.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href="/projects/new"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
          >
            New Project
          </Link>
        </div>
      </div>
    </main>
  );
}
