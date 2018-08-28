import styled from 'styled-components';
import ReactModal from 'react-modal';
import Paper from '@material-ui/core/Paper';

export const StyledReactModal = styled(ReactModal)`
    width: 800px;
    background: #fff;
    padding: 20px;
    text-align: center;
    color: #565656;
    border-radius: 5px;

    .close {
        display: flex;
        justify-content: flex-end;
        font-size: 18px;
        cursor: pointer;
    }

    h4 {
        font-size: 22px;
        margin-bottom: 10px;
    }

    p {
        font-size: 14px;
        margin-bottom: 30px;
    }

    .container-pdf {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        a {
            background: #394263;
            display: block;
            padding: 15px 70px;
            border-radius: 10px;
            text-decoration: none;
            color: #fff;
            font-weight: 700;
            opacity: 0.8;

            &:hover {
                transition: 0.5s;
                opacity: 1;
            }
        }
    }
`;

export const StyledPaperContainer = styled(Paper)`
    height: 390px;
    margin-bottom: 20px;
    padding: 10px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background: #394263;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #556290;
    }
`;

export const StyledPaperProceedings = styled(Paper)`
    && {
        margin-bottom: 10px;
        border-radius: 0;
        border-left: 3px solid ${({ first }) => (first === 'true' ? '#137900' : '#394263')};
        padding: 10px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .lastUpdate {
        color: #137900;
        font-weight: 700;
        font-size: 12px;
        text-align: left;
    }

    color: #565656;

    hr {
        border: 0.5px solid #dcdcdc;
        margin-bottom: 10px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        margin-bottom: 5px;

        .initials {
            font-weight: bold;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        text-align: left;

        h5 {
            font-weight: normal;
            margin-bottom: 5px;
        }
    }
`;
