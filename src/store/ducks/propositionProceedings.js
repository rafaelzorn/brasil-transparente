export const Types = {
    GET_REQUEST: 'propositionProceedings/GET_REQUEST',
    GET_SUCCESS: 'propositionProceedings/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
};

export default function propositionProceedings(state = INITIAL_STATE, action) {
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
    getPropositionProceedingsRequest: id => ({
        type: Types.GET_REQUEST,
        payload: { id },
    }),

    getPropositionProceedingsSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
