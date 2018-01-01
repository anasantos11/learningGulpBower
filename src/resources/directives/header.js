'use strict';

angular.module('myApp')
	.directive('header',function(){
		return {
        templateUrl:'templates/header.html',
        restrict: 'E',
        replace: true,
    	}
	});


