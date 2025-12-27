import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { PostMetadata } from "@/lib/posts";

interface PostCardProps {
  post: PostMetadata;
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/posts/${post.slug}`} className="block h-full">
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 flex flex-col">
        <CardHeader className="flex-1">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formattedDate}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readingTime}</span>
            </div>
          </div>
          <CardTitle className="text-xl md:text-2xl leading-tight line-clamp-2 mb-3">
            {post.title}
          </CardTitle>
          <CardDescription className="text-sm md:text-base leading-relaxed line-clamp-3">
            {post.description}
          </CardDescription>
        </CardHeader>
        {post.tags && post.tags.length > 0 && (
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{post.tags.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
