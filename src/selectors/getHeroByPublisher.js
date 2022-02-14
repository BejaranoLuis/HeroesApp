import { heroes } from "../data/dataHero";

export const getHeroByPublisher = (publisher) => {
    console.log('Publisher');
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    
    //Verifica si el prop mandado es igual a los publishers indicados. 
    //En caso de no ser asi manda una excepcion. 
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} no es un publisher`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
};
