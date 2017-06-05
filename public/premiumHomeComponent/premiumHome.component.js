(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('premiumHome', {
      templateUrl: './premiumHomeComponent/premiumHome.html',
      controller: ['authService', premiumHomeCtrl]
    });

  function  premiumHomeCtrl(authService) {
        const vm = this

        vm.auth = authService
    }
}())
