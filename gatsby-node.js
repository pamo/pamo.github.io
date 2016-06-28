exports.modifyWebpackConfig = (config) => {
  const resolveConfig = config.resolve();
  resolveConfig.alias = {
    components: './components',
    css: './css',
  };

  config.resolve = () => resolveConfig;

  return config;
};
