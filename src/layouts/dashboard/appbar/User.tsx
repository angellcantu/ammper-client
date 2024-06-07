'use strict';

import { useState, MouseEvent, Fragment } from 'react';
import { IconButton, Avatar, Menu, MenuItem, ListItemAvatar, ListItemText, ListItemIcon, Typography, Divider, Tooltip } from '@mui/material';
import { Logout } from '@mui/icons-material';

function User() {

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const onHandleMenu = (event: MouseEvent<HTMLElement>) => setAnchor(event.currentTarget);
    
    const onHandleCloseMenu = () => {
        setAnchor(null);
        window.location.href = '/signin';
    };

    return (
        <Fragment>
            <Tooltip title='Account'>
                <IconButton
                    onClick={onHandleMenu}
                    aria-label='account of current user'
                    aria-controls='menu-appbar-user'
                    aria-haspopup='true'
                >
                    <Avatar>A</Avatar>
                </IconButton>
            </Tooltip>

            <Menu
                onClose={() => setAnchor(null)}
                anchorEl={anchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchor)}
                id='menu-appbar-user'
                keepMounted
            >
                <MenuItem disableTouchRipple>
                    <ListItemAvatar>
                        <Avatar>A</Avatar>
                    </ListItemAvatar>

                    <ListItemText
                        primary='Jose'
                        secondary={
                            <Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component='span'
                                    variant='body2'
                                    color='text.primary'
                                >
                                    {'jose.cantu@domain.com'}
                                </Typography>
                                {` - Managed by Google`}
                            </Fragment>
                        }
                    />
                </MenuItem>

                <Divider />

                <MenuItem onClick={onHandleCloseMenu}>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText>Sign Out</ListItemText>
                </MenuItem>
            </Menu>
        </Fragment>
    );
}

export default User;