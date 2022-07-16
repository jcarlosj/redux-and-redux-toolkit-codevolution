const redux = require( 'redux' );

const createStore = redux.createStore;


// ! initial state ( default values )
const initialState = {
    name: 'Sofia Gutiérrez',
    address: {
        street: 'Cra 1 con 70',
        city: 'Cali',
        state: 'Valle del Cauca'
    }
}

// ! Defines the action name as a constant
const STREET_UPDATED = 'STREET_UPDATED';

// ! Action Creator
const updateStreet = ( street ) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

// ! Reducer - ( previousState, action ) => newState;
const reducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case STREET_UPDATED:
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                }
            }
        default:
            return state;
    }
}

// ! Redux store
// ? Responsabilidad #1: Mantiene el estado de la aplicacion
const store = createStore( reducer );   // ? Crea el almacen de datos de Redux

// ? Responsabilidad #2: Permite acceder al estado global de la aplicacion
console.log( 'Initial state: ', store.getState() ); 

// ? Responsabilidad #3: Registra o subscrible los listeners
const unsubscribe = store.subscribe( () =>
    console.log( 'Update state: ', store.getState() )
);   

// ? Responsabilidad #4: Permite la actualizacion del estado a traves del envio de acciones al Redux Store a traves del metodo dispatch()
store.dispatch( updateStreet( 'Cra 1a con 62a' ) );

// ? Responsabilidad #5: Cancela registro o rechazar subscripcion de los listeners
unsubscribe();