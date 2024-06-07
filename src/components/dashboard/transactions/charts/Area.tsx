'use strict';

import { useState, useEffect } from 'react';
import { Card, Toolbar, Typography, Divider, CardContent } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import HighCharts from 'highcharts';

/* main component */
function Area(props: { items: Array<any> }) {

    const [options, setOptions] = useState({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Categories and Amounts'
        },
        xAxis: {
            allowDecimals: false,
            accessibility: {
                rangeDescription: 'Range'
            }
        },
        yAxis: {
            title: {
                text: 'Amounts'
            }
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [] as any
    });

    useEffect(() => {
        let series = [...new Set(props.items.map(item => item.category))];
        let _series: Array<{ name: string, data: Array<any> }> = [];

        const getData = (category: string) => {
            let temp: Array<any> = [];
            props.items.forEach(item => {
                if (item.category == category) {
                    temp.push(item.amount);
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
                    Area Chart
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
    Area
};