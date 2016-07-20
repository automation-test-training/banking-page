import user from '../user/user.module';
import account from '../account/account.module';
import TransferController from './transfer-controller';
import TransferService from './transfer-service';

export default angular.module('banking.transfer', ['ionic', user.name, account.name])
  .service('transferService', TransferService)
  .controller('TransferCtrl', TransferController);
