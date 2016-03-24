<script>
// ///HOW IT WORKS HIDER////
// $(document).ready(function () {
//     setTimeout(function(){
//         $('#howItWorks').fadeIn(500);
//     }, 10000);
// });

//ANGULAR//
var seatsnAPP = angular.module('seatsnAPP', ['ngRoute']);


seatsnAPP.controller('mainController', function($scope) {
  $scope.message = 'Testing hereeee';
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
