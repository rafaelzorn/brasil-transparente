import { all, takeLatest } from 'redux-saga/effects';

import { Types as StatesTypes } from '../ducks/states';
import { Types as PartiesTypes } from '../ducks/parties';
import { Types as DeputiesTypes } from '../ducks/deputies/deputies';
import { Types as DeputyDetailsTypes } from '../ducks/deputies/deputyDetails';
import { Types as ExpensesTypes } from '../ducks/deputies/expenses';
import { Types as PropositionsTypes } from '../ducks/deputies/propositions';

import { getStates } from './states';
import { getParties } from './parties';
import { getDeputies } from './deputies/deputies';
import { getDeputyDetails } from './deputies/deputyDetails';
import { getExpenses } from './deputies/expenses';
import { getPropositions } from './deputies/propositions';

export default function* rootSaga() {
    yield all([
        takeLatest(StatesTypes.GET_REQUEST, getStates),
        takeLatest(PartiesTypes.GET_REQUEST, getParties),
        takeLatest(DeputiesTypes.GET_REQUEST, getDeputies),
        takeLatest(DeputiesTypes.SET_FILTERS, getDeputies),
        takeLatest(DeputiesTypes.CLEAR_FILTERS, getDeputies),
        takeLatest(DeputyDetailsTypes.GET_REQUEST, getDeputyDetails),
        takeLatest(ExpensesTypes.GET_REQUEST, getExpenses),
        takeLatest(PropositionsTypes.GET_REQUEST, getPropositions),
    ]);
}
