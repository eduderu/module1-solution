(function(){

	'use strict';

	angular.module("LunchCheck", [])

	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.resultMsg = "";

		$scope.itemStrings = "";

		$scope.textStyle = {};

		$scope.textboxBorderStyle = {};


		$scope.checkItem = function(){
			var checkItemString = $scope.itemStrings.length;

			if(checkItemString == 0){
				$scope.resultMsg = "Please enter data first.";
				$scope.textStyle.color = {"color": "red"};
			}

			else
			{

			var num = $scope.itemStrings.split(",").filter(Boolean);
			if(num == 0){
				$scope.resultMsg = "Please enter data first.";
				$scope.textStyle.color = {"color": "red"};
				$scope.textboxBorderStyle.border = {"border": "red"};
			}
			else if (num.length <= 3){
				$scope.resultMsg = "Enjoy!";
				$scope.textStyle.color = {"color": "green"};
			}else{
				$scope.resultMsg = "Too much!";
				$scope.textStyle.color = {"color": "green"};
			}
			console.log(num.length);
		}
          
		};
	}

})();