'use strict';

import { useNavigate } from 'react-router-dom';
import { Grid, CssBaseline, Paper, Box, Avatar, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LockOutlined } from '@mui/icons-material';
import { GoogleLogin } from '@react-oauth/google';

function SignIn() {
    
    const defaultTheme = createTheme();
    const navigate = useNavigate();

    const onGoogleSuccess = () => {
        navigate('/dashboard');
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid
                sx={{ height: '100vh' }}
                component='main'
                container
            >
                <CssBaseline />

                {/* image */}
                <Grid
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: t => t.palette.mode == 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    item
                />

                {/* form */}
                <Grid
                    xs={12}
                    sm={8}
                    md={5}
                    elevation={6}
                    component={Paper}
                    item
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlined />
                        </Avatar>
                        
                        <Typography component='h1' variant='h5'>
                            Sign In
                        </Typography>

                        <Box sx={{ mt: 1 }} component='form' noValidate>
                            <GoogleLogin
                                onSuccess={_response => onGoogleSuccess()}
                                size='large'
                                width='100px'
                                theme='outline'
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export {
    SignIn
};