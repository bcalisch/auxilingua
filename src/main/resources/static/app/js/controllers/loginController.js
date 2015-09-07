auxilinguaControllers.controller('LoginController', 
  function($scope, $http) {
  $scope.user= {id: $scope.Name, password: $scope.password}
      if($scope.verified === undefined){
          console.log("Verified: "+$scope.verified);
          $scope.visibility="invisible";
      }
  $scope.verify = function(){



     $http.post('http://localhost:7878/parsingplayground', $scope.user).
  then(function(response) {
    // this callback will be called asynchronously
    // when the response is available

      $scope.verified= response.data;
             if($scope.verified === true){
                 $scope.visibility = "invisible";
                 window.location.href = '#/dashboard';
             }
             else{
                 $scope.visibility = "visible";
             }


  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
   $scope.verified=response.data;

  });
    
  }
  

  });