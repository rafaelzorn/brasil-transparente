import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import DialogContent from '@material-ui/core/DialogContent';

export const StyledAppBar = styled(AppBar)`
    && {
        position: relative;
        background: #394263;
    }
`;

export const StyledDialogContent = styled(DialogContent)`
    && {
        display: flex;
        padding: 0;
        background: #e8e9fe;
        height: 100%;

        @media (max-width: 900px) {
            flex-direction: column;
        }
    }
`;

export const Content = styled.div`
    width: 70%;
    padding: 20px 15px 0 0;

    @media (max-width: 900px) {
        width: 100%;
        padding: 20px 15px;
    }
`;
