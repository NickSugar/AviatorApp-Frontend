(function () {

  'use strict';

  angular
    .module('aviatorsApp')
    .run(run)

  run.$inject = ['authService']

  function run(authService) {
    // Handle the authentication
    // result in the hash
    authService.handleAuthentication()
  }

})()
