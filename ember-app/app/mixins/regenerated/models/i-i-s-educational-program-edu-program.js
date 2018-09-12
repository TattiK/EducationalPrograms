import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  /**
    Non-stored property.

    @property number
  */
  number: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'numberCompute' method in model class (outside of this mixin) if you want to compute value of 'number' property.

    @method _numberCompute
    @private
    @example
      ```javascript
      _numberChanged: Ember.on('init', Ember.observer('number', function() {
        Ember.run.once(this, '_numberCompute');
      }))
      ```
  */
  _numberCompute: function() {
    let result = (this.numberCompute && typeof this.numberCompute === 'function') ? this.numberCompute() : null;
    this.set('number', result);
  },
  semestr: DS.belongsTo('i-i-s-educational-program-semestr', { inverse: 'eps', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
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
  modelClass.defineProjection('EduProgramE', 'i-i-s-educational-program-edu-program', {
    name: Projection.attr('Name'),
    description: Projection.attr('Description'),
    number: Projection.attr('Number')
  });
};
