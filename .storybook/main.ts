import type { StorybookConfig } from '@storybook/nextjs'
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin'
import path from 'path'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (!config.module) config.module = { rules: [] }
    if (!config.module.rules) config.module.rules = []
    config.module.rules.push({
      test: /\.css\.ts$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { modules: true },
        },
        'vanilla-extract-loader',
      ],
      include: path.resolve(__dirname, './'),
    })
    if (!config.plugins) config.plugins = []
    config.plugins.push(new VanillaExtractPlugin())

    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test

      if (!test) {
        return false
      }

      return test.test('.svg')
    }) as { [key: string]: any }

    imageRule.exclude = /\.svg$/

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default config
