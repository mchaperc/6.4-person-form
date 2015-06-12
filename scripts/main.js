import PersonView from './views/personView';
import {PersonCollection} from './models/personModel';

(function(){
  'use strict';

  $(document).ready(function(){

  	var people = new PersonCollection();
  	var view = new PersonView({collection: people});


    $('#app').html(view.el);

  });

})();
