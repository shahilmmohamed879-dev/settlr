"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployments = void 0;
exports.getAddress = getAddress;
const chains_1 = require("viem/chains");
exports.deployments = {
    devnet: {
        chainId: chains_1.arbitrumSepolia.id,
    },
    university: {
        chainId: chains_1.arbitrumSepolia.id,
    },
    testnet: {
        chainId: chains_1.arbitrumSepolia.id,
    },
    mainnetNeo: {
        chainId: chains_1.arbitrum.id,
    },
};
function getAddress(config, chainId) {
    const address = config.address[chainId];
    if (!address)
        throw new Error(`No address found for chainId ${chainId}`);
    return address;
}
