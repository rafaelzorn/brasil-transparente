import React from 'react';
import { yearsOld } from '../../../../../helpers';
import { StyledSideBar, StyledCard, StyledAvatar } from './styles';

const SideBar = ({ deputy }) => (
    <StyledSideBar>
        <StyledCard>
            <StyledAvatar alt={deputy.id} src={deputy.ultimoStatus.urlFoto} />

            <span>{deputy.ultimoStatus.nome}</span>
            <span className="party">{deputy.ultimoStatus.siglaPartido}</span>
            <span>{deputy.ultimoStatus.siglaUf}</span>

            <div className="about">
                <h5>SOBRE:</h5>

                <p>
                    <b>{deputy.nomeCivil}</b> é um
                    {deputy.sexo === 'F' && 'a'} deputad
                    {deputy.sexo === 'F' ? 'a' : 'o'} brasileir
                    {deputy.sexo === 'F' ? 'a' : 'o'} pelo partido{' '}
                    <b>{deputy.ultimoStatus.siglaPartido}</b>, tem{' '}
                    <b>{yearsOld(deputy.dataNascimento)} anos</b> e nasceu na cidade de{' '}
                    <b>
                        {deputy.municipioNascimento}/{deputy.ufNascimento}
                    </b>
                    .
                </p>

                <span className="situation">
                    <b>SITUAÇÃO:</b> {deputy.ultimoStatus.situacao}
                </span>

                <span className="situation">
                    <b>GRADUAÇÃO:</b> {deputy.escolaridade}
                </span>
            </div>

            <div className="contact">
                <h5>CONTATO:</h5>

                <span>
                    <i className="fa fa-envelope" /> <b>E-mail:</b>{' '}
                    {deputy.ultimoStatus.gabinete.email}
                </span>
                <span>
                    <i className="fa fa-phone" /> <b>Telefone:</b>{' '}
                    {deputy.ultimoStatus.gabinete.telefone}
                </span>
            </div>
        </StyledCard>
    </StyledSideBar>
);

export default SideBar;
