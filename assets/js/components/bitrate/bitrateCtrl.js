module.exports = function(sector) {
	sector.controller('BitrateCtrl', function($rootScope, $scope, $location, DEFAULTS, Bitrate) {

		$scope.bitrate = Bitrate.get();
		$scope.rates = DEFAULTS.rates;

		$scope.update = function(rate) {
			$scope.bitrate = Bitrate.update(rate);
		};

		//this.initPlayer = function(ices) {
		//	$("#jplayer").jPlayer({
		//		ready: function () {
		//			$(this).jPlayer("setMedia", {
		//				oga: "http://89.223.45.5:8000/sector-" + ices
		//			});
		//			setTimeout(function(){
		//				$('body > .la-anim-10').animate({
		//					top: '-110px',
		//					right: '-110px'
		//				}, 1200, function(){ $(this).hide() })
		//			}, 1000)
		//		},
		//		swfPath: "images",
		//		supplied: "oga"
		//	});
		//};
	});
};