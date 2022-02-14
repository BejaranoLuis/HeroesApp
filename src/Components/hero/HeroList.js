import { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
    //console.log(publisher);
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])



    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__zoomIn">
            {
                heroes.map(heroe => (
                    <HeroCard
                        key={heroe.id}
                        {...heroe}
                    />
                ))
            }
        </ div>
    );
};
