// configure then 7. add <div ng-view></div> to index.html
myApp.config(function($locationProvider,$routeProvider,$sceDelegateProvider){

    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from outer templates domain.
    'http://api.wunderground.com/**'
  ]);
    // $locationProvider below allows us to remove # from in front of nav href links to pages
        // go to index.html and add tag inside of <head> <base href="/">
    $locationProvider.html5Mode( true );
    $locationProvider.hashPrefix( '!' );
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.htm',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'views/forecast.htm',
        controller: 'forecastController'
    });
});
