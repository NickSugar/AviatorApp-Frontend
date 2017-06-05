(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('headerComp', {
      templateUrl: 'header.html',
      controller: ['authService', headerCtrl]
    });

  function  headerCtrl(authService) {
        const vm = this

        vm.auth = authService
    }
}())
