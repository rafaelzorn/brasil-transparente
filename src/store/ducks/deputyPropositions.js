export const Types = {
    GET_REQUEST: 'deputyPropositions/GET_REQUEST',
    GET_SUCCESS: 'deputyPropositions/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
};

export default function deputyPropositions(state = INITIAL_STATE, action) {
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
    getDeputyPropositionsRequest: (deputyId, year) => ({
        type: Types.GET_REQUEST,
        payload: {
            deputyId,
            year,
        },
    }),

    getDeputyPropositionsSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
