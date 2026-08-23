"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContracts = void 0;
const devnet_viem_1 = require("./devnet.viem");
const testnet_viem_1 = require("./testnet.viem");
const mainnet_viem_1 = require("./mainnet.viem");
const typechain_types_1 = require("../typechain-types");
const utils_1 = require("./utils");
function getCommonFactories(configs, provider, chainId) {
    return {
        disputeKitClassic: typechain_types_1.DisputeKitClassic__factory.connect((0, utils_1.getAddress)(configs.dkClassicConfig, chainId), provider),
        disputeKitShutter: configs.dkShutterConfig
            ? typechain_types_1.DisputeKitShutter__factory.connect((0, utils_1.getAddress)(configs.dkShutterConfig, chainId), provider)
            : null,
        disputeKitGated: configs.dkGatedConfig
            ? typechain_types_1.DisputeKitGated__factory.connect((0, utils_1.getAddress)(configs.dkGatedConfig, chainId), provider)
            : null,
        disputeKitGatedShutter: configs.dkGatedShutterConfig
            ? typechain_types_1.DisputeKitGatedShutter__factory.connect((0, utils_1.getAddress)(configs.dkGatedShutterConfig, chainId), provider)
            : null,
        disputeResolver: typechain_types_1.DisputeResolver__factory.connect((0, utils_1.getAddress)(configs.drConfig, chainId), provider),
        disputeTemplateRegistry: typechain_types_1.DisputeTemplateRegistry__factory.connect((0, utils_1.getAddress)(configs.dtrConfig, chainId), provider),
        evidence: typechain_types_1.EvidenceModule__factory.connect((0, utils_1.getAddress)(configs.evidenceConfig, chainId), provider),
        policyRegistry: typechain_types_1.PolicyRegistry__factory.connect((0, utils_1.getAddress)(configs.policyRegistryConfig, chainId), provider),
        transactionBatcher: typechain_types_1.TransactionBatcher__factory.connect((0, utils_1.getAddress)(configs.batcherConfig, chainId), provider),
        chainlinkRng: configs.chainlinkRngConfig
            ? typechain_types_1.ChainlinkRNG__factory.connect((0, utils_1.getAddress)(configs.chainlinkRngConfig, chainId), provider)
            : null,
        randomizerRng: configs.randomizerRngConfig
            ? typechain_types_1.RandomizerRNG__factory.connect((0, utils_1.getAddress)(configs.randomizerRngConfig, chainId), provider)
            : null,
        blockHashRng: typechain_types_1.BlockHashRNG__factory.connect((0, utils_1.getAddress)(configs.blockHashRngConfig, chainId), provider),
        pnk: typechain_types_1.PNK__factory.connect((0, utils_1.getAddress)(configs.pnkConfig, chainId), provider),
        klerosCoreSnapshotProxy: typechain_types_1.KlerosCoreSnapshotProxy__factory.connect((0, utils_1.getAddress)(configs.snapshotProxyConfig, chainId), provider),
    };
}
const getContracts = async (provider, deployment) => {
    const { chainId } = utils_1.deployments[deployment];
    let klerosCore;
    let sortition;
    let commonFactories;
    switch (deployment) {
        case "devnet": {
            klerosCore = typechain_types_1.KlerosCore__factory.connect((0, utils_1.getAddress)(devnet_viem_1.klerosCoreConfig, chainId), provider);
            sortition = typechain_types_1.SortitionModule__factory.connect((0, utils_1.getAddress)(devnet_viem_1.sortitionModuleConfig, chainId), provider);
            commonFactories = getCommonFactories({
                dkClassicConfig: devnet_viem_1.disputeKitClassicConfig,
                dkShutterConfig: devnet_viem_1.disputeKitShutterConfig,
                dkGatedConfig: devnet_viem_1.disputeKitGatedConfig,
                dkGatedShutterConfig: devnet_viem_1.disputeKitGatedShutterConfig,
                drConfig: devnet_viem_1.disputeResolverConfig,
                dtrConfig: devnet_viem_1.disputeTemplateRegistryConfig,
                evidenceConfig: devnet_viem_1.evidenceModuleConfig,
                policyRegistryConfig: devnet_viem_1.policyRegistryConfig,
                batcherConfig: devnet_viem_1.transactionBatcherConfig,
                chainlinkRngConfig: devnet_viem_1.chainlinkRngConfig,
                blockHashRngConfig: devnet_viem_1.blockHashRngConfig,
                pnkConfig: devnet_viem_1.pnkConfig,
                snapshotProxyConfig: devnet_viem_1.klerosCoreSnapshotProxyConfig,
            }, provider, chainId);
            break;
        }
        case "university": {
            klerosCore = typechain_types_1.KlerosCoreUniversity__factory.connect((0, utils_1.getAddress)(devnet_viem_1.klerosCoreUniversityConfig, chainId), provider);
            sortition = typechain_types_1.SortitionModuleUniversity__factory.connect((0, utils_1.getAddress)(devnet_viem_1.sortitionModuleUniversityConfig, chainId), provider);
            commonFactories = getCommonFactories({
                dkClassicConfig: devnet_viem_1.disputeKitClassicUniversityConfig,
                drConfig: devnet_viem_1.disputeResolverUniversityConfig,
                dtrConfig: devnet_viem_1.disputeTemplateRegistryConfig,
                evidenceConfig: devnet_viem_1.evidenceModuleConfig,
                policyRegistryConfig: devnet_viem_1.policyRegistryConfig,
                batcherConfig: devnet_viem_1.transactionBatcherConfig,
                chainlinkRngConfig: devnet_viem_1.chainlinkRngConfig,
                blockHashRngConfig: devnet_viem_1.blockHashRngConfig,
                pnkConfig: devnet_viem_1.pnkConfig,
                snapshotProxyConfig: devnet_viem_1.klerosCoreSnapshotProxyConfig,
            }, provider, chainId);
            break;
        }
        case "testnet":
            klerosCore = typechain_types_1.KlerosCore__factory.connect((0, utils_1.getAddress)(testnet_viem_1.klerosCoreConfig, chainId), provider);
            sortition = typechain_types_1.SortitionModule__factory.connect((0, utils_1.getAddress)(testnet_viem_1.sortitionModuleConfig, chainId), provider);
            commonFactories = getCommonFactories({
                dkClassicConfig: testnet_viem_1.disputeKitClassicConfig,
                drConfig: testnet_viem_1.disputeResolverConfig,
                dtrConfig: testnet_viem_1.disputeTemplateRegistryConfig,
                evidenceConfig: testnet_viem_1.evidenceModuleConfig,
                policyRegistryConfig: testnet_viem_1.policyRegistryConfig,
                batcherConfig: testnet_viem_1.transactionBatcherConfig,
                chainlinkRngConfig: testnet_viem_1.chainlinkRngConfig,
                blockHashRngConfig: testnet_viem_1.blockHashRngConfig,
                pnkConfig: testnet_viem_1.pnkConfig,
                snapshotProxyConfig: testnet_viem_1.klerosCoreSnapshotProxyConfig,
            }, provider, chainId);
            break;
        case "mainnetNeo":
            klerosCore = typechain_types_1.KlerosCoreNeo__factory.connect((0, utils_1.getAddress)(mainnet_viem_1.klerosCoreNeoConfig, chainId), provider);
            sortition = typechain_types_1.SortitionModuleNeo__factory.connect((0, utils_1.getAddress)(mainnet_viem_1.sortitionModuleNeoConfig, chainId), provider);
            commonFactories = getCommonFactories({
                dkClassicConfig: mainnet_viem_1.disputeKitClassicNeoConfig,
                drConfig: mainnet_viem_1.disputeResolverNeoConfig,
                dtrConfig: mainnet_viem_1.disputeTemplateRegistryConfig,
                evidenceConfig: mainnet_viem_1.evidenceModuleConfig,
                policyRegistryConfig: mainnet_viem_1.policyRegistryConfig,
                batcherConfig: mainnet_viem_1.transactionBatcherConfig,
                chainlinkRngConfig: mainnet_viem_1.chainlinkRngConfig,
                randomizerRngConfig: mainnet_viem_1.randomizerRngConfig,
                blockHashRngConfig: mainnet_viem_1.blockHashRngConfig,
                pnkConfig: mainnet_viem_1.pnkConfig,
                snapshotProxyConfig: mainnet_viem_1.klerosCoreSnapshotProxyConfig,
            }, provider, chainId);
            break;
        default:
            throw new Error(`Unsupported deployment: ${deployment}`);
    }
    return { klerosCore, sortition, ...commonFactories };
};
exports.getContracts = getContracts;
