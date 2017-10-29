// create & then 9. & 10.
myApp.service('forecastService', ['$http',function($http){
    //default city

    this.lookup = (city, state)=>{
        let url =`http://api.wunderground.com/api/783082a6bf934df0/forecast/q/${encodeURIComponent(state.trim().replace(' ','_'))}/${encodeURIComponent(city.trim().replace(' ','_'))}.json`;

        return $http({
            method: 'GET',
            url: url
        })
        .then(results=>{
            let error= (results.response && results.response.error);
            let forecast = results.data.forecast;
            if (forecast && forecast.simpleforecast && forecast.simpleforecast.forecastday ) {

                this.forecast=forecast.simpleforecast.forecastday;
            }
            else { alert('data not expected')}

            if(error) {
                this.error= error;
            }
            else {this.error= null;}
            });
    };
}]);
