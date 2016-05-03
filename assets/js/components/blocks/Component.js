module.exports = function(sector, template) {
	sector.component('blocksSwitcher', {
		bindings: {},
		template: template,
		controller: 'BlocksCtrl',
		replace: true
	});
};