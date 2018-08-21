import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

export const Root = styled.div`
    flex-grow: 1;
    z-index: 1;
    overflow: hidden;
    position: relative;
    display: flex;
`;

export const Main = styled.main`
    flex-grow: 1;
    padding: ${theme.spacing.unit * 3}px;
    min-width: 0;
`;
