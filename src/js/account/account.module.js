import user from '../user/user.module';
import AccountController from './account-controller';
import AccountService from './account-service';

export default angular.module('banking.account', ['ionic', user.name])
  .service('accountService', AccountService)
  .controller('AccountCtrl', AccountController);
