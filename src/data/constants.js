
const numeroWhatsapp = '5518998089932';
const mensagemAgendamentoGeral = 'Olá, quero agendar um serviço com a Cortex Studio!';

export const WHATSAPP_LINK_AGENDAR = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemAgendamentoGeral)}`;

export const getWhatsAppLinkForService = (serviceName) => {
    const mensagem = `Olá! Tenho interesse no serviço de ${serviceName}.`;
    return `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
}