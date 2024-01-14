import { IArticle } from "@/model";
import Article from "./Article";
import Paginate from "./Paginate";
import { ScrollArea } from "./ui/scroll-area";
import { getArticles } from "@/lib/api";

interface ArticleProps {
  filterValues: {
    country?: string;
    category?: string;
  };
  pageOptions: {
    page?: number;
    pageSize?: number;
  };
}

export default async function ArticlesList({
  filterValues,
  pageOptions,
}: ArticleProps) {
  const { country = "in", category } = filterValues;
  const { page = 1, pageSize = 10 } = pageOptions;

  const fetchQueries = new URLSearchParams({
    ...(country && { country }),
    ...(category && { category }),
    ...(page && { page: page.toString() }),
    ...(pageSize && { pageSize: pageSize.toString() }),
  });

  const { articles, totalResults } = await getArticles(
    `https://newsapi.org/v2/top-headlines?${fetchQueries.toString()}`
  );

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="self-end">
        <Paginate
          filterValues={filterValues}
          page={page}
          pageSize={pageSize}
          totalResults={totalResults}
        />
      </div>
      <ScrollArea className="h-full">
        <div className="space-y-2">
          {articles.map((article: IArticle, idx: number) => (
            <Article key={idx} article={article} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
