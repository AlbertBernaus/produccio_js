(function () {

  angular.module('mqcproduccio.controllers', [])
    .controller('produccioController', ['$scope', '$routeParams', 'produccioService', function ($scope, $routeParams, produccioService) {
      var id = $routeParams.id;
      var tipo = $routeParams.type;

      if (id) {
        $scope.id = id;

        produccioService.byId(id).then(function (data) {
          $scope.produccions = data
          //$scope.groupped = partition(data, 4);
        });
      } else if (tipo) {
        $scope.tipo = tipo;

        produccioService.byTipo(tipo).then(function (data) {
          $scope.produccions = data;
          
        });

      } else {
        produccioService.all().then(function (data) {
          $scope.produccions = data;
          //$scope.groupped = partition(data, 4);
        });
      }


      /*function partition(data, n) {
        return _.chain(data).groupBy(function (element, index) {
          return Math.floor(index / n);
        }).toArray().value();
      }*/

    }])

    .controller('TabsController', function () {
      this.tab = 1;

      this.selectTab = function (tab) {
        this.tab = tab;
      };
    });

})();
