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
        vm.toggleMenu = toggleMenu
        vm.goToPage = goToPage
        vm.planes = []

        aviatorsAPIservice.getPlanes()
          .then(planes=>{
            vm.planes = planes.data
          })

        function lessons(name) {
            aviatorsAPIservice.getLessons(name)
              .then(lessons=>{
                $state.go('lessons', {lessons: lessons})
              })
        }

        var pages = new Array('one', 'two', 'three', 'four');
        var menuClosed = true

        function toggleMenu() {
          if (menuClosed) {
            document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
          }
        }
        toggleMenu()

        function goToPage(page) {
          if (page === 0) return
          var wrapper = document.getElementsByClassName('wrapper')[0];
          var sections = document.getElementsByTagName('section');
          for (var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('before','after');
            if (i > page) {
              sections[i].classList.add('after');
            }
          }
          wrapper.classList.remove('menu-open','page-one','page-two');
          wrapper.classList.add('page-' + pages[page]);
          menuClosed = !menuClosed
          toggleMenu()
        }
      }
}())
