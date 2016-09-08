import {assign} from 'lodash';

class AccountController {

  constructor($scope, $log, userService, accountService) {
    assign(this, {$scope, $log, userService, accountService});
    this.refresh();
  }

  refresh() {
    this.accountService.getBy(this.userService.getCurrentUser()).then((resp) => {
      this.$scope.accounts = resp.data;
    }, (err) => {
      this.$log.error("account refresh failed", err);
    }).then(() => {
      this.$scope.$broadcast('scroll.refreshComplete');
    });
  }

}

AccountController.$inject = ['$scope', '$log', 'userService', 'accountService'];

export default AccountController;
