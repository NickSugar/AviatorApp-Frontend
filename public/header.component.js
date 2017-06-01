(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('headerComp', {
      templateUrl: 'header.html',
      controller: headerCtrl
    });

  function  headerCtrl() {
        const vm = this

        vm.test = 'header test'

    }
}())
