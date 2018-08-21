import React from 'react';
import Button from '@material-ui/core/Button';
import { StyledDrawer, Form, StyledIcon } from './styles';

const Drawer = () => (
    <StyledDrawer variant="permanent">
        <div className="toolbar" />

        <Form>
            <div className="form-group">
                <input type="text" placeholder="Nome do deputado..." />

                <select autoComplete="country-name">
                    <option>Estado</option>
                    <option>RS</option>
                    <option>BH</option>
                    <option>AM</option>
                </select>

                <select autoComplete="country-name">
                    <option>Partido</option>
                    <option>PT</option>
                    <option>PSDB</option>
                </select>
            </div>

            <Button variant="contained" color="primary" className="btn-search">
                <StyledIcon>search</StyledIcon>
                Buscar
            </Button>

            <Button variant="contained" color="secondary">
                <StyledIcon>clear</StyledIcon>
                Limpar
            </Button>
        </Form>
    </StyledDrawer>
);

export default Drawer;
