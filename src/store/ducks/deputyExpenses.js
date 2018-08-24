export const Types = {
    GET_REQUEST: 'deputyExpenses/GET_REQUEST',
    GET_SUCCESS: 'deputyExpenses/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
};

export default function deputyExpenses(state = INITIAL_STATE, action) {
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
    getDeputyExpensesRequest: (deputyId, month, year) => ({
        type: Types.GET_REQUEST,
        payload: {
            deputyId,
            month,
            year,
        },
    }),

    getDeputyExpensesSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
