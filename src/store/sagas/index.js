import { all, takeLatest } from 'redux-saga/effects';

import { Types as StatesTypes } from '../ducks/states';
import { Types as PartiesTypes } from '../ducks/parties';
import { Types as DeputiesTypes } from '../ducks/deputies';
import { Types as DeputyDetailsTypes } from '../ducks/deputyDetails';
import { Types as DeputyExpensesTypes } from '../ducks/deputyExpenses';
import { Types as DeputyExpensesByYearTypes } from '../ducks/deputyExpensesByYear';
import { Types as DeputyPropositionsTypes } from '../ducks/deputyPropositions';
import { Types as PropositionDetailsActions } from '../ducks/propositionDetails';
import { Types as PropositionProceedingsActions } from '../ducks/propositionProceedings';

import { getStates } from './states';
import { getParties } from './parties';
import { getDeputies } from './deputies';
import { getDeputyDetails } from './deputyDetails';
import { getDeputyExpenses } from './deputyExpenses';
import { getDeputyExpensesByYear } from './deputyExpensesByYear';
import { getDeputyPropositions } from './deputyPropositions';
import { getPropositionDetails } from './propositionDetails';
import { getPropositionProceedings } from './propositionProceedings';

export default function* rootSaga() {
    yield all([
        takeLatest(StatesTypes.GET_REQUEST, getStates),
        takeLatest(PartiesTypes.GET_REQUEST, getParties),
        takeLatest(DeputiesTypes.GET_REQUEST, getDeputies),
        takeLatest(DeputiesTypes.SET_FILTERS, getDeputies),
        takeLatest(DeputiesTypes.CLEAR_FILTERS, getDeputies),
        takeLatest(DeputyDetailsTypes.GET_REQUEST, getDeputyDetails),
        takeLatest(DeputyExpensesTypes.GET_REQUEST, getDeputyExpenses),
        takeLatest(DeputyPropositionsTypes.GET_REQUEST, getDeputyPropositions),
        takeLatest(PropositionDetailsActions.GET_REQUEST, getPropositionDetails),
        takeLatest(PropositionProceedingsActions.GET_REQUEST, getPropositionProceedings),
        takeLatest(DeputyExpensesByYearTypes.GET_REQUEST, getDeputyExpensesByYear),
    ]);
}
