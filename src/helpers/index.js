import moment from 'moment';

export const yearsOld = date => Math.floor(moment(new Date()).diff(moment(date), 'years', true));

export const formatDateTime = dateTime => moment(dateTime).format('DD/MM/YYYY HH:mm');

export const formatReal = (number) => {
    if (number !== undefined) {
        return number.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    }

    return null;
};

export const formatDate = date => moment(date).format('DD/MM/YYYY');
