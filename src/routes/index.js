import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Deputies from '../pages/deputies';
import DeputyDetail from '../pages/deputies/detail';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Deputies} />
        <Route path="/deputados/:id" component={DeputyDetail} />
    </Switch>
);

export default Routes;
