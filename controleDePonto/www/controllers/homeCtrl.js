'use strict';

angular.module('starter')
	.controller('HomeCtrl',['$scope', '$ionicSideMenuDelegate',
		function($scope, $ionicSideMenuDelegate){
			$scope.lista = [];
			$scope.toggleLeft = toggleLeft;

			for(var i = 0; i < 1000; i++){
				$scope.lista.push({id: i});
			}

			function toggleLeft(){
				$ionicSideMenuDelegate.toggleLeft();
			}
		}
	]);