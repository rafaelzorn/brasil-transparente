import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DeputyDetailsActions } from '../ducks/deputyDetails';
import { Creators as ToastsActions, Types as ToastTypes } from '../ducks/toasts';

export function* getDeputyDetails(action) {
    try {
        const response = yield call(api.get, `/deputados/${action.payload.id}`);

        yield put(DeputyDetailsActions.getDeputyDetailsSuccess(response.data.dados));
    } catch (err) {
        yield put({
            type: ToastTypes.SHOW_TOAST,
            toast: ToastsActions.buildToast(
                'Erro ao carregar detalhes do deputado',
                ToastTypes.ERROR,
            ),
        });
    }
}
