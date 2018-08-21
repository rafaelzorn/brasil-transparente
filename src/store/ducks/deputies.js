export const Types = {
    GET_REQUEST: 'deputies/GET_REQUEST',
    GET_SUCCESS: 'deputies/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
    currentPage: 1,
};

export default function deputies(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.GET_REQUEST:
        return { ...state, loading: true };
    case Types.GET_SUCCESS:
        return {
            ...state,
            data: [...state.data, action.payload.data],
            loading: false,
            currentPage: state.currentPage + 1,
        };
    default:
        return state;
    }
}

export const Creators = {
    getDeputiesRequest: currentPage => ({
        type: Types.GET_REQUEST,
        payload: { currentPage },
    }),

    getDeputiesSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
