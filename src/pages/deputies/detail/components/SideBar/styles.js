import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

export const StyledSideBar = styled.div`
    width: 30%;
    padding: 20px;
`;

export const StyledCard = styled(Card)`
    && {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px;
        text-transform: uppercase;
    }

    .party {
        padding: 8px 0;
        margin: 15px auto;
        width: 100px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        border-radius: 30px;
        background: #394263;
        text-align: center;
    }

    .about {
        font-size: 12px;
        color: #565656;

        h5 {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 10px;
        }

        .situation {
            display: block;
            margin-bottom: 10px;
            background: #eaeaea;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 11px;
        }
    }

    .contact {
        font-size: 12px;
        color: #565656;
        width: 100%;

        h5 {
            margin-bottom: 5px;
        }

        > span {
            display: block;
            font-size: 10px;
            margin-bottom: 5px;
        }
    }
`;

export const StyledAvatar = styled(Avatar)`
    && {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }
`;
