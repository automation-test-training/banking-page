import menu from './menu/menu.module';
import account from './account/account.module';
import transfer from './transfer/transfer.module';
import appConfig from './app.config';
import appRun from './app.run';

export default angular.module('banking', ['ionic', menu.name, account.name, transfer.name])
  .run(appRun)
  .config(appConfig)
  .constant('API_URL', 'http://localhost:8080');
