'use strict';

angular.module('starter')
	.controller('HomeCtrl',['$scope', 'pontos',
		function($scope, pontos){
			pontos.getAll().then(function(data){
				$scope.list = _.pluck(data.rows, 'doc');
			});

			$scope.add = function(){
				pontos.add(function(item){
					$scope.list.unshift(item);
				});
			}

			function onChange(change) {
		      $scope.docs.push(change);
		    }
		}
	]);