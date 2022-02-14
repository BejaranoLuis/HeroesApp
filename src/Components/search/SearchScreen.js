import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [value, handleInputChange] = useForm({
        searchText: q
    })
    const { searchText } = value;

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    const heros = useMemo(() => getHeroByName(q), [q])
    

    

    return (
        <>
            <h1>Busquedas</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Buscar"
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            className='btn btn-outline-primary mt-2 w-100'
                            type='submit'
                        >
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    
                    {
                        (q === '') 
                            ? <div className='alert alert-info'>Buscar un heroe</div>
                            : (heros.length === 0) && <div className='alert alert-danger'>No hay resultados</div>
                    }

                    {
                        heros.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
};
