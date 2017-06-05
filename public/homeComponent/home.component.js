(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('homeComp', {
      templateUrl: './homeComponent/home.html',
      controller: ['authService', homeCtrl]
    });

  function  homeCtrl(authService) {
        const vm = this

        vm.auth = authService
    }
}())
