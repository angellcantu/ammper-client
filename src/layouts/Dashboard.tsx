'use strict';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IMainProp, TMainProp } from '../interfaces';
import { useIsMobile } from '../hooks';
import AppBarItem from './dashboard/appbar/AppBar';
import NDrawer from './dashboard/drawer/DrawerItem';

/* custom components */
const Main = styled('main', { shouldForwardProp: prop => prop != 'open' })<IMainProp>(({ theme, open, mobile }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: (mobile == 'true') ? `-${0}px` : `-${240}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}));

/* main component */
function Dashboard() {

    const [drawer, setDrawer] = useState<Boolean>(true);
    const isMobile: TMainProp = useIsMobile();
    
    const onToggleDrawer = () => {
        setDrawer(!drawer);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarItem
                onToggleDrawer={onToggleDrawer}
                drawer={drawer}
                isMobile={isMobile}
            />

            <NDrawer
                onToggleDrawer={onToggleDrawer}
                drawer={drawer}
                isMobile={isMobile}
            />

            <Main
                open={Boolean(drawer)}
                mobile={isMobile}
            >
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
};

export {
    Dashboard
}