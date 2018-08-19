const sqlite3 = require('sqlite3')
const indexeddbjs = require('indexeddb-js')
var engine    = new sqlite3.Database(':memory:');
var scope     = indexeddbjs.makeScope('sqlite3', engine);
var request   = scope.indexedDB.open('MyDatabase');

const ActiveIndex = require('../../src/active_index').default
ActiveIndex.Base.dbName = 'db_test'
ActiveIndex.Base.client = scope

class Post extends ActiveIndex.Base {
  constructor (attrs) {
    return super(attrs)
  }
  tableName () {

  }
  validators () {
    return {
      title: {
        presence: true
      }
    }
  }
}


test('Post Model\'s title should presence', () => {
  expect(new Post({title: ''}).valid()).toBe(false);
})
