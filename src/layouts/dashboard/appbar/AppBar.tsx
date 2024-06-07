'use strict';

import { useSelector } from 'react-redux';
import { Toolbar, IconButton, Typography, LinearProgress, Box } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { ILinearProgress, TMainProp } from '../../../interfaces';
import { useScrollTop } from '../../../hooks';
import { getLinearProgress } from '../../../store';
import User from './User';

/* interfaces */
interface IAppBarProps extends MuiAppBarProps {
    drawer?: boolean;
    mobile?: TMainProp
};

/* AppBar component */
const AppBar = styled(MuiAppBar, { shouldForwardProp: prop => prop != 'drawer' })<IAppBarProps>(({ theme, drawer, mobile }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(drawer && {
        marginLeft: `${240}px`,
        width: (mobile == 'true') ? `calc(100% - ${0}px)` : `calc(100% - ${240}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

/* main component */
function AppBarItem(props: { drawer: Boolean, onToggleDrawer: Function, isMobile: TMainProp }) {

    const { open }: ILinearProgress = useSelector(getLinearProgress);
    const scrollTop: TMainProp = useScrollTop();

    const onToggleDrawer = () => props.onToggleDrawer();

    return (
        <AppBar
            sx={{ bgcolor: 'white' }}
            elevation={(scrollTop == 'true') ? 0 : 2}
            drawer={Boolean(props.drawer)}
            mobile={props.isMobile}
            position='fixed'
            enableColorOnDark
        >
            <Toolbar sx={{ pr: '24px' }}>
                <IconButton
                    onClick={onToggleDrawer}
                    edge='start'
                    color='default'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    sx={{ flexGrow: 1 }}
                    variant='h6'
                    component='h1'
                    color='GrayText'
                    noWrap
                >
                    Dashboard
                </Typography>

                {/* user */}
                <User />
            </Toolbar>
            
            {/* linear progress */}
            { open && (
                <Box sx={{ width: '100%' }}>
                    <LinearProgress color='error' />
                </Box>
            ) }
        </AppBar>
    );
}

export default AppBarItem;