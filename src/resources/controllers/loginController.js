'use strict';

angular.module('myApp')
	.controller('LoginController',
	function ($scope, $location, $state) {
        $scope.message = 'LOGIN CONTROLLER';
        $scope.login = function(){
            alert("Realizando login")
            $state.go("home");
        }

	});
 

 