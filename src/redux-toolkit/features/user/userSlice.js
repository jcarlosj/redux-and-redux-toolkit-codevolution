const createSlice = require( '@reduxjs/toolkit' ).createSlice;
const createAsyncThunk = require( '@reduxjs/toolkit' ).createAsyncThunk;
const axios = require( 'axios' );

// ! initial state ( default values )
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// ! Define async action creator: an action creator returns an action (Invocamos la creacion de un proceso asincrono)
// ? fetchUsers: El proceso asincrono generará tipos de acciones pendientes, cumplidas y rechazadas
const fetchUsers = createAsyncThunk( 
        'user/fetchUsers',          // ? 'nombre de la accion' (action type)
        async () => {               // ? funcion callback que crea el payload
            const response = await axios.get( 'https://jsonplaceholder.typicode.com/users' );

            return response.data.map( user => ({
                name: user.name,
                email: user.email
            }));
            // ! NOTA: No requerimos el catch ya que el error es manejado         
        }
);

// ! Create a Redux State Slice (Crear una porción de estado Redux):
// ! createSlice: Generará automáticamente creadores de acciones con los mismos nombres que las funciones reductoras que hemos escrito.
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: ( builder ) => {
        builder.addCase( fetchUsers.pending, state => {
            state.loading = true;
        });
        builder.addCase( fetchUsers.fulfilled, ( state, action ) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        });
        builder.addCase( fetchUsers.rejected, ( state, action ) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message
        });
    }
});


module.exports = userSlice.reducer;         // ? Exportamos sus reducers
module.exports.fetchUsers = fetchUsers;     // ? Exportamos funcion con procesos asincronos