import { defineConfig } from 'dumi';
import webpackPlugin from './plugin.config';

export default defineConfig({
  title: 'medisys-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/medisys-ui',
  publicPath: '/medisys-ui/',
  chainWebpack: webpackPlugin,
  // more config: https://d.umijs.org/config
});
