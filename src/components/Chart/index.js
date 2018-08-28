import React from 'react';
import PropTypes from 'prop-types';

import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Loading from '../Loading';

import { Container } from './styles';

const Chart = ({ data, loading }) => (
    <Container>
        {loading ? (
            <Loading />
        ) : (
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Despesas" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        )}
    </Container>
);

Chart.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            despesas: PropTypes.number,
        }),
    ).isRequired,
};

export default Chart;
