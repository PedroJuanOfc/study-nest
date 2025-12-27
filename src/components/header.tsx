import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/Logo-with-name-no-bg.png"
            alt="Study Nest"
            width={180}
            height={50}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Posts
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
