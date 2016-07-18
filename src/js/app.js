import menu from './menu/menu.module';
import appConfig from './app.config';
import appRun from './app.run';

export default angular.module('banking', ['ionic', menu.name])
  .controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })
  .controller('PlaylistCtrl', function($scope, $stateParams) {
  })
  .run(appRun)
  .config(appConfig)
  .constant('API_URL', 'http://localhost:8080');
