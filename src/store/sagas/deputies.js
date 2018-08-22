import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DeputiesActions } from '../ducks/deputies';

export function* getDeputies(action) {
    try {
        const { currentPage, filters } = action.payload;

        const page = currentPage !== undefined ? currentPage : 1;

        const response = yield call(
            api.get,
            `/deputados?nome=${filters.name}&siglaUf=${filters.state}&siglaPartido=${
                filters.party
            }&pagina=${page}&itens=20&ordem=ASC&ordenarPor=nome`,
        );

        const hasMore = response.data.links.find(item => item.rel === 'next') !== undefined;

        yield put(DeputiesActions.getDeputiesSuccess(response.data.dados, hasMore));
    } catch (err) {}
}
