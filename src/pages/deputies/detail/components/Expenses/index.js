import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatReal, formatDate } from '../../../../../helpers';

import Loading from '../../../../../components/Loading';
import Calendar from '../../../../../components/Calendar';

import { Creators as DeputyExpensesActions } from '../../../../../store/ducks/deputyExpenses';
import { Creators as CalendarActions } from '../../../../../store/ducks/calendar';

import { StyledPaperContainer, StyledPaperExpense } from './styles';

class Expenses extends Component {
    componentDidMount = () => {
        const {
            getDeputyExpensesRequest, deputyId, calendar, setCurrentDate,
        } = this.props;

        setCurrentDate();

        getDeputyExpensesRequest(deputyId, calendar.month, calendar.year);
    };

    componentDidUpdate = (prevProps) => {
        const { calendar, deputyId, getDeputyExpensesRequest } = this.props;

        if (prevProps.calendar !== calendar) {
            getDeputyExpensesRequest(deputyId, calendar.month, calendar.year);
        }
    };

    render() {
        const { deputyExpenses, total } = this.props;

        return (
            <Fragment>
                <Calendar type="month" />

                <StyledPaperContainer>
                    <div className="total">
                        <span className="value">R$ {formatReal(total)}</span>
                        <span className="text">Gastos no mês</span>
                    </div>

                    {deputyExpenses.loading ? (
                        <Loading />
                    ) : (
                        deputyExpenses.data.map(deputyExpense => (
                            <StyledPaperExpense
                                key={
                                    deputyExpense.ano
                                    + deputyExpense.month
                                    + deputyExpense.valorDocumento
                                }
                            >
                                <div className="content-higher">
                                    <div>
                                        <span className="value">
                                            R$ {formatReal(deputyExpense.valorDocumento)}
                                        </span>
                                        <span>GASTOS EM {deputyExpense.tipoDespesa}</span>
                                    </div>
                                    <div className="date">
                                        <i className="fa fa-calendar" />{' '}
                                        <span>{formatDate(deputyExpense.dataDocumento)}</span>
                                    </div>
                                </div>

                                <hr />

                                <div className="content-provider">
                                    <i className="fa fa-truck" />{' '}
                                    <span>{deputyExpense.nomeFornecedor}</span>
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
    deputyExpenses: state.deputyExpenses,
    calendar: state.calendar,
    total: state.deputyExpenses.data.reduce((prevVal, item) => prevVal + item.valorDocumento, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...DeputyExpensesActions, ...CalendarActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Expenses);
