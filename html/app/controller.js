angular.module('app').controller("MainController", function($http){
    var vm = this;
    vm.test = 'test';
	$http.get('./games.json')
		.then(function(res){
			vm.game_names = res.data.games;
			vm.games = [];
			for (var gi = 0; gi < vm.game_names.length; gi++){
				$http.get('../games/' + vm.game_names[gi])
					.then(function(res){
						vm.games.push(res.data);
					});
			}
		});
});