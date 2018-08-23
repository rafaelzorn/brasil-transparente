import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    && {
        text-decoration: none;
        outline: none;
        display: block;
        opacity: 0.8;

        &:hover {
            transition: 0.5s;
            opacity: 1;
        }
    }
`;

export const StyledCard = styled(Card)`
    && {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        height: 210px;
        text-align: center;
    }

    > span {
        margin-bottom: 10px;
        color: #3d3d3d;
        font-size: 12px;
        font-weight: 700;
    }

    .party {
        padding: 8px 0;
        width: 100px;
        color: #fff;
        border-radius: 30px;
        background: #394263;
        text-align: center;
    }
`;

export const StyledAvatar = styled(Avatar)`
    && {
        width: 70px;
        height: 70px;
        margin-bottom: 20px;
    }
`;
