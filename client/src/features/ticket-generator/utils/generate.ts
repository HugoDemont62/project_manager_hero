import {ITicket, TicketStatus} from "@/features/ticket-generator/type/type";

const ticketTypes = {
    BUG: TicketStatus.Bug,
    FEATURE: TicketStatus.Feature,
    SUPPORT: TicketStatus.Support,
    TECHNICAL: TicketStatus.Technical
};

const ticketGenerator = {
    actors: ['Utilisateur', 'Admin', 'Client', 'Manager', 'Développeur'],
    actions: {
        [TicketStatus.Bug]: ['ne peut pas accéder à', 'rencontre une erreur sur', 'voit un bug dans', 'est bloqué sur'],
        [TicketStatus.Feature]: ['souhaite pouvoir', 'aimerait avoir', 'demande à pouvoir', 'propose d\'ajouter'],
        [TicketStatus.Support]: ['demande comment', 'a besoin d\'aide pour', 'cherche à comprendre', 'souhaite savoir'],
        [TicketStatus.Technical]: ['signale des lenteurs sur', 'remarque des timeouts sur', 'observe des erreurs dans', 'note des problèmes de performance sur']
    },
    contexts: ['le dashboard', 'la page de profil', 'le système de login', 'les rapports', 'la gestion des utilisateurs', 'l\'interface d\'administration'],
    values: ['pour gagner du temps', 'pour améliorer la productivité', 'pour une meilleure expérience', 'car c\'est crucial pour son travail'],
    problems: ['ça ne répond pas', 'ça plante régulièrement', 'l\'interface est confuse', 'les données sont incorrectes']
};

export const generateTicket = (): ITicket => {
    const actor = ticketGenerator.actors[Math.floor(Math.random() * ticketGenerator.actors.length)];
    const type = Object.keys(ticketTypes)[Math.floor(Math.random() * Object.keys(ticketTypes).length)] as keyof typeof ticketTypes;
    const context = ticketGenerator.contexts[Math.floor(Math.random() * ticketGenerator.contexts.length)];
    const value = ticketGenerator.values[Math.floor(Math.random() * ticketGenerator.values.length)];
    const actions = ticketGenerator.actions[ticketTypes[type]];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const problem = ticketGenerator.problems[Math.floor(Math.random() * ticketGenerator.problems.length)];

    let description = '';
    switch (type) {
        case 'BUG':
            description = `${actor} ${action} ${context} : ${problem}`;
            break;
        case 'FEATURE':
            description = `${actor} ${action} ${context} ${value}`;
            break;
        case 'SUPPORT':
        case 'TECHNICAL':
            description = `${actor} ${action} ${context}`;
            break;
        default:
            description = `${actor} ${action} ${context}`;
    }

    return {
        title: `Ticket ${type}`,
        description,
        status: ticketTypes[type]
    };
};