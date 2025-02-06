import {Bonus, BonusType} from "@/features/ticket-generator/type/type";

export const positiveEvents: Bonus[] = [
  {
    title: "Sprint Boost",
    description: "L'équipe est super motivée. Temps de traitement des tickets -50%. Points doublés sur les tickets bien classés",
    timer: 30,
    type: BonusType.Positive,
    impact: 2
  },
  {
    title: "Formation express",
    description: "Meilleure compréhension des tickets techniques. Identification automatique des tickets ambigus. Point triplés",
    timer: 15,
    type: BonusType.Positive,
    impact: 3
  },
];

export const negativeEvents: Bonus[] = [
  {
    title: "DDOS Attack",
    description: "Flood de tickets support. Les tickets support deviennent prioritaires. Pénalités doublées sur les erreurs.",
    timer: 20,
    type: BonusType.Negative,
    impact: -2
  },
  {
    title: "Day One Bug",
    description: "Apparition massive de bugs critiques. Pénalités triplées sur les erreurs.",
    timer: 30,
    type: BonusType.Negative,
    impact: -3
  },
];