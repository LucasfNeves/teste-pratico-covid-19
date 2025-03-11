import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-styling-webpack'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  },
  staticDirs: ['../public'],
}
export default config
