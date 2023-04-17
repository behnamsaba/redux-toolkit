import { configureStore} from '@reduxjs/toolkit';
import postSliceReducer from './postSlice';

const store = configureStore({
    reducer:{
        blog:postSliceReducer
    }
});

export default store