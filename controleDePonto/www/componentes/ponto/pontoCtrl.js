'use strict';

angular.module('starter')
	.controller('PontoCtrl',['$scope', '$state', 'pontos',
		function($scope, $state, pontos){
			
		}
<<<<<<< HEAD
	]);
=======
	])
    .controller('PontoDetailCtrl', ['$scope', '$stateParams', 'pontos',
        function($scope, $stateParams, pontos) {
            $scope.ponto = pontos.getPonto($stateParams.pontoId);
        }
    ]);
>>>>>>> 8c272ee97202967b429c87dc82bd0fcc9ddd8014
