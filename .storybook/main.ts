export const stories = ['../src/**/*.stories.tsx']

export const addons = [
  {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  },
]
