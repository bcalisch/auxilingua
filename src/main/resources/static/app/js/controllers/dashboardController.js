auxilinguaControllers.controller('DashboardController',
    function($scope) {
    $scope.goto = function(url){
    window.location.href=url;
    }


    });