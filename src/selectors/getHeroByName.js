import { heroes } from "../data/dataHero";

export const getHeroByName = (name = '') => {
    console.log('ENTRO EN LA BUSQUEDA');

    name = name.toLowerCase();

    if(name === ''){
        return []
    }
    
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));



    
}