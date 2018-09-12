import Ember from 'ember';
import  {  Query  }  from  'ember-flexberry-data';
export default Ember.Route.extend({
  model() {
    var self = this;
    return this.store.findAll('i-i-s-educational-program-contract').then(function (data) {
      var contracts = data;
      let builder = new Query.Builder(self.get('store'))
        .from('i-i-s-educational-program-semestr')
        .selectByProjection('SemestrE');
      return self.get('store').query('i-i-s-educational-program-semestr', builder.build())
        .then(function (data) {
          return Ember.RSVP.hash({
            contracts: contracts,
            semestrs: data
          });
        });

    });
  }
});
