var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, dataService) {
    var data;
	$scope.quotes = dataService.getData();    
    
    $scope.addQuote = function(addInputQ, addInputA) {
        dataService.addData(addInputQ, addInputA);
        $scope.addInputQ = "";
        $scope.addInputA = "";
    };
    
    $scope.removeQuote = function(removeInput) {
        dataService.removeData(removeInput);
        $scope.removeInput = "";
    };
    
});