import { Model as ContractMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-educational-program-contract';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
import Ember from 'ember';
let Model = Projection.Model.extend(Offline.ModelMixin, ContractMixin, {
  getValidations(){
    var validations = this._super(...arguments);
    let thisValidations = {
      number: {
        format:  { with:  /^[1-9]{2}[a-zA-Z]{3}[1-9]{2}$/, allowBlank:  true, message:  'Неверный формат номера договора'   }
      }
    };
    return Ember.$.extend(true, {}, validations, thisValidations);
  }
});
defineProjections(Model);
export default Model;
