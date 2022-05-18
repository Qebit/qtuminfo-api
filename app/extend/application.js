const path = require('path')

const CHAIN = Symbol('qebit.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.qebitinfo.lib.Chain.get(this.config.qebit.chain)
    return this[CHAIN]
  },
  get qebitinfo() {
    return {
      lib: require(path.resolve(this.config.qebitinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.qebitinfo.path, 'rpc'))
    }
  }
}
