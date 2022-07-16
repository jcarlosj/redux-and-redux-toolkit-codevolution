// ! Defines the action name as a constant
const CAKE_ORDERED = 'CAKE_ORDERED';

// ! Action creator: is a function that returns an action
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}