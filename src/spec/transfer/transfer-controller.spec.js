import transfer from '../../js/transfer/transfer.module';

describe('Transfer Controller', () => {

  const apiUrl = 'http://test';
  const accounts = [{name: 'Heaton', number: '1234'}];
  const from = {accountNumber: '1234', currency: 'cny'};
  const to = {accountNumber: '5678', currency: 'cny'};
  const amount = 50;
  let controller, $scope, $httpBackend;

  beforeEach(angular.mock.module(($provide) => {
    $provide.constant('API_URL', apiUrl);
  }));

  beforeEach(angular.mock.module(transfer.name));

  beforeEach(inject(($controller, $rootScope, _$httpBackend_, userService) => {
    sinon.stub(userService, 'getCurrentUser').returns('u1');
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', `${apiUrl}/u1/accounts`).respond(200, accounts);
    $httpBackend.when('POST', `${apiUrl}/transfer`, {from, to, amount}).respond(200);
    $scope = $rootScope.$new();
    controller = $controller('TransferCtrl', {
      $scope
    });
    $httpBackend.flush();
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should get the accounts and set from by default', () => {
    $scope.accounts.should.to.deep.equal(accounts);
    $scope.from.should.to.deep.equal({accountNumber: '1234', currency: 'cny'});
  });

  it('should refresh the accounts', () => {
    $scope.from = from;
    $scope.to = to;
    $scope.trans.amount = amount;
    controller.doTransfer(from, to, amount);
    $httpBackend.flush();
    $scope.from.should.to.deep.equal({accountNumber: '1234', currency: 'cny'});
    $scope.to.should.to.deep.equal({currency: 'cny'});
    $scope.trans.amount.should.equal(0);
    $scope.message.should.to.be.ok;
  });

});
