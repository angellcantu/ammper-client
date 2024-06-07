'use strict';

import { useState } from 'react';
import { Card, Toolbar, Typography, Divider, CardContent } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import HighCharts from 'highcharts';
import BellCurve from 'highcharts/modules/histogram-bellcurve';

BellCurve(HighCharts);

/* main component */
function Histogram(props: { items: Array<any> }) {

    const [options] = useState({
        title: {
            text: 'Amounts'
        },
        xAxis: [
            {
                title: { text: 'Data' },
                alignTicks: false,
            },
            {
                title: { text: 'Histogram' },
                alignTicks: false,
                opposite: true
            }
        ],
        yAxis: [
            {
                title: 'Data'
            },
            {
                title: { text: 'Histogram' },
                opposite: true
            }
        ],
        plotOptions: {
            histogram: {
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. {point.x:.3f} to ' + '{point.x2:.3f}, {point.y}.'
                    }
                }
            }
        },
        series: [
            {
                name: 'Histogram',
                type: 'histogram',
                xAxis: 1,
                yAxis: 1,
                baseSeries: 's1',
                zIndex: -1
            },
            {
                name: 'Data',
                type: 'scatter',
                data: props.items.map(item => item.amount),
                id: 's1',
                marker: {
                    radius: 1.5
                }
            }
        ]
    });

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
                    Histogram Chart
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
    Histogram
};