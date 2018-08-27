import { combineReducers } from 'redux';

import states from './states';
import parties from './parties';
import calendar from './calendar';
import deputies from './deputies';
import deputyDetails from './deputyDetails';
import deputyExpenses from './deputyExpenses';
import deputyPropositions from './deputyPropositions';

export default combineReducers({
    states,
    parties,
    calendar,
    deputies,
    deputyDetails,
    deputyExpenses,
    deputyPropositions,
});
