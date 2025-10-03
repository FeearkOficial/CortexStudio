import { CheckSquare, Server, User, Shield, BookOpen, Mail } from 'lucide-react';

// Pares de Pergunta e Resposta
export const qaData = [
  {
    question: 'Aceitação dos Termos',
    answer: 'Ao acessar e utilizar nosso website e solicitar nossos serviços, você concorda em cumprir e estar vinculado aos nossos termos e condições. Se não concordar, por favor, não utilize nossos serviços.',
  },
  {
    question: 'Descrição dos Serviços',
    answer: 'A Cortex Studio oferece serviços especializados em manutenção, otimização e reparo de computadores. As descrições e preços "a partir de" são informativos e podem variar após o diagnóstico técnico final.',
  },
  {
    question: 'Orçamentos e Pagamento',
    answer: 'Todos os serviços são precedidos de um diagnóstico e orçamento detalhado para aprovação do cliente. Nenhum serviço é executado sem consentimento prévio e o pagamento deve ser efetuado conforme acordado.',
  },
  {
    question: 'Garantia dos Serviços',
    answer: 'Oferecemos uma garantia padrão de 90 (noventa) dias sobre a mão de obra e peças utilizadas. A garantia não cobre problemas por mau uso, danos acidentais ou software malicioso.',
  },
];

// "Balões" de Informação
export const bubblesData = [
  {
    icon: User,
    title: 'Responsabilidades do Usuário',
    description: 'É sua responsabilidade fornecer informações precisas e realizar o backup de seus dados importantes antes de qualquer serviço.',
  },
  {
    icon: Server,
    title: 'Limitação de Responsabilidade',
    description: 'Nossa responsabilidade limita-se ao serviço contratado. Não cobrimos problemas preexistentes ou perda de dados em serviços de recuperação.',
  },
  {
    icon: BookOpen,
    title: 'Propriedade Intelectual',
    description: 'Todo o conteúdo deste site (textos, imagens, logos) é propriedade da Cortex Studio e não pode ser reproduzido sem autorização.',
  },
  {
    icon: Mail,
    title: 'Fale Conosco',
    description: 'Para qualquer dúvida relacionada a estes termos, entre em contato pelo e-mail: contato@cortexstudio.com.br.',
  },
];