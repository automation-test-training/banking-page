import user from '../../js/user/user.module';

describe('User Service', () => {
  let userService;

  beforeEach(angular.mock.module(user.name));

  beforeEach(inject((_userService_) => {
    userService = _userService_;
  }));

  it('should get users', () => {
    userService.getUsers().should.to.deep.equal(['heaton', 'qinyu']);
  });

  it('should get current user by default', () => {
    userService.getCurrentUser().should.equal('heaton');
  });

  it('should get current user by changing', () => {
    userService.change('qinyu');
    userService.getCurrentUser().should.equal('qinyu');
  });
});
