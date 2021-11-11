export const ENVS = {
  NODE_ENV: process.env.NODE_ENV
};

export const isProduction = ENVS.NODE_ENV === 'production';

const MONTH_DURATION = 30 * 24 * 60 * 60 * 1000;
const YEAR_DURATION = 12 * MONTH_DURATION;
export const cookies = {
  MONTH_DURATION,
  YEAR_DURATION,
  DEFAULT_COOKIE_OPTIONS: { maxAge: MONTH_DURATION, httpOnly: true, path: '/' },
  LANGUAGE: 'LANGUAGE'
};
