export const Types = {
    GET_REQUEST: 'expenses/GET_REQUEST',
    GET_SUCCESS: 'expenses/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
};

export default function expenses(state = INITIAL_STATE, action) {
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
    getExpensesRequest: (deputyId, month, year) => ({
        type: Types.GET_REQUEST,
        payload: {
            deputyId,
            month,
            year,
        },
    }),

    getExpensesSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
