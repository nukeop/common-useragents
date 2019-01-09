import test from 'ava';

import getList from '.';

test('test default', t => {
  return getList()
    .then(data => {
      data.length > 0 ? t.pass() : t.fail();
    });
});
