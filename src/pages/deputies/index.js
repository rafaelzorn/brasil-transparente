import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Loading from '../../components/Loading';
import DeputyCard from './components/DeputyCard';
import { Creators as DeputiesActions } from '../../store/ducks/deputies';
import { StyledButton, ContainerButtonMore } from './styles';

class Deputies extends Component {
    componentDidMount = () => {
        this.getDeputies();
    };

    getDeputies = () => {
        const { getDeputiesRequest, deputies } = this.props;

        getDeputiesRequest(deputies.currentPage);
    };

    moreDeputies = () => {
        this.getDeputies();
    };

    render() {
        const { deputies } = this.props;

        return (
            <Grid container spacing={32}>
                {deputies.data.map(deputy => (
                    <Grid item md={4} lg={3} xs={12} key={deputy.id}>
                        <DeputyCard deputy={deputy} />
                    </Grid>
                ))}

                {deputies.loading ? (
                    <Loading />
                ) : (
                    <ContainerButtonMore>
                        <StyledButton
                            variant="fab"
                            color="primary"
                            aria-label="Add"
                            onClick={this.moreDeputies}
                        >
                            <AddIcon />
                        </StyledButton>
                    </ContainerButtonMore>
                )}
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    deputies: state.deputies,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeputiesActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Deputies);
