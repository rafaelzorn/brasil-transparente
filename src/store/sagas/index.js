import { all, takeLatest } from 'redux-saga/effects';

import { Types as StatesTypes } from '../ducks/states';
import { Types as PartiesTypes } from '../ducks/parties';
import { Types as DeputiesTypes } from '../ducks/deputies';

import { getStates } from './states';
import { getParties } from './parties';
import { getDeputies } from './deputies';

export default function* rootSaga() {
    yield all([
        takeLatest(StatesTypes.GET_REQUEST, getStates),
        takeLatest(PartiesTypes.GET_REQUEST, getParties),
        takeLatest(DeputiesTypes.GET_REQUEST, getDeputies),
        takeLatest(DeputiesTypes.SET_FILTERS, getDeputies),
        takeLatest(DeputiesTypes.CLEAR_FILTERS, getDeputies),
    ]);
}
