import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Loading from '../../components/Loading';
import Message from '../../components/Message';
import DeputyCard from './components/DeputyCard';

import { Creators as DeputiesActions } from '../../store/ducks/deputies';

import { StyledButton, ContainerButtonMore } from './styles';

class Deputies extends Component {
    componentDidMount() {
        const { deputies } = this.props;

        if (deputies.data.length === 0) {
            this.getDeputies();
        }
    }

    getDeputies = () => {
        const { getDeputiesRequest, deputies } = this.props;

        getDeputiesRequest(deputies.currentPage, deputies.filters);
    };

    moreDeputies = () => {
        this.getDeputies();
    };

    renderButtonMore = () => {
        const { deputies } = this.props;

        if (!deputies.hasMore) {
            return false;
        }

        return (
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
        );
    };

    render() {
        const { deputies } = this.props;

        return (
            <Grid container spacing={32}>
                {deputies.data.length === 0 && !deputies.hasMore ? (
                    <Message message="Nenhum deputado encontrado!" />
                ) : (
                    deputies.data.map(deputy => (
                        <Grid item md={4} lg={3} xs={12} key={deputy.id}>
                            <DeputyCard deputy={deputy} />
                        </Grid>
                    ))
                )}

                {deputies.loading ? <Loading /> : this.renderButtonMore()}
            </Grid>
        );
    }
}

Deputies.propTypes = {
    getDeputiesRequest: PropTypes.func.isRequired,
    deputies: PropTypes.shape({
        loading: PropTypes.bool,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                nome: PropTypes.string,
                urlFoto: PropTypes.string,
                siglaPartido: PropTypes.string,
                siglaUf: PropTypes.string,
            }),
        ),
    }).isRequired,
};

const mapStateToProps = state => ({
    deputies: state.deputies,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeputiesActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Deputies);
