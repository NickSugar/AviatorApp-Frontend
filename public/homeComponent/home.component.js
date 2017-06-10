(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('homeComp', {
      templateUrl: './homeComponent/home.html',
      controller: ['authService', 'aviatorsAPIservice', '$state', homeCtrl]
    });

  function  homeCtrl(authService, aviatorsAPIservice, $state) {
        const vm = this

        vm.auth = authService

        vm.lessons = lessons
        vm.open = open

        vm.showAircraft = true
        vm.showLicenses = false
        vm.showManuals = false

        vm.planes = []

        aviatorsAPIservice.getPlanes()
          .then(planes=>{
            vm.planes = planes.data
            localStorage.setItem('1234', 'red')
          })

        function open(menuPage) {
          if (menuPage === 'licenses') {
            vm.showAircraft = false
            vm.showManuals = false
            vm.showLicenses = true
          }else if (menuPage === 'aircraft') {
            vm.showManuals = false
            vm.showLicenses = false
            vm.showAircraft = true
          }else {
            vm.showLicenses = false
            vm.showAircraft = false
            vm.showManuals = true
          }
        }

        function lessons(name) {
            aviatorsAPIservice.getLessons(name)
              .then(lessons=>{
                $state.go('lessons', {lessons: lessons})
              })
        }
      }
}())
