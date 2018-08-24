import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto 20px auto;

    .date {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        background-color: #394263;
        padding: 12px;
        border-radius: 30px;
        text-transform: uppercase;
    }

    .arrow {
        font-size: 40px;
        cursor: pointer;
        font-weight: bold;   
        color: #394263;
    }
`;