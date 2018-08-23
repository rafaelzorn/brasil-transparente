import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class Projects extends Component {
    componentDidMount = () => {
        console.log('PROJETOS');
    };

    render() {
        return <Paper style={{ width: '100%', marginBottom: '20px' }}>PROJETOS</Paper>;
    }
}

export default Projects;
