import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const StyledButton = styled(Button)`
    && {
        background: #019b39;
        opacity: 0.8;

        &:hover {
            transition: 0.5s;
            background: #019b39;
            opacity: 1;
        }
    }
`;

export const ContainerButtonMore = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;
