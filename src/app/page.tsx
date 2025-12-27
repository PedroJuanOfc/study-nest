import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const allPosts = getAllPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-20 md:py-28">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Study Nest
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Documentando minha jornada em Inteligência Artificial, RAG e
          desenvolvimento com LLMs
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/posts">
            <Button size="lg" className="gap-2">
              Ver Publicações
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline">
              Sobre Mim
            </Button>
          </Link>
        </div>
      </section>

      <Separator className="mb-16" />

      {/* Latest Posts Section */}
      <section className="max-w-6xl mx-auto pb-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Últimas Publicações</h2>
            <p className="text-muted-foreground">
              Acompanhe meus aprendizados e projetos recentes
            </p>
          </div>
          {allPosts.length > 3 && (
            <Link href="/posts" className="hidden md:block">
              <Button variant="ghost" className="gap-2">
                Ver todos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {latestPosts.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">Nenhum post publicado ainda.</p>
            <p className="text-sm mt-2">Em breve novos conteúdos.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            {allPosts.length > 3 && (
              <div className="text-center mt-10 md:hidden">
                <Link href="/posts">
                  <Button variant="outline" className="gap-2">
                    Ver todos os posts
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
