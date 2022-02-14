import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navar = () => {
    const { user: { name }, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleClick = () => {
        const action = {
            type: '[auth] Logout'
        }
        dispatch(action);
        
        navigate('/login', {
            replace: true
        });

    }

    //console.log(name);

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to={'./'} className='navbar-brand'>HerroesApp</NavLink>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                                    aria-current='page'
                                    to={'./marvel'}
                                >
                                    Marvel
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                                    aria-current='page'
                                    to={'./dc'}
                                >
                                    Dc
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                                    aria-current='page'
                                    to={'./search'}
                                >
                                    Search
                                </NavLink>
                            </li>
                        </ul>

                        <div className='collapse navbar-collapse w-100 order-3 d-flex justify-content-end'>
                            <ul className='navbar-nav ml-auto'>
                                <span className='nav-item nav-link text-info'>
                                    {name}
                                </span>

                                <button
                                    className='nav-item nav-link btn'
                                    onClick={handleClick}
                                >
                                    Logout
                                </button>
                            </ul>
                        </div>



                    </div>
                </div>
            </nav>
        </>
    );
};
