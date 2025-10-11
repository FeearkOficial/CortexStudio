import { Shield, Database, Share2, Server, UserCheck, Search, Lock, Mail } from 'lucide-react';

// Pares de Pergunta e Resposta
export const qaData = [
  {
    question: 'Quais Dados Coletamos ?',
    answer: 'Coletamos informações que você nos fornece em formulários (nome, e-mail, telefone) e durante a comunicação direta (WhatsApp), além de dados anônimos de navegação para melhorar o site.',
  },
  {
    question: 'Como e Por Que Usamos Seus Dados?',
    answer: 'Seus dados são usados estritamente para prestar nossos serviços: responder suas solicitações, agendar atendimentos, fornecer orçamentos e manter contato durante o serviço.',
  },
  {
    question: 'Com Quem Compartilhamos Seus Dados?',
    answer: 'Não vendemos ou trocamos seus dados. O compartilhamento ocorre apenas com ferramentas essenciais, como plataformas de comunicação (WhatsApp) e análise (Google Analytics), sempre de forma segura.',
  },
  {
    question: 'Segurança e Armazenamento',
    answer: 'Seus dados são armazenados em ambientes seguros e a comunicação em nosso site é criptografada com SSL (HTTPS). Retemos suas informações apenas pelo tempo necessário para cumprir a finalidade do serviço ou obrigações legais.',
  },
];

// "Balões" de Informação
export const rightsBubbles = [
  {
    icon: UserCheck,
    title: 'Acesso e Correção',
    description: 'Você tem o direito de acessar seus dados e solicitar a correção de informações incorretas.',
  },
  {
    icon: Search,
    title: 'Informação',
    description: 'Você pode perguntar com quais entidades seus dados foram compartilhados e as consequências de não fornecer o consentimento.',
  },
  {
    icon: Lock,
    title: 'Eliminação e Revogação',
    description: 'Você tem o direito de solicitar a exclusão de seus dados ou retirar seu consentimento de uso a qualquer momento.',
  },
  {
    icon: Mail,
    title: 'Fale Conosco',
    description: 'Para exercer qualquer um de seus direitos, entre em contato pelo e-mail: contato@cortexstudio.com.br',
  },
];