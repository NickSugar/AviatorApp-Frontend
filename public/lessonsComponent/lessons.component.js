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
        vm.lessons = $stateParams.params.lessons.data
        vm.lessonOn = $stateParams.params.fullName
        vm.start = start

        function start(lesson_id) {
          console.log('start');
          aviatorsAPIservice.getLessonContent(lesson_id)
            .then(content=>{
              console.log(content);
              $state.go('lesson', {content: content})
            })
        }
      }
}())
