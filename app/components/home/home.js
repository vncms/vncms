angular
    .module('vn.home', ['ui.router', 'vn.core', 'ngMaterial'])
    .config(function($stateProvider, $urlRouterProvider, settings) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: settings.path.components + 'home/home.html',
            })
    })
