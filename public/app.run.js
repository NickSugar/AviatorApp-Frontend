(function () {

  'use strict';

  angular
    .module('aviatorsApp')
    .run(run)

  run.$inject = ['authService', '$state']

  function run(authService, $state) {
    console.log('run');
    // Handle the authentication
    // result in the hash
    authService.handleAuthentication()
    if (authService.isAuthenticated()) {
      console.log('is authenticated');
      $state.go('premium')
    }
  }

})()
