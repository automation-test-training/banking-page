import {assign} from 'lodash';

class TransferController {

  constructor($scope) {
    assign(this, {$scope});
  }

}

TransferController.$inject = ['$scope'];

export default TransferController;
