import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink, StyledCard, StyledAvatar } from './styles';

const DeputyCard = ({ deputy }) => (
    <StyledLink to={`/deputados/${deputy.id}`}>
        <StyledCard>
            <StyledAvatar alt={deputy.nome} src={deputy.urlFoto} />

            <span>{deputy.nome}</span>
            <span className="party">{deputy.siglaPartido}</span>
            <span>{deputy.siglaUf}</span>
        </StyledCard>
    </StyledLink>
);

DeputyCard.propTypes = {
    deputy: PropTypes.shape({
        id: PropTypes.number,
        nome: PropTypes.string,
        urlFoto: PropTypes.string,
        siglaPartido: PropTypes.string,
        siglaUf: PropTypes.string,
    }).isRequired,
};

export default DeputyCard;
