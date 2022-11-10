require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind exchange idea problem bridge very'; 
let testAccounts = [
"0x7bdb4feae580cfee5458f51b8e82f98016335f78d9bbe3b30b7998226a3fedfa",
"0x21841f5b2142b0f991bcdb03ba785b9e00fab623ec3526e6ab9929df887fa7f2",
"0x482ef2f1beb95a13523e0f8754a01a276de972c5de32bdf3c3a1b028ae9bfc44",
"0x19c91a4ec823ea0b9fe7a3d3500b3d305ae49e50c4dcf900f9893c63b58c8ad5",
"0xf89c5041aa51d1666ac5d3a72b4edc72c39a6aebe84a6ff4d5e985f7d6bed12e",
"0x78dfd1780337d082c2eec3b6df01025453f0652c920ad7c1eebfc34cba78b4ba",
"0xccac64287fd9685560fe841e9a4c4759856be35e8c0a6ad06e6c66cb6ca9276f",
"0xadb13a3a1d10f2d43e9a3ff9e1b6308125e961a418fb77cd89fdf79277354846",
"0x2e16d3ea0e49f7bf53b051efc72cab786fc73a9ca54c962b9ca7e195bef0089a",
"0x4ad1d792e2b948b89627e1631a7ccd4c5b85a6c7983276f10f7f5f127b7cad89"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

