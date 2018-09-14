import { Model as EduProgramMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-educational-program-edu-program';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, EduProgramMixin, {
});
defineProjections(Model);
export default Model;
