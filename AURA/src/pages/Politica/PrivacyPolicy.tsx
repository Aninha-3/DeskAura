import { motion } from "framer-motion";
import { FileText, ShieldCheck, Zap, Mail, Globe } from "lucide-react";

export default function PrivacyPolicy(): React.ReactElement {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-[#0b1020] text-slate-100 py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            Política de Privacidade — AURA
          </h1>
          <p className="text-sm text-slate-400">
            Última atualização: 13 de outubro de 2025
          </p>
        </header>

        <section className="space-y-6">
          <article className="bg-transparent border border-slate-800 rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3">
              <FileText className="w-5 h-5" /> Visão geral
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Na AURA, levamos sua privacidade a sério. Esta política explica
              quais dados coletamos, como os utilizamos, quando os
              compartilhamos e os direitos que você tem sobre suas informações.
              Ao usar nosso site e serviços, você concorda com as práticas
              descritas aqui.
            </p>
          </article>

          <article className="bg-transparent border border-slate-800 rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3">
              <ShieldCheck className="w-5 h-5" /> Que dados coletamos
            </h2>
            <ul className="list-disc list-inside text-slate-300 leading-relaxed space-y-2">
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

          <article className="bg-transparent border border-slate-800 rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3">
              <Zap className="w-5 h-5" /> Como usamos seus dados
            </h2>
            <ol className="list-decimal list-inside text-slate-300 leading-relaxed space-y-2">
              <li>
                Prestar e melhorar nossos serviços (personalização, operações e
                análise).
              </li>
              <li>
                Comunicar novidades, atualizações e responder solicitações de
                suporte.
              </li>
              <li>
                Prevenir fraudes, proteger a segurança e cumprir obrigações
                legais.
              </li>
              <li>
                Fornecer recursos de conta, processar pagamentos e gerenciar
                assinaturas.
              </li>
            </ol>
          </article>

          <article className="bg-transparent border border-slate-800 rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3">
              <Globe className="w-5 h-5" /> Cookies e tecnologias semelhantes
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Utilizamos cookies, local storage e pixels para oferecer
              funcionalidades essenciais, lembrar preferências e medir
              desempenho. Você pode gerenciar suas preferências de cookies
              através das configurações do seu navegador — note que desabilitar
              cookies essenciais pode afetar a experiência do site.
            </p>
          </article>

          <article className="bg-transparent border border-slate-800 rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3">
              <Mail className="w-5 h-5" /> Compartilhamento de dados e terceiros
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Podemos compartilhar dados com provedores de serviço que atuam em
              nosso nome (ex.: hospedagem, e-mails, processamento de pagamentos,
              ferramentas analíticas). Exigimos que esses parceiros protejam os
              dados e só os utilizem conforme instruído por nós. Também
              poderemos compartilhar informações quando exigido por lei ou para
              proteger nossos direitos.
            </p>
          </article>

          <article className="bg-transparent border border-slate-800 rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3">
              <ShieldCheck className="w-5 h-5" /> Segurança dos dados
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Implementamos medidas técnicas e organizacionais razoáveis para
              proteger seus dados contra acesso não autorizado, alteração ou
              destruição. No entanto, nenhum sistema é impenetrável — se ocorrer
              um incidente de segurança com risco real para seus dados,
              notificaremos as autoridades competentes e você, quando exigido
              por lei.
            </p>
          </article>

          <article className="bg-transparent border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">Seus direitos</h2>
            <p className="text-slate-300 leading-relaxed">
              Dependendo da sua jurisdição, você pode ter direitos sobre seus
              dados pessoais, incluindo acessar, corrigir, exportar, limitar o
              processamento ou solicitar a exclusão. Para exercer esses
              direitos, entre em contato conosco usando as informações de
              contato abaixo. Podemos solicitar uma verificação de identidade
              razoável antes de atender à solicitação.
            </p>
          </article>

          <article className="bg-transparent border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">Crianças</h2>
            <p className="text-slate-300 leading-relaxed">
              Nosso site não é direcionado a menores de 13 anos. Não coletamos
              conscientemente informações pessoais de crianças. Se você
              acreditar que coletamos dados de uma criança, entre em contato
              conosco para que possamos remover as informações.
            </p>
          </article>

          <article className="bg-transparent border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">
              Alterações nesta política
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Poderemos atualizar esta política periodicamente. Se fizermos
              mudanças significativas, informaremos de forma destacada no site
              ou por e-mail, e atualizaremos a data de \"Última atualização\" no
              topo desta página.
            </p>
          </article>

          <article className="bg-transparent border border-slate-800 rounded-2xl p-6">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-3">
              <Mail className="w-5 h-5" /> Contato
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Se tiver dúvidas ou quiser exercer seus direitos, contate-nos:
            </p>
            <ul className="mt-3 text-slate-300">
              <li className="flex items-center gap-2">
                <strong>E-mail:</strong> <span>privacy@aura.example</span>
              </li>
              <li className="flex items-center gap-2">
                <strong>Endereço:</strong>{" "}
                <span>Rua Exemplo, 123 — Cidade, País</span>
              </li>
            </ul>
          </article>

          <footer className="mt-8 text-sm text-slate-500">
            <p>
              Este documento é um modelo e não substitui aconselhamento
              jurídico. Recomendamos revisar a política com um advogado para
              garantir conformidade com as leis aplicáveis (por exemplo, LGPD no
              Brasil ou GDPR na União Europeia) antes de publicá-la.
            </p>
          </footer>
        </section>
      </div>
    </motion.main>
  );
}
