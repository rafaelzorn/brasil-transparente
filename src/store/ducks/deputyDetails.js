export const Types = {
    GET_REQUEST: 'deputyDetails/GET_REQUEST',
    GET_SUCCESS: 'deputyDetails/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: {},
    loading: false,
};

export default function deputyDetails(state = INITIAL_STATE, action) {
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
    getDeputyDetailsRequest: id => ({
        type: Types.GET_REQUEST,
        payload: { id },
    }),

    getDeputyDetailsSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
