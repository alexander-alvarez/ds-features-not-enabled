import { moduleForModel, test } from 'ember-qunit';

moduleForModel('my-model', 'Unit | Serializer | my model', {
  // Specify the other units that are required for this test.
  needs: ['serializer:my-model']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
