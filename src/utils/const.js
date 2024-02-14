export const MAIN_URL = 'http://jsonplaceholder.typicode.com/users';
export const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// export const PHONE_REGEXP = /^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/iugm;
export const PHONE_REGEXP = /\+7[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/gmiu;