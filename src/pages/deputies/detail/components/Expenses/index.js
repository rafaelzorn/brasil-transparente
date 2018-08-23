import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class Expenses extends Component {
    componentDidMount = () => {
        console.log('DESPESAS');
    };

    render() {
        return <Paper style={{ width: '100%', marginBottom: '20px' }}>DESPESAS</Paper>;
    }
}

export default Expenses;
