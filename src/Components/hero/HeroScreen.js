import React, { useMemo, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';


export const HeroScreen = () => {
    //useParams nos da los valores que estan en la url
    const { heroId } = useParams();

    //usar useMemo siempre y cuando en el componente se actualice el estado y algun elemento este consumiendo datos de otro lugar
    //Si cambia el id del heroe se hace la llamada a la api
    const hero = useMemo(() => getHeroById(heroId), [heroId])
    const navigate = useNavigate();

    if (!hero) {
        return <Navigate to='/' />
    }

    const imagePath = `/Assets/${hero.id}.jpg`;


    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img
                    src={imagePath}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeftBig"
                />
            </div>

            <div className='col-8 animate__animated animate__fadeInLeftBig'>
                <h3>{hero.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter ego: </b>
                        {hero.alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <b>publisher: </b>
                        {hero.publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>First appearance: </b>
                        {hero.first_appearance}
                    </li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{hero.characters}</p>

                <button
                    className='btn btn-outline-info'
                    onClick={handleReturn}

                >

                    Regresar
                </button>
            </div>

        </div>
    );
};
