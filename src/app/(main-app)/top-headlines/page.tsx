import ArticlesList from "@/components/ArticlesList";
import Filters from "@/components/Filters";

interface PageProps {
  searchParams: {
    country?: string;
    category?: string;
    page?: string;
    pageSize?: string;
  };
}

export default function Home({
  searchParams: { country, category, page, pageSize },
}: PageProps) {
  const filterValues = { country, category };
  const pageOptions = {
    ...(page && { page: parseInt(page) }),
    ...(pageSize && { pageSize: parseInt(pageSize) }),
  };

  return (
    <div className="rounded-lg border text-card-foreground flex flex-col h-full">
      <div className="flex flex-col p-4">
        <Filters filterValues={filterValues} />
      </div>
      <div className="px-4 h-[500px] flex-grow">
        <ArticlesList filterValues={filterValues} pageOptions={pageOptions} />
      </div>
    </div>
  );
}
