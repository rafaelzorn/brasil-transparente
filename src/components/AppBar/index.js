import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StyledAppBar } from './styles';

const AppBar = () => (
    <StyledAppBar>
        <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
                Brasil Transparente
            </Typography>
        </Toolbar>
    </StyledAppBar>
);

export default AppBar;
