export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
          <p>© {currentYear} Study Nest. Todos os direitos reservados.</p>
          <p>Documentando minha jornada de aprendizado.</p>
        </div>
      </div>
    </footer>
  );
}
