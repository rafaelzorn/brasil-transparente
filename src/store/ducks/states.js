export const Types = {
    GET_REQUEST: 'states/GET_REQUEST',
    GET_SUCCESS: 'states/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
};

export default function states(state = INITIAL_STATE, action) {
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
    getStatesRequest: () => ({
        type: Types.GET_REQUEST,
    }),

    getStatesSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
