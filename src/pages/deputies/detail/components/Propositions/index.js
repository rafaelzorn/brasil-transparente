import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Loading from '../../../../../components/Loading';
import Calendar from '../../../../../components/Calendar';
import ModalPropositionDetails from './components/ModalPropositionDetails';

import { StyledPaperContainer, StyledPaperExpense } from './styles';

import { Creators as DeputyPropositionsActions } from '../../../../../store/ducks/deputyPropositions';
import { Creators as CalendarActions } from '../../../../../store/ducks/calendar';
import { Creators as ModalActions } from '../../../../../store/ducks/modal';

class Propositions extends Component {
    componentDidMount() {
        const {
            getDeputyPropositionsRequest, deputyId, calendar, setCurrentDate,
        } = this.props;

        setCurrentDate();

        getDeputyPropositionsRequest(deputyId, calendar.year);
    }

    componentDidUpdate(prevProps) {
        const { calendar, deputyId, getDeputyPropositionsRequest } = this.props;

        if (prevProps.calendar !== calendar) {
            getDeputyPropositionsRequest(deputyId, calendar.year);
        }
    }

    render() {
        const {
            deputyPropositions, calendar, showModal, modal,
        } = this.props;

        return (
            <Fragment>
                <Calendar type="year" />

                <StyledPaperContainer>
                    <div className="total">
                        <span className="value">
                            APRESENTOU <b>{deputyPropositions.data.length}</b> PROPOSIÇÕES EM{' '}
                            <b>{calendar.year}</b>
                        </span>
                    </div>

                    {deputyPropositions.loading ? (
                        <Loading />
                    ) : (
                        deputyPropositions.data.map(deputyProposition => (
                            <StyledPaperExpense key={Math.random(10)}>
                                <div className="content-higher">
                                    <span className="name">
                                        {deputyProposition.siglaTipo} {deputyProposition.numero}/
                                        {deputyProposition.ano}
                                    </span>
                                    <p>{deputyProposition.ementa}</p>
                                </div>

                                <hr />

                                <div className="content-bottom">
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                        className="button-info"
                                        onClick={() => showModal({ propositionId: deputyProposition.id })
                                        }
                                    >
                                        <Icon>search</Icon> Acessar Informações
                                    </Button>
                                </div>
                            </StyledPaperExpense>
                        ))
                    )}
                </StyledPaperContainer>

                {modal.visible && <ModalPropositionDetails />}
            </Fragment>
        );
    }
}

Propositions.propTypes = {
    deputyId: PropTypes.number.isRequired,
    getDeputyPropositionsRequest: PropTypes.func.isRequired,
    setCurrentDate: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    calendar: PropTypes.shape({
        year: PropTypes.number,
        month: PropTypes.number,
    }).isRequired,
    modal: PropTypes.shape({
        visible: PropTypes.bool,
        params: PropTypes.object,
    }).isRequired,
    deputyPropositions: PropTypes.shape({
        loading: PropTypes.bool,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                numero: PropTypes.number,
                ano: PropTypes.number,
                siglaTipo: PropTypes.string,
                ementa: PropTypes.string,
            }),
        ),
    }).isRequired,
};

const mapStateToProps = state => ({
    deputyPropositions: state.deputyPropositions,
    calendar: state.calendar,
    modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { ...DeputyPropositionsActions, ...CalendarActions, ...ModalActions },
    dispatch,
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Propositions);
