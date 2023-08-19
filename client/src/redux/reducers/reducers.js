import { combineReducers } from '@reduxjs/toolkit';
import medicinesReducer from '../state/medicineSlice/medicineSlice';

const rootReducer = combineReducers({
    medicines: medicinesReducer,
});

export default rootReducer;