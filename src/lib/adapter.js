import LevelDBAdpter from './adapters/leveldb'

class ActiveIndexAdapter {
  constructor (adapterName, dbName) {
    switch (adapterName) {
    case 'leveldb':
      return new LevelDBAdpter(dbName)
    default:
      return null
    }
  }
}

export default ActiveIndexAdapter