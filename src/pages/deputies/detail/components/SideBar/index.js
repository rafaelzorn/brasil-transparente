import React from 'react';
import { connect } from 'react-redux';

import { yearsOld } from '../../../../../helpers';

import { StyledSideBar, StyledCard, StyledAvatar } from './styles';

const SideBar = ({ deputyDetails }) => (
    <StyledSideBar>
        <StyledCard>
            <StyledAvatar alt={deputyDetails.id} src={deputyDetails.ultimoStatus.urlFoto} />

            <span>{deputyDetails.ultimoStatus.nome}</span>
            <span className="party">{deputyDetails.ultimoStatus.siglaPartido}</span>
            <span>{deputyDetails.ultimoStatus.siglaUf}</span>

            <div className="about">
                <h5>SOBRE:</h5>

                <p>
                    <b>{deputyDetails.nomeCivil}</b> é um
                    {deputyDetails.sexo === 'F' && 'a'} deputad
                    {deputyDetails.sexo === 'F' ? 'a' : 'o'} brasileir
                    {deputyDetails.sexo === 'F' ? 'a' : 'o'} pelo partido{' '}
                    <b>{deputyDetails.ultimoStatus.siglaPartido}</b>, tem{' '}
                    <b>{yearsOld(deputyDetails.dataNascimento)} anos</b> e nasceu na cidade de{' '}
                    <b>
                        {deputyDetails.municipioNascimento}/{deputyDetails.ufNascimento}
                    </b>
                    .
                </p>

                <span className="situation">
                    <b>SITUAÇÃO:</b> {deputyDetails.ultimoStatus.situacao}
                </span>

                <span className="situation">
                    <b>GRADUAÇÃO:</b> {deputyDetails.escolaridade}
                </span>
            </div>

            <div className="contact">
                <h5>CONTATO:</h5>

                <span>
                    <i className="fa fa-envelope" /> <b>E-mail:</b>{' '}
                    {deputyDetails.ultimoStatus.gabinete.email}
                </span>
                <span>
                    <i className="fa fa-phone" /> <b>Telefone:</b>{' '}
                    {deputyDetails.ultimoStatus.gabinete.telefone}
                </span>
            </div>
        </StyledCard>
    </StyledSideBar>
);

const mapStateToProps = state => ({
    deputyDetails: state.deputyDetails.data,
});

export default connect(
    mapStateToProps,
    {},
)(SideBar);
