import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 text-white">
      <div className="flex items-center">
        <Link href={"/"}>
          <Avatar>
            <AvatarImage src="/bmaggiano.jpeg" alt="@bmaggiano" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
        </Link>
        <span className="ml-3 text-xl font-semibold">Brandon Maggiano</span>
      </div>
      <div className="flex items-center gap-x-4">
        <a
          href="https://github.com/bmaggiano"
          target="_blank"
          className="text-sm font-semibold"
        >
          View on GitHub
        </a>
        <Button variant="outline" size="sm">
          <Link
            className="text-sm font-semibold text-black"
            href={"https://twitter.com/brandonmaggiano"}
          >
            Follow along on X
          </Link>
        </Button>
      </div>
    </header>
  );
}
