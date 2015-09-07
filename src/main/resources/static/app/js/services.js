'use strict';

/* Services */

var auxilinguaServices = angular.module('auxilinguaServices', ['ngResource']);

auxilinguaServices.factory('Api',
    function ($resource) {
        return {

            Words: $resource('http://localhost:7878/parsingplayground', {}, {
                get: {method: 'GET', isArray: true},
            }),
            OneWord: $resource('http://localhost:7878/word?id=:id', {id: '@id'}, {
                query: {method: 'get', params: {id: '@id'}, isArray: false}
            }),
            Phrases: $resource('http://localhost:7878/commonphrases', {}, {
                get: {method: 'get', isArray: true}
            })
        }
    });


// angular.module('myApp.services', ['ngResource']).
//   factory("geoProvider", function($resource) {
//     return {
//       states: $resource('../data/states.json', {}, {
//         query: { method: 'GET', params: {}, isArray: false }
//       }),
//       countries: $resource('../data/countries.json', {}, {
//         query: { method: 'GET', params: {}, isArray: false }
//       })
//     };
//   });