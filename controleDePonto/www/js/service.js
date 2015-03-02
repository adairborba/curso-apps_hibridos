'use strict';

angular.module('starter')
	.service('pontos', function(){
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

		var list = [];

		this.add = function(callback){
<<<<<<< HEAD
			navigator.geolocation.getCurrentPosition(function(pos){
				list.push({
					id: _.uniqueId(),
					date: Date.now(),
=======
            console.dir("add");
			navigator.geolocation.getCurrentPosition(function(pos){
				list.push({
					id: _.uniqueId(),
					date: moment().format('DD/MM/YYYY'),
>>>>>>> 8c272ee97202967b429c87dc82bd0fcc9ddd8014
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
<<<<<<< HEAD
=======

        this.getPonto = function(id){
            console.dir("ponto");
            return _.find(list,{'id':id});
        }
>>>>>>> 8c272ee97202967b429c87dc82bd0fcc9ddd8014
	});