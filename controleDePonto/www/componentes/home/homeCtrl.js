'use strict';

angular.module('starter')
	.controller('HomeCtrl',['$scope', 'pontos',
		function($scope, pontos){
			$scope.list = pontos.getAll();

			$scope.add = function(){
				pontos.add(function(){
					$scope.$apply();
				});
			}
		}
	]);