const configureStore = require( '@reduxjs/toolkit' ).configureStore;
const { getDefaultMiddleware } = require('@reduxjs/toolkit');
const reduxLogger = require( 'redux-logger' );

const cakeReducer = require( '../features/cake/cakeSlice' );
const icecreamReducer = require( '../features/icecream/icecreamSlice' );

const logger = reduxLogger.createLogger();


// ! Redux store
// ? Responsabilidad #1: Mantiene el estado de la aplicacion
const store = configureStore({
    // ! Combine Reducers
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( logger )
});


module.exports = store;