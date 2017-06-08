(function () {

  'use strict';

  angular
    .module('aviatorsApp')
    .factory('aviatorsAPIservice', aviatorsAPIservice);

  aviatorsAPIservice.$inject = ['$http'];

  function aviatorsAPIservice($http) {

    var service = {}

    function getPlanes() {
      return $http('https://aviatorsapp.herokuapp.com/planes')
    }

    return service
  }
})();
