import Collection from './collection'
import Exception from './exception'

class ActiveIndexQuery {
  constructor (options) {
    if (!options) throw new Exception.ArgumentsError('请补充查询条件')
    let _global = (typeof(window) === 'undefined') ? global : window
    
    // if () {
    //
    // }

    return []
  }
}


export default ActiveIndexQuery
