import { toast } from 'react-toastify';

const actionTypeToToastType = actionType => actionType.split('/')[1].toLowerCase();

const toastMiddleware = () => next => (action) => {
    if (action.toast) {
        toast(action.toast.message, {
            type: actionTypeToToastType(action.toast.type),
            ...action.toast.options,
        });
    }

    return next(action);
};

export default toastMiddleware;
