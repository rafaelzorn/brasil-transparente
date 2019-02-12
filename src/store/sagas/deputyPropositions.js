import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DeputyPropositionsActions } from '../ducks/deputyPropositions';
import { Creators as ToastsActions, Types as ToastTypes } from '../ducks/toasts';

export function* getDeputyPropositions(action) {
    try {
        const { deputyId, year } = action.payload;

        const response = yield call(
            api.get,
            `proposicoes?itens=100&ano=${year}&idDeputadoAutor=${deputyId}&ordem=DESC&ordenarPor=ano`,
        );

        yield put(DeputyPropositionsActions.getDeputyPropositionsSuccess(response.data.dados));
    } catch (err) {
        yield put({
            type: ToastTypes.SHOW_TOAST,
            toast: ToastsActions.buildToast(
                'Erro ao carregar projetos do deputado',
                ToastTypes.ERROR,
            ),
        });
    }
}
