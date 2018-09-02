import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Creators as DrawerActions } from '../../store/ducks/drawer';

import { StyledAppBar, StyledIcon } from './styles';

const AppBar = ({ showDrawer }) => (
    <StyledAppBar>
        <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
                <StyledIcon role="presentation" onClick={() => showDrawer()}>
                    menu
                </StyledIcon>
                Brasil Transparente
            </Typography>
        </Toolbar>
    </StyledAppBar>
);

AppBar.propTypes = {
    showDrawer: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(DrawerActions, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(AppBar);
