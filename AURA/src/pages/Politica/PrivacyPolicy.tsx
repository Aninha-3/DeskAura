import { motion } from "framer-motion";
import { FileText, ShieldCheck, Zap, Mail, Globe } from "lucide-react";

export default function PrivacyPolicy(): React.ReactElement {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-white text-[#0f3d2e] py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-[#0d4d33]">
            Política de Privacidade — AURA
          </h1>
          <p className="text-sm text-[#2e5d4d]">
            Última atualização: 13 de outubro de 2025
          </p>
        </header>

        <section className="space-y-6">
          <article className="bg-transparent border border-[#cdded4] rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3 text-[#0d4d33]">
              <FileText className="w-5 h-5 text-[#0d4d33]" /> Visão geral
            </h2>
            <p className="text-[#1b4437] leading-relaxed">
              Na AURA, levamos sua privacidade a sério. Esta política explica
              quais dados coletamos, como os utilizamos, quando os
              compartilhamos e os direitos que você tem sobre suas informações.
              Ao usar nosso site e serviços, você concorda com as práticas
              descritas aqui.
            </p>
          </article>

          <article className="bg-transparent border border-[#cdded4] rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3 text-[#0d4d33]">
              <ShieldCheck className="w-5 h-5 text-[#0d4d33]" /> Que dados coletamos
            </h2>
            <ul className="list-disc list-inside text-[#1b4437] leading-relaxed space-y-2">
              <li>
                <strong>Dados que você fornece:</strong> nome, e-mail, endereço
                (quando necessário), fotos ou imagens que você carrega, e
                qualquer conteúdo que você submeta pelas funcionalidades do
                site.
              </li>
              <li>
                <strong>Dados de uso:</strong> páginas visitadas, cliques,
                duração da sessão, versão do navegador, sistema operacional e
                dados de diagnóstico.
              </li>
              <li>
                <strong>Dados de pagamento:</strong> quando aplicável,
                processados por provedores de pagamento terceirizados (nunca
                armazenamos informações completas de cartão em nossos
                servidores).
              </li>
            </ul>
          </article>

          <article className="bg-transparent border border-[#cdded4] rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3 text-[#0d4d33]">
              <Zap className="w-5 h-5 text-[#0d4d33]" /> Como usamos seus dados
            </h2>
            <ol className="list-decimal list-inside text-[#1b4437] leading-relaxed space-y-2">
              <li>Prestar e melhorar nossos serviços.</li>
              <li>Comunicar novidades e suporte.</li>
              <li>Prevenir fraudes e cumprir obrigações legais.</li>
              <li>Gerenciar pagamentos e assinaturas.</li>
            </ol>
          </article>

          <article className="bg-transparent border border-[#cdded4] rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3 text-[#0d4d33]">
              <Globe className="w-5 h-5 text-[#0d4d33]" /> Cookies e tecnologias semelhantes
            </h2>
            <p className="text-[#1b4437] leading-relaxed">
              Utilizamos cookies, local storage e pixels para oferecer
              funcionalidades essenciais, lembrar preferências e medir
              desempenho.
            </p>
          </article>

          <article className="bg-transparent border border-[#cdded4] rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3 text-[#0d4d33]">
              <Mail className="w-5 h-5 text-[#0d4d33]" /> Compartilhamento de dados
            </h2>
            <p className="text-[#1b4437] leading-relaxed">
              Podemos compartilhar dados com provedores de serviço que atuam em
              nosso nome. Exigimos que esses parceiros protejam as informações.
            </p>
          </article>

          <article className="bg-transparent border border-[#cdded4] rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3 text-[#0d4d33]">Segurança dos dados</h2>
            <p className="text-[#1b4437] leading-relaxed">
              Implementamos medidas razoáveis para proteger seus dados. Caso
              ocorra um incidente relevante, notificaremos conforme a lei.
            </p>
          </article>

          <article className="bg-transparent border border-[#cdded4] rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3 text-[#0d4d33]">Seus direitos</h2>
            <p className="text-[#1b4437] leading-relaxed">
              Dependendo da sua jurisdição, você pode solicitar acesso,
              correção, exclusão ou limitação do uso de seus dados.
            </p>
          </article>

          <article className="bg-transparent border border-[#cdded4] rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3 text-[#0d4d33]">Crianças</h2>
            <p className="text-[#1b4437] leading-relaxed">
              Não coletamos dados de menores de 13 anos intencionalmente.
            </p>
          </article>

          <article className="bg-transparent border border-[#cdded4] rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3 text-[#0d4d33]">Alterações</h2>
            <p className="text-[#1b4437] leading-relaxed">
              Atualizaremos esta política quando necessário.
            </p>
          </article>

          <article className="bg-transparent border border-[#cdded4] rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3 text-[#0d4d33]">
              <Mail className="w-5 h-5 text-[#0d4d33]" /> Contato
            </h2>
            <p className="text-[#1b4437] leading-relaxed">Fale com a AURA:</p>
            <ul className="mt-3 text-[#1b4437]">
              <li className="flex items-center gap-2">
                <strong>E-mail:</strong> privacy@aura.example
              </li>
              <li className="flex items-center gap-2">
                <strong>Endereço:</strong> Rua Exemplo, 123 — Cidade
              </li>
            </ul>
          </article>

          <footer className="mt-8 text-sm text-[#3d6b58]">
            <p>
              Este documento é um modelo e não substitui aconselhamento jurídico.
            </p>
          </footer>
        </section>
      </div>
    </motion.main>
  );
}
