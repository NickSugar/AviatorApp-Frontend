(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('premiumHome', {
      templateUrl: './premiumHomeComponent/premiumHome.html',
      controller: ['authService', premiumHomeCtrl]
    });

  function  premiumHomeCtrl(authService) {
        const vm = this

        vm.auth = authService
        vm.toggleMenu = toggleMenu
        vm.goToPage = goToPage

        var pages = new Array('one', 'two', 'three', 'four');
        var menuClosed = true

        function toggleMenu() {
          if (menuClosed) {
            document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
          }
        }
        toggleMenu()

        function goToPage(page) {
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
