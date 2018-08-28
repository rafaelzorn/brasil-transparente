import { combineReducers } from 'redux';

import states from './states';
import parties from './parties';
import calendar from './calendar';
import deputies from './deputies';
import deputyDetails from './deputyDetails';
import deputyExpenses from './deputyExpenses';
import deputyPropositions from './deputyPropositions';
import propositionDetails from './propositionDetails';
import propositionProceedings from './propositionProceedings';
import modal from './modal';
import deputyExpensesByYear from './deputyExpensesByYear';

export default combineReducers({
    states,
    parties,
    calendar,
    deputies,
    deputyDetails,
    deputyExpenses,
    deputyPropositions,
    modal,
    propositionDetails,
    propositionProceedings,
    deputyExpensesByYear,
});
