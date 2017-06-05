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

        var authenticated = authService.isAuthenticated()

        if (authenticated) {
          template = './homeComponent/premiumHome.html'
        }else {
          template = './homeComponent/home.html'
        }

        authService.authenticated = authenticated
    }
}())
