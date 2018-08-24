import { combineReducers } from 'redux';

import states from './states';
import deputies from './deputies';
import parties from './parties';
import deputyDetails from './deputyDetails';
import deputyExpenses from './deputyExpenses';
import deputyProjects from './deputyProjects';
import calendar from './calendar';

export default combineReducers({
    deputies,
    parties,
    states,
    deputyDetails,
    deputyExpenses,
    deputyProjects,
    calendar,
});
