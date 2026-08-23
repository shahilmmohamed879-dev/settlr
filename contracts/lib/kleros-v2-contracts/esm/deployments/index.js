"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractsViem = exports.getContractsEthers = exports.testnetViem = exports.mainnetViem = exports.devnetViem = exports.arbitrumSepoliaDevnet = exports.arbitrumSepolia = exports.arbitrum = void 0;
// Typechain Ethers v6 artifacts
exports.arbitrum = __importStar(require("./arbitrum"));
exports.arbitrumSepolia = __importStar(require("./arbitrumSepolia"));
exports.arbitrumSepoliaDevnet = __importStar(require("./arbitrumSepoliaDevnet"));
// Viem artifacts
exports.devnetViem = __importStar(require("./devnet.viem"));
exports.mainnetViem = __importStar(require("./mainnet.viem"));
exports.testnetViem = __importStar(require("./testnet.viem"));
// Typechain-types
__exportStar(require("../typechain-types"), exports);
// Common utils
__exportStar(require("./utils"), exports);
// Contracts getters
var contractsEthers_1 = require("./contractsEthers");
Object.defineProperty(exports, "getContractsEthers", { enumerable: true, get: function () { return contractsEthers_1.getContracts; } });
var contractsViem_1 = require("./contractsViem");
Object.defineProperty(exports, "getContractsViem", { enumerable: true, get: function () { return contractsViem_1.getContracts; } });
