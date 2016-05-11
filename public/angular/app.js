(function () {

  var app = angular.module('mqcproduccio', [
    'ngRoute',
    'mqcproduccio.controllers',
    'mqcproduccio.directives',
    'mqcproduccio.filters',
    'mqcproduccio.services'
  ])

  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'produccioController'
      })
      .when('/llistat-produccions', {
        templateUrl: 'views/llistatproduccions.html',
        controller: 'produccioController'
      })
      .when('/llistat-produccions/:type', {
        templateUrl: 'views/llistatproduccions.html',
        controller: 'produccioController'
      })
      .when('/produccio/:id', {
        templateUrl: 'views/produccio.html',
        controller: 'produccioController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();
