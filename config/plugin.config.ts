import path from 'path';
const srcDir = path.join(__dirname, '../src/');

// console.log(path.join(srcDir, '_util/'));
export default (config: any) => {
  config.merge({
    resolve: {
      alias: {
        // assets: path.resolve(srcDir, "assets/"),
        // 'medisys-ui': srcDir, // not nessary, dumi auto handle it
        '@util': path.join(srcDir, '_util/'),
        // 'mui-pro-scss': path.resolve(srcDir, 'assets/scss/'),
        // 'mui-pro-components': path.resolve(srcDir, 'components/mui-pro/'),
        // 'medisys-model': path.resolve(srcDir, 'utils/model/'),
        // 'medisys-util': path.resolve(srcDir, 'utils/cdrss/'),
        // utils: path.resolve(srcDir, 'utils/utils/'),
        // 'medisys-components': path.resolve(srcDir, 'components/_medisys/'),
      },
    },
  });
};
