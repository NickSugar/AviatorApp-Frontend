(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('headerComp', {
      templateUrl: 'header.html',
      controller: ['authService', headerCtrl],
      bindings: {auth: '='}
    });

  function  headerCtrl(authService) {
        const vm = this

    }
}())
