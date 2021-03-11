import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-sand-box-test-language', 'Unit | Serializer | new-platform-sand-box-test-language', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:new-platform-sand-box-test-language',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:new-platform-sand-box-test-author',
    'model:new-platform-sand-box-test-book',
    'model:new-platform-sand-box-test-country',
    'model:new-platform-sand-box-test-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
