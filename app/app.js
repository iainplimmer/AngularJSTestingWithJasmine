(function() {
  'use strict';

  angular.module('ngTesting', [
    'ui.router'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");    
    console.log('piss')
  });
})();