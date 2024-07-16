import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Sign } from "crypto";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">Deep Work</div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
    </nav>
  );
}