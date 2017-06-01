(function() {

  'use strict'

  angular
    .module('aviatorsApp')
      .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('posts', {
      url: '/',
      template: '<md-button class="md-primary">Primary Button</md-button>'
    })
    // .state('editPost', {
    //   url: '/posts/{post_id}/edit',
    //   template: '<edit-post></edit-post>'
    // })
    $urlRouterProvider.otherwise('/')
    // $locationProvider.html5Mode(true)
  }
})()
