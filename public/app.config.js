(function() {

  'use strict'

  angular
    .module('aviatorsApp')
      .config(config)

  config.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    'angularAuth0Provider'
  ]

  function config (
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    angularAuth0Provider
  ) {
      $stateProvider
      .state('home', {
        url: '/',
        template: '<home-comp></home-comp>'
      })
      .state('premiumHome', {
        url: '/premium',
        template: '<premium-home></premium-home>'
      })
      .state('lessons', {
        url: '/lessons',
        template: '<lessons></lessons>',
        params: {
          params: null
        }
      })
      .state('lesson', {
        url: '/lesson',
        template: '<lesson></lesson>',
        params: {
          content: null
        }
      })

      angularAuth0Provider.init({
        clientID: 'maJvJASZ801qZc0InQYbyGyhMOVeyLan',
        domain: 'nicksugar.auth0.com',
        responseType: 'token id_token',
        audience: 'https://nicksugar.auth0.com/userinfo',
        redirectUri: 'https://aviatorsapp.com/premium',
        scope: 'openid'
      });

      $urlRouterProvider.otherwise('/');

      $locationProvider.hashPrefix('');

      $locationProvider.html5Mode(true);
  }
})()
