const store = require( './app/store' );

const cakeActions = require( './features/cake/cakeSlice' ).cakeActions;
const icecreamActions = require( './features/icecream/icecreamSlice' ).icecreamActions;

const fetchUsers = require( './features/user/userSlice' ).fetchUsers;
const fetchUserById = require( './features/user/userByIdSlice' ).fetchUserById;

// ? Responsabilidad #2: Permite acceder al estado global de la aplicacion
console.log( 'Initial state: ', store.getState() );

// ? Responsabilidad #3: Registra o subscrible los listeners
const unsubscribe = store.subscribe( () => {
    // console.log( 'Update ', store.getState() );
}); 

// ? Responsabilidad #4: Permite la actualizacion del estado a traves del envio de acciones al Redux Store a traves del metodo dispatch()
store.dispatch( fetchUsers() );     // ? Envia/Despacha una accion asincrona a Redux Toolkit
store.dispatch( fetchUserById( 1 ) );

// store.dispatch( cakeActions.ordered() );
// store.dispatch( cakeActions.ordered() );
// store.dispatch( cakeActions.ordered() );
// store.dispatch( cakeActions.restocked( 3 ) );

// store.dispatch( icecreamActions.ordered() );
// store.dispatch( icecreamActions.ordered( 2 ) );
// store.dispatch( icecreamActions.restocked( 3 ) );

// ? Responsabilidad #5: Cancela registro o rechazar subscripcion de los listeners
// unsubscribe();       // ? Deshabilitar cuando estamos haciendo uso de una funcion asincrona