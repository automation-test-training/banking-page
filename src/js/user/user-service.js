export default class UserService {
  constructor() {
    this.users = ['heaton', 'qinyu'];
    this.current = this.users[0];
  }

  getUsers() {
    return this.users;
  }

  change(username) {
    this.current = username;
  }

  getCurrentUser() {
    return this.current;
  }

}
