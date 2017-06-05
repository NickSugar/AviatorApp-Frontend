(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('headerComp', {
      templateUrl: 'header.html',
      controller: ['authService', headerCtrl]
    });

  function  headerCtrl(authService) {
        const vm = this

        vm.login = authService.login
        vm.logout = authService.logout
        vm.authenticated = authService.authenticated
    }
}())
