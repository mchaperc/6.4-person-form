var Person = Backbone.Model.extend({

	idAttribute: '_id',
	defaults: {
		firstName: '',
		lastName: '',
		address: '',
		phoneNumber: ''
	}

});

var PersonCollection = Backbone.Collection.extend({

	model: Person,
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/matts_people'

});

export default {Person, PersonCollection};