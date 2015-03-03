'use strict';

angular.module('starter')
	.service('DB', ['pouchDB', function(pouchDB){
		return pouchDB('pontoDB');
	}])

	.service('pontos', ['DB', function(DB){
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

		var pontosView = {
			_id: '_design/pontos',
			views: {
				'pontos': {
					map: function (doc) { emit(doc.ponto); }.toString()
		 		}
			}
		}

		DB.put(pontosView);

		this.add = function(callback){
			navigator.geolocation.getCurrentPosition(function(pos){
				var novoPonto = {
					ponto: true,
					date: moment().format('DD/MM/YYYY HH:mm'),
					photo: '',
					geo: pos.coords
				};

				DB.post(novoPonto).then(function(data){
					novoPonto._id = data.id;
					if(typeof callback !== 'undefined'){
						return callback(novoPonto);
					}
				},function(error){
					console.dir(error);
				});
			}, function(error){
				console.dir(error);
			});
		}

		this.getAll = function(){
			return DB.query('pontos', {'include_docs': true});
		}

        this.getPonto = function(id){
            console.dir("ponto");
            return DB.get(id);
        }
	}])

	.service('localizacao', ['DB', function(DB){
		var localizacaoView = {
			_id: '_design/localizacao',
			views: {
				'localizacao': {
					map: function (doc) { emit(doc.localizacao); }.toString()
		 		}
			}
		}
		DB.put(localizacaoView);

		this.add = function(callback){
			navigator.geolocation.getCurrentPosition(function(pos){
				var novaLocalizacao = {
					_id: 1,
					localizacao: true,
					geo: pos.coords
				};

				DB.put(novaLocalizacao).then(function(data){
					if(typeof callback !== 'undefined'){
						return callback(novaLocalizacao);
					}
				},function(error){
					console.dir(error);
				});
			}, function(error){
				console.dir(error);
			});
		}

        this.get = function(){
            return DB.get(1);
        }
	}]);