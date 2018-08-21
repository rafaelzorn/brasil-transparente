import React from 'react';
import { StyledLink, StyledCard, StyledAvatar } from './styles';

const DeputyCard = ({ deputy }) => (
    <StyledLink to={`/deputados/${deputy.id}`}>
        <StyledCard>
            <StyledAvatar alt={deputy.nome} src={deputy.urlFoto} />

            <span className="name">{deputy.nome}</span>
            <span className="party">{deputy.siglaPartido}</span>
            <span className="state">{deputy.siglaUf}</span>
        </StyledCard>
    </StyledLink>
);

export default DeputyCard;
