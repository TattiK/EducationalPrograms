import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-educational-program-semestr', 'Unit | Serializer | i-i-s-educational-program-semestr', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-educational-program-semestr',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-educational-program-contract',
    'model:i-i-s-educational-program-edu-program',
    'model:i-i-s-educational-program-semestr'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
