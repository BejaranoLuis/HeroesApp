import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import './../../login.css';


export const LoginScreen = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [value, handleInputChange] = useForm({
        user: '',
    });

    const { user } = value;

    const handleSubmit = (e) => {
        e.preventDefault();
        const lastPath = localStorage.getItem('lastPath') || '/marvel';

        //Incluir condicion para verificar que el usuario haya ingresado un nombre
        const action = {
            type: types.login,
            payload: {
                name: user
            }
        }

        dispatch(action);

        navigate(lastPath, {
            replace: true,
        });


    }


    return (
        <>
            <div className='container mt-5'>
                <div className='row gx-5'>
                    <div className='col-6 mx-auto'>
                        <h1 className='title-login'> Inicia sesión en HeroesApp </h1>
                        <hr />
                    </div>

                    <div className='col-12'>
                        <div className='row'>
                            <form onSubmit={handleSubmit}>
                                <div className='col-6 mx-auto d-flex justify-content-center align-items-center form-login'>

                                    <div className='row w-100'>
                                        <div className='col-7 my-2 mx-auto'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='user'
                                                onChange={handleInputChange}
                                                aria-describedby="emailHelp"
                                                placeholder='Nombre de usuario'
                                            />

                                        </div>

                                        <div className='col-7 my-2 mx-auto'>
                                            <button className='btn btn-primary w-100'>
                                                Login
                                            </button>
                                        </div>

                                    </div>


                                </div>

                            </form>
                        </div>

                    </div>
                </div>





            </div>

        </>
    );
};
