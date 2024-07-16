import Link from "next/link";

export function BottomNav() {
    return(
        <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-muted-foreground text-xs">
          &copy; 2024 Deep Work Inc. All rights reserved.
        </p>
        <div className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
          >
            Privacy
          </Link>
        </div>
      </footer>
    )
}
