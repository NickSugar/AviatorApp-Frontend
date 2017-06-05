(function() {
  'use strict'

  var template = './homeComponent/home.html'

  angular.module('aviatorsApp')
    .component('homeComp', {
      templateUrl: template,
      controller: ['authService', homeCtrl]
    });

  function  homeCtrl(authService) {
        const vm = this

        vm.authenticated = authService.isAuthenticated()
        console.log(vm.authenticated);

        if (vm.authenticated) {
          template = './homeComponent/premiumHome.html'
        }else {
          template = './homeComponent/home.html'
        }

        authService.authenticated = vm.authenticated
    }
}())
