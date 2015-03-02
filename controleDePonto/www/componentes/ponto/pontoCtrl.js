'use strict';

angular.module('starter')
	.controller('PontoCtrl',['$scope', '$state', 'pontos',
		function($scope, $state, pontos){
			
		}
	])
    .controller('PontoDetailCtrl', ['$scope', '$stateParams', 'pontos',
        function($scope, $stateParams, pontos) {
            $scope.ponto = pontos.getPonto($stateParams.pontoId);
        }
    ]);