import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

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
    }
`;

export const SideBar = styled.div`
    width: 25%;
    padding: 20px;
`;

export const StyledCard = styled(Card)`
    && {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px;
        text-align: center;
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
        margin-bottom: 20px;
    }

    .about {
        display: flex;
        flex-direction: column;
        text-align: left;
        font-size: 14px;
        color: #565656;

        h5 {
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

export const Content = styled.div`
    width: 75%;
    padding: 20px;
`;
