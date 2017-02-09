( function(){
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("ClassifiedsCtrl", function($scope, $http, classifiedsFactory) {

            // $scope.name = {
            //     first:  "Dhanashree",
            //     last: "Kulkarni"
            // };

            classifiedsFactory.getClassifieds().then(function (remoteData) {
                 $scope.classifieds = remoteData.data;
                // console.log(data);
            })

        })

})();