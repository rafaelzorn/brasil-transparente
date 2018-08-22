import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as StatesActions } from '../ducks/states';

export function* getStates() {
    try {
        const response = yield call(api.get, '/referencias/uf');

        yield put(StatesActions.getStatesSuccess(response.data.dados));
    } catch (err) {}
}
