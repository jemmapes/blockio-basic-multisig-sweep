const bitcoin = require('bitcoinjs-lib')
const networks = require("./networks");

class Address {
  async generateAddresses(
    bip32PrivKey,
    secondaryPubKey,
    network,
    i,
    derivationPath
  ) {
    throw new Error("MUST OVERRIDE");
  }

  async prepareAddressData(
    generatedAddress,
    i,
    provider,
    network
  ) {
    throw new Error("MUST OVERRIDE");
  }

  async toOutputScript(address, network) {
    return bitcoin.address.toOutputScript(address, networks[network])
  }
}

module.exports = { Address };
