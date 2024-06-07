'use strict';

import { useState, useEffect } from 'react';
import { Card, Toolbar, Typography, Divider, CardContent } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import HighCharts from 'highcharts';

/* main component */
function Scatter(props: { items: Array<any> }) {

    const [options, setOptions] = useState({
        chart: {
            type: 'scatter',
            zooming: {
                type: 'xy'
            }
        },
        title: {
            text: 'Categories',
            align: 'center'
        },
        xAxis: {
            title: {
                text: 'Date'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Amount'
            }
        },
        tooltip: {
            pointFormat: 'Amount: ${point.y}MXN'
        },
        series: [] as any
    });

    useEffect(() => {
        let series = [...new Set(props.items.map(item => item.category))];
        let _series: Array<{ name: string, data: Array<Array<any>> }> = [];

        const getData = (category: string) => {
            let temp: Array<Array<any>> = [];
            props.items.forEach(item => {
                if (item.category == category) {
                    temp.push([item.value_date, item.amount]);
                }
            });
            return temp;
        };
        series.forEach(serie => _series.push({ name: serie, data: getData(serie) }));
        setOptions({
            ...options,
            series: _series
        });
    }, [props]);

    return (
        <Card elevation={2}>
            <Toolbar>
                <Typography
                    sx={{ flexGrow: 1 }}
                    variant='h6'
                    component='h1'
                    color='inherit'
                    noWrap
                >
                    Scatter Chart
                </Typography>
            </Toolbar>

            <Divider />

            <CardContent>
                {/* charts */}
                <HighchartsReact
                    highcharts={HighCharts}
                    options={options}
                />
            </CardContent>
        </Card>
    );
}

export {
    Scatter
};