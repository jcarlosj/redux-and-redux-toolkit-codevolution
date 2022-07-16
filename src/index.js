const redux = require( 'redux' );
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;    // ? Exportamos el metodo para vincular creadores de acciones (prescindir del dispatch)
const combineReducers = redux.combineReducers;          // ? Exportamos el metodo que nos permitira la combinacion de reducers para pasarlos al store

// ! Defines the action name as a constant
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// ! Action creator: is a function that returns an action (payload es una convencion en redux para pasar la data al store)
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}
function restockedCake( qty = 1 ) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}
function orderIceCream( qty = 1 ) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}
function restockedIceCream( qty = 1 ) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// ! initial state ( default values )
const
    initialCakeState     = { numOfCakes: 10 },
    initialIceCreamState = { numOfIceCreams: 20 };

// ! Reducer - ( previousState, action ) => newState;
const cakeReducer = ( state = initialCakeState, action ) => {
    switch( action.type ) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state;
    }
}
const iceCreamReducer = ( state = initialIceCreamState, action ) => {
    switch( action.type ) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state;
    }
}

// ! Combine Reducers
const rootReducer = combineReducers({
    // key: Reducer
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

// ! Redux store
// ? Responsabilidad #1: Mantiene el estado de la aplicacion
const store = createStore( rootReducer );   // ? Crea el almacen de datos de Redux

// ? Responsabilidad #2: Permite acceder al estado global de la aplicacion
console.log( 'Initial state: ', store.getState() );     

// ? Responsabilidad #3: Registra o subscrible los listeners
const unsubscribe = store.subscribe( () =>
    console.log( 'Update state: ', store.getState() )
);     

// ? Responsabilidad #4: Permite la actualizacion del estado a traves del envio de acciones al Redux Store a traves del metodo dispatch()
// store.dispatch( orderCake() );
// store.dispatch( orderCake() );
// store.dispatch( orderCake() );
// store.dispatch( restockedCake( 3 ) );

// ! Bind Action Creators: Vincula un creador de acciones (prescinde del dispatch) - NO ES NECESARIO IMPLEMENTARLO
const actions = bindActionCreators(
    // ? Objeto con las acciones que deseamos vincular
    {
        orderCake,
        restockedCake,
        orderIceCream,
        restockedIceCream
    }, 
    store.dispatch      // ? Funcion a la que deseamos vincularla (Invocara el dispacth directamente)
);

// ? Invocamos las acciones 
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockedCake( 3 );

actions.orderIceCream();
actions.orderIceCream( 2 );
actions.restockedIceCream( 3 );


// ? Responsabilidad #5: Cancela registro o rechazar subscripcion de los listeners
unsubscribe();