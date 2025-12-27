import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const allPosts = getAllPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bem-vindo ao Study Nest 🐦
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Meu espaço pessoal para documentar minha jornada de aprendizado,
          compartilhar conhecimentos e acompanhar minha evolução em tecnologia.
        </p>
      </section>

      {/* Latest Posts Section */}
      <section className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Últimas Publicações</h2>
          {allPosts.length > 3 && (
            <Link href="/posts">
              <Button variant="ghost" className="gap-2">
                Ver todos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {latestPosts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>Nenhum post publicado ainda.</p>
            <p className="text-sm mt-2">Em breve novos conteúdos!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
