import menu from './menu/menu.module';
import account from './account/account.module';
import appConfig from './app.config';
import appRun from './app.run';

export default angular.module('banking', ['ionic', menu.name, account.name])
  .run(appRun)
  .config(appConfig)
  .constant('API_URL', 'http://localhost:8080');
