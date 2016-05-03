module.exports = function(sector, template) {
	sector
		.component('sidebarButton', {
			bindings: {},
			template: require('./button.html'),
			controller: function() {

			},
			replace: true
		})
		.component('sidebarBlock', {
			bindings: {},
			template: template,
			require: {
				btn: '^sidebarButton'
			},
			controller: function() {

			},
			replace: true
		});
};