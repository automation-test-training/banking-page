import {assign} from 'lodash';

class TransferController {

  constructor($scope, userService, accountService, transferService) {
    assign(this, {$scope, userService, accountService, transferService});
    $scope.accounts = [];
    $scope.trans = {};
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getBy(this.userService.getCurrentUser()).then((resp) => {
      this.$scope.accounts = resp.data;
      this.clearData(this.$scope.accounts);
    }, (err) => {
      console.log("failed to load accounts", err);
    }).then(() => {
      this.$scope.$broadcast('scroll.refreshComplete');
    });
  }

  clearData(accounts) {
    this.$scope.from = {
      accountNumber: accounts.length > 0 ? accounts[0].number : '',
      currency: 'cny'
    };
    this.$scope.to = {
      currency: 'cny'
    };
    this.$scope.trans.amount = 0;
  }

  doTransfer(from, to, amount) {
    this.transferService.send(from, to, amount).then(() => {
      this.$scope.message = 'transfer success';
      this.clearData(this.$scope.accounts);
    }, (err) => {
      this.$scope.errMessage = err.data;
    });
  }

}

TransferController.$inject = ['$scope', 'userService', 'accountService', 'transferService'];

export default TransferController;
