import path from 'path';
const srcDir = path.join(__dirname, '../src/');

console.log(path.join(__dirname, '../packages/medisys-ui/src'));
console.log(path.join(__dirname, '../', 'packages/medisys-ui/src'));
export default (config: any) => {
  config.merge({
    resolve: {
      alias: {
        // assets: path.resolve(srcDir, "assets/"),
        'medisys-ui': srcDir,
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
