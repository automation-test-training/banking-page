import loginTemp from './login.html';
import {assign} from 'lodash';

export default class MenuController {

  constructor($scope, $ionicModal, userService) {
    assign(this, {$scope, $ionicModal, userService});

    $scope.loginData = {username: userService.getCurrentUser()};

    $scope.users = userService.getUsers();

    // Create the login modal that we will use later
    $scope.modal = $ionicModal.fromTemplate(loginTemp, {
      scope: $scope
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function (username) {
      userService.change(username);
      $scope.closeLogin();
    };
  }

  hello() {
    this.$scope.hello = "Hello!";
    return "hello";
  }

}
