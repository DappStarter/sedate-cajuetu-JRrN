require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan random mad exchange grace photo equal gate'; 
let testAccounts = [
"0x9da731638e4dcab7d2e22b16bda973e81e5147de78513230111928fb23071c6f",
"0xdcafb4be1ec925bca6686543a09fd20fdcb9dd9ac9d57a862900f0ef46b59a81",
"0x30503a1e95f4e2e6325b4547c777ddc7845454df02542301bfe755139888cb8d",
"0xc38e606b77d61f6c595efb2857a834385bf3e6689884020fb3048a5d9d76de7f",
"0x9ca8966bc78a9aa8d75903fb4ccad3c113aa97428a4587c0a272105d55031e8b",
"0x57cbceffac9c4a5b5ca157e3a1a011dca23c7e02110f34f7c8e06126cd1ef038",
"0x19bed54356d051ca2ff9b5d367b88eb55c855ccb5099aa2934685e45e212296b",
"0x6332fa1d5cca7a019e2bdfa21be4fcd35847b2fbb4b129526ad49b35f157c0e2",
"0xb693996cfbcca1d4b7a90bd436c17d1738bec9d08ec54b856c32679d3d6134eb",
"0x7662258ffdac3e343e63088991f3d857309e5a71855f44968f897bf4d31d6ef3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


