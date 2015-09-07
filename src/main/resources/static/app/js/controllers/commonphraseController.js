auxilinguaControllers.controller('CommonPhraseController',
    function($scope, Api) {
        $scope.phrases = Api.Phrases.get();


    });