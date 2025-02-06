import {BonusType} from "@/features/ticket-generator/type/type";
import {negativeEvents, positiveEvents} from "@/data/bonus";

export default function getBonus() {
    const bonusType: BonusType = Math.random() > 0.5 ? BonusType.Positive : BonusType.Negative;
    const bonus = bonusType === BonusType.Positive ? positiveEvents : negativeEvents;
    const bonusIndex = Math.floor(Math.random() * bonus.length);
    return bonus[bonusIndex];
}