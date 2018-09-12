import { Model as SemestrMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-educational-program-semestr';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, SemestrMixin, {

});
defineProjections(Model);
export default Model;
