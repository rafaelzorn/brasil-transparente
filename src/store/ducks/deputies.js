export const Types = {
    GET_REQUEST: 'deputies/GET_REQUEST',
    GET_SUCCESS: 'deputies/GET_SUCCESS',
    SET_FILTERS: 'deputies/SET_FILTERS',
    CLEAR_FILTERS: 'deputies/CLEAR_FILTERS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
    currentPage: 1,
    hasMore: true,
    filters: {
        name: '',
        state: '',
        party: '',
    },
};

export default function deputies(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.GET_REQUEST:
        return { ...state, loading: true };
    case Types.GET_SUCCESS:
        return {
            ...state,
            data: [...state.data, ...action.payload.data],
            loading: false,
            currentPage: state.currentPage + 1,
            hasMore: action.payload.hasMore,
        };
    case Types.SET_FILTERS:
        return {
            ...state,
            data: [],
            loading: true,
            currentPage: 1,
            hasMore: true,
            filters: action.payload.filters,
        };
    case Types.CLEAR_FILTERS:
        return {
            ...state,
            data: [],
            loading: true,
            currentPage: 1,
            hasMore: true,
            filters: action.payload.filters,
        };
    default:
        return state;
    }
}

export const Creators = {
    getDeputiesRequest: (currentPage, filters) => ({
        type: Types.GET_REQUEST,
        payload: {
            currentPage,
            filters,
        },
    }),

    getDeputiesSuccess: (data, hasMore) => ({
        type: Types.GET_SUCCESS,
        payload: {
            data,
            hasMore,
        },
    }),

    setFilters: filters => ({
        type: Types.SET_FILTERS,
        payload: { filters },
    }),

    clearFilters: () => ({
        type: Types.CLEAR_FILTERS,
        payload: {
            filters: {
                name: '',
                state: '',
                party: '',
            },
        },
    }),
};
