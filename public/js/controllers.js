'use strict';

/* Controllers */
var GotControllers = angular.module('GotControllers', []);


GotControllers.controller('GotCharList', function ($scope,$http) {
  
 $scope.showData = function( ){

    $http.get('characters.json').success(function(data) {
      $scope.characters = data;
    });

        //show more functionality
			  var pagesShown = 1;
		    var pageSize = 4;
		    
		    $scope.paginationLimit = function(data) {
		        return pageSize * pagesShown;
		    };
		    $scope.hasMoreDataToShow = function() {
		        return pagesShown < ($scope.datalists.length / pageSize);
		    };
		    $scope.showMoreData = function() {
		        pagesShown = pagesShown + 1;       
		    };	
     

}

  });

GotControllers.controller('GotCharFamily', ['$scope', '$routeParams','$http',
  function($scope, $routeParams, $http) {

    $http.get('characters/family/' + $routeParams.char_family + '.json').success(function(data) {
      $scope.family_chars = data;
    });

    $http.get('characters.json').success(function(data) {
      $scope.families = data;
    });

    
}]);


GotControllers.controller('GotCharDetails', ['$scope', '$routeParams','$http',
  function($scope, $routeParams, $http) {
    $http.get('characters/' + $routeParams.id + '.json').success(function(data) {
      $scope.char_details = data;
    });

  }]);


