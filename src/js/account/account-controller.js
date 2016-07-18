import {assign} from 'lodash';

class AccountController {

  constructor($scope, userService, accountService) {
    assign(this, {$scope, userService, accountService});
    this.refresh();
  }

  refresh() {
    this.accountService.getBy(this.userService.getCurrentUser()).then((resp) => {
      this.$scope.accounts = resp.data;
    }, (err) => {
      console.log("account refresh failed", err);
    }).then(() => {
      this.$scope.$broadcast('scroll.refreshComplete');
    });
  }

}

AccountController.$inject = ['$scope', 'userService', 'accountService'];

export default AccountController;
