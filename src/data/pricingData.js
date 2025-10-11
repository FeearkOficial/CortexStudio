export const pricingData = [
    {
        name: 'Bronze',
        price: '150',
        tagline: 'Essencial para manutenção básica',
        features: [
            'Limpeza básica interna e externa',
            'Verificação de hardware',
            'Teste de funcionamento',
            'Relatório de diagnóstico',
            'Garantia de 15 dias',
        ],
        isFeatured: false,
    },
    {
        name: 'Prata',
        price: '250',
        tagline: 'Completo para renovação total',
        isPopular: true,
        features: [
            'Limpeza completa + pasta térmica',
            'Formatação e otimização Windows',
            'Instalação de drivers essenciais',
            'Configuração de performance',
            'Garatia de 30 dias',
            'Suporte técnico incluso',
        ],
        isFeatured: true,
    },
    {
        name: 'Ouro',
        price: '400',
        tagline: 'Premium com suporte estendido',
        features: [
            'Tudo do plano Prata',
            'Backup completo de dados',
            'Instalação de programas de sistema',
            '30 dias de suporte remoto',
            'Garantia de 60 dias',
            'Coleta e entrega gratuita',
        ],
        isFeatured: false,
    },
];