/*@ngInject*/
const AppConfig = ($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'MenuCtrl'
    })
    .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'templates/account.html',
          controller: 'AccountCtrl',
          controllerAs: 'account'
        }
      }
    })
    .state('app.transfer', {
      url: '/transfer',
      views: {
        'menuContent': {
          templateUrl: 'templates/transfer.html',
          controller: 'TransferCtrl',
          controllerAs: 'transfer'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/account');
};

export default AppConfig;
