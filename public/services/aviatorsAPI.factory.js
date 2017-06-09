(function () {

  'use strict';

  angular
    .module('aviatorsApp')
    .factory('aviatorsAPIservice', aviatorsAPIservice);

  aviatorsAPIservice.$inject = ['$http'];

  function aviatorsAPIservice($http) {

    const vm = this
    vm.service = {}


//======================
// Plane routes
//======================
    vm.service.getPlanes = ()=> {
      return $http.get('https://aviatorsapp.herokuapp.com/planes')
    }

//======================
// Manual routes
//======================
    vm.service.getManualLesson = (id)=>{
      return $http.get('https://aviatorsapp.herokuapp.com/manual/:id/lesson')
    }

//======================
// License routes
//======================
    vm.service.getLicenseLesson = (id)=>{
      return $http.get('https://aviatorsapp.herokuapp.com/license/:id/lesson')
    }

//======================
// License routes
//======================
    vm.service.getLessons = (lessonsOn)=>{
      return $http.get('https://aviatorsapp.herokuapp.com/lessons/'+lessonsOn)
    }
//======================
// routes
//======================
//======================
// routes
//======================
//======================
// routes
//======================
    return vm.service
  }
})();
