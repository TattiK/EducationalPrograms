import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  dateBegin: DS.attr('date'),
  dateEnd: DS.attr('date'),
  eps: DS.hasMany('i-i-s-educational-program-edu-program', { inverse: 'semestr', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: true },
      description: { presence: true },
      dateBegin: { datetime: true },
      dateEnd: { datetime: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SemestrE', 'i-i-s-educational-program-semestr', {
    name: Projection.attr('Название семестра'),
    description: Projection.attr('Описание'),
    dateBegin: Projection.attr('Дата начала'),
    dateEnd: Projection.attr('Дата конца'),
    eps: Projection.hasMany('i-i-s-educational-program-edu-program', 'Образовательные программы', {
      name: Projection.attr('Название образовательной программы'),
      description: Projection.attr('Описание')
    })
  });
  modelClass.defineProjection('SemestrL', 'i-i-s-educational-program-semestr', {
    name: Projection.attr('Название семестра')
  });
};
