import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { StyledDrawer, Form, StyledIcon } from './styles';
import { Creators as StatesActions } from '../../store/ducks/states';
import { Creators as PartiesActions } from '../../store/ducks/parties';
import { Creators as DeputiesActions } from '../../store/ducks/deputies';

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

        if (filters !== deputies.filters) {
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

        if (filters !== deputies.filters) {
            return false;
        }

        clearFilters();
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
                            {parties.loading ? (
                                <option>AGUARDE, CARREGANDO...</option>
                            ) : (
                                <option>ESTADO</option>
                            )}

                            {states.data.map(state => (
                                <option>{state.sigla}</option>
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
                                <option>{party.sigla}</option>
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
