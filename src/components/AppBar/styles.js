import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

export const StyledAppBar = styled(AppBar)`
    && {
        z-index: ${theme.zIndex.drawer + 1};
        background: #394263;
    }
`;
