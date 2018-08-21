import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DeputiesActions } from '../ducks/deputies';

export function* getDeputies(action) {
    try {
        const response = yield call(
            api.get,
            `/deputados?pagina=${action.payload.currentPage}&itens=20&ordem=ASC&ordenarPor=nome`,
        );

        yield put(DeputiesActions.getDeputiesSuccess(response.data.dados));
    } catch (err) {}
}
