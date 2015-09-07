auxilinguaControllers.controller('CommonPhraseQuizController',
    function($scope, Api) {
        $scope.visibility="invisible";
        $scope.phrases = Api.Phrases.get();
        var size = $scope.phrases.length;

        $scope.getPossibilities = function(){
            $scope.answerClass = "";


        $scope.possibilities = getPhrases();

        }

        function getPhrases(){
            $scope.answer = makeUniqueRandom();
            var options = [$scope.answer, makeUniqueRandom(), makeUniqueRandom(), makeUniqueRandom()];

            options = Shuffle(options);
            $scope.visibility="visible";
            return options;


        }
        function makeUniqueRandom() {
            // refill the array if needed
            if (!$scope.phrases.length) {
                $scope.phrases = Api.Phrases.get();
            }
            var index = Math.floor(Math.random() * $scope.phrases.length);
            var val = $scope.phrases[index];

            // now remove that value from the array
            $scope.phrases.splice(index, 1);

            return val;


        }

        function Shuffle(o) {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }

        $scope.checkAnswer = function(phrase){
            if(phrase === $scope.answer.id){
                console.log("Correct!!!The phrase ID = :"+phrase+" and the answer ID = "+$scope.answer.id  );
                $scope.answerClass = "alert-success";
            }else{
                console.log("Wrong!!!!The phrase ID = :"+phrase+" and the answer ID = "+$scope.answer.id );
                $scope.answerClass = "alert-danger";
            }
        }

    });