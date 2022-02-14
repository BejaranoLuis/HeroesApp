import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const imagePath = require.context('../../Assets', true);
    


    return (
        <>
            <div className="col">
                <div className="card animate__animated animate__fadeInLeftBig">
                    <div className="row g-0">
                        <div className="col-4">
                            <img src={imagePath(`./${id}.jpg`)}
                                className="card-img-top"
                                alt={superhero}
                            />
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alter_ego}</p>

                                {
                                    (alter_ego !== characters) &&
                                    <p className="text-muted">{characters}</p>
                                }

                                <p className="card-text">{first_appearance}</p>

                                <Link to={`/hero/${id}`}>Ver mas...</Link>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
