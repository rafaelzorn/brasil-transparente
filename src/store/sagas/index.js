import { all, takeLatest } from 'redux-saga/effects';

import { Types as DeputiesTypes } from '../ducks/deputies';

import { getDeputies } from './deputies';

export default function* rootSaga() {
    yield all([takeLatest(DeputiesTypes.GET_REQUEST, getDeputies)]);
}
