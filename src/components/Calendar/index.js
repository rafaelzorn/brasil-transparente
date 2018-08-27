import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Creators as CalendarActions } from '../../store/ducks/calendar';

import { Container } from './styles';

class Calendar extends Component {
    state = {
        currentDate: moment().month(moment().month()),
        currentTimestamp: moment([moment().year(), moment(moment(), 'M').month() + 1]).unix(),
    };

    decrement = () => {
        const { setDate, type } = this.props;
        const { currentDate } = this.state;

        this.setState({ currentDate: currentDate.subtract(1, type) });

        setDate(moment(currentDate, 'YYYY').year(), moment(currentDate, 'M').month() + 1);
    };

    increment = () => {
        const { setDate, type } = this.props;
        const { currentDate } = this.state;

        this.setState({ currentDate: currentDate.add(1, type) });

        setDate(moment(currentDate, 'YYYY').year(), moment(currentDate, 'M').month() + 1);
    };

    render() {
        const { currentDate, currentTimestamp } = this.state;
        const { calendar, type } = this.props;

        return (
            <Container>
                <div className="box-arrow" role="presentation" onClick={this.decrement}>
                    <span className="arrow">
                        <i className="fa fa-angle-left" />
                    </span>
                </div>

                <div className="date">
                    {type === 'month' ? currentDate.format('MMMM  Y') : currentDate.format('Y')}
                </div>

                <div className="box-arrow" role="presentation" onClick={this.increment}>
                    {moment([calendar.year, calendar.month]).unix() !== currentTimestamp && (
                        <span className="arrow">
                            <i className="fa fa-angle-right" />
                        </span>
                    )}
                </div>
            </Container>
        );
    }
}

Calendar.propTypes = {
    setDate: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    calendar: PropTypes.shape({
        year: PropTypes.number,
        month: PropTypes.number,
    }).isRequired,
};

const mapStateToProps = state => ({
    calendar: state.calendar,
});

const mapDispatchToProps = dispatch => bindActionCreators(CalendarActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Calendar);
