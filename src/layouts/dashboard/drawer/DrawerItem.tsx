'use strict';

import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItemAvatar, ListItemButton, ListItemText, Divider, Avatar, Collapse, ListItemIcon } from '@mui/material';
import { Home, CompareArrows, ExpandLess, ExpandMore, FormatListBulleted, Assessment } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { TMainProp } from '../../../interfaces';

/* custom components */
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'center'
}));

function DrawerItem() {

    const [transactions, setTransactions] = useState<boolean>();
    const navigate = useNavigate();

    const onHandleTransactions = () => setTransactions(!transactions);
    const onHandleRedirect = (url: string) => navigate(url);

    return (
        <Fragment>
            <DrawerHeader>
                <img alt='Ammper Technical Assessment' width='90%' height='24px' src='https://ammper.com/assets/images/demo/modern-agency/logo/ammper-logo.png' />
            </DrawerHeader>

            <Divider />

            <List component='nav'>
                {/* home */}
                <ListItemButton onClick={() => onHandleRedirect('/dashboard')}>
                    <ListItemAvatar>
                        <Avatar>
                            <Home />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>

                <Divider variant='inset' component='li' />

                {/* transactions */}
                <ListItemButton onClick={onHandleTransactions}>
                    <ListItemAvatar>
                        <Avatar>
                            <CompareArrows />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>Transactions</ListItemText>
                    { transactions ? <ExpandLess /> : <ExpandMore /> }
                </ListItemButton>

                <Collapse in={transactions} timeout='auto' unmountOnExit>
                    <List onClick={() => onHandleRedirect('/dashboard/transactions')} component='div' disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FormatListBulleted />
                            </ListItemIcon>
                            <ListItemText>List</ListItemText>
                        </ListItemButton>
                    </List>

                    <List onClick={() => onHandleRedirect('/dashboard/charts')} component='div' disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Assessment />
                            </ListItemIcon>
                            <ListItemText>Reports</ListItemText>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Fragment>
    );
}

/* main component */
function NDrawer(props: { drawer: Boolean, onToggleDrawer: Function, isMobile: TMainProp }) {

    const onToggleDrawer = () => props.onToggleDrawer();

    return (
        <Drawer
            onClose={onToggleDrawer}
            open={Boolean(props.drawer)}
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box'
                }
            }}
            ModalProps={{
                keepMounted: true
            }}
            variant={(props.isMobile == 'true') ? 'temporary' : 'persistent'}
            anchor='left'
        >
            {<DrawerItem />}
        </Drawer>
    );
}

export default NDrawer;