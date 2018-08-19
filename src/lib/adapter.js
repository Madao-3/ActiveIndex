import LevelDBAdpter from './adapters/leveldb'

class ActiveIndexAdapter {
  constructor (adapterName, dbName, client) {
    switch (adapterName) {
    case 'leveldb':
      return new LevelDBAdpter(dbName, {client})
    default:
      return null
    }
  }
}

export default ActiveIndexAdapter