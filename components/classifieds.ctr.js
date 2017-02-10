( function(){
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("ClassifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

            // $scope.name = {
            //     first:  "Dhanashree",
            //     last: "Kulkarni"
            // };
            var contact = {
                name: "Jane Doe",
                phone: "555 555-5555",
                email: "fakeemail@hotmail.com"
            };

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
                    $scope.showToast("Classified Saved!");
                }
            };

            $scope.editClassified = function (classified) {
                $scope.editing = true;
                $scope.openSidebar();
                $scope.classified = classified;
            };

            $scope.deleteClassified = function (event, classified) {
                var confirm = $mdDialog.confirm()
                    .title('Are you sure you want to delete this ' + classified.title +'? Its fancy')
                    .ok('Yes :(')
                    .cancel('Noooo')
                    .targetEvent(event);
                $mdDialog.show(confirm).then(function () {
                    var index = $scope.classifieds.indexOf(classified);
                    $scope.classifieds.splice(index,1);
                }, function () {
                    
            })
            };


            $scope.saveEdit = function() {
                $scope.editing = false;
                $scope.classified = {};
                $scope.closeSidebar();
                $scope.showToast("Edit Saved!");
            };

            $scope.showToast = function(message) {
                $mdToast.show(
                    $mdToast.simple()
                        .content(message)
                        .position('top, right')
                        .hideDelay(3000)
                )
            }

        })

})();