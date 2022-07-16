const redux = require( 'redux' );
const createStore = redux.createStore;

// ! Defines the action name as a constant
const CAKE_ORDERED = 'CAKE_ORDERED';

// ! Action creator: is a function that returns an action
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

// ! initial state ( default values )
const initialState = {
    numOfCakes: 10,
    anotherProperty: 0
}

// ! Reducer - ( previousState, action ) => newState;
const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
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
store.dispatch( orderCake() );
store.dispatch( orderCake() );
store.dispatch( orderCake() );

// ? Responsabilidad #5: Cancela registro o rechazar subscripcion de los listeners
unsubscribe();