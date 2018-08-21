import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const StyledCircularProgress = styled(CircularProgress)`
    && {
        color: #029b39;
    }
`;
