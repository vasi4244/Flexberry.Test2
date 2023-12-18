import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-2-анкетирование', 'Unit | Serializer | i-i-s-test-2-анкетирование', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-2-анкетирование',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-test-2-анкетирование',
    'model:i-i-s-test-2-должность',
    'model:i-i-s-test-2-настройка-опр',
    'model:i-i-s-test-2-опрос',
    'model:i-i-s-test-2-отдел',
    'model:i-i-s-test-2-содержание',
    'model:i-i-s-test-2-сотрудники',
    'model:i-i-s-test-2-список',
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
