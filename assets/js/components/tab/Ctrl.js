module.exports = function(sector) {
	sector.controller('TabCtrl', function($rootScope, $scope, DEFAULTS, Tab) {

		$scope.tab_names = [
			'качественный звук',
			'эфирная сетка'
		];
		//debugger;
		$scope.active = Tab.active;

		$scope.isActive = function(id) {
			return Tab.get() === id;
		};

		$scope.update = function(id) {
			Tab.set(id);
		};

	});
};