import {assign} from 'lodash';

class TransferService {
  constructor($http, API_URL) {
    assign(this, {$http, API_URL});
  }

  send(from, to, amount) {
    return this.$http.post(`${this.API_URL}/transfer`, {from, to, amount});
  }
}

TransferService.$inject = ['$http', 'API_URL'];

export default TransferService;
