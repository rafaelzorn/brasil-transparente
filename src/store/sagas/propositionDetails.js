import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PropositionDetailsActions } from '../ducks/propositionDetails';
import { Creators as ToastsActions, Types as ToastTypes } from '../ducks/toasts';

export function* getPropositionDetails(action) {
    try {
        const response = yield call(api.get, `proposicoes/${action.payload.id}`);

        yield put(PropositionDetailsActions.getPropositionDetailsSuccess(response.data.dados));
    } catch (err) {
        yield put({
            type: ToastTypes.SHOW_TOAST,
            toast: ToastsActions.buildToast(
                'Erro ao carregar detalhes da proposição',
                ToastTypes.ERROR,
            ),
        });
    }
}
