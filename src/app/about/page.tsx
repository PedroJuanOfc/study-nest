import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sobre - Study Nest",
  description:
    "Conheça Pedro Juan e sua jornada em Inteligência Artificial e desenvolvimento com LLMs.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-48 h-48 relative rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/images/profile.png"
              alt="Pedro Juan Ferreira Saraiva"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">
              Pedro Juan Ferreira Saraiva
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              AI Engineer | Brasília, Brasil
            </p>
            <p className="text-lg leading-relaxed">
              Desenvolvedor especializado em Inteligência Artificial, focado na
              criação de soluções com LLMs, RAG e chatbots inteligentes.
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="space-y-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou formado em Análise e Desenvolvimento de Sistemas pelo CEUB e
                atualmente trabalho como AI Engineer, desenvolvendo chatbots e
                sistemas inteligentes utilizando Large Language Models e
                técnicas de RAG (Retrieval-Augmented Generation).
              </p>
              <p>
                Minha jornada na tecnologia começou como desenvolvedor iOS, onde
                atuei por cerca de um ano. A transição para o mundo da
                Inteligência Artificial aconteceu quando surgiu uma oportunidade
                de participar de um projeto na área. O que começou como um
                desafio rapidamente se tornou uma paixão, e hoje vejo um futuro
                promissor nesse campo.
              </p>
              <p>
                Atualmente, estou em constante aprendizado, explorando as
                fronteiras da IA generativa e buscando dominar as tecnologias
                que estão moldando o futuro da interação humano-computador.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Foco Atual</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">
                    Desenvolvimento com LLMs
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Criação de aplicações inteligentes utilizando modelos de
                    linguagem como GPT, Claude e outros.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">RAG Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    Implementação de sistemas de recuperação aumentada para
                    enriquecer respostas com conhecimento específico.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Python & IA</h3>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvimento em Python com foco em frameworks e
                    bibliotecas de Inteligência Artificial.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Chatbots Inteligentes</h3>
                  <p className="text-sm text-muted-foreground">
                    Construção de assistentes conversacionais que entendem
                    contexto e fornecem respostas precisas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Objetivos</h2>
            <p className="text-muted-foreground">
              Meu objetivo é me tornar uma referência em Python e Inteligência
              Artificial, contribuindo para projetos inovadores e, futuramente,
              atuar no mercado internacional. Acredito no poder transformador da
              IA e quero fazer parte dessa revolução tecnológica.
            </p>
          </section>
        </div>

        {/* Contact Section */}
        <section className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Vamos Conversar</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="mailto:pedrosaraivaofc@gmail.com">
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/pedro-juan-ferreira-saraiva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
