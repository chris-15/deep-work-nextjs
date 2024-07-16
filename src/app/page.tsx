import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const deepWorkSessions = await db.query.sessions.findMany();

  // console.log(posts);

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12 md:px-6">
      <div className="hidden max-w-md space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Unleash Your Potential with Deep Work
        </h1>
        <p className="md:text-xl">
          Realize your full potential with Deep Work, a powerful technique that
          helps you achieve your goals and unlock your full potential.
        </p>
        <Link
          href="#"
          className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-blue-400 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
        >
          Get Started
        </Link>
      </div>
      <div className="">
        {deepWorkSessions.map((session) => (
          <div key={session.id}>
            <h1>{session.id}</h1>
            <h1>Session: {session.name}</h1>
            <h1>duration: {session.durationInSeconds / 3600} hours</h1>
            <h1>{session.isCompleted ? "Completed" : "In Progress"}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
