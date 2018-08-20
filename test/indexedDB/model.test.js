const sqlite3 = require('sqlite3')
const indexeddbjs = require('indexeddb-js')
var engine    = new sqlite3.Database(':memory:');
var scope     = indexeddbjs.makeScope('sqlite3', engine);
var request   = scope.indexedDB.open('MyDatabase');

const ActiveIndex = require('../../src/active_index').default
ActiveIndex.Base.dbName = 'db_test'
ActiveIndex.Base.client = scope

test('Init A Model with title', () => {
  expect(new ActiveIndex.Base({title: 'title'}).title).toBe('title');
})


test('Save A Model with title', () => {
  
  // expect(new ActiveIndex.Base({title: 'title'}).title).toBe('title');
})
