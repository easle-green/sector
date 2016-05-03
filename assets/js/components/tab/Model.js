module.exports = function(sector) {
	sector.factory('Tab', function(DEFAULTS) {
		return {

			active: DEFAULTS.tab,

			get: function() {
				return this.active;
			},

			set: function(tab) {
				this.active = tab;
				//debugger;
				return this.active;
			}
		}
	});
};