const createSlice = require( '@reduxjs/toolkit' ).createSlice;
const createAsyncThunk = require( '@reduxjs/toolkit' ).createAsyncThunk;
const axios = require( 'axios' );

// ! initial state ( default values )
const initialState = {
    loading: false,
    user: {},
    error: ''
}

// ! Define async action creator: an action creator returns an action (Invocamos la creacion de un proceso asincrono)
const fetchUserById = createAsyncThunk(
    'user/fetchUserById',
    async ( user_id ) => {

        const response = await axios.get( `https://jsonplaceholder.typicode.com/users/${ user_id }` );
        // console.log( '>>', response.data );

        return response.data;
    }
);

// ! Create a Redux State Slice (Crear una porción de estado Redux):
// ! createSlice: Generará automáticamente creadores de acciones con los mismos nombres que las funciones reductoras que hemos escrito.
const userByIDSlices = createSlice({
    'name': 'userbyid',
    initialState,
    extraReducers: ( builder ) => {
        builder.addCase( fetchUserById.pending, state => {
            state.loading = true;
        });
        builder.addCase( fetchUserById.fulfilled, ( state, action ) => {
            state.loading = false;
            state.user = action.payload;
            state.error = '';
        });
        builder.addCase( fetchUserById.rejected, ( state, action ) => {
            state.loading = false;
            state.user = {};
            state.error = action.error.message;
        });
    }
});


module.exports = userByIDSlices.reducer;         // ? Exportamos sus reducers
module.exports.fetchUserById = fetchUserById;     // ? Exportamos funcion con procesos asincronos