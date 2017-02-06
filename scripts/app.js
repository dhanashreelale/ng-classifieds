/**
 * Created by laled on 1/31/17.
 */
    angular
        .module('ngClassifieds', ['ngMaterial'])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('orange');
        })
        .directive("helloWorld", function () {
            return {
                template: "<h1>Hello, World</h1>"
            }
            }

        );