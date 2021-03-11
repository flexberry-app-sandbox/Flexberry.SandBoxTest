import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-sand-box-test-author', 'Unit | Model | new-platform-sand-box-test-author', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
