import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NewsBoy",
  description:
    "Welcome to Newsboy – your source for quick, insightful articles spanning the internet's best content. Stay informed and entertained with our curated collection of bite-sized reads. Discover the world in short, engaging snippets at Newsboy!",
};

export default function Home() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="flex flex-col gap-2 max-w-[600px]">
        <div className="flex">
          <Newspaper className="h-12 w-12 mr-4" />
          <h1 className="text-5xl">NewsBoy</h1>
        </div>
        <p>{metadata.description}</p>
        <div className="flex gap-4">
          <Link href="/top-headlines">
            <Button>Top Headlines</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
