angular.module('giphyAPP', [])
		.controller('giphyController', function($scope, $http) {
				$http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=g&tag=thank-you')
					.then(function(res) {
						$scope.img = res.data.data;
				});
		});
