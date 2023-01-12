export type Configuration = {
  port: number;
  jwt: {
    secret: string;
    expire: number;
  };
  host: string;
};

export const defaultConfig: Configuration = {
  port: 4201,
  jwt: {
    secret: "secret",
    expire: 0,
  },
  host: "0.0.0.0",
};

export default (): Configuration => ({
  port: parseInt(process.env.BACKEND_PORT ?? "", 10) || defaultConfig.port,
  jwt: {
    secret: process.env.JWT_SECRET ?? defaultConfig.jwt.secret,
    expire:
      parseInt(process.env.JWT_EXPIRE ?? "", 10) ?? defaultConfig.jwt.expire,
  },
  host: process.env.BACKEND_HOST ?? defaultConfig.host,
});
