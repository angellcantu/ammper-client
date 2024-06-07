'use strict';

import { configureStore } from '@reduxjs/toolkit';
import general from './modules/general';
import transactions from './modules/transactions';

export default configureStore({
    reducer: {
        general: general,
        transactions: transactions
    }
});