export const Types = {
    SHOW: 'drawer/SHOW',
};

const initialState = {
    visible: false,
};

export default function drawer(state = initialState, action) {
    switch (action.type) {
    case Types.SHOW: {
        return { visible: !state.visible };
    }
    default:
        return state;
    }
}

export const Creators = {
    showDrawer: () => ({
        type: Types.SHOW,
    }),
};
