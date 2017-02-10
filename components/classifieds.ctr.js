( function(){
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("ClassifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {

            // $scope.name = {
            //     first:  "Dhanashree",
            //     last: "Kulkarni"
            // };
            var contact = {
                name: "Jane Doe",
                phone: "555 555-5555",
                email: "fakeemail@hotmail.com"
            }

            classifiedsFactory.getClassifieds().then(function (remoteData) {
                 $scope.classifieds = remoteData.data;
                // console.log(data);
            });

            $scope.openSidebar = function() {
                $mdSidenav('left').open();
            };

            $scope.closeSidebar = function() {
                $mdSidenav('left').close();
            };

            $scope.saveClassified = function (classified) {
                if(classified){
                    classified.contact = contact;
                    $scope.classifieds.push(classified);
                    $scope.classified = {};
                    $scope.closeSidebar();
                    $mdToast.show(
                        $mdToast.simple()
                            .content("Item Added Successfully")
                            .position('top, right')
                            .hideDelay(3000)
                    );
                }
            }

        })

})();