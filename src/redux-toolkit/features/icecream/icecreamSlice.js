const createSlice = require( '@reduxjs/toolkit' ).createSlice;

// ! initial state ( default values )
const initialState = {
    numOfIceCreams: 20
}

// ! Create a Redux State Slice (Crear una porción de estado Redux):
// ! createSlice: Generará automáticamente creadores de acciones con los mismos nombres que las funciones reductoras que hemos escrito.
const icecreamSlice = createSlice({
    name: 'icecream',       // ? La creación de una porción del estado de Redux, requiere un nombre de cadena para identificar el sector
    initialState,           // ? Dicha porción del estado requiere un estado inicial
    // ? Dicha porción del estado requiere definir sus propios Reducers - ( previousState, action ) => newState;
    reducers: {
        ordered: ( state, action ) => {         // ? ordered: Sera el nombre de la accion creada automáticamente, no tendremos que escribirlas a mano.
            if( ! action.payload )
                state.numOfIceCreams--    
            else
                state.numOfIceCreams -= action.payload
        },          
        restocked: ( state, action ) => {       // ? restocked: Sera el nombre de la accion creada automáticamente, no tendremos que escribirlas a mano.
            state.numOfIceCreams += action.payload
        }
    }

});


module.exports = icecreamSlice.reducer;                 // ? Exportamos sus reducers
module.exports.icecreamActions = icecreamSlice.actions; // ? Exportamos sus acciones (ordered, restocked)