'use strict';

angular.module('starter')
	.service('pontos', function(){
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

		var list = [];

		this.add = function(callback){
            console.dir("add");
			navigator.geolocation.getCurrentPosition(function(pos){
				list.push({
					id: _.uniqueId(),
					date: moment().format('DD/MM/YYYY'),
					photo: '',
					geo: pos.coord
				});

				if(typeof callback !== 'undefined'){
					return callback();
				}
			}, function(error){
				console.dir(error);
			});
		}

		this.getAll = function(){
			return list;
		}

        this.getPonto = function(id){
            console.dir("ponto");
            return _.find(list,{'id':id});
        }
	});