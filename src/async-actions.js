const { createStore } = require( 'redux' );


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

// ! Redux store
// ? Responsabilidad #1: Mantiene el estado de la aplicacion
const store = createStore( reducer );   // ? Crea el almacen de datos de Redux