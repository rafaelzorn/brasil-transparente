import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PartiesActions } from '../ducks/parties';

export function* getParties() {
    try {
        const response = yield call(api.get, '/partidos?itens=100&ordem=ASC&ordenarPor=sigla');

        yield put(PartiesActions.getPartiesSuccess(response.data.dados));
    } catch (err) {}
}
