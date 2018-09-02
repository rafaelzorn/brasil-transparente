import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();
const paper = 'drawerPaper';

export const StyledDrawer = styled(Drawer).attrs({ classes: { paper } })`
    .${paper} {
        padding: 20px 20px 0 20px;
        width: 300px;
        min-height: 100%;
        display: ${({ visible }) => (visible ? 'block' : 'none')};

        @media (min-width: 900px) {
            position: relative;
        }

        @media (max-width: 900px) {
            width: 100%;
        }
    },
`;

export const Form = styled.form`
    .form-group {
        margin-bottom: 15px;
    }

    input {
        padding: 0.8em 3.5em 0.8em 1em;
        margin-bottom: 10px;
        line-height: 1.5em;
        width: 100%;
        font: inherit;
        background-color: #f1f1f1;
        border: 2px solid #ddd;
        border-radius: 3px;
        outline: none;
        color: #8c8c8c;
        text-transform: uppercase;

        &::-webkit-input-placeholder {
            color: #8c8c8c;
        }
        &:-moz-placeholder {
            color: #8c8c8c;
        }
        &::-moz-placeholder {
            color: #8c8c8c;
        }
        &:-ms-input-placeholder {
            color: #8c8c8c;
        }
    }

    select {
        padding: 0.5em 3.5em 0.5em 1em;
        margin-bottom: 10px;
        font: inherit;
        line-height: 1.5em;
        width: 100%;
        background-color: #f1f1f1;
        border: 2px solid #ddd;
        border-radius: 3px;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        color: #8c8c8c;
        background-image: linear-gradient(45deg, transparent 50%, gray 50%),
            linear-gradient(135deg, gray 50%, transparent 50%),
            linear-gradient(to right, #ccc, #ccc);
        background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
            calc(100% - 2.5em) 0.5em;
        background-size: 5px 5px, 5px 5px, 2px 1.5em;
        background-repeat: no-repeat;
    }

    .btn-search {
        margin-right: 5px;
    }
`;

export const StyledIcon = styled(Icon)`
    && {
        margin-right: ${theme.spacing.unit}px;
    }
`;
