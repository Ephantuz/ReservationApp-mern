import {createSlice,} from '@reduxjs/toolkit'
 
const initialState = {
    value: [],
}

export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers:{
        addReservation: (state, action) =>{
            console.log("Hello");
            state.value.push(action.payload)
        },
    },
});

export const {addReservation} = reservationsSlice.actions

export default reservationsSlice.reducer;