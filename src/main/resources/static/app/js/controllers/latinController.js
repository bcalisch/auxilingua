auxilinguaControllers.controller('LatinDetailCtrl',
  function($scope, Api) {
    $scope.classN= 'crossedOut';
    $scope.attribute = ["", "", "","","", ""];
    $scope.words = Api.Words.get();


    $scope.buttonClass = function(){

    }
    
    $scope.getButtonClass = function(attributeNumber, value){
      var buttonClassName = $scope.attribute[attributeNumber];
      console.log(buttonClassName);
      if (buttonClassName === value){
        return "btn btn-default word active";
      }
      return "btn btn-default word";
    }
    $scope.getClass=function(word){
    // var notFound = -1
    var blank = "";

    $scope.voiceSelection = $scope.attribute[0];
    $scope.personSelection = $scope.attribute[1];
    $scope.principlePartSelection = $scope.attribute[2];
    $scope.numberSelection = $scope.attribute[3];
    $scope.moodSelection = $scope.attribute[4];
    $scope.tenseSelection = $scope.attribute[5];

       if(($scope.voiceSelection === word.voice || $scope.attribute[0] === blank)
        &&($scope.personSelection ===word.person || $scope.attribute[1] === blank)
        &&($scope.principlePartSelection === word.principlePart|| $scope.attribute[2] === blank)
        &&($scope.numberSelection === word.number  || $scope.attribute[3] === blank)
        &&($scope.moodSelection === word.mood || $scope.attribute[4] === blank)
        &&($scope.tenseSelection === word.tense || $scope.attribute[5] === blank)){

        $scope.classN = 'word';
        
     }else{
        $scope.classN = 'word crossedOut';
     }
    
      return $scope.classN;
    }
    $scope.setSelection = function(number, activity) {
      // $scope.voiceSelection=activity;
      $scope.attribute[number] = activity;
  };

  $scope.clearButtons = function(){
    $scope.attribute = ["", "", "","","", ""];
  }

  $scope.findWord = function(word){
    console.log(word);
    $scope.attribute[0]=word.voice;
    $scope.attribute[1]=word.person;
    $scope.attribute[2]=word.principlePart;
    $scope.attribute[3]=word.number;
    $scope.attribute[4]=word.mood;
    $scope.attribute[5]=word.tense;
  }
  

  });