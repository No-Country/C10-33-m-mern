module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            utils: './src/utils',
            components: './src/components',
            src: './src',
            screens: './src/screens',
            navigators: './src/navigators',
            assets: './src/assets',
          },
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
          ],
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
  };
};

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: ['module:react-native-dotenv', 'react-native-reanimated/plugin'],
// };
