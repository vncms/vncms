angular
    .module('vn.core', ['ui.router'])
    .constant('settings', {
        info: {
            name: 'Your website name',
        },
        default: {
            path: '/home',
        },
        path: {
            base: '/',
            app: 'app/',
            components: 'app/components/',
        }
    })
    .config(function($stateProvider, $urlRouterProvider, settings) {
        $urlRouterProvider.otherwise(settings.default.path);
    })
    .run(function($rootScope, settings, $mdSidenav) {
        $rootScope.sidebar = {
            toggle: function() {
                $mdSidenav('left').toggle();
            },
        };
        $rootScope.settings = settings;
    })
