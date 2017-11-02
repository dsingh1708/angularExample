var app =angular.module('routeConfig',['ngRoute'])
 .config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
$routeProvider
	     .when("/login", {
            templateUrl: "login.html",
            controller: "myController" 

	 });
	$scope.login =function () {
	 if($scope.Uname =="divya" && $scope.Pwd =="abc")
	 {
	    // $location.path('/login');	 
	    alert('login sucessfull'); 
	  
		  
	 }
	 else {
	  alert('invalid username and password'); 
	  } 
	}
}]);