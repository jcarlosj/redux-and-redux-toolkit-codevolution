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