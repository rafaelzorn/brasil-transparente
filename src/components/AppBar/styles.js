import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

export const StyledAppBar = styled(AppBar)`
    && {
        z-index: ${theme.zIndex.drawer + 1};
        background: #394263;
    }
`;

export const StyledIcon = styled(Icon)`
    && {
        position: relative;
        top: 5px;
        margin-right: 20px;
        cursor: pointer;
        opacity: 0.8;

        &:hover {
            transition: 0.5s;
            opacity: 1;
        }
    }
`;
