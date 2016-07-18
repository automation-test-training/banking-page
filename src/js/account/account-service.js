import {assign} from 'lodash';

class AccountService {
  constructor($http, API_URL) {
    assign(this, {$http, API_URL});
  }

  getBy(username) {
    return this.$http.get(`${this.API_URL}/${username}/accounts`);
  }
}

AccountService.$inject = ['$http', 'API_URL'];

export default AccountService;
