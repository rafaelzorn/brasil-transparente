import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Message = ({ message }) => (
    <Container>
        <p>{message}</p>
    </Container>
);

Message.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Message;
