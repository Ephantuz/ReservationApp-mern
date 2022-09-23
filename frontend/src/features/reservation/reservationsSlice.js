import {createSlice} from '@reduxjs/toolkit'
 
const initialState = {
    value: []
}

export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers:{
        addReservation: (state, action) =>{
            state.value.push(action.payload)
        }
    }
})

export const {addReservation} = reservationsSlice.action

export default reservationsSlice.reducer