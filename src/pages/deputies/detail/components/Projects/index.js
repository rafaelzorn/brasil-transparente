import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../../../../../components/Loading';
import Calendar from '../../../../../components/Calendar';

import { StyledPaperContainer, StyledPaperExpense } from './styles';

import { Creators as DeputyProjectsActions } from '../../../../../store/ducks/deputyProjects';
import { Creators as CalendarActions } from '../../../../../store/ducks/calendar';

class Projects extends Component {
    componentDidMount = () => {
        const {
            getDeputyProjectsRequest, deputyId, calendar, setCurrentDate,
        } = this.props;

        setCurrentDate();

        getDeputyProjectsRequest(deputyId, calendar.year);
    };

    componentDidUpdate = (prevProps) => {
        const { calendar, deputyId, getDeputyProjectsRequest } = this.props;

        if (prevProps.calendar !== calendar) {
            getDeputyProjectsRequest(deputyId, calendar.year);
        }
    };

    render() {
        const { deputyProjects, calendar } = this.props;

        return (
            <Fragment>
                <Calendar type="year" />

                <StyledPaperContainer>
                    <div className="total">
                        <span className="value">
                            MOVIMENTOU <b>{deputyProjects.data.length}</b> PROJETOS EM{' '}
                            <b>{calendar.year}</b>
                        </span>
                    </div>

                    {deputyProjects.loading ? (
                        <Loading />
                    ) : (
                        deputyProjects.data.map(deputyProject => (
                            <StyledPaperExpense key={deputyProject.numero + deputyProject.ano}>
                                <div className="content-higher">
                                    <span className="name">
                                        {deputyProject.siglaTipo} {deputyProject.numero}/
                                        {deputyProject.ano}
                                    </span>
                                    <p>{deputyProject.ementa}</p>
                                </div>

                                <hr />

                                <div className="content-bottom">
                                    <span>
                                        <i className="fa fa-file" /> Pdf
                                    </span>
                                    <span>
                                        <i className="fa fa-history" /> Histórico
                                    </span>
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
    deputyProjects: state.deputyProjects,
    calendar: state.calendar,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...DeputyProjectsActions, ...CalendarActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Projects);
