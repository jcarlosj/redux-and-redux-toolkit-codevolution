const configureStore = require( '@reduxjs/toolkit' ).configureStore;

const cakeReducer = require( '../features/cake/cakeSlice' );
const icecreamReducer = require( '../features/icecream/icecreamSlice' );

// ! Redux store
// ? Responsabilidad #1: Mantiene el estado de la aplicacion
const store = configureStore({
    // ! Combine Reducers
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
});


module.exports = store;