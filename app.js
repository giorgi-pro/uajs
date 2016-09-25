(function () {
    
    'use strict';
    
    var app = angular.module('uajs', ['ngRoute', 'ngMessages']);

    var mainController = function ($scope) {

        $scope.name = 'Giorgi';
    }
    
    app.controller('mainController', ['$scope', mainController]);
    
}());

