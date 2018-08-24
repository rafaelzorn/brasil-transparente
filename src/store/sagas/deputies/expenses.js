import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { Creators as ExpensesActions } from '../../ducks/deputies/expenses';
import { Creators as ToastsActions, Types as ToastTypes } from '../../ducks/toasts';

export function* getExpenses(action) {
    try {
        const { deputyId, month, year } = action.payload;

        const response = yield call(
            api.get,
            `deputados/${deputyId}/despesas?itens=100&ano=${year}&mes=${month}&ordem=DESC&ordenarPor=dataDocumento`,
        );

        yield put(ExpensesActions.getExpensesSuccess(response.data.dados));
    } catch (err) {
        yield put({
            type: ToastTypes.SHOW_TOAST,
            toast: ToastsActions.buildToast(
                'Erro ao carregar despesas do deputado',
                ToastTypes.ERROR,
            ),
        });
    }
}
