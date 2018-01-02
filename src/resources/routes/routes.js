// Definindo Rotas
angular.module('myApp')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'home@': {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          'login@': {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
          }
        }
      })
       .state('about', {
         parent: 'home',
         url: '/about',
         views: {
           'home@': {
             templateUrl: 'templates/about.html',
             controller: 'AboutController'
           }
         }
 
       })
       .state('contact', {
         parent: 'home',
         url: '/contact',
         views: {
           'home@': {
             templateUrl: 'templates/contact.html',
             controller: 'ContactController'
           }
         }
       });

    // Utilizando o HTML5 History API
    //$locationProvider.html5Mode(true);
  });
