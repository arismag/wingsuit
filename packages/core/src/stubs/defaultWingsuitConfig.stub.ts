import AppConfig from '../AppConfig'

const css = require('../server/presets/css')
const scss = require('../server/presets/scss')
const babel = require('../server/presets/babel')
const assets = require('../server/presets/assets')
const storybook = require('../server/presets/storybook')
const drupal = require('../server/presets/drupal')
const twing = require('../server/presets/twing')
const tailwindTokens = require('../server/presets/tailwindTokens')
const assetsVideos = require('../server/presets/assetsVideos')

export const wingsuit = {
  webpackFinal: (appConfig: AppConfig, config: any) => {
    return config
  },

  webpack: (appConfig: AppConfig) => {
    return {}
  },

  presets: {
    css,
    scss,
    babel,
    assets,
    assetsVideos,
    tailwindTokens,
    storybook,
    drupal,
    twing,
  },
  designSystems: {
    default: {
      path: 'source/default',
      patternPath: 'patterns',
      namespaces: {},
    },
  },
  environments: {
    development: {},
    production: {},
  },
  apps: {
    storybook: {
      type: 'storybook',
      path: './apps/storybook',
      cssMode: 'hot',
      distFolder: 'dist/app-storybook',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: ['tailwindTokens', 'assets', 'assetsVideos', 'twing', 'storybook', 'css', 'babel'],
    },
    drupal: {
      type: 'drupal',
      path: './apps/drupal',
      cssMode: 'extract',
      distFolder: 'dist/app-drupal',
      assetAtomicFolder: 'atomic',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: ['babel', 'assets', 'assetsVideos', 'drupal', 'css'],
    },
  },
}
