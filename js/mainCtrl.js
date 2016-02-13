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
    
    $scope.click = {
        add: function(add) {
            $scope.showAddQuote = !$scope.showAddQuote;
            $scope.showRemoveQuote = false;
            $scope.showFilterQuotes = false;
        },
        remove: function() {
            $scope.showRemoveQuote = !$scope.showRemoveQuote;
            $scope.showAddQuote = false;
            $scope.showFilterQuotes = false;
        },
        filter: function() {
            $scope.showFilterQuotes = !$scope.showFilterQuotes;
            $scope.showAddQuote = false;
            $scope.showRemoveQuote = false;            
        }
    }
    
});