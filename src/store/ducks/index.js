import { combineReducers } from 'redux';

import states from './states';
import parties from './parties';
import calendar from './calendar';

import deputies from './deputies/deputies';
import deputyDetails from './deputies/deputyDetails';
import expenses from './deputies/expenses';
import propositions from './deputies/propositions';

export default combineReducers({
    states,
    parties,
    calendar,
    deputies,
    deputyDetails,
    expenses,
    propositions,
});
