const { createStore, applyMiddleware } = require( 'redux' );
const thunkMiddleware = require( 'redux-thunk' ).default;
const axios = require( 'axios' );


// ! Defines the action name as a constant
const
    FETCHED_USERS_REQUESTED = 'FETCHED_USERS_REQUESTED',
    FETCHED_USERS_SUCCEEDED = 'FETCHED_USERS_SUCCEEDED',
    FETCHED_USERS_FAILED = 'FETCHED_USERS_FAILED';

// ! initial state ( default values )
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// ! Action creator: is a function that returns an action (payload es una convencion en redux para pasar la data al store)
const fetchUsersRequest = () => {
    return {
        type: FETCHED_USERS_REQUESTED
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCHED_USERS_SUCCEEDED,
        payload: users 
    }
}
const fetchUsersFailure = error => {
    return {
        type: FETCHED_USERS_FAILED,
        payload: error
    }
}

// ! Reducer - ( previousState, action ) => newState;
const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case FETCHED_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCHED_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case FETCHED_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;

    }

}

// ! Define async action creator: an action creator returns an action
const fetchUsers = () => {   
    // ? Retorna una funcion que no es pura y permite efectos secundarios como realizar peticiones a una API
    return function( dispatch ) {                           // ? Esto es posible por que recibe el método de envio de acciones como argumento, es decir el 'dispatch'
        dispatch( fetchUsersRequest() );                    // ? Cambia el estado cuando se esta por hacer la peticion

        axios
            .get( 'https://jsonplaceholder.typicode.com/usersss' )
            .then( response => {
                const users = response.data.map( user => ({
                    name: user.name,
                    email: user.email
                }));
                // response.data: son los usuarios
                console.log( users );

                dispatch( fetchUsersSuccess( users ) );     // ? Cambia el estado cuando la peticion es exitosa
            })
            .catch( error => {
                // error.message: es el mensaje de error
                // console.error( error.message );

                dispatch( fetchUsersFailure( error.message ) );     // ? Cambia el estado cuando la peticion es falla
            });


    }
}

// ! Redux store
// ? Responsabilidad #1: Mantiene el estado de la aplicacion
const store = createStore( reducer, applyMiddleware( thunkMiddleware ) );   // ? Crea el almacen de datos de Redux e implementa Thunk como Middleware para crear acciones asincronas en Redux

// ? Responsabilidad #2: Permite acceder al estado global de la aplicacion
console.log( 'Initial state: ', store.getState() );     

// ? Responsabilidad #3: Registra o subscrible los listeners
const unsubscribe = store.subscribe( () => {
    console.log( 'Update: ', store.getState() );
});  

// ? Responsabilidad #4: Permite la actualizacion del estado a traves del envio de acciones al Redux Store a traves del metodo dispatch()
store.dispatch( fetchUsers() );       // ? Envia una accion asincrona que hemos definido usando thunk


// ? Responsabilidad #5: Cancela registro o rechazar subscripcion de los listeners
// unsubscribe();