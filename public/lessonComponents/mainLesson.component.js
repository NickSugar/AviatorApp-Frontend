(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('lesson', {
      templateUrl: './lessonComponents/mainLesson.html',
      controller: [
        'authService',
        'aviatorsAPIservice',
        '$state',
        '$stateParams',
        mainLessonCtrl
      ]
    });

  function  mainLessonCtrl(
    authService,
    aviatorsAPIservice,
    $state,
    $stateParams
    ) {
        const vm = this

        vm.auth = authService
        vm.content = $stateParams.content.data

        console.log(vm.content);
      }
}())
