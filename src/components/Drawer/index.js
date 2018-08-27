import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { Creators as StatesActions } from '../../store/ducks/states';
import { Creators as PartiesActions } from '../../store/ducks/parties';
import { Creators as DeputiesActions } from '../../store/ducks/deputies';

import { StyledDrawer, Form, StyledIcon } from './styles';

class Drawer extends Component {
    state = {
        filters: {
            name: '',
            state: '',
            party: '',
        },
    };

    componentDidMount = () => {
        const { getPartiesRequest, getStatesRequest } = this.props;

        getStatesRequest();
        getPartiesRequest();
    };

    handleFilterChange = (e) => {
        const { filters } = this.state;

        this.setState({ filters: { ...filters, [e.target.name]: e.target.value } });
    };

    handleFilters = (e) => {
        e.preventDefault();

        const { setFilters, deputies } = this.props;
        const { filters } = this.state;

        if (JSON.stringify(filters) !== JSON.stringify(deputies.filters)) {
            setFilters(filters);
        }
    };

    handleClearFilters = () => {
        const { clearFilters, deputies } = this.props;
        const { filters } = this.state;

        this.setState({
            filters: {
                name: '',
                state: '',
                party: '',
            },
        });

        if (filters === deputies.filters) {
            clearFilters();
        }
    };

    render() {
        const { filters } = this.state;
        const { parties, states } = this.props;

        return (
            <StyledDrawer variant="permanent">
                <div className="toolbar" />

                <Form onSubmit={this.handleFilters}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="NOME DO DEPUTADO..."
                            value={filters.name}
                            onChange={this.handleFilterChange}
                        />

                        <select
                            name="state"
                            value={filters.state}
                            onChange={this.handleFilterChange}
                        >
                            {states.loading ? (
                                <option>AGUARDE, CARREGANDO...</option>
                            ) : (
                                <option>ESTADO</option>
                            )}

                            {states.data.map(state => (
                                <option key={state.id}>{state.sigla}</option>
                            ))}
                        </select>

                        <select
                            name="party"
                            value={filters.party}
                            onChange={this.handleFilterChange}
                        >
                            {parties.loading ? (
                                <option>AGUARDE, CARREGANDO...</option>
                            ) : (
                                <option>PARTIDO</option>
                            )}

                            {parties.data.map(party => (
                                <option key={party.id}>{party.sigla}</option>
                            ))}
                        </select>
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="btn-search"
                    >
                        <StyledIcon>search</StyledIcon>
                        Buscar
                    </Button>

                    <Button variant="contained" color="secondary" onClick={this.handleClearFilters}>
                        <StyledIcon>clear</StyledIcon>
                        Limpar
                    </Button>
                </Form>
            </StyledDrawer>
        );
    }
}

Drawer.propTypes = {
    getPartiesRequest: PropTypes.func.isRequired,
    getStatesRequest: PropTypes.func.isRequired,
    setFilters: PropTypes.func.isRequired,
    clearFilters: PropTypes.func.isRequired,
    deputies: PropTypes.shape({
        filters: PropTypes.shape({}).isRequired,
    }).isRequired,
    parties: PropTypes.shape({
        loading: PropTypes.bool,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                sigla: PropTypes.string,
            }),
        ),
    }).isRequired,
    states: PropTypes.shape({
        loading: PropTypes.bool,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                sigla: PropTypes.string,
            }),
        ),
    }).isRequired,
};

const mapStateToProps = state => ({
    states: state.states,
    parties: state.parties,
    deputies: state.deputies,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...StatesActions, ...PartiesActions, ...DeputiesActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Drawer);
