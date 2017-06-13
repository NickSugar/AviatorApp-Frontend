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
        vm.content = buildLesson()


        function buildLesson() {
          var rawContent = $stateParams.content.data
          var content = {}

          for (var i = 0; i < rawContent.length; i++) {

            if (rawContent[i].type === 'sectionHeader') {
              content.header = rawContent[i].content
            }

            if (rawContent[i].type === 'dataList') {
              content.dataList = parseDateList(rawContent[i].content)
            }

          }
          return content
        }

        function parseDateList(content) {
          var parts = content.split(';')
          for (var i = 0; i < parts.length; i++) {
            if (/^\(/) {

            }
          }
        }

      }
}())
