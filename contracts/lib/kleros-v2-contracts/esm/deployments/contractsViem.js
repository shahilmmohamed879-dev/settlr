"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContracts = exports.getConfigs = void 0;
const viem_1 = require("viem");
const utils_1 = require("./utils");
const devnet_viem_1 = require("./devnet.viem");
const testnet_viem_1 = require("./testnet.viem");
const mainnet_viem_1 = require("./mainnet.viem");
function getContractConfig({ config, chainId }) {
    return {
        address: (0, utils_1.getAddress)(config, chainId),
        abi: config.abi,
    };
}
function getCommonConfigs({ chainId, configs, }) {
    const base = {
        klerosCore: getContractConfig({ config: configs.klerosCore, chainId }),
        sortition: getContractConfig({ config: configs.sortition, chainId }),
        disputeKitClassic: getContractConfig({ config: configs.disputeKitClassic, chainId }),
        disputeResolver: getContractConfig({ config: configs.disputeResolver, chainId }),
        disputeTemplateRegistry: getContractConfig({ config: configs.disputeTemplateRegistry, chainId }),
        evidence: getContractConfig({ config: configs.evidence, chainId }),
        policyRegistry: getContractConfig({ config: configs.policyRegistry, chainId }),
        transactionBatcher: getContractConfig({ config: configs.transactionBatcher, chainId }),
        blockHashRng: getContractConfig({ config: configs.blockHashRng, chainId }),
        pnk: getContractConfig({ config: configs.pnk, chainId }),
        klerosCoreSnapshotProxy: getContractConfig({ config: configs.klerosCoreSnapshotProxy, chainId }),
    };
    if (configs.disputeKitShutter)
        base.disputeKitShutter = getContractConfig({ config: configs.disputeKitShutter, chainId });
    if (configs.disputeKitGated)
        base.disputeKitGated = getContractConfig({ config: configs.disputeKitGated, chainId });
    if (configs.disputeKitGatedShutter)
        base.disputeKitGatedShutter = getContractConfig({ config: configs.disputeKitGatedShutter, chainId });
    if (configs.chainlinkRng)
        base.chainlinkRng = getContractConfig({ config: configs.chainlinkRng, chainId });
    if (configs.randomizerRng)
        base.randomizerRng = getContractConfig({ config: configs.randomizerRng, chainId });
    return base;
}
const getConfigs = ({ deployment }) => {
    const { chainId } = utils_1.deployments[deployment];
    switch (deployment) {
        case "devnet":
            return getCommonConfigs({
                chainId,
                configs: {
                    klerosCore: devnet_viem_1.klerosCoreConfig,
                    sortition: devnet_viem_1.sortitionModuleConfig,
                    disputeKitClassic: devnet_viem_1.disputeKitClassicConfig,
                    disputeKitShutter: devnet_viem_1.disputeKitShutterConfig,
                    disputeKitGated: devnet_viem_1.disputeKitGatedConfig,
                    disputeKitGatedShutter: devnet_viem_1.disputeKitGatedShutterConfig,
                    disputeResolver: devnet_viem_1.disputeResolverConfig,
                    disputeTemplateRegistry: devnet_viem_1.disputeTemplateRegistryConfig,
                    evidence: devnet_viem_1.evidenceModuleConfig,
                    policyRegistry: devnet_viem_1.policyRegistryConfig,
                    transactionBatcher: devnet_viem_1.transactionBatcherConfig,
                    blockHashRng: devnet_viem_1.blockHashRngConfig,
                    pnk: devnet_viem_1.pnkConfig,
                    klerosCoreSnapshotProxy: devnet_viem_1.klerosCoreSnapshotProxyConfig,
                    chainlinkRng: devnet_viem_1.chainlinkRngConfig,
                },
            });
        case "university":
            return {
                klerosCore: getContractConfig({ config: devnet_viem_1.klerosCoreUniversityConfig, chainId }),
                sortition: getContractConfig({ config: devnet_viem_1.sortitionModuleUniversityConfig, chainId }),
                disputeKitClassic: getContractConfig({ config: devnet_viem_1.disputeKitClassicUniversityConfig, chainId }),
                disputeResolver: getContractConfig({ config: devnet_viem_1.disputeResolverUniversityConfig, chainId }),
                disputeTemplateRegistry: getContractConfig({ config: devnet_viem_1.disputeTemplateRegistryConfig, chainId }), // FIXME: should not be shared with devnet
                evidence: getContractConfig({ config: devnet_viem_1.evidenceModuleConfig, chainId }), // Not arbitrator specific
                policyRegistry: getContractConfig({ config: devnet_viem_1.policyRegistryConfig, chainId }), // Not arbitrator specific
                transactionBatcher: getContractConfig({ config: devnet_viem_1.transactionBatcherConfig, chainId }), // Not arbitrator specific
                blockHashRng: getContractConfig({ config: devnet_viem_1.blockHashRngConfig, chainId }), // Not used in university
                pnk: getContractConfig({ config: devnet_viem_1.pnkConfig, chainId }), // Not arbitrator specific
                klerosCoreSnapshotProxy: getContractConfig({ config: devnet_viem_1.klerosCoreSnapshotProxyConfig, chainId }), // Not used in university
            };
        case "testnet":
            return getCommonConfigs({
                chainId,
                configs: {
                    klerosCore: testnet_viem_1.klerosCoreConfig,
                    sortition: testnet_viem_1.sortitionModuleConfig,
                    disputeKitClassic: testnet_viem_1.disputeKitClassicConfig,
                    disputeResolver: testnet_viem_1.disputeResolverConfig,
                    disputeTemplateRegistry: testnet_viem_1.disputeTemplateRegistryConfig,
                    evidence: testnet_viem_1.evidenceModuleConfig,
                    policyRegistry: testnet_viem_1.policyRegistryConfig,
                    transactionBatcher: testnet_viem_1.transactionBatcherConfig,
                    blockHashRng: testnet_viem_1.blockHashRngConfig,
                    pnk: testnet_viem_1.pnkConfig,
                    klerosCoreSnapshotProxy: testnet_viem_1.klerosCoreSnapshotProxyConfig,
                    chainlinkRng: testnet_viem_1.chainlinkRngConfig,
                },
            });
        case "mainnetNeo":
            return getCommonConfigs({
                chainId,
                configs: {
                    klerosCore: mainnet_viem_1.klerosCoreNeoConfig,
                    sortition: mainnet_viem_1.sortitionModuleNeoConfig,
                    disputeKitClassic: mainnet_viem_1.disputeKitClassicNeoConfig,
                    disputeResolver: mainnet_viem_1.disputeResolverNeoConfig,
                    disputeTemplateRegistry: mainnet_viem_1.disputeTemplateRegistryConfig,
                    evidence: mainnet_viem_1.evidenceModuleConfig,
                    policyRegistry: mainnet_viem_1.policyRegistryConfig,
                    transactionBatcher: mainnet_viem_1.transactionBatcherConfig,
                    blockHashRng: mainnet_viem_1.blockHashRngConfig,
                    pnk: mainnet_viem_1.pnkConfig,
                    klerosCoreSnapshotProxy: mainnet_viem_1.klerosCoreSnapshotProxyConfig,
                    chainlinkRng: mainnet_viem_1.chainlinkRngConfig,
                    randomizerRng: mainnet_viem_1.randomizerRngConfig,
                },
            });
        default:
            throw new Error(`Unsupported deployment: ${deployment}`);
    }
};
exports.getConfigs = getConfigs;
const getContracts = ({ publicClient, walletClient, deployment, }) => {
    const clientConfig = {
        client: {
            public: publicClient,
            wallet: walletClient,
        },
    };
    const contractConfigs = (0, exports.getConfigs)({ deployment });
    const klerosCore = (0, viem_1.getContract)({
        ...contractConfigs.klerosCore,
        ...clientConfig,
    });
    const sortition = (0, viem_1.getContract)({
        ...contractConfigs.sortition,
        ...clientConfig,
    });
    const disputeKitClassic = (0, viem_1.getContract)({
        ...contractConfigs.disputeKitClassic,
        ...clientConfig,
    });
    const disputeKitShutter = contractConfigs.disputeKitShutter
        ? (0, viem_1.getContract)({
            ...contractConfigs.disputeKitShutter,
            ...clientConfig,
        })
        : undefined;
    const disputeKitGated = contractConfigs.disputeKitGated
        ? (0, viem_1.getContract)({
            ...contractConfigs.disputeKitGated,
            ...clientConfig,
        })
        : undefined;
    const disputeKitGatedShutter = contractConfigs.disputeKitGatedShutter
        ? (0, viem_1.getContract)({
            ...contractConfigs.disputeKitGatedShutter,
            ...clientConfig,
        })
        : undefined;
    const disputeResolver = (0, viem_1.getContract)({
        ...contractConfigs.disputeResolver,
        ...clientConfig,
    });
    const disputeTemplateRegistry = (0, viem_1.getContract)({
        ...contractConfigs.disputeTemplateRegistry,
        ...clientConfig,
    });
    const evidence = (0, viem_1.getContract)({
        ...contractConfigs.evidence,
        ...clientConfig,
    });
    const policyRegistry = (0, viem_1.getContract)({
        ...contractConfigs.policyRegistry,
        ...clientConfig,
    });
    const transactionBatcher = (0, viem_1.getContract)({
        ...contractConfigs.transactionBatcher,
        ...clientConfig,
    });
    const chainlinkRng = contractConfigs.chainlinkRng
        ? (0, viem_1.getContract)({
            ...contractConfigs.chainlinkRng,
            ...clientConfig,
        })
        : undefined;
    const randomizerRng = contractConfigs.randomizerRng
        ? (0, viem_1.getContract)({
            ...contractConfigs.randomizerRng,
            ...clientConfig,
        })
        : undefined;
    const blockHashRng = (0, viem_1.getContract)({
        ...contractConfigs.blockHashRng,
        ...clientConfig,
    });
    const pnk = (0, viem_1.getContract)({
        ...contractConfigs.pnk,
        ...clientConfig,
    });
    const klerosCoreSnapshotProxy = (0, viem_1.getContract)({
        ...contractConfigs.klerosCoreSnapshotProxy,
        ...clientConfig,
    });
    return {
        klerosCore,
        sortition,
        disputeKitClassic,
        disputeKitShutter,
        disputeKitGated,
        disputeKitGatedShutter,
        disputeResolver,
        disputeTemplateRegistry,
        evidence,
        policyRegistry,
        transactionBatcher,
        chainlinkRng,
        randomizerRng,
        blockHashRng,
        pnk,
        klerosCoreSnapshotProxy,
    };
};
exports.getContracts = getContracts;
