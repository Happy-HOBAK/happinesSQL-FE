module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: [
    //   [
    //     'module:expo-font',
    //     {
    //       pattern: './assets/fonts/AppleSDGothicNeoEB.ttf',
    //     },
    //   ],
    // ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extentions: ['.js', '.json'],
          alias: {
            '@': './src',
            '@const': './src/const',
          },
        },

        'module'
      ],
    ],
  };
};
