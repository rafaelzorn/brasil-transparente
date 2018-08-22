import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EditIcon from '@material-ui/icons/Edit';
import {
    StyledAppBar,
    StyledDialogContent,
    SideBar,
    Content,
    StyledCard,
    StyledAvatar,
} from './styles';

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
                <StyledDialogContent>
                    <SideBar>
                        <StyledCard>
                            <Badge color="primary">
                                <StyledAvatar
                                    alt="teste"
                                    src="http://www.camara.leg.br/internet/deputado/bandep/178957.jpg"
                                />
                            </Badge>

                            <span className="name">ABEL MESQUITA JR.</span>
                            <span className="party">DEM</span>
                            <span className="state">RR</span>

                            <div className="about">
                                <h5>SOBRE</h5>

                                <p>
                                    Abel Salvador Mesquita Junior é um deputado brasileiro pelo
                                    partido DEM, tem 56 anos e nasceu na cidade de Boa Vista/RR
                                </p>
                            </div>
                        </StyledCard>
                    </SideBar>
                    <Content>
                        <Paper style={{ width: '100%', marginBottom: '20px' }}>
                            <Tabs indicatorColor="secondary" textColor="secondary">
                                <Tab icon={<AttachMoneyIcon />} label="DESPESAS" />
                                <Tab icon={<EditIcon />} label="PROJETOS" />
                            </Tabs>
                        </Paper>

                        <Paper style={{ width: '100%', marginBottom: '20px' }}>OI</Paper>
                    </Content>
                </StyledDialogContent>
            </Dialog>
        );
    }
}

export default Deputy;
