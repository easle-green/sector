module.exports = function(sector, template) {
	sector.component('playerBlock', {
		bindings: {},
		template: template,
		controller: 'PlayerCtrl',
		replace: true
	});
};