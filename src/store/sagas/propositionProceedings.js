import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PropositionProceedingsActions } from '../ducks/propositionProceedings';
import { Creators as ToastsActions, Types as ToastTypes } from '../ducks/toasts';

export function* getPropositionProceedings(action) {
    try {
        const response = yield call(api.get, `proposicoes/${action.payload.id}/tramitacoes`);

        yield put(
            PropositionProceedingsActions.getPropositionProceedingsSuccess(response.data.dados),
        );
    } catch (err) {
        yield put({
            type: ToastTypes.SHOW_TOAST,
            toast: ToastsActions.buildToast(
                'Erro ao carregar tramitações da proposição',
                ToastTypes.ERROR,
            ),
        });
    }
}
