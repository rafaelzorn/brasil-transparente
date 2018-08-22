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
        padding: 25px;
        text-align: center;
        height: 250px;
    }

    .name {
        margin-bottom: 5px;
        color: #3d3d3d;
        font-weight: 700;
        font-size: 12px;
    }

    .party {
        padding: 8px 0;
        margin: 15px auto;
        width: 100px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        border-radius: 30px;
        background: linear-gradient(to right, #009b3a, #fedf00);
        text-align: center;
    }

    .state {
        font-size: 12px;
        font-weight: 700;
        color: #c0c6d1;
    }
`;

export const StyledAvatar = styled(Avatar)`
    && {
        width: 70px;
        height: 70px;
        margin-bottom: 20px;
    }
`;
