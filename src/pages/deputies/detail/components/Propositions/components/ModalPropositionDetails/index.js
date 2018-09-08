import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { formatDateTime } from '../../../../../../../helpers';

import Loading from '../../../../../../../components/Loading';

import { Creators as ModalActions } from '../../../../../../../store/ducks/modal';
import { Creators as PropositionDetailsActions } from '../../../../../../../store/ducks/propositionDetails';
import { Creators as PropositionProceedingsActions } from '../../../../../../../store/ducks/propositionProceedings';

import { StyledReactModal, StyledPaperProceedings, StyledPaperContainer } from './styles';

class ModalPropositionDetails extends Component {
    componentDidMount() {
        const {
            modal,
            getPropositionDetailsRequest,
            getPropositionProceedingsRequest,
        } = this.props;

        getPropositionDetailsRequest(modal.params.propositionId);
        getPropositionProceedingsRequest(modal.params.propositionId);
    }

    render() {
        const {
            modal,
            hideModal,
            propositionDetails,
            propositionProceedings,
            proceedings,
        } = this.props;

        return (
            <StyledReactModal isOpen={modal.visible} ariaHideApp={false}>
                <div className="close" role="presentation" onClick={() => hideModal()}>
                    <i className="fa fa-times" />
                </div>

                {propositionDetails.loading ? (
                    <Loading />
                ) : (
                    <Fragment>
                        <h4>
                            {propositionDetails.data.siglaTipo} {propositionDetails.data.numero}/
                            {propositionDetails.data.ano}
                        </h4>
                        <p>{propositionDetails.data.ementa}</p>

                        <div className="container-pdf">
                            <a
                                href={propositionDetails.data.urlInteiroTeor}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                PDF
                            </a>
                        </div>
                    </Fragment>
                )}

                <StyledPaperContainer>
                    {propositionProceedings.loading ? (
                        <Loading />
                    ) : (
                        proceedings.map(propositionProceeding => (
                            <StyledPaperProceedings
                                key={propositionProceeding.sequencia}
                                first={(
                                    propositionProceeding.sequencia === proceedings.length
                                ).toString()}
                            >
                                <div className="header">
                                    <span>{formatDateTime(propositionProceeding.dataHora)}</span>
                                    <span className="initials">
                                        {propositionProceeding.siglaOrgao}
                                    </span>
                                </div>

                                <hr />

                                <div className="content">
                                    <h5>
                                        <b>Tramitação:</b>{' '}
                                        {propositionProceeding.descricaoTramitacao}
                                    </h5>

                                    <h5>
                                        <b>Despacho:</b>
                                    </h5>

                                    <p>{propositionProceeding.despacho}</p>
                                </div>

                                {propositionProceeding.sequencia === proceedings.length && (
                                    <div className="lastUpdate">
                                        <span>Ultima atualização</span>
                                    </div>
                                )}
                            </StyledPaperProceedings>
                        ))
                    )}
                </StyledPaperContainer>
            </StyledReactModal>
        );
    }
}

ModalPropositionDetails.propTypes = {
    getPropositionDetailsRequest: PropTypes.func.isRequired,
    getPropositionProceedingsRequest: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    modal: PropTypes.shape({
        visible: PropTypes.bool,
        params: PropTypes.object,
    }).isRequired,
    propositionDetails: PropTypes.shape({
        data: PropTypes.shape({
            siglaTipo: PropTypes.string,
            numero: PropTypes.number,
            ano: PropTypes.number,
            ementa: PropTypes.string,
            urlInteiroTeor: PropTypes.string,
        }),
    }).isRequired,
    propositionProceedings: PropTypes.shape({
        loading: PropTypes.bool,
    }).isRequired,
    proceedings: PropTypes.arrayOf(
        PropTypes.shape({
            sequencia: PropTypes.number,
            dataHora: PropTypes.string,
            siglaOrgao: PropTypes.string,
            descricaoTramitacao: PropTypes.string,
            despacho: PropTypes.string,
        }),
    ).isRequired,
};

const mapStateToProps = state => ({
    modal: state.modal,
    propositionDetails: state.propositionDetails,
    propositionProceedings: state.propositionProceedings,
    proceedings: _.orderBy(state.propositionProceedings.data, ['sequencia'], ['desc']),
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { ...ModalActions, ...PropositionDetailsActions, ...PropositionProceedingsActions },
    dispatch,
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ModalPropositionDetails);
