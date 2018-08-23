export const Types = {
    DEFAULT: 'toasts/DEFAULT',
    INFO: 'toasts/INFO',
    SUCCESS: 'toasts/SUCCESS',
    WARNING: 'toasts/WARNING',
    ERROR: 'toasts/ERROR',
    SHOW_TOAST: 'toasts/SHOW_TOAST',
};

export const Creators = {
    buildToast: (message, type = Types.DEFAULT, options) => ({
        message,
        type,
        options,
    }),
};
