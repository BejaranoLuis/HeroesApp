import { types } from "../types/types";

//Un reducer no debe de tener interacciones con el mundo exterior
export const authReducer = (state = {}, action) => {
    console.log(action.type);

    switch (action.type) {
        case types.login:
            console.log('ENTRANDO');
            return {
                //desestructuramos todo el payload, datos del usuario
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }
    
        default:
            //SI no hay ninguna accion permitirda regresa el mismo estado de la aplicacion.
            return state;
    }
}