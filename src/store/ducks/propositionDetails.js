export const Types = {
    GET_REQUEST: 'propositionDetails/GET_REQUEST',
    GET_SUCCESS: 'propositionDetails/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: {},
    loading: false,
};

export default function propositionDetails(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.GET_REQUEST:
        return { ...state, loading: true };
    case Types.GET_SUCCESS:
        return { data: action.payload.data, loading: false };
    default:
        return state;
    }
}

export const Creators = {
    getPropositionDetailsRequest: id => ({
        type: Types.GET_REQUEST,
        payload: { id },
    }),

    getPropositionDetailsSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
