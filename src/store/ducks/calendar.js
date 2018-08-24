import moment from 'moment';

export const Types = {
    SET_DATE: 'calendar/SET_DATE',
    SET_CURRENT_DATE: 'calendar/SET_CURRENT_DATE',
};

const INITIAL_STATE = {
    year: moment(moment(), 'YYYY').year(),
    month: moment(moment(), 'M').month() + 1,
};

export default function deputies(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.SET_DATE:
        return { ...state, year: action.payload.year, month: action.payload.month };
    case Types.SET_CURRENT_DATE:
        return {
            ...state,
            year: moment(moment(), 'YYYY').year(),
            month: moment(moment(), 'M').month() + 1,
        };
    default:
        return state;
    }
}

export const Creators = {
    setDate: (year, month) => ({
        type: Types.SET_DATE,
        payload: {
            year,
            month,
        },
    }),

    setCurrentDate: () => ({
        type: Types.SET_CURRENT_DATE,
    }),
};
