import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";



export default async function HomePage() {

  const posts = await db.query.posts.findMany();

 // console.log(posts);

  return (
      <main className="flex flex-1 items-center justify-center px-4 py-12 md:px-6">
        <div className="hidden max-w-md space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Unleash Your Potential with Deep Work
          </h1>
          <p className=" md:text-xl">
            Realize your full potential with Deep Work, a powerful technique
            that helps you achieve your goals and unlock your full potential.
          </p>
          <Link
            href="#"
            className=" text-white bg-blue-400 hover:bg-blue-500/90 focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
          
          >
            Get Started
          </Link>
        </div>
        <div className="">{posts.map((post) =>(
          <p key={post.id}>{post.name}</p>
        ))}</div>
      </main>
      
    
  );
}
