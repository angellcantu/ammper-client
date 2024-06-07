'use strict';

import { Tooltip, Chip } from '@mui/material';
import { GridRenderCellParams, GridActionsCellItem } from '@mui/x-data-grid';
import { Details } from '@mui/icons-material';

/* custom functions */
const StatusColumn = (props: { gridRender: GridRenderCellParams<any, string> }) => {
    let { row } = props.gridRender;
    return (
        <Tooltip title={row.status}>
            <Chip
                style={{
                    backgroundColor: (row.status == 'PROCESSED') ? 'rgb(51, 174, 90)' : 'rgb(255, 153, 51)',
                    color: 'white'
                }}
                label={<strong>{row.status}</strong>}
                size='small'
            />
        </Tooltip>
    );
};

const TypeColumn = (props: { gridRender: GridRenderCellParams<any, string> }) => {
    let { row } = props.gridRender;
    return (
        <Tooltip title={row.type}>
            <Chip
                style={{
                    backgroundColor: (row.type == 'INFLOW') ? 'rgb(51, 159, 255)' : 'rgb(255, 51, 119)',
                    color: 'white'
                }}
                label={<strong>{row.type}</strong>}
                size='small'
            />
        </Tooltip>
    );
};

const AmountColumn = (props: { gridRender: GridRenderCellParams<any, string> }): string => {
    let { row } = props.gridRender;
    return `$${row.amount} ${row.currency}`;
};

const OptionsMenuColumn = (props: { params: any, onHandleData: Function }) => {
    let { row } = props.params;

    const _onHandleData = () => props.onHandleData(row);

    let items = [
        <GridActionsCellItem
            onClick={_onHandleData}
            icon={<Details />}
            label='View details'
            color='secondary'
            showInMenu
        />
    ];
    return items;
};

export {
    StatusColumn,
    TypeColumn,
    AmountColumn,
    OptionsMenuColumn
};