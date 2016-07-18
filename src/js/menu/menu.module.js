import user from '../user/user.module';
import MenuController from './menu-controller';

export default angular.module('banking.menu', ['ionic', user.name])
  .controller('MenuCtrl', MenuController);
