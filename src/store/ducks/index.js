import { combineReducers } from 'redux';

import states from './states';
import deputies from './deputies';
import parties from './parties';
import deputyDetails from './deputyDetails';

export default combineReducers({
    deputies,
    parties,
    states,
    deputyDetails,
});
