import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservation/reservationsSlice'


export const store = configureStore({
  reducer: {
    reservations: reservationsReducer
  },
});
