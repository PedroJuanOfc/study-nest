import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export const metadata = {
  title: "Posts - Study Nest",
  description: "Todos os posts do meu blog de aprendizado",
};

export default function PostsPage() {
  const allPosts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Todas as Publicações</h1>
          <p className="text-lg text-muted-foreground">
            {allPosts.length}{" "}
            {allPosts.length === 1 ? "post publicado" : "posts publicados"}
          </p>
        </div>

        {allPosts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>Nenhum post publicado ainda.</p>
            <p className="text-sm mt-2">Em breve novos conteúdos!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
