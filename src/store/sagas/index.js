import { all, takeLatest } from 'redux-saga/effects';

import { Types as StatesTypes } from '../ducks/states';
import { Types as PartiesTypes } from '../ducks/parties';
import { Types as DeputiesTypes } from '../ducks/deputies';
import { Types as DeputyDetailsTypes } from '../ducks/deputyDetails';

import { getStates } from './states';
import { getParties } from './parties';
import { getDeputies } from './deputies';
import { getDeputyDetails } from './deputyDetails';

export default function* rootSaga() {
    yield all([
        takeLatest(StatesTypes.GET_REQUEST, getStates),
        takeLatest(PartiesTypes.GET_REQUEST, getParties),
        takeLatest(DeputiesTypes.GET_REQUEST, getDeputies),
        takeLatest(DeputiesTypes.SET_FILTERS, getDeputies),
        takeLatest(DeputiesTypes.CLEAR_FILTERS, getDeputies),
        takeLatest(DeputyDetailsTypes.GET_REQUEST, getDeputyDetails),
    ]);
}
