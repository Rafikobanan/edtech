export const hrefs = {
  FOR_STUDENTS: '/',
  FOR_TEACHERS: '/for-teachers',
  FOR_BUSINESS: '/for-business',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  TERMS: '/',
  POLICY: '/',
  RECOVERY: '/recovery'
};

export const envs = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  CLIENT_SERVER_URL: process.env.NEXT_PUBLIC_CLIENT_SERVER_URL
};

export const formValidation = {
  EMAIL_REGEX:
    /^(?:[a-zA-Z0-9])([-_0-9a-zA-Z]+(.[-_0-9a-zA-Z]+)*|^"([\u0001-\b\u000b\f\u000e-\u001f!#-[]-\u007f]|\\[\u0001-011\u000b\f\u000e-\u007f])*")@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?.)+[a-zA-Z]{2,6}.?$/,
  MAX_NAME_LENGTH: 32,
  MAX_LAST_NAME_LENGTH: 32,
  MIN_PASSWORD_LENGTH: 8
};
