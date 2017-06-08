(function () {

  'use strict';

  angular
    .module('aviatorsApp')
    .factory('aviatorsAPIservice', aviatorsAPIservice);

  aviatorsAPIservice.$inject = ['$http'];

  function aviatorsAPIservice($http) {

    var service = {}

    service.getPlanes = getPlanes

    function getPlanes() {
      return $http('https://aviatorsapp.herokuapp.com/planes')
    }

    return service
  }
})();
