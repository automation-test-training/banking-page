import menu from '../js/menu/menu.module';
import chai from 'chai';
chai.should();

describe('Menu Controller', () => {
  let controller, $scope;

  beforeEach(angular.mock.module(menu.name));

  beforeEach(inject(($controller, $rootScope) => {
    $scope = $rootScope.$new();
    controller = $controller('MenuCtrl', {
      $scope
    });
  }));

  it('1 + 1 = 2', () => {
    (1+1).should.equal(2);
  });

  it('should say hello', () => {
    controller.hello().should.equal('hello');
    $scope.hello.should.equal('Hello!');
  });

});
