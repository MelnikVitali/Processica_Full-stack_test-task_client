import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} >
            <Toolbar className={classes.toolBar} >
                <Typography
                    component="h1"
                    variant="h5"
                    className={classes.title}
                >
                    React App
                </Typography >
            </Toolbar >
        </AppBar >
    );
};

export default Header;
