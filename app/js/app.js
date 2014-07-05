'use strict';

var gotApp = angular.module('gotApp', [
  'ngRoute',
  'GotControllers'
]);


gotApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/characters', {
        templateUrl: 'partials/char-list.html',
        controller: 'GotCharList'
      }).
      when('/character/:char_id', {
        templateUrl: 'partials/char-detail.html',
        controller: 'GotCharDetails'
      }).
      when('/character/family/:char_family', {
        templateUrl: 'partials/char-family-list.html',
        controller: 'GotCharFamily'
      }).
      otherwise({
        redirectTo: '/characters'
      });
  }])


// Filters out all duplicate items from an array
gotApp.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});


// angular directive active-link for adding link's active class
gotApp.directive('activeLink', ['$location', function(location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            var clazz = attrs.activeLink;
            var path = attrs.href;
            path = path.substring(1); //hack because path does bot return including hashbang
            scope.location = location;
            scope.$watch('location.path()', function(newPath) {
                if (path === newPath) {
                    element.addClass(clazz);
                } else {
                    element.removeClass(clazz);
                }
            });
        }

    };

    }]);