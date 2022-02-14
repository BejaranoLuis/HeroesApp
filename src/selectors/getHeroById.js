import { heroes } from "../data/dataHero";

export const getHeroById = (heroId) => {
    //console.log(`GetHeroById: ${heroId}`);
    return heroes.find(hero => hero.id === heroId);
}