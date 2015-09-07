auxilinguaControllers.controller('RegistrationController',
    function($scope, Api, $http ){
        $scope.thisResponse = "";
        $scope.visibility = "invisible";
        $scope.user= {id: $scope.Name, password: $scope.password}
    $scope.postUser = function(){
        $scope.visibility = "invisible";
        $http.post('http://localhost:7878/user', $scope.user).
            then(function(response) {
                $scope.thisResponse= "Success";
                $scope.visibility = "visible";
                window.location.href = "./#/dashboard"
            }, function(response) {
                $scope.thisResponse="You cannot reuse the id " + $scope.user.id;;
                $scope.visibility = "visible";
            });
    }
    });