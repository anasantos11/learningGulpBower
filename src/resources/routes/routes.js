// Definindo Rotas
angular.module('myApp')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'content@': {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          'content@': {
            templateUrl: 'templates/login.html',
            controller: 'HomeController'
          }
        }
      })
      .state('about', {
        parent: 'home',
        url: '/about',
        views: {
          'contentHome@home': {
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
          }
        }

      })
      .state('contact', {
        parent: 'home',
        url: '/contact',
        views: {
          'contentHome@home': {
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
          }
        }
      });

    // Utilizando o HTML5 History API
    //$locationProvider.html5Mode(true);
  });
