export const planet = {
  prefix: '/api',
  middlewares: [
    async (ctx: any, next: any) => {
      await next();
    }
  ]
};