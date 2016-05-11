(function () {

  angular.module('mqcproduccio.services', [])

    .factory('produccioService', ['$http', '$q', '$filter', '$window', function ($http, $q, $filter, $window) {
      var normalize = $filter('normalize');
      var localStorage = $window.localStorage;

      function all() {
        var deferred = $q.defer();

        // $http.get('/produccio/admin/produccions.json')   //font de dades
        $http.get('/produccio/admin/produccions.json')   //font de dades
          .success(function (data) {
            deferred.resolve(data);
          });

        return deferred.promise;
      }

      function byId(id) {
        //name = normalize(name);
        var deferred = $q.defer();

        all().then(function (data) {
          var results = data.filter(function (produccio) {
            /* per trobar un */
            return produccio.id === id;
            /* per trobar tots els de la coleccio
            return pokemon.type.some(function (t) {
              return normalize(t) === type;
            });*/
          });

          if (results.length > 0) {
            deferred.resolve(results[0]);
          } else {
            deferred.reject();
          }

        });

        return deferred.promise;
      }


      function saveComment(pokemon, comment) {
        var comments = getComments(pokemon);

        comments.push(comment);
        localStorage.setItem(pokemon, JSON.stringify(comments));
      }

      function getComments(pokemon) {
        var comments = localStorage.getItem(pokemon);

        if (!comments) {
          comments = [];
        } else {
          comments = JSON.parse(comments);
        }

        return comments;
      }

      return {
        all: all,
        byId: byId,
        /*byType: byType,
        saveComment: saveComment,
        getComments: getComments*/
      };

    }]);

})();
