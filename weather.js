var request = require('request')

//id de la ville
//const idTown    = "6427109"


function Weather() {
    this.idTown = null;
    this.key    = null;
    this.data   = null;
    this.variabletest = null;
}

Weather.prototype.getJson = function(idTown, key, callback) {

    var url     = "http://api.openweathermap.org/data/2.5/weather?id="+idTown+"&APPID="+key

    this.data = request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            callback(body);
        }
        else {
            callback(error);
        }
    })

};

Weather.prototype.getHumidity = function(callback) {

    this.getJson(this.idTown, this.key, function(data) {
        callback(data.main.humidity);
    });

}

Weather.prototype.getTemperature = function(callback) {

    this.getJson(this.idTown, this.key, function(data) {
        callback(Math.round(data.main.temp-273.15));
    });

    this.variabletest = "eofihoeifhoeifh";

}

Weather.prototype.getPressure = function(callback) {

    this.getJson(this.idTown, this.key, function(data) {
        callback(data.main.pressure);
    });

}

Weather.prototype.getWind = function(callback) {

    this.getJson(this.idTown, this.key, function(data) {
        callback(Math.round(data.wind.speed*3.6));
    });

}

Weather.prototype.test = function() {
    return this.data;
}

module.exports = Weather;