import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { StyledAppBar } from './styles';

class Deputy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
    }

    onExited = () => {
        const { history } = this.props;
        history.push('/');
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    transition = props => <Slide direction="up" {...props} />;

    render() {
        const { open } = this.state;

        return (
            <Dialog
                fullScreen
                open={open}
                onClose={this.handleClose}
                TransitionComponent={this.transition}
                transitionDuration={500}
                onExited={this.onExited}
            >
                <StyledAppBar>
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </StyledAppBar>
                OI
            </Dialog>
        );
    }
}

export default Deputy;
