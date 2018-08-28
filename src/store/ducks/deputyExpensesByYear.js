export const Types = {
    GET_REQUEST: 'deputyExpensesByYear/GET_REQUEST',
    GET_SUCCESS: 'deputyExpensesByYear/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
};

export default function deputyExpensesByYear(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.GET_REQUEST:
        return { ...state, data: [], loading: true };
    case Types.GET_SUCCESS:
        return { data: action.payload.data, loading: false };
    default:
        return state;
    }
}

export const Creators = {
    getDeputyExpensesByYearRequest: (deputyId, year) => ({
        type: Types.GET_REQUEST,
        payload: {
            deputyId,
            year,
        },
    }),

    getDeputyExpensesByYearSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
