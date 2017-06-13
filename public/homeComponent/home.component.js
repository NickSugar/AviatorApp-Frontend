(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('homeComp', {
      templateUrl: './homeComponent/home.html',
      controller: ['authService', 'aviatorsAPIservice', '$state', homeCtrl]
    });

  function  homeCtrl(authService, aviatorsAPIservice, $state) {

        const vm = Object.assign(this, {
          auth: authService,
          lessons,
          open,
          showAircraft: true,
          showLicenses: false,
          showManuals: false,
          planes: []
        })

        aviatorsAPIservice.getPlanes()
          .then(planes=>{
            vm.planes = planes.data
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

        function lessons(name, fullName) {
            aviatorsAPIservice.getLessons(name)
              .then(lessons=>{
                var params = {lessons, fullName}
                $state.go('lessons', {params})
              })
        }
      }
}())
