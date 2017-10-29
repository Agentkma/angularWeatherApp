// 9. inject services into controllers by adding to [array and () variables]
myApp.controller('homeController', ['$scope','$location','forecastService', function($scope, $location,forecastService  ){

    $scope.submit = function(){
    
        $location.path('/forecast');
    };
//10.a add city value to $scope that is received from the


// //11. watch the city value  on home page(value will change when form input gets new city) & update ; then 12. bind city variable to home.html page input


$scope.states = ["Choose A State",
"AL","AK","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","NE","NH","NJ","NM","NV","NY","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WI","WV","WY"];

}]);

myApp.controller('forecastController', ['$scope','$resource','forecastService', function($scope,$resource,forecastService){


//11. create weatherAPI var =  to the weath API

//12. create weatherResult var = to requesting city param resulting data object
// 13...go to forecast.htm

forecastService.lookup($scope.$root.city,$scope.$root.state).then(()=>{
    $scope.$root.error= forecastService.error;
    $scope.$root.weatherResult= forecastService.forecast;

});



}]);
