
var chai = require('chai')
var assert = chai.assert;

const getSecret = (secret) => {
  return {
    get: () => secret
  };
};

(function test('Closure for object privacy.', assert) {
  const msg = '.get() should have access to the closure.';
  const expected = 1;
  const obj = getSecret(1);

  const actual = obj.get();

  try {
    assert.ok(secret, 'This throws an error.');
  } catch (e) {
    assert.ok(true, `The secret var is only available
      to privileged methods.`);
  }

  assert.equal(actual, expected, msg);
  assert.end();
})();
  