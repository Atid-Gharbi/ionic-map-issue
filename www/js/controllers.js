angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
	var options = {timeout: 10000, enableHighAccuracy: true};
    var latLng = new google.maps.LatLng(10, 10);
 
    var mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

});
