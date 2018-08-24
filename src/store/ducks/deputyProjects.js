export const Types = {
    GET_REQUEST: 'deputyProjects/GET_REQUEST',
    GET_SUCCESS: 'deputyProjects/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
};

export default function deputyProjects(state = INITIAL_STATE, action) {
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
    getDeputyProjectsRequest: (deputyId, year) => ({
        type: Types.GET_REQUEST,
        payload: {
            deputyId,
            year,
        },
    }),

    getDeputyProjectsSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
