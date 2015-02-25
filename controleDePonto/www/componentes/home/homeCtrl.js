'use strict';

angular.module('starter')
	.controller('HomeCtrl',['$scope',
		function($scope){
			$scope.lista = [];

			for(var i = 0; i < 1000; i++){
				$scope.lista.push({id: i});
			}
		}
	]);