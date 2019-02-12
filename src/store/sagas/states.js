import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as StatesActions } from '../ducks/states';
import { Creators as ToastsActions, Types as ToastTypes } from '../ducks/toasts';

export function* getStates() {
    try {
        const response = yield call(api.get, '/referencias/deputados/siglaUF');

        yield put(StatesActions.getStatesSuccess(response.data.dados));
    } catch (err) {
        yield put({
            type: ToastTypes.SHOW_TOAST,
            toast: ToastsActions.buildToast('Erro ao carregar estados', ToastTypes.ERROR),
        });
    }
}
