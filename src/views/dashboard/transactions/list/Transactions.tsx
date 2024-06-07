'use strict';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardContent, Toolbar, Typography, Divider, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { api, AxiosError, AxiosResponse } from '../../../../services';
import { getTransactions, appendItems } from '../../../../store';
import { StatusColumn, TypeColumn, AmountColumn, OptionsMenuColumn } from '../../../../components/dashboard/transactions/list/Table';

function Transactions() {

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
                window.console.log(response);
                dispatch(appendItems(response));
            })
            .catch((error: AxiosError) => window.console.log(error.response?.data));
    };
    
    const onHandleData = (transaction: any) => {
        window.console.log(transaction);
    }


    const columns: Array<GridColDef> = [
        { field: 'reference', headerName: 'Reference', headerAlign: 'center', align: 'center', flex: 1 },
        { field: 'status', headerName: 'Status', headerAlign: 'center', align: 'center', flex: 1, renderCell: event => (<StatusColumn gridRender={event} />) },
        { field: 'type', headerName: 'Type', headerAlign: 'center', align: 'center', flex: 1, renderCell: event => (<TypeColumn gridRender={event} />) },
        { field: 'category', headerName: 'Category', headerAlign: 'center', align: 'center', flex: 1 },
        { field: 'amount', headerName: 'Amount', headerAlign: 'center', align: 'center', flex: 1, renderCell: event => (<AmountColumn gridRender={event} />) },
        { field: 'actions', type: 'actions', getActions: (params: any) => OptionsMenuColumn({ params, onHandleData }) }
    ];

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
                            Transactions
                        </Typography>
                    </Toolbar>

                    <Divider />

                    <CardContent>
                        <Box sx={{ width: '100%' }}>
                            <DataGrid
                                rows={items}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            page: 0,
                                            pageSize: 20
                                        }
                                    }
                                }}
                                pageSizeOptions={[ 10, 20, 30 ]}
                                disableRowSelectionOnClick
                                disableVirtualization
                                autoHeight
                            />
                        </Box>
                    </CardContent>
                </Card>
                {/* card */}
            </Grid>
        </Grid>
    );
}

export {
    Transactions
};