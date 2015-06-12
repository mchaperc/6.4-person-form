export default Backbone.View.extend({

	template: JST.form,

	tagName: 'form',
	className: 'add-person-form',

	events: {
		'submit': 'addPerson',
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	addPerson: function(e) {
		e.preventDefault();
		var firstName = $('.first-name-input').val();
		console.log(firstName);
		var lastName = $('.last-name-input').val();
		var address = $('.address-input').val();
		var phoneNumber = $('.phone-number-input').val();
		this.collection.create({
			firstName: firstName,
			lastName: lastName,
			address: address,
			phoneNumber: phoneNumber
		});
		
	}

});