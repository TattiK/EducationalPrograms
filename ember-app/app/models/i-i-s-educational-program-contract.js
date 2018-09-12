import { Model as ContractMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-educational-program-contract';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ContractMixin, {

});
defineProjections(Model);
export default Model;
