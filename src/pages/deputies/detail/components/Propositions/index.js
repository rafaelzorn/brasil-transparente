import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Loading from '../../../../../components/Loading';
import Calendar from '../../../../../components/Calendar';

import { StyledPaperContainer, StyledPaperExpense } from './styles';

import { Creators as PropositionsActions } from '../../../../../store/ducks/deputies/propositions';
import { Creators as CalendarActions } from '../../../../../store/ducks/calendar';

class Projects extends Component {
    componentDidMount = () => {
        const {
            getPropositionsRequest, deputyId, calendar, setCurrentDate,
        } = this.props;

        setCurrentDate();

        getPropositionsRequest(deputyId, calendar.year);
    };

    componentDidUpdate = (prevProps) => {
        const { calendar, deputyId, getPropositionsRequest } = this.props;

        if (prevProps.calendar !== calendar) {
            getPropositionsRequest(deputyId, calendar.year);
        }
    };

    render() {
        const { propositions, calendar } = this.props;

        return (
            <Fragment>
                <Calendar type="year" />

                <StyledPaperContainer>
                    <div className="total">
                        <span className="value">
                            MOVIMENTOU <b>{propositions.data.length}</b> PROJETOS EM{' '}
                            <b>{calendar.year}</b>
                        </span>
                    </div>

                    {propositions.loading ? (
                        <Loading />
                    ) : (
                        propositions.data.map(proposition => (
                            <StyledPaperExpense key={proposition.numero + proposition.ano}>
                                <div className="content-higher">
                                    <span className="name">
                                        {proposition.siglaTipo} {proposition.numero}/
                                        {proposition.ano}
                                    </span>
                                    <p>{proposition.ementa}</p>
                                </div>

                                <hr />

                                <div className="content-bottom">
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                        className="button-info"
                                    >
                                        <Icon>search</Icon> Acessar Informações
                                    </Button>
                                </div>
                            </StyledPaperExpense>
                        ))
                    )}
                </StyledPaperContainer>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    propositions: state.propositions,
    calendar: state.calendar,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...PropositionsActions, ...CalendarActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Projects);
