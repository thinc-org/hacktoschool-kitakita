export type Configuration = {
  port: number;
  jwt: {
    secret: string;
    expire: number;
  };
  host: string;
  googleOAuth: {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
  };
  bcrypt: {
    salt: number;
  };
};

export const defaultConfig: Configuration = {
  port: 4201,
  jwt: {
    secret: "secret",
    expire: 0,
  },
  host: "0.0.0.0",
  googleOAuth: {
    clientID: "",
    clientSecret: "",
    callbackURL: "",
  },
  bcrypt: {
    salt: 10,
  },
};

export default (): Configuration => ({
  port: parseInt(process.env.BACKEND_PORT ?? "", 10) || defaultConfig.port,
  jwt: {
    secret: process.env.JWT_SECRET ?? defaultConfig.jwt.secret,
    expire:
      parseInt(process.env.JWT_EXPIRE ?? "", 10) ?? defaultConfig.jwt.expire,
  },
  host: process.env.BACKEND_HOST ?? defaultConfig.host,
  googleOAuth: {
    clientID:
      process.env.GOOGLE_OAUTH_CLIENT_ID || defaultConfig.googleOAuth.clientID,
    clientSecret:
      process.env.GOOGLE_OAUTH_CLIENT_SECRET ||
      defaultConfig.googleOAuth.clientSecret,
    callbackURL:
      process.env.GOOGLE_OAUTH_CALLBACK_URL ||
      defaultConfig.googleOAuth.callbackURL,
  },
  bcrypt: {
    salt:
      parseInt(process.env.BCRYPT_SALT ?? "", 10) || defaultConfig.bcrypt.salt,
  },
});
