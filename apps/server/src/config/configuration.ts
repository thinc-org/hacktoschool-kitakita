export type Configuration = {
  port: number;
};

export const defaultConfig: Configuration = {
  port: 3000,
};

export default (): Configuration => ({
  port: parseInt(process.env.PORT ?? "", 10) || defaultConfig.port,
});
