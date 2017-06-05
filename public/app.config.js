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
      // .state('premium', {
      //   url: '/premium',
      //   template: '<md-button class="md-primary">Premium</md-button>'
      // })

      // Initialization for the angular-auth0 library
      angularAuth0Provider.init({
        clientID: 'maJvJASZ801qZc0InQYbyGyhMOVeyLan',
        domain: 'nicksugar.auth0.com',
        responseType: 'token id_token',
        audience: 'https://nicksugar.auth0.com/userinfo',
        // redirectUri: 'http://localhost:5000/premium',
        redirectUri: 'https://aviatorsapp.com',
        scope: 'openid'
      });

      $urlRouterProvider.otherwise('/');

      $locationProvider.hashPrefix('');

      /// Comment out the line below to run the app
      // without HTML5 mode (will use hashes in routes)
      $locationProvider.html5Mode(true);
  }
})()
