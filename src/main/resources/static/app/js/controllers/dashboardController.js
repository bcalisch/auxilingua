auxilinguaControllers.controller('DashboardController',
    function($scope, $rootScope) {
    $scope.goto = function(url){
    window.location.href=url;

    }
    $scope.User = $rootScope.user;



    });