(function () {
    
    'use strict';
    
    var app = angular.module('uajs', ['ngRoute', 'ngMessages']);

    var mainController = function ($scope) {

        $scope.name = 'Giorgi';
        
            setTimeout(function() {

            $scope.$apply(function() {

                $scope.twitterHandle = 'giorgi_pro'
            });

        }, 3000);
    }
        
    app.controller('mainController', ['$scope', mainController]);
    
}());