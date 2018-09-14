import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  semestr: DS.belongsTo('i-i-s-educational-program-semestr', { inverse: 'eps', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: true },
      description: { presence: true },
      semestr: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EduProgramD', 'i-i-s-educational-program-edu-program', {
    name: Projection.attr('Название образовательной программы'),
    description: Projection.attr('Описание')
  });
};
