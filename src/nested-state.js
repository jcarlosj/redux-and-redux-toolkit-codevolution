const
    redux = require( 'redux' ),
    produce = require( 'immer' ).produce,       // ? Crea el siguiente estado inmutable mutando el actual
    createStore = redux.createStore,            // ? Permite la creación del Store de Redux
    applyMiddleware = redux.applyMiddleware;    // ? Permite la implementacion de Middlewares para Redux 

const
    reduxLogger = require( 'redux-logger' ),    
    logger = reduxLogger.createLogger();        // ? Permite la creacion de un log para Redux

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
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            // ! draft: Es una copia mutable del estado actual
            return produce( state, draft => {
                draft.address.street = action.payload;  // ! Por eso podemos asignarle el valor directamente, sin preocuparnos por el estado de las otras propiedades
            })
        default:
            return state;
    }
}

// ! Redux store
// ? Responsabilidad #1: Mantiene el estado de la aplicacion
const store = createStore( reducer, applyMiddleware( logger ) );   // ? Crea el almacen de datos de Redux e implementa un Middleware de Log para Redux

// ? Responsabilidad #2: Permite acceder al estado global de la aplicacion
console.log( 'Initial state: ', store.getState() ); 

// ? Responsabilidad #3: Registra o subscrible los listeners
const unsubscribe = store.subscribe( () => {});   

// ? Responsabilidad #4: Permite la actualizacion del estado a traves del envio de acciones al Redux Store a traves del metodo dispatch()
store.dispatch( updateStreet( 'Cra 1a con 62a' ) );

// ? Responsabilidad #5: Cancela registro o rechazar subscripcion de los listeners
unsubscribe();