'use strict';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { api, AxiosError, AxiosResponse } from '../../../../services';
import { getTransactions, appendItems } from '../../../../store';
import { Scatter, Histogram, Area } from '../../../../components/dashboard/transactions/charts';

/* main component */
function Charts() {

    const items = useSelector(getTransactions);
    const dispatch = useDispatch();

    useEffect(() => {
        _getTransactions();
    }, []);

    const _getTransactions = () => {
        dispatch(appendItems([]));
        api.get('/transactions')
            .then((response: AxiosResponse) => response.data)
            .then((response: any) => {
                dispatch(appendItems(response));
            })
            .catch((error: AxiosError) => window.console.log(error.response?.data));
    };

    return (
        <Grid sx={{ display: 'flex' }} spacing={2} rowSpacing={2} container>
            <Grid xs={12} md={12} item>
                <Scatter items={items} />
            </Grid>

            <Grid xs={12} md={12} item>
                <Histogram items={items} />
            </Grid>

            <Grid xs={12} md={12} item>
                <Area items={items} />
            </Grid>
        </Grid>
    );
}

export {
    Charts
};