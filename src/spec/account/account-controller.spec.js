import account from '../../js/account/account.module';

describe('Account Controller', () => {

  const apiUrl = 'http://test';
  const accounts = [{name: 'Heaton'}];
  let controller, $scope, $httpBackend;

  beforeEach(angular.mock.module(($provide) => {
    $provide.constant('API_URL', apiUrl);
  }));

  beforeEach(angular.mock.module(account.name));

  beforeEach(inject(($controller, $rootScope, _$httpBackend_, userService) => {
    sinon.stub(userService, 'getCurrentUser').returns('u1');
    $httpBackend = _$httpBackend_;
    // $httpBackend.when('GET', `${apiUrl}/u1/accounts`).respond(200, accounts);
    $httpBackend.when('GET', /\/accounts/).respond(200, accounts);
    $scope = $rootScope.$new();
    controller = $controller('AccountCtrl', {
      $scope
    });
    $httpBackend.flush();
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should get the accounts by default', () => {
    $scope.accounts.should.to.deep.equal(accounts);
  });

  it('should refresh the accounts', () => {
    $scope.accounts = {};
    controller.refresh();
    $httpBackend.flush();
    $scope.accounts.should.to.deep.equal(accounts);
  });

});
