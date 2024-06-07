'use strict';

import { Card, CardHeader, CardMedia, CardActionArea, Grid, Typography, Avatar, Divider } from '@mui/material';

function Main() {
    return (
        <Grid spacing={2} container>
            <Grid xs={12} md={4} item>
                <Card>
                    <CardActionArea>
                        <CardHeader
                            avatar={
                                <Avatar
                                    sx={{ bgcolor: 'green' }}
                                    aria-label='receipt'
                                >
                                    T
                                </Avatar>
                            }
                            title='Transactions'
                            subheader={
                                <Typography variant='subtitle2'>
                                    All account transactions
                                </Typography>
                            }
                        />

                        <Divider />

                        <CardMedia
                            component='img'
                            height='140'
                            image='https://mui.com/static/images/cards/paella.jpg'
                        />
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid xs={12} md={4} item>
                <Card>
                    <CardActionArea>
                        <CardHeader
                            avatar={
                                <Avatar
                                    sx={{ bgcolor: 'red' }}
                                    aria-label='receipt'
                                >
                                    R
                                </Avatar>
                            }
                            title='Reports'
                            subheader={
                                <Typography variant='subtitle2'>
                                    All reports by charts
                                </Typography>
                            }
                        />

                        <Divider />

                        <CardMedia
                            component='img'
                            height='140'
                            image='https://mui.com/static/images/cards/paella.jpg'
                        />
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
}

export {
    Main
};