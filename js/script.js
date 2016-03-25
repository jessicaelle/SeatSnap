var seatsnAPP = angular.module('seatsnAPP', ['ngRoute']);

// route config
seatsnAPP.config(function($routeProvider) {
  $routeProvider

      .when('/', {
          templateUrl : 'pages/home.html',
          controller : 'mainController'
      })

      .when('/about', {
          templateUrl : 'pages/about.html',
          controller : 'aboutController'
      })

      .when('/remind', {
          templateUrl : 'pages/remind.html',
          controller : 'remindController'
      })

      .when('/schedule', {
          templateUrl : 'pages/schedule.html',
          controller : 'scheduleController'
      })

      .when('/contact', {
          templateUrl : 'pages/contact.html',
          controller : 'contactController'
      });

});


seatsnAPP.controller('mainController', function($scope) {
  $scope.message = 'Homepage test';
    });

seatsnAPP.controller('aboutController', function($scope) {
  $scope.message = 'About page test';
    });

seatsnAPP.controller('contactController', function($scope) {
  $scope.message = 'Contact page test';
    });

seatsnAPP.controller('remindController', function($scope) {
  $scope.message = 'Get reminded to check-in to your flight one hour before youre able to.';
    });

seatsnAPP.controller('scheduleController', function($scope) {
  $scope.message = 'Let us take care of your check-in for you. Add your flight info below to ';
    });

// BUTTON TRIGGERS
//
// .directive( 'goClick', function ( $location ) {
//       return function ( scope, element, attrs ) {
//         var path;
//
//         attrs.$observe( 'goClick', function (val) {
//           path = val;
//         });
//
//         element.bind( 'click', function () {
//           scope.$apply( function () {
//             $location.path( path );
//           });
//         });
//       };
//     });
