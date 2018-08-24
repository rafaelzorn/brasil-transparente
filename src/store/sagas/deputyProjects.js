import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DeputyProjectsActions } from '../ducks/deputyProjects';
import { Creators as ToastsActions, Types as ToastTypes } from '../ducks/toasts';

export function* getDeputyProjects(action) {
    try {
        const { deputyId, year } = action.payload;

        const response = yield call(
            api.get,
            `proposicoes?ano=${year}&idAutor=${deputyId}&ordem=DESC&ordenarPor=ano`,
        );

        yield put(DeputyProjectsActions.getDeputyProjectsSuccess(response.data.dados));
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
