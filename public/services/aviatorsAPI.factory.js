(function () {

  'use strict';

  angular
    .module('aviatorsApp')
    .factory('aviatorsAPIservice', aviatorsAPIservice);

  aviatorsAPIservice.$inject = ['$http'];

  function aviatorsAPIservice($http) {

    const vm = this
    vm.service = {}

    vm.service.getPlanes = ()=> {
      return $http.get('https://aviatorsapp.herokuapp.com/planes')
    }

    return vm.service
  }
})();
