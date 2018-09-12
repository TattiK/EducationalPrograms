import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-educational-program-edu-program', 'Unit | Model | i-i-s-educational-program-edu-program', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-educational-program-contract',
    'model:i-i-s-educational-program-edu-program',
    'model:i-i-s-educational-program-semestr'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
