import ThemeToggleButton from "@/components/ThemeToggleButton";
import { Newspaper } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="p-2 shadow">
        <div className="m-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <Newspaper />
            <span className="font-bold">NewsBoy</span>
          </Link>
          <ThemeToggleButton />
        </div>
      </div>
    </>
  );
}
