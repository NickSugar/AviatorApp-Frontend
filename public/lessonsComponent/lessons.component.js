(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('lessons', {
      templateUrl: './lessonsComponent/lessons.html',
      controller: [
        'authService',
        'aviatorsAPIservice',
        '$state',
        '$stateParams',
        lessonCtrl
      ]
    });

  function  lessonCtrl(
    authService,
    aviatorsAPIservice,
    $state,
    $stateParams
    ) {
        const vm = this

        vm.auth = authService
        vm.lessons = $stateParams.lessons.data
      }
}())
