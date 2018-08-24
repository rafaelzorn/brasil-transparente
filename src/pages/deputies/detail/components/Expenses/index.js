import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatReal, formatDate } from '../../../../../helpers';

import Loading from '../../../../../components/Loading';
import Calendar from '../../../../../components/Calendar';

import { Creators as ExpensesActions } from '../../../../../store/ducks/deputies/expenses';
import { Creators as CalendarActions } from '../../../../../store/ducks/calendar';

import { StyledPaperContainer, StyledPaperExpense } from './styles';

class Expenses extends Component {
    componentDidMount = () => {
        const {
            getExpensesRequest, deputyId, calendar, setCurrentDate,
        } = this.props;

        setCurrentDate();

        getExpensesRequest(deputyId, calendar.month, calendar.year);
    };

    componentDidUpdate = (prevProps) => {
        const { calendar, deputyId, getExpensesRequest } = this.props;

        if (prevProps.calendar !== calendar) {
            getExpensesRequest(deputyId, calendar.month, calendar.year);
        }
    };

    render() {
        const { expenses, total } = this.props;

        return (
            <Fragment>
                <Calendar type="month" />

                <StyledPaperContainer>
                    <div className="total">
                        <span className="value">R$ {formatReal(total)}</span>
                        <span className="text">Gastos no mês</span>
                    </div>

                    {expenses.loading ? (
                        <Loading />
                    ) : (
                        expenses.data.map(expense => (
                            <StyledPaperExpense
                                key={Math.random(10)}
                            >
                                <div className="content-higher">
                                    <div>
                                        <span className="value">
                                            R$ {formatReal(expense.valorDocumento)}
                                        </span>
                                        <span>GASTOS EM {expense.tipoDespesa}</span>
                                    </div>
                                    <div className="date">
                                        <i className="fa fa-calendar" />{' '}
                                        <span>{formatDate(expense.dataDocumento)}</span>
                                    </div>
                                </div>

                                <hr />

                                <div className="content-provider">
                                    <i className="fa fa-truck" />{' '}
                                    <span>{expense.nomeFornecedor}</span>
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
    expenses: state.expenses,
    calendar: state.calendar,
    total: state.expenses.data.reduce((prevVal, item) => prevVal + item.valorDocumento, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ExpensesActions, ...CalendarActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Expenses);
