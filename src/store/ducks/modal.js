export const Types = {
    SHOW: 'modal/SHOW',
    HIDE: 'modal/HIDE',
};

const initialState = {
    visible: false,
    params: {},
};

export default function modal(state = initialState, action) {
    switch (action.type) {
    case Types.SHOW: {
        return { visible: true, params: action.payload.params };
    }
    case Types.HIDE:
        return { visible: false };
    default:
        return state;
    }
}

export const Creators = {
    showModal: params => ({
        type: Types.SHOW,
        payload: {
            params,
        },
    }),

    hideModal: () => ({
        type: Types.HIDE,
    }),
};
