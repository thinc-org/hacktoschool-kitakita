export type Configuration = {
  server: {
    host: string;
    port: number;
  };
  jwt: {
    secret: string;
    expire: number;
  };
};

export const defaultConfig: Configuration = {
  server: {
    host: "localhost",
    port: 3000,
  },
  jwt: {
    secret: "secret",
    expire: 0,
  },
};

export default (): Configuration => ({
  server: {
    host: process.env.BACKEND_HOST ?? defaultConfig.server.host,
    port:
      parseInt(process.env.BACKEND_PORT ?? "", 10) || defaultConfig.server.port,
  },
  jwt: {
    secret: process.env.JWT_SECRET ?? defaultConfig.jwt.secret,
    expire:
      parseInt(process.env.JWT_EXPIRE ?? "", 10) ?? defaultConfig.jwt.expire,
  },
});
