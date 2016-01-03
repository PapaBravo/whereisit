angular.module('app').controller("MainController", function($http){
    var vm = this;
    vm.title = 'This is my title';
    vm.searchInput = '';
    vm.new = {};
	vm.addShow = function() {
	    vm.shows.push(vm.new);
	    vm.new = {};
	};

	$http.get('data/series.json')
		.then(function(res){
			vm.shows = res.data;
		});
});