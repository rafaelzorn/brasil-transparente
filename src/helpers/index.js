import moment from 'moment';

export const yearsOld = date => Math.floor(moment(new Date()).diff(moment(date), 'years', true));
