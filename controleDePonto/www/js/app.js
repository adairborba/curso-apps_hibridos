'use strict';

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(['$ionicPlatform', function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}])

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
  $stateProvider

    .state('app',{
      url:'/app',
      abstract: true,
      templateUrl:"componentes/_common/menu.html",
      controller:'AppCtrl'
    })

    .state('app.home',{
        url: "/home",
        views: {
          'appContent': {
            templateUrl: 'componentes/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

    .state('app.ponto',{
        url: "/ponto",
        views: {
          'appContent': {
            templateUrl: 'componentes/ponto/add_ponto.html',
            controller: 'PontoCtrl'
          }
        }
      })

    .state('app.localizacao',{
        url: "/localizacao",
        views: {
          'appContent': {
            templateUrl: 'componentes/localizacao/localizacao.html',
            controller: 'LocalizacaoCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/app/home');
}])
