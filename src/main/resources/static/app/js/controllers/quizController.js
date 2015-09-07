auxilinguaControllers.controller('QuizController',
    function($scope, Api) {
        $scope.attribute = ['', '', '','','',''];
        $scope.visibility ='invisible';
        $scope.init = function(){
            $scope.voiceSelection = $scope.attribute[0];
            $scope.personSelection = $scope.attribute[1];
            $scope.principlePartSelection = $scope.attribute[2];
            $scope.numberSelection = $scope.attribute[3];
            $scope.moodSelection = $scope.attribute[4];
            $scope.tenseSelection = $scope.attribute[5];
        }
        $scope.buttonClass = function(){


        }
        $scope.getWord = function(){
            var randomNumber = Math.round(Math.random() * (121 - 1) + 1);
            $scope.word=Api.OneWord.query({id:randomNumber});
            $scope.clearButtons();
            $scope.visibility ='visible';

        };
        $scope.checkAnswers = function(){

            $scope.voiceSelection = $scope.attribute[0];
            $scope.personSelection = $scope.attribute[1];
            $scope.principlePartSelection = $scope.attribute[2];
            $scope.numberSelection = $scope.attribute[3];
            $scope.moodSelection = $scope.attribute[4];
            $scope.tenseSelection = $scope.attribute[5];

        }

        $scope.setSelection = function(number, activity) {
            // $scope.voiceSelection=activity;
            $scope.attribute[number] = activity;

        };

        $scope.clearButtons = function(){
            $scope.attribute = ['', '', '','','',''];
            $scope.checkAnswers();
        }
    });