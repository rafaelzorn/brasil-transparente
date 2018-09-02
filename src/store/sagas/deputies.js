import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DeputiesActions } from '../ducks/deputies';
import { Creators as DrawerActions } from '../ducks/drawer';
import { Creators as ToastsActions, Types as ToastTypes } from '../ducks/toasts';

export function* getDeputies(action) {
    try {
        const { currentPage, filters } = action.payload;

        const page = currentPage !== undefined ? currentPage : 1;

        const response = yield call(
            api.get,
            `/deputados?itens=20&nome=${filters.name}&siglaUf=${filters.state}&siglaPartido=${
                filters.party
            }&pagina=${page}&ordem=ASC&ordenarPor=nome`,
        );

        const hasMore = response.data.links.find(item => item.rel === 'next') !== undefined;

        yield put(DeputiesActions.getDeputiesSuccess(response.data.dados, hasMore));
    } catch (err) {
        yield put({
            type: ToastTypes.SHOW_TOAST,
            toast: ToastsActions.buildToast('Erro ao carregar deputados', ToastTypes.ERROR),
        });
    } finally {
        yield put(DrawerActions.showDrawer());
    }
}
