import { call, put } from 'redux-saga/effects';
import _ from 'lodash';
import moment from 'moment';
import api from '../../services/api';

import { Creators as DeputyExpensesByYearActions } from '../ducks/deputyExpensesByYear';
import { Creators as ToastsActions, Types as ToastTypes } from '../ducks/toasts';

export function* getDeputyExpensesByYear(action) {
    try {
        const { deputyId, year } = action.payload;

        let data = [];
        let next = true;
        let page = 1;
        while (next) {
            const response = yield call(
                api.get,
                `deputados/${deputyId}/despesas?itens=100&pagina=${page}&ano=${year}&ordem=DESC&ordenarPor=dataDocumento`,
            );
            data = _.concat(data, response.data.dados);

            if (response.data.links.find(item => item.rel === 'next') === undefined) {
                next = false;
            }

            page += 1;
        }

        data = _.groupBy(_.orderBy(data, ['mes'], ['asc']), 'mes');

        let i = 1;
        const months = [];
        while (i <= Object.keys(data).length) {
            const expense = data[i] !== undefined
                ? data[i].reduce((prevVal, item) => prevVal + item.valorDocumento, 0)
                : 0;

            months[i] = {
                expense,
                month: moment()
                    .month(i - 1)
                    .format('MMMM'),
            };

            i += 1;
        }

        yield put(DeputyExpensesByYearActions.getDeputyExpensesByYearSuccess(months));
    } catch (err) {
        yield put({
            type: ToastTypes.SHOW_TOAST,
            toast: ToastsActions.buildToast('Erro ao carregar despesas do ano', ToastTypes.ERROR),
        });
    }
}
