'use strict';

import { createSlice } from '@reduxjs/toolkit';

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        items: []
    },
    reducers: {
        appendItems: (state, action) => {
            state.items = action.payload;
        }
    }
});
export const getTransactions = (state: any) => state.transactions.items;
export const { appendItems } = transactionsSlice.actions;
export default transactionsSlice.reducer;