var app=angular.module("myApp",[])

app.controller("myController",["$scope",function($scope){
$scope.message="this is controller i know";
$scope.company="TechMinds Pvt ltd"
$scope.userDetails=[
{name :"Scott Desatnick",address:"Boston,United States"},
{name :"Srikanth",address:"Boston,United States"},
{name :"Scott",address:"Boston,United States"}


]
$scope.change=function(){
	$scope.company="techmind solutions";
}
}])

app.directive("myCustomerDetailsDirective",function(){
return {
	restrict:'EACM',
	templateUrl: 'customerDetails.html',
	replace: true,
	scope:{
		companyName :'@',
		userDetails :'=',
		change:'&'
	}

}

})
