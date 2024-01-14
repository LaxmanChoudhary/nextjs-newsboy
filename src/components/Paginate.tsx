"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginateProps {
  filterValues: {
    country?: string;
    category?: string;
  };
  page: number;
  pageSize: number;
  totalResults: number;
}

export default function Paginate({
  filterValues: { country, category },
  page,
  pageSize,
  totalResults,
}: PaginateProps) {
  const router = useRouter();
  const pathname = usePathname();

  const start = (page - 1) * pageSize + 1;
  const end = page * pageSize <= totalResults ? page * pageSize : totalResults;
  const hasMore = end < totalResults;
  const hasPrev = start > 1;

  const updateQuery = (pageNum: number) => {
    const Qs = new URLSearchParams({
      ...(country && { country }),
      ...(category && { category }),
      ...{ page: pageNum.toString() },
      ...{ pageSize: pageSize.toString() },
    });
    router.push(`${pathname}?${Qs}`);
  };

  const nextPage = () => {
    updateQuery(page + 1);
  };

  const prevPage = () => {
    updateQuery(page - 1);
  };

  return (
    <div className="flex text-xs gap-2 items-center">
      <div className="">
        {start}-{end} of {totalResults}
      </div>
      <button
        className={cn(
          buttonVariants({
            variant: hasPrev ? "plain" : "ghost",
            size: "xs",
          })
        )}
        disabled={!hasPrev}
        onClick={() => prevPage()}
      >
        <ChevronLeft />
        {/* <ChevronLeft
        className={cn(
          "w-4 h-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          !hasPrev && "invisible"
        )}
        onClick={() => prevPage()}
      /> */}
      </button>
      <button
        className={cn(
          buttonVariants({
            variant: hasMore ? "plain" : "ghost",
            size: "xs",
          })
        )}
        disabled={!hasMore}
        onClick={() => nextPage()}
      >
        <ChevronRight />
        {/* <ChevronRight
        className={cn(
          "w-4 h-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          !hasMore && "invisible"
        )}
        onClick={() => nextPage()}
      /> */}
      </button>
    </div>
  );
}
