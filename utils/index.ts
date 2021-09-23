import { Request } from 'express';

export const isServer = typeof window === 'undefined';
export const isClient = !isServer;
export const getCookies = (req: Request) => (req ? { cookie: req.headers.cookie } : undefined);
export const toCookie = (name: string, value: string) =>
  [name, '=', JSON.stringify(value)].join('');
