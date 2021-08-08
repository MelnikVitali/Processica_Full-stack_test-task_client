import {combineReducers} from 'redux';

import wordsReducer  from './wordsSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    words: wordsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
