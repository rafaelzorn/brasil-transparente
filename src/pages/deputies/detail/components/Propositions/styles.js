import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const StyledPaperContainer = styled(Paper)`
    height: 430px;
    margin-bottom: 20px;
    padding: 10px;
    overflow-y: scroll;
    overflow-x: hidden;

    .total {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 20px 0 20px 0;
        color: #565656;

        .value {
            font-size: 28px;

            @media (max-width: 900px) {
                font-size: 15px;
            }
        }
    }

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

export const StyledPaperExpense = styled(Paper)`
    && {
        margin-bottom: 10px;
        border-radius: 0;
        border-left: 3px solid #394263;
        padding: 10px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    color: #565656;

    hr {
        border: 0.5px solid #dcdcdc;
        margin-bottom: 5px;
    }

    .content-higher {
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        font-size: 12px;

        .name {
            display: block;
            font-size: 18px;
            margin-bottom: 8px;
            font-weight: bold;
        }

        p {
            font-size: 14px;
        }
    }

    .content-bottom {
        display: flex;
        font-size: 18px;
        padding: 10px 0;

        .button-info {
            margin: 0 auto;
            color: #fff;
            background: #394263;
        }
    }
`;
