export {};

declare global {
  namespace Express {
    interface Request {
      messages: {
        [key: string]: string;
      };
    }
  }
}
