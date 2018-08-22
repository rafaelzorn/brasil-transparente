import React from 'react';
import { Container } from './styles';

const Message = ({ message }) => (
    <Container>
        <p>{message}</p>
    </Container>
);

export default Message;
