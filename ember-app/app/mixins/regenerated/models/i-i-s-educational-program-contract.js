import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  description: DS.attr('string'),
  priorities: DS.attr('string'),
  number: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
     /* 'model.number': {
        presence: {
          'if': function(object, validator) {
            return (object.match(/^[1-9]{2}[a-zA-Z]{3}[1-9]{2}$/)) ? true : false;
          }
        }
      }*/
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ContractE', 'i-i-s-educational-program-contract', {
    number: Projection.attr('Номер договора'),
    description: Projection.attr('Описание контракта')
  });
  modelClass.defineProjection('ContractL', 'i-i-s-educational-program-contract', {
    number: Projection.attr('Номер договора'),
    description: Projection.attr('Описание контракта')
  });
};
