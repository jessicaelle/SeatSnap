// ///HOW IT WORKS HIDER////
// $(document).ready(function () {
//     setTimeout(function(){
//         $('#howItWorks').fadeIn(500);
//     }, 10000);
// });

//ANGULAR//
var seatsnAPP = angular.module('seatsnAPP', ['ngRoute']);

// route config
seatsnAPP.config(function($routeProvider) {
  $routeProvider
      //for homepage
      .when('/', {
          templateUrl : 'pages/home.html',
          controller : 'mainController'
      })

      //for about
      .when('/about', {
          templateUrl : 'pages/about.html',
          controller : 'aboutController'
      })

      //for contact
      .when('/contact', {
          templateUrl : 'pages/contact.html'
          controller : 'contactController'
      })

})


seatsnAPP.controller('mainController', function($scope) {
  $scope.message = 'Homepage test';
    });

seatsnAPP.controller('aboutController', function($scope) {
  $scope.message = 'About page test';
    });

seatsnAPP.controller('contactController', function($scope) {
  $scope.message = 'Contact page test';
    });




// //////GIPHY API/////////
// $(document).read(function(){
//   var giphyAPI = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC"
//   var currentPath = window.location.pathname
//   var giphyOptions = {
//     tag: currentPath,
//     rating: "g",
//     fmt: "json"
//   };
//   function displayGIF(data) {
//     var gifHTML = '<img src="' + data.image_url + ' " width="60px">'
//   }
//   $.getJSON(giphyAPI, giphyOptions, displayGIF);
// }); //end ready
