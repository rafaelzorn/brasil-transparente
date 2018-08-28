import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { formatReal, formatDate } from '../../../../../helpers';

import Loading from '../../../../../components/Loading';
import Chart from '../../../../../components/Chart';
import Calendar from '../../../../../components/Calendar';

import { Creators as DeputyExpensesActions } from '../../../../../store/ducks/deputyExpenses';
import { Creators as DeputyExpensesByYearActions } from '../../../../../store/ducks/deputyExpensesByYear';
import { Creators as CalendarActions } from '../../../../../store/ducks/calendar';

import { StyledPaperContainer, StyledPaperExpense } from './styles';

class Expenses extends Component {
    componentDidMount = () => {
        const {
            getDeputyExpensesRequest,
            deputyId,
            calendar,
            setCurrentDate,
            getDeputyExpensesByYearRequest,
        } = this.props;

        setCurrentDate();

        getDeputyExpensesRequest(deputyId, calendar.month, calendar.year);
        getDeputyExpensesByYearRequest(deputyId, calendar.year);
    };

    componentDidUpdate = (prevProps) => {
        const {
            calendar,
            deputyId,
            getDeputyExpensesRequest,
            getDeputyExpensesByYearRequest,
        } = this.props;

        if (prevProps.calendar !== calendar) {
            getDeputyExpensesRequest(deputyId, calendar.month, calendar.year);
        }

        if (prevProps.calendar.year !== calendar.year) {
            getDeputyExpensesByYearRequest(deputyId, calendar.year);
        }
    };

    render() {
        const { deputyExpenses, total, deputyExpensesByYear } = this.props;

        let data = [];

        deputyExpensesByYear.data.forEach((deputyExpense) => {
            data = _.concat(data, { name: deputyExpense.month, Despesas: deputyExpense.expense });
        });

        return (
            <Fragment>
                <Calendar type="month" />

                <Chart data={data} loading={deputyExpensesByYear.loading} />

                <StyledPaperContainer>
                    <div className="total">
                        <span className="value">R$ {formatReal(total)}</span>
                        <span className="text">Gastos no mês</span>
                    </div>

                    {deputyExpenses.loading ? (
                        <Loading />
                    ) : (
                        deputyExpenses.data.map(deputyExpense => (
                            <StyledPaperExpense key={Math.random(10)}>
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

Expenses.propTypes = {
    deputyId: PropTypes.number.isRequired,
    getDeputyExpensesRequest: PropTypes.func.isRequired,
    setCurrentDate: PropTypes.func.isRequired,
    calendar: PropTypes.shape({
        year: PropTypes.number,
        month: PropTypes.number,
    }).isRequired,
    total: PropTypes.number.isRequired,
    deputyExpenses: PropTypes.shape({
        loading: PropTypes.bool,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                valorDocumento: PropTypes.number,
                tipoDespesa: PropTypes.string,
                dataDocumento: PropTypes.string,
                nomeFornecedor: PropTypes.string,
            }),
        ).isRequired,
    }).isRequired,
    deputyExpensesByYear: PropTypes.shape({
        loading: PropTypes.bool,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                month: PropTypes.string,
                expense: PropTypes.number,
            }),
        ),
    }).isRequired,
    getDeputyExpensesByYearRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    deputyExpenses: state.deputyExpenses,
    calendar: state.calendar,
    total: state.deputyExpenses.data.reduce((prevVal, item) => prevVal + item.valorDocumento, 0),
    deputyExpensesByYear: state.deputyExpensesByYear,
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { ...DeputyExpensesActions, ...CalendarActions, ...DeputyExpensesByYearActions },
    dispatch,
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Expenses);
