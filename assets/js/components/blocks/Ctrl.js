module.exports = function(sector) {
	sector.controller('BlocksCtrl', function($rootScope, $scope, Tab) {
		$scope.active = Tab.active;
	});
};