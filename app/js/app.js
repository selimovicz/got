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