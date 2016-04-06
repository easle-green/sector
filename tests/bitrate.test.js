describe('Bitrate components', function() {
	//beforeEach(module('sector'));
	beforeEach(module('sector'));


	describe('check rate', function() {

		var bitrateCtrl;
		var $controller;

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_;
		}));

		it('can get an instance of bitrate factory', inject(function(Bitrate) {
			expect(Bitrate).toBeDefined();
		}));

		it('default bitrate value must set', inject(function(Bitrate, DEFAULTS) {
			expect(Bitrate.bitrate).toBe(DEFAULTS.bitrate);
		}));

		it('must not set incorrect bitrate', inject(function($rootScope, Bitrate, DEFAULTS) {
			var $scope = $rootScope.$new();
			bitrateCtrl = $controller('BitrateCtrl', { $scope: $scope });
			$scope.update(15);
			expect(Bitrate.bitrate).toBe(DEFAULTS.bitrate);
			$scope.update("some string");
			expect(Bitrate.bitrate).toBe(DEFAULTS.bitrate);
		}));

		it('must change bitrate checking using defined bitrates', inject(function($rootScope, Bitrate, DEFAULTS) {
			var $scope = $rootScope.$new();
			bitrateCtrl = $controller('BitrateCtrl', { $scope: $scope });
			$scope.update(64);
			expect(Bitrate.bitrate).toBe(DEFAULTS.rates[0]);
		}));

	});

});