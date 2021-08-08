import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { APIUrls } from '../configs/APIUrls';

export const initialState = {
    loading: false,
    errorMessage: null,
    text: '',
    output: ''
};

const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        startLoading: state => {
            state.loading = true;
        },
        getWordsSuccess: (state, { payload }) => {
            state.words = payload.words;
            state.text = payload.text;
            state.output = payload.words
                .map(elem => `${Object.keys(elem)} - ${Object.values(elem)} `)
                .join('\n');
            state.loading = false;
            state.errorMessage = null;
        },
        getError: (state, { payload }) => {
            state.loading = false;
            state.errorMessage = payload;
        },
        removeOutputForm: (state) => {
            state.text = '';
            state.output = '';
        }
    }
});

export const {
    startLoading,
    getWordsSuccess,
    getError,
    removeOutputForm
} = wordsSlice.actions;

export const wordsSelector = state => state.words;

export default wordsSlice.reducer;

export const fetchCreateText = text => {
    return async dispatch => {
        dispatch(startLoading());
        try {
            const response = await axios.post(APIUrls.words, text);

            dispatch(getWordsSuccess(response.data));

        } catch (error) {
            const errMessage = `Server Error: ${error?.response?.data}`;
            dispatch(getError(errMessage));

        }
    };
};
