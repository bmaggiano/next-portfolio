import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 text-white">
      <div className="flex items-center min-w-0">
        <Link href={"/"}>
          <Avatar>
            <AvatarImage src="/bmaggiano.jpeg" alt="@bmaggiano" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
        </Link>
        <span className="ml-2 sm:ml-3 text-base sm:text-xl font-semibold truncate">
          <span className="hidden sm:inline">Brandon Maggiano</span>
          <span className="sm:hidden">Brandon</span>
        </span>
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4 flex-shrink-0">
        <a
          href="https://github.com/bmaggiano"
          target="_blank"
          className="text-xs sm:text-sm font-semibold whitespace-nowrap"
        >
          <span className="hidden sm:inline">View on GitHub</span>
          <span className="sm:hidden">GitHub</span>
        </a>
        <Button variant="outline" size="sm" className="text-xs sm:text-sm">
          <Link
            className="font-semibold text-black whitespace-nowrap"
            href={"https://twitter.com/brandonmaggiano"}
          >
            <span className="hidden sm:inline">Follow along on X</span>
            <span className="sm:hidden">X</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
