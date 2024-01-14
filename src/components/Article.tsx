import { ExternalLink } from "lucide-react";
import { IArticle } from "../model";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { relativeDate } from "@/lib/utils";

interface ArticleProps {
  article: IArticle;
}

export default function Article({ article }: ArticleProps) {
  return (
    <Card className="shadow-sm rounded-none">
      <CardHeader>
        <p className="text-xs text-muted-foreground">{relativeDate(article.publishedAt)}</p>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>{article.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{article.content}</p>
      </CardContent>
      <CardFooter>
        <div>
          <a href={article.url} target="_blank">
            <Badge variant={"secondary"}>
              {"read article"}
              <ExternalLink className="ml-1" size={12} />
            </Badge>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
