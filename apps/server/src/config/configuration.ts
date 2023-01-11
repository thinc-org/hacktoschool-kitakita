export type Configuration = {
  port: number;
  jwt: {
    secret: string;
    expire: number;
  };
};

export const defaultConfig: Configuration = {
  port: 3000,
  jwt: {
    secret: "secret",
    expire: 0,
  },
};

export default (): Configuration => ({
  port: parseInt(process.env.BACKEND_PORT ?? "", 10) || defaultConfig.port,
  jwt: {
    secret: process.env.JWT_SECRET ?? defaultConfig.jwt.secret,
    expire:
      parseInt(process.env.JWT_EXPIRE ?? "", 10) ?? defaultConfig.jwt.expire,
  },
});
