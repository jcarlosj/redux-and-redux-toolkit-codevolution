const configureStore = require( '@reduxjs/toolkit' ).configureStore;

const cakeReducer = require( '../features/cake/cakeSlice' );

// ! Redux store
// ? Responsabilidad #1: Mantiene el estado de la aplicacion
const store = configureStore({
    // ! Combine Reducers
    reducer: {
        cake: cakeReducer
    },
});


module.exports = store;