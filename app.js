(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController' , LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.status=0;
    $scope.check=0;
    $scope.message=function(){
      var s=splitString($scope.string,',')
      $scope.status=s;
    };
    function splitString(stringToSplit, separator){
      var arrayOfStrings = stringToSplit.split(separator);
      var length=arrayOfStrings.length;
      return length;

    };
    $scope.chk= function (){
      $scope.check=1;
    };
  }
})();


// <div ng-if="{{status}}==0">
  //  "Empty String"
  //</div>
  //<div ng-if="{{status}}<=3">
    //"Enjoy!"
  //</div>
  //<div ng-if="{{status}}>3">
    //"Too much!"
  //</div>
