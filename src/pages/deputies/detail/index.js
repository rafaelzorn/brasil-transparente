import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ToastContainer } from 'react-toastify';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SideBar from './components/SideBar';
import TabsInfo from './components/TabsInfo';
import Projects from './components/Projects';
import Expenses from './components/Expenses';
import Loading from '../../../components/Loading';

import { Creators as DeputyDetailsActions } from '../../../store/ducks/deputyDetails';

import { StyledAppBar, StyledDialogContent, Content } from './styles';

class Deputy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            currentTab: 'expenses',
        };
    }

    componentDidMount = () => {
        const { getDeputyDetailsRequest, match } = this.props;

        getDeputyDetailsRequest(match.params.id);
    };

    onExited = () => {
        const { history } = this.props;
        history.push('/');
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    transition = props => <Slide direction="up" {...props} />;

    handleChange = (event, currentTab) => {
        this.setState({ currentTab });
    };

    render() {
        const { open, currentTab } = this.state;
        const { deputyDetails } = this.props;

        return (
            <Dialog
                fullScreen
                open={open}
                onClose={this.handleClose}
                TransitionComponent={this.transition}
                transitionDuration={500}
                onExited={this.onExited}
            >
                <ToastContainer />
                <StyledAppBar>
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </StyledAppBar>

                <StyledDialogContent>
                    {deputyDetails.loading ? (
                        <Loading />
                    ) : (
                        <Fragment>
                            <SideBar />

                            <Content>
                                <TabsInfo
                                    handleChange={this.handleChange}
                                    currentTab={currentTab}
                                />

                                {currentTab === 'expenses' && <Expenses />}
                                {currentTab === 'projects' && <Projects />}
                            </Content>
                        </Fragment>
                    )}
                </StyledDialogContent>
            </Dialog>
        );
    }
}

const mapStateToProps = state => ({
    deputyDetails: state.deputyDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeputyDetailsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Deputy);
