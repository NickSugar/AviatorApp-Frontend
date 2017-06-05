(function () {

  'use strict';

  angular
    .module('aviatorsApp')
    .run(run)

  run.$inject = ['authService', '$state']

  function run(authService, $state) {
    // Handle the authentication
    // result in the hash
    authService.handleAuthentication()
    if (authService.isAuthenticated()) {
      $state.go('premium')
    }
  }

})()
