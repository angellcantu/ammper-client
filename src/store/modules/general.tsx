'use strict';

import { createSlice } from '@reduxjs/toolkit';
import { ILinearProgress } from '../../interfaces';

export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        linearProgress: {
            open: false
        }
    },
    reducers: {
        showLinearProgress: (state, action) => {
            let { open }: ILinearProgress = action.payload;
            state.linearProgress.open = open;
        }
    }
});
export const getLinearProgress = (state: any) => state.general.linearProgress;
export const { showLinearProgress } = generalSlice.actions;
export default generalSlice.reducer;