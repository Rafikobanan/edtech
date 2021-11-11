export const HREFS = {
  forStudents: '/',
  forTeachers: '/for-teachers',
  forBusiness: '/for-business',
  login: '/login',
  registration: '/registration',
  terms: '/',
  policy: '/',
  recovery: '/recovery'
};

export const ENVS = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  CLIENT_SERVER_URL: process.env.NEXT_PUBLIC_CLIENT_SERVER_URL
};

export const FORM_VALIDATION = {
  emailRegex:
    /^(?:[a-zA-Z0-9])([-_0-9a-zA-Z]+(.[-_0-9a-zA-Z]+)*|^"([\u0001-\b\u000b\f\u000e-\u001f!#-[]-\u007f]|\\[\u0001-011\u000b\f\u000e-\u007f])*")@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?.)+[a-zA-Z]{2,6}.?$/,
  maxNameLength: 32,
  maxLastNameLength: 32,
  minPasswordLength: 8
};
