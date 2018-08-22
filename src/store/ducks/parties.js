export const Types = {
    GET_REQUEST: 'parties/GET_REQUEST',
    GET_SUCCESS: 'parties/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
};

export default function parties(state = INITIAL_STATE, action) {
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
    getPartiesRequest: () => ({
        type: Types.GET_REQUEST,
    }),

    getPartiesSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
