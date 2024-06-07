'use strict';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, Toolbar, Typography, Divider, CardContent, Box } from '@mui/material';
import { api, AxiosError, AxiosResponse } from '../../../../services';
import { getTransactions, appendItems } from '../../../../store';
import { Scatter } from '../../../../components/dashboard/transactions/charts';

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
        <Grid sx={{ display: 'flex' }} spacing={2} container>
            <Grid xs={12} md={12} item>
                {/* card */}
                <Card elevation={2}>
                    <Toolbar>
                        <Typography
                            sx={{ flexGrow: 1 }}
                            variant='h6'
                            component='h1'
                            color='inherit'
                            noWrap
                        >
                            Charts Reports
                        </Typography>
                    </Toolbar>

                    <Divider />

                    <CardContent>
                        {/* charts */}
                        <Box sx={{ width: '100%' }}>
                            <Scatter items={items} />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export {
    Charts
};