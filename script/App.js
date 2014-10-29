var App = angular.module('myApp',['ngRoute','ngAnimate']);
App.run(function ($http,$rootScope,$location) {
    $rootScope.$on('$routeChangeSuccess', function(){
        if(typeof ga !== 'undefined') {
            ga('send', 'pageview', $location.path());
        }
    });
});

App.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(false).hashPrefix('!');
    $routeProvider
        .when('/',{
            templateUrl : './template/MainPage.html',
            controller : 'WatCtrl'
        })
        .when('/page:params',{
            templateUrl : function($routeParams){
                return './template/'+$routeParams.params + ".html";
            },
            controller : 'WatCtrl'
        })
        .otherwise({
            redirectTo : '/'
        })
    ;
});
App.animation('.myCustomAnimate', function() {
    return {
        enter : function(element, done) {
            element.css({'opacity': 0});
            element.animate({
                'opacity': 1
            },1000, done);
        },
        leave : function(element, done) {
            var width = element.width();
            element.css({'position':'absolute','width': width});
            element.animate({'opacity':0},1000, done);
        }
    }
});