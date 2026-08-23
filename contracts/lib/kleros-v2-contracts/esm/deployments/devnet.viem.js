"use strict";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArbitrableExample
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.disputeKitGatedImplementationAddress = exports.disputeKitGatedImplementationAbi = exports.disputeKitGatedShutterProxyConfig = exports.disputeKitGatedShutterProxyAddress = exports.disputeKitGatedShutterProxyAbi = exports.disputeKitGatedShutterImplementationConfig = exports.disputeKitGatedShutterImplementationAddress = exports.disputeKitGatedShutterImplementationAbi = exports.disputeKitGatedShutterConfig = exports.disputeKitGatedShutterAddress = exports.disputeKitGatedShutterAbi = exports.disputeKitGatedConfig = exports.disputeKitGatedAddress = exports.disputeKitGatedAbi = exports.disputeKitClassicProxyConfig = exports.disputeKitClassicProxyAddress = exports.disputeKitClassicProxyAbi = exports.disputeKitClassicImplementationConfig = exports.disputeKitClassicImplementationAddress = exports.disputeKitClassicImplementationAbi = exports.disputeKitClassicUniversityProxyConfig = exports.disputeKitClassicUniversityProxyAddress = exports.disputeKitClassicUniversityProxyAbi = exports.disputeKitClassicUniversityImplementationConfig = exports.disputeKitClassicUniversityImplementationAddress = exports.disputeKitClassicUniversityImplementationAbi = exports.disputeKitClassicUniversityConfig = exports.disputeKitClassicUniversityAddress = exports.disputeKitClassicUniversityAbi = exports.disputeKitClassicConfig = exports.disputeKitClassicAddress = exports.disputeKitClassicAbi = exports.daiFaucetConfig = exports.daiFaucetAddress = exports.daiFaucetAbi = exports.daiConfig = exports.daiAddress = exports.daiAbi = exports.chainlinkVrfCoordinatorConfig = exports.chainlinkVrfCoordinatorAddress = exports.chainlinkVrfCoordinatorAbi = exports.chainlinkRngConfig = exports.chainlinkRngAddress = exports.chainlinkRngAbi = exports.blockHashRngConfig = exports.blockHashRngAddress = exports.blockHashRngAbi = exports.arbitrableExampleConfig = exports.arbitrableExampleAddress = exports.arbitrableExampleAbi = void 0;
exports.iHomeGatewayAbi = exports.foreignGatewayOnGnosisProxyConfig = exports.foreignGatewayOnGnosisProxyAddress = exports.foreignGatewayOnGnosisProxyAbi = exports.foreignGatewayOnGnosisImplementationConfig = exports.foreignGatewayOnGnosisImplementationAddress = exports.foreignGatewayOnGnosisImplementationAbi = exports.foreignGatewayOnGnosisConfig = exports.foreignGatewayOnGnosisAddress = exports.foreignGatewayOnGnosisAbi = exports.evidenceModuleProxyConfig = exports.evidenceModuleProxyAddress = exports.evidenceModuleProxyAbi = exports.evidenceModuleImplementationConfig = exports.evidenceModuleImplementationAddress = exports.evidenceModuleImplementationAbi = exports.evidenceModuleConfig = exports.evidenceModuleAddress = exports.evidenceModuleAbi = exports.disputeTemplateRegistryProxyConfig = exports.disputeTemplateRegistryProxyAddress = exports.disputeTemplateRegistryProxyAbi = exports.disputeTemplateRegistryImplementationConfig = exports.disputeTemplateRegistryImplementationAddress = exports.disputeTemplateRegistryImplementationAbi = exports.disputeTemplateRegistryConfig = exports.disputeTemplateRegistryAddress = exports.disputeTemplateRegistryAbi = exports.disputeResolverUniversityConfig = exports.disputeResolverUniversityAddress = exports.disputeResolverUniversityAbi = exports.disputeResolverRulerConfig = exports.disputeResolverRulerAddress = exports.disputeResolverRulerAbi = exports.disputeResolverConfig = exports.disputeResolverAddress = exports.disputeResolverAbi = exports.disputeKitShutterProxyConfig = exports.disputeKitShutterProxyAddress = exports.disputeKitShutterProxyAbi = exports.disputeKitShutterImplementationConfig = exports.disputeKitShutterImplementationAddress = exports.disputeKitShutterImplementationAbi = exports.disputeKitShutterConfig = exports.disputeKitShutterAddress = exports.disputeKitShutterAbi = exports.disputeKitGatedProxyConfig = exports.disputeKitGatedProxyAddress = exports.disputeKitGatedProxyAbi = exports.disputeKitGatedImplementationConfig = void 0;
exports.policyRegistryProxyAddress = exports.policyRegistryProxyAbi = exports.policyRegistryImplementationConfig = exports.policyRegistryImplementationAddress = exports.policyRegistryImplementationAbi = exports.policyRegistryConfig = exports.policyRegistryAddress = exports.policyRegistryAbi = exports.pinakionV2Config = exports.pinakionV2Address = exports.pinakionV2Abi = exports.pnkFaucetConfig = exports.pnkFaucetAddress = exports.pnkFaucetAbi = exports.pnkConfig = exports.pnkAddress = exports.pnkAbi = exports.klerosV2NeoEarlyUserConfig = exports.klerosV2NeoEarlyUserAddress = exports.klerosV2NeoEarlyUserAbi = exports.klerosCoreProxyConfig = exports.klerosCoreProxyAddress = exports.klerosCoreProxyAbi = exports.klerosCoreImplementationConfig = exports.klerosCoreImplementationAddress = exports.klerosCoreImplementationAbi = exports.klerosCoreUniversityProxyConfig = exports.klerosCoreUniversityProxyAddress = exports.klerosCoreUniversityProxyAbi = exports.klerosCoreUniversityImplementationConfig = exports.klerosCoreUniversityImplementationAddress = exports.klerosCoreUniversityImplementationAbi = exports.klerosCoreUniversityConfig = exports.klerosCoreUniversityAddress = exports.klerosCoreUniversityAbi = exports.klerosCoreSnapshotProxyConfig = exports.klerosCoreSnapshotProxyAddress = exports.klerosCoreSnapshotProxyAbi = exports.klerosCoreRulerProxyConfig = exports.klerosCoreRulerProxyAddress = exports.klerosCoreRulerProxyAbi = exports.klerosCoreRulerImplementationConfig = exports.klerosCoreRulerImplementationAddress = exports.klerosCoreRulerImplementationAbi = exports.klerosCoreRulerConfig = exports.klerosCoreRulerAddress = exports.klerosCoreRulerAbi = exports.klerosCoreConfig = exports.klerosCoreAddress = exports.klerosCoreAbi = void 0;
exports.wrappedPinakionV2Config = exports.wrappedPinakionV2Address = exports.wrappedPinakionV2Abi = exports.wpnkFaucetConfig = exports.wpnkFaucetAddress = exports.wpnkFaucetAbi = exports.wethFaucetConfig = exports.wethFaucetAddress = exports.wethFaucetAbi = exports.wethConfig = exports.wethAddress = exports.wethAbi = exports.transactionBatcherConfig = exports.transactionBatcherAddress = exports.transactionBatcherAbi = exports.sortitionModuleProxyConfig = exports.sortitionModuleProxyAddress = exports.sortitionModuleProxyAbi = exports.sortitionModuleImplementationConfig = exports.sortitionModuleImplementationAddress = exports.sortitionModuleImplementationAbi = exports.sortitionModuleUniversityProxyConfig = exports.sortitionModuleUniversityProxyAddress = exports.sortitionModuleUniversityProxyAbi = exports.sortitionModuleUniversityImplementationConfig = exports.sortitionModuleUniversityImplementationAddress = exports.sortitionModuleUniversityImplementationAbi = exports.sortitionModuleUniversityConfig = exports.sortitionModuleUniversityAddress = exports.sortitionModuleUniversityAbi = exports.sortitionModuleConfig = exports.sortitionModuleAddress = exports.sortitionModuleAbi = exports.randomizerOracleConfig = exports.randomizerOracleAddress = exports.randomizerOracleAbi = exports.policyRegistryProxyConfig = void 0;
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xB56A23b396E0eae85414Ce5815da448ba529Cb4A)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x3Eae72F076c68F5c354C73abC33EAA291ef1b2Fa)
 */
exports.arbitrableExampleAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
            },
            { name: '_templateData', internalType: 'string', type: 'string' },
            { name: '_templateDataMappings', internalType: 'string', type: 'string' },
            { name: '_arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
            {
                name: '_templateRegistry',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
            { name: '_weth', internalType: 'contract IERC20', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_action',
                internalType: 'string',
                type: 'string',
                indexed: true,
            },
        ],
        name: 'Action',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_arbitratorDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_externalDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateUri',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'DisputeRequest',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'function',
        inputs: [],
        name: 'arbitrator',
        outputs: [
            { name: '', internalType: 'contract IArbitratorV2', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'arbitratorExtraData',
        outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
            },
        ],
        name: 'changeArbitrator',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'changeArbitratorExtraData',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_templateData', internalType: 'string', type: 'string' },
            { name: '_templateDataMappings', internalType: 'string', type: 'string' },
        ],
        name: 'changeDisputeTemplate',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_templateRegistry',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        name: 'changeTemplateRegistry',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_action', internalType: 'string', type: 'string' },
            { name: '_feeInWeth', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_action', internalType: 'string', type: 'string' }],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'isRuled', internalType: 'bool', type: 'bool' },
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            {
                name: 'numberOfRulingOptions',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'externalIDtoLocalID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitratorDisputeID',
                internalType: 'uint256',
                type: 'uint256',
            },
            { name: '_ruling', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'rule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'templateId',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'templateRegistry',
        outputs: [
            {
                name: '',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'weth',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
];
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xB56A23b396E0eae85414Ce5815da448ba529Cb4A)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x3Eae72F076c68F5c354C73abC33EAA291ef1b2Fa)
 */
exports.arbitrableExampleAddress = {
    10200: '0xB56A23b396E0eae85414Ce5815da448ba529Cb4A',
    421614: '0x3Eae72F076c68F5c354C73abC33EAA291ef1b2Fa',
};
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xB56A23b396E0eae85414Ce5815da448ba529Cb4A)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x3Eae72F076c68F5c354C73abC33EAA291ef1b2Fa)
 */
exports.arbitrableExampleConfig = {
    address: exports.arbitrableExampleAddress,
    abi: exports.arbitrableExampleAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BlockHashRNG
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x56d6d65Fe202232714794B5D5e4ed9894466Ee01)
 */
exports.blockHashRngAbi = [
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'randomNumbers',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_block', internalType: 'uint256', type: 'uint256' }],
        name: 'receiveRandomness',
        outputs: [
            { name: 'randomNumber', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_block', internalType: 'uint256', type: 'uint256' }],
        name: 'requestRandomness',
        outputs: [],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x56d6d65Fe202232714794B5D5e4ed9894466Ee01)
 */
exports.blockHashRngAddress = {
    421614: '0x56d6d65Fe202232714794B5D5e4ed9894466Ee01',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x56d6d65Fe202232714794B5D5e4ed9894466Ee01)
 */
exports.blockHashRngConfig = {
    address: exports.blockHashRngAddress,
    abi: exports.blockHashRngAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ChainlinkRNG
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x7e40f5aC809521654A9c17e442F2a0a5a4d890FA)
 */
exports.chainlinkRngAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_sortitionModule', internalType: 'address', type: 'address' },
            { name: '_vrfCoordinator', internalType: 'address', type: 'address' },
            { name: '_keyHash', internalType: 'bytes32', type: 'bytes32' },
            { name: '_subscriptionId', internalType: 'uint256', type: 'uint256' },
            { name: '_requestConfirmations', internalType: 'uint16', type: 'uint16' },
            { name: '_callbackGasLimit', internalType: 'uint32', type: 'uint32' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'error',
        inputs: [
            { name: 'have', internalType: 'address', type: 'address' },
            { name: 'want', internalType: 'address', type: 'address' },
        ],
        name: 'OnlyCoordinatorCanFulfill',
    },
    {
        type: 'error',
        inputs: [
            { name: 'have', internalType: 'address', type: 'address' },
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'coordinator', internalType: 'address', type: 'address' },
        ],
        name: 'OnlyOwnerOrCoordinator',
    },
    { type: 'error', inputs: [], name: 'ZeroAddress' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'vrfCoordinator',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'CoordinatorSet',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', internalType: 'address', type: 'address', indexed: true },
            { name: 'to', internalType: 'address', type: 'address', indexed: true },
        ],
        name: 'OwnershipTransferRequested',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', internalType: 'address', type: 'address', indexed: true },
            { name: 'to', internalType: 'address', type: 'address', indexed: true },
        ],
        name: 'OwnershipTransferred',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'requestId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'randomWord',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'RequestFulfilled',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'requestId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'RequestSent',
    },
    {
        type: 'function',
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'callbackGasLimit',
        outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_callbackGasLimit', internalType: 'uint32', type: 'uint32' },
        ],
        name: 'changeCallbackGasLimit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_keyHash', internalType: 'bytes32', type: 'bytes32' }],
        name: 'changeKeyHash',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_requestConfirmations', internalType: 'uint16', type: 'uint16' },
        ],
        name: 'changeRequestConfirmations',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_sortitionModule', internalType: 'address', type: 'address' },
        ],
        name: 'changeSortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_subscriptionId', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeSubscriptionId',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_vrfCoordinator', internalType: 'address', type: 'address' },
        ],
        name: 'changeVrfCoordinator',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'keyHash',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'lastRequestId',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'requestId', internalType: 'uint256', type: 'uint256' }],
        name: 'randomNumbers',
        outputs: [{ name: 'number', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'requestId', internalType: 'uint256', type: 'uint256' },
            { name: 'randomWords', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        name: 'rawFulfillRandomWords',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'receiveRandomness',
        outputs: [
            { name: 'randomNumber', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'requestConfirmations',
        outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'requestRandomness',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 's_vrfCoordinator',
        outputs: [
            {
                name: '',
                internalType: 'contract IVRFCoordinatorV2Plus',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_vrfCoordinator', internalType: 'address', type: 'address' },
        ],
        name: 'setCoordinator',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'sortitionModule',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'subscriptionId',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x7e40f5aC809521654A9c17e442F2a0a5a4d890FA)
 */
exports.chainlinkRngAddress = {
    421614: '0x7e40f5aC809521654A9c17e442F2a0a5a4d890FA',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x7e40f5aC809521654A9c17e442F2a0a5a4d890FA)
 */
exports.chainlinkRngConfig = {
    address: exports.chainlinkRngAddress,
    abi: exports.chainlinkRngAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ChainlinkVRFCoordinator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5CE8D5A2BC84beb22a398CCA51996F7930313D61)
 */
exports.chainlinkVrfCoordinatorAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: 'blockhashStore', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'error',
        inputs: [
            { name: 'internalBalance', internalType: 'uint256', type: 'uint256' },
            { name: 'externalBalance', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'BalanceInvariantViolated',
    },
    {
        type: 'error',
        inputs: [{ name: 'blockNum', internalType: 'uint256', type: 'uint256' }],
        name: 'BlockhashNotInStore',
    },
    {
        type: 'error',
        inputs: [
            { name: 'coordinatorAddress', internalType: 'address', type: 'address' },
        ],
        name: 'CoordinatorAlreadyRegistered',
    },
    {
        type: 'error',
        inputs: [
            { name: 'coordinatorAddress', internalType: 'address', type: 'address' },
        ],
        name: 'CoordinatorNotRegistered',
    },
    { type: 'error', inputs: [], name: 'FailedToSendNative' },
    { type: 'error', inputs: [], name: 'FailedToTransferLink' },
    {
        type: 'error',
        inputs: [
            { name: 'have', internalType: 'uint32', type: 'uint32' },
            { name: 'want', internalType: 'uint32', type: 'uint32' },
        ],
        name: 'GasLimitTooBig',
    },
    {
        type: 'error',
        inputs: [
            { name: 'gasPrice', internalType: 'uint256', type: 'uint256' },
            { name: 'maxGas', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'GasPriceExceeded',
    },
    { type: 'error', inputs: [], name: 'IncorrectCommitment' },
    { type: 'error', inputs: [], name: 'IndexOutOfRange' },
    { type: 'error', inputs: [], name: 'InsufficientBalance' },
    { type: 'error', inputs: [], name: 'InvalidCalldata' },
    {
        type: 'error',
        inputs: [
            { name: 'subId', internalType: 'uint256', type: 'uint256' },
            { name: 'consumer', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidConsumer',
    },
    { type: 'error', inputs: [], name: 'InvalidExtraArgsTag' },
    {
        type: 'error',
        inputs: [{ name: 'linkWei', internalType: 'int256', type: 'int256' }],
        name: 'InvalidLinkWeiPrice',
    },
    {
        type: 'error',
        inputs: [
            { name: 'premiumPercentage', internalType: 'uint8', type: 'uint8' },
            { name: 'max', internalType: 'uint8', type: 'uint8' },
        ],
        name: 'InvalidPremiumPercentage',
    },
    {
        type: 'error',
        inputs: [
            { name: 'have', internalType: 'uint16', type: 'uint16' },
            { name: 'min', internalType: 'uint16', type: 'uint16' },
            { name: 'max', internalType: 'uint16', type: 'uint16' },
        ],
        name: 'InvalidRequestConfirmations',
    },
    { type: 'error', inputs: [], name: 'InvalidSubscription' },
    { type: 'error', inputs: [], name: 'LinkAlreadySet' },
    {
        type: 'error',
        inputs: [
            {
                name: 'flatFeeLinkDiscountPPM',
                internalType: 'uint32',
                type: 'uint32',
            },
            { name: 'flatFeeNativePPM', internalType: 'uint32', type: 'uint32' },
        ],
        name: 'LinkDiscountTooHigh',
    },
    { type: 'error', inputs: [], name: 'LinkNotSet' },
    {
        type: 'error',
        inputs: [
            { name: 'have', internalType: 'uint256', type: 'uint256' },
            { name: 'max', internalType: 'uint32', type: 'uint32' },
        ],
        name: 'MsgDataTooBig',
    },
    {
        type: 'error',
        inputs: [
            { name: 'proposedOwner', internalType: 'address', type: 'address' },
        ],
        name: 'MustBeRequestedOwner',
    },
    {
        type: 'error',
        inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
        name: 'MustBeSubOwner',
    },
    { type: 'error', inputs: [], name: 'NoCorrespondingRequest' },
    {
        type: 'error',
        inputs: [{ name: 'keyHash', internalType: 'bytes32', type: 'bytes32' }],
        name: 'NoSuchProvingKey',
    },
    {
        type: 'error',
        inputs: [
            { name: 'have', internalType: 'uint32', type: 'uint32' },
            { name: 'want', internalType: 'uint32', type: 'uint32' },
        ],
        name: 'NumWordsTooBig',
    },
    { type: 'error', inputs: [], name: 'OnlyCallableFromLink' },
    { type: 'error', inputs: [], name: 'PaymentTooLarge' },
    { type: 'error', inputs: [], name: 'PendingRequestExists' },
    {
        type: 'error',
        inputs: [{ name: 'keyHash', internalType: 'bytes32', type: 'bytes32' }],
        name: 'ProvingKeyAlreadyRegistered',
    },
    { type: 'error', inputs: [], name: 'Reentrant' },
    { type: 'error', inputs: [], name: 'TooManyConsumers' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'minimumRequestConfirmations',
                internalType: 'uint16',
                type: 'uint16',
                indexed: false,
            },
            {
                name: 'maxGasLimit',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false,
            },
            {
                name: 'stalenessSeconds',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false,
            },
            {
                name: 'gasAfterPaymentCalculation',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false,
            },
            {
                name: 'fallbackWeiPerUnitLink',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: 'fulfillmentFlatFeeNativePPM',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false,
            },
            {
                name: 'fulfillmentFlatFeeLinkDiscountPPM',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false,
            },
            {
                name: 'nativePremiumPercentage',
                internalType: 'uint8',
                type: 'uint8',
                indexed: false,
            },
            {
                name: 'linkPremiumPercentage',
                internalType: 'uint8',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'ConfigSet',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'coordinatorAddress',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'CoordinatorDeregistered',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'coordinatorAddress',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'CoordinatorRegistered',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'requestId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'fallbackWeiPerUnitLink',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
        ],
        name: 'FallbackWeiPerUnitLinkUsed',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'to', internalType: 'address', type: 'address', indexed: false },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'FundsRecovered',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newCoordinator',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'MigrationCompleted',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'to', internalType: 'address', type: 'address', indexed: false },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'NativeFundsRecovered',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', internalType: 'address', type: 'address', indexed: true },
            { name: 'to', internalType: 'address', type: 'address', indexed: true },
        ],
        name: 'OwnershipTransferRequested',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', internalType: 'address', type: 'address', indexed: true },
            { name: 'to', internalType: 'address', type: 'address', indexed: true },
        ],
        name: 'OwnershipTransferred',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'keyHash',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
            {
                name: 'maxGas',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'ProvingKeyDeregistered',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'keyHash',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
            {
                name: 'maxGas',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'ProvingKeyRegistered',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'requestId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'outputSeed',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'payment',
                internalType: 'uint96',
                type: 'uint96',
                indexed: false,
            },
            {
                name: 'nativePayment',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            { name: 'success', internalType: 'bool', type: 'bool', indexed: false },
            {
                name: 'onlyPremium',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
        ],
        name: 'RandomWordsFulfilled',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'keyHash',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'requestId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'preSeed',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'minimumRequestConfirmations',
                internalType: 'uint16',
                type: 'uint16',
                indexed: false,
            },
            {
                name: 'callbackGasLimit',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false,
            },
            {
                name: 'numWords',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false,
            },
            {
                name: 'extraArgs',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'RandomWordsRequested',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            { name: 'to', internalType: 'address', type: 'address', indexed: false },
            {
                name: 'amountLink',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'amountNative',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'SubscriptionCanceled',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'consumer',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'SubscriptionConsumerAdded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'consumer',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'SubscriptionConsumerRemoved',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'SubscriptionCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'oldBalance',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'newBalance',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'SubscriptionFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'oldNativeBalance',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'newNativeBalance',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'SubscriptionFundedWithNative',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'from',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            { name: 'to', internalType: 'address', type: 'address', indexed: false },
        ],
        name: 'SubscriptionOwnerTransferRequested',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'subId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'from',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            { name: 'to', internalType: 'address', type: 'address', indexed: false },
        ],
        name: 'SubscriptionOwnerTransferred',
    },
    {
        type: 'function',
        inputs: [],
        name: 'BLOCKHASH_STORE',
        outputs: [
            {
                name: '',
                internalType: 'contract BlockhashStoreInterface',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LINK',
        outputs: [
            {
                name: '',
                internalType: 'contract LinkTokenInterface',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LINK_NATIVE_FEED',
        outputs: [
            {
                name: '',
                internalType: 'contract AggregatorV3Interface',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_CONSUMERS',
        outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_NUM_WORDS',
        outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_REQUEST_CONFIRMATIONS',
        outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
        name: 'acceptSubscriptionOwnerTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'subId', internalType: 'uint256', type: 'uint256' },
            { name: 'consumer', internalType: 'address', type: 'address' },
        ],
        name: 'addConsumer',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'subId', internalType: 'uint256', type: 'uint256' },
            { name: 'to', internalType: 'address', type: 'address' },
        ],
        name: 'cancelSubscription',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'createSubscription',
        outputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
        name: 'deregisterMigratableCoordinator',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'publicProvingKey',
                internalType: 'uint256[2]',
                type: 'uint256[2]',
            },
        ],
        name: 'deregisterProvingKey',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'proof',
                internalType: 'struct VRF.Proof',
                type: 'tuple',
                components: [
                    { name: 'pk', internalType: 'uint256[2]', type: 'uint256[2]' },
                    { name: 'gamma', internalType: 'uint256[2]', type: 'uint256[2]' },
                    { name: 'c', internalType: 'uint256', type: 'uint256' },
                    { name: 's', internalType: 'uint256', type: 'uint256' },
                    { name: 'seed', internalType: 'uint256', type: 'uint256' },
                    { name: 'uWitness', internalType: 'address', type: 'address' },
                    {
                        name: 'cGammaWitness',
                        internalType: 'uint256[2]',
                        type: 'uint256[2]',
                    },
                    {
                        name: 'sHashWitness',
                        internalType: 'uint256[2]',
                        type: 'uint256[2]',
                    },
                    { name: 'zInv', internalType: 'uint256', type: 'uint256' },
                ],
            },
            {
                name: 'rc',
                internalType: 'struct VRFTypes.RequestCommitmentV2Plus',
                type: 'tuple',
                components: [
                    { name: 'blockNum', internalType: 'uint64', type: 'uint64' },
                    { name: 'subId', internalType: 'uint256', type: 'uint256' },
                    { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
                    { name: 'numWords', internalType: 'uint32', type: 'uint32' },
                    { name: 'sender', internalType: 'address', type: 'address' },
                    { name: 'extraArgs', internalType: 'bytes', type: 'bytes' },
                ],
            },
            { name: 'onlyPremium', internalType: 'bool', type: 'bool' },
        ],
        name: 'fulfillRandomWords',
        outputs: [{ name: 'payment', internalType: 'uint96', type: 'uint96' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
        name: 'fundSubscriptionWithNative',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
            { name: 'maxCount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getActiveSubscriptionIds',
        outputs: [{ name: 'ids', internalType: 'uint256[]', type: 'uint256[]' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
        name: 'getSubscription',
        outputs: [
            { name: 'balance', internalType: 'uint96', type: 'uint96' },
            { name: 'nativeBalance', internalType: 'uint96', type: 'uint96' },
            { name: 'reqCount', internalType: 'uint64', type: 'uint64' },
            { name: 'subOwner', internalType: 'address', type: 'address' },
            { name: 'consumers', internalType: 'address[]', type: 'address[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'publicKey', internalType: 'uint256[2]', type: 'uint256[2]' },
        ],
        name: 'hashOfKey',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: 'subId', internalType: 'uint256', type: 'uint256' },
            { name: 'newCoordinator', internalType: 'address', type: 'address' },
        ],
        name: 'migrate',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'onTokenTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
        name: 'ownerCancelSubscription',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'subId', internalType: 'uint256', type: 'uint256' }],
        name: 'pendingRequestExists',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
        name: 'recoverFunds',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'to', internalType: 'address payable', type: 'address' }],
        name: 'recoverNativeFunds',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
        name: 'registerMigratableCoordinator',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'publicProvingKey',
                internalType: 'uint256[2]',
                type: 'uint256[2]',
            },
            { name: 'maxGas', internalType: 'uint64', type: 'uint64' },
        ],
        name: 'registerProvingKey',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'subId', internalType: 'uint256', type: 'uint256' },
            { name: 'consumer', internalType: 'address', type: 'address' },
        ],
        name: 'removeConsumer',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'req',
                internalType: 'struct VRFV2PlusClient.RandomWordsRequest',
                type: 'tuple',
                components: [
                    { name: 'keyHash', internalType: 'bytes32', type: 'bytes32' },
                    { name: 'subId', internalType: 'uint256', type: 'uint256' },
                    {
                        name: 'requestConfirmations',
                        internalType: 'uint16',
                        type: 'uint16',
                    },
                    { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
                    { name: 'numWords', internalType: 'uint32', type: 'uint32' },
                    { name: 'extraArgs', internalType: 'bytes', type: 'bytes' },
                ],
            },
        ],
        name: 'requestRandomWords',
        outputs: [{ name: 'requestId', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'subId', internalType: 'uint256', type: 'uint256' },
            { name: 'newOwner', internalType: 'address', type: 'address' },
        ],
        name: 'requestSubscriptionOwnerTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 's_config',
        outputs: [
            {
                name: 'minimumRequestConfirmations',
                internalType: 'uint16',
                type: 'uint16',
            },
            { name: 'maxGasLimit', internalType: 'uint32', type: 'uint32' },
            { name: 'reentrancyLock', internalType: 'bool', type: 'bool' },
            { name: 'stalenessSeconds', internalType: 'uint32', type: 'uint32' },
            {
                name: 'gasAfterPaymentCalculation',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'fulfillmentFlatFeeNativePPM',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'fulfillmentFlatFeeLinkDiscountPPM',
                internalType: 'uint32',
                type: 'uint32',
            },
            { name: 'nativePremiumPercentage', internalType: 'uint8', type: 'uint8' },
            { name: 'linkPremiumPercentage', internalType: 'uint8', type: 'uint8' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 's_currentSubNonce',
        outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 's_fallbackWeiPerUnitLink',
        outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 's_provingKeyHashes',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        name: 's_provingKeys',
        outputs: [
            { name: 'exists', internalType: 'bool', type: 'bool' },
            { name: 'maxGas', internalType: 'uint64', type: 'uint64' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 's_requestCommitments',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 's_totalBalance',
        outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 's_totalNativeBalance',
        outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'minimumRequestConfirmations',
                internalType: 'uint16',
                type: 'uint16',
            },
            { name: 'maxGasLimit', internalType: 'uint32', type: 'uint32' },
            { name: 'stalenessSeconds', internalType: 'uint32', type: 'uint32' },
            {
                name: 'gasAfterPaymentCalculation',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'fallbackWeiPerUnitLink',
                internalType: 'int256',
                type: 'int256',
            },
            {
                name: 'fulfillmentFlatFeeNativePPM',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'fulfillmentFlatFeeLinkDiscountPPM',
                internalType: 'uint32',
                type: 'uint32',
            },
            { name: 'nativePremiumPercentage', internalType: 'uint8', type: 'uint8' },
            { name: 'linkPremiumPercentage', internalType: 'uint8', type: 'uint8' },
        ],
        name: 'setConfig',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'link', internalType: 'address', type: 'address' },
            { name: 'linkNativeFeed', internalType: 'address', type: 'address' },
        ],
        name: 'setLINKAndLINKNativeFeed',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'recipient', internalType: 'address payable', type: 'address' },
        ],
        name: 'withdrawNative',
        outputs: [],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5CE8D5A2BC84beb22a398CCA51996F7930313D61)
 */
exports.chainlinkVrfCoordinatorAddress = {
    421614: '0x5CE8D5A2BC84beb22a398CCA51996F7930313D61',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5CE8D5A2BC84beb22a398CCA51996F7930313D61)
 */
exports.chainlinkVrfCoordinatorConfig = {
    address: exports.chainlinkVrfCoordinatorAddress,
    abi: exports.chainlinkVrfCoordinatorAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DAI
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x593e89704D285B0c3fbF157c7CF2537456CE64b5)
 */
exports.daiAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_name', internalType: 'string', type: 'string' },
            { name: '_symbol', internalType: 'string', type: 'string' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'spender',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Approval',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', internalType: 'address', type: 'address', indexed: true },
            { name: 'to', internalType: 'address', type: 'address', indexed: true },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Transfer',
    },
    {
        type: 'function',
        inputs: [
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'spender', internalType: 'address', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'decreaseAllowance',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'name',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'from', internalType: 'address', type: 'address' },
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x593e89704D285B0c3fbF157c7CF2537456CE64b5)
 */
exports.daiAddress = {
    421614: '0x593e89704D285B0c3fbF157c7CF2537456CE64b5',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x593e89704D285B0c3fbF157c7CF2537456CE64b5)
 */
exports.daiConfig = { address: exports.daiAddress, abi: exports.daiAbi };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DAIFaucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xB5b39A1bcD2D7097A8824B3cC18Ebd2dFb0D9B5E)
 */
exports.daiFaucetAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_token', internalType: 'contract IERC20', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'amount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'balance',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
        name: 'changeAmount',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'request',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'token',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'address', type: 'address' }],
        name: 'withdrewAlready',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xB5b39A1bcD2D7097A8824B3cC18Ebd2dFb0D9B5E)
 */
exports.daiFaucetAddress = {
    421614: '0xB5b39A1bcD2D7097A8824B3cC18Ebd2dFb0D9B5E',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xB5b39A1bcD2D7097A8824B3cC18Ebd2dFb0D9B5E)
 */
exports.daiFaucetConfig = {
    address: exports.daiFaucetAddress,
    abi: exports.daiFaucetAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitClassic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xeEEbbbff8f377dCFc7d4F7876C531db0d22720e1)
 */
exports.disputeKitClassicAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'ChoiceFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
        ],
        name: 'CommitCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Contribution',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_numberOfChoices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_justification',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'VoteCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdrawal',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_APPEAL_PERIOD_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ONE_BASIS_POINT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'WINNER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        name: 'alreadyDrawn',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areCommitsAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areVotesAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'castCommit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_core', internalType: 'address', type: 'address' }],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'coreDisputeIDToActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'coreDisputeIDToLocal',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_nbVotes', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: 'jumped', internalType: 'bool', type: 'bool' },
            { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'fundAppeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getCoherentCount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getDegreeOfCoherence',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getFundedChoices',
        outputs: [
            { name: 'fundedChoices', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getLocalDisputeRoundID',
        outputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_localDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            { name: 'winningChoice', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'totalVoted', internalType: 'uint256', type: 'uint256' },
            { name: 'totalCommited', internalType: 'uint256', type: 'uint256' },
            { name: 'nbVoters', internalType: 'uint256', type: 'uint256' },
            { name: 'choiceCount', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getVoteInfo',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'commit', internalType: 'bytes32', type: 'bytes32' },
            { name: 'choice', internalType: 'uint256', type: 'uint256' },
            { name: 'voted', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'hashVote',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize7',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isAppealFunded',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isVoteActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'singleDrawPerJuror',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            {
                name: '_beneficiary',
                internalType: 'address payable',
                type: 'address',
            },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'withdrawFeesAndRewards',
        outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xeEEbbbff8f377dCFc7d4F7876C531db0d22720e1)
 */
exports.disputeKitClassicAddress = {
    421614: '0xeEEbbbff8f377dCFc7d4F7876C531db0d22720e1',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xeEEbbbff8f377dCFc7d4F7876C531db0d22720e1)
 */
exports.disputeKitClassicConfig = {
    address: exports.disputeKitClassicAddress,
    abi: exports.disputeKitClassicAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitClassicUniversity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd6E96b7c993763B5CDDa1139C7387B82A7c8B8B5)
 */
exports.disputeKitClassicUniversityAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'ChoiceFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
        ],
        name: 'CommitCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Contribution',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_numberOfChoices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_justification',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'VoteCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdrawal',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_APPEAL_PERIOD_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ONE_BASIS_POINT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'WINNER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areCommitsAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areVotesAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'castCommit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_core', internalType: 'address', type: 'address' }],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'coreDisputeIDToLocal',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_nbVotes', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: 'jumped', internalType: 'bool', type: 'bool' },
            { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'fundAppeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getCoherentCount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getDegreeOfCoherence',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getFundedChoices',
        outputs: [
            { name: 'fundedChoices', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            { name: 'winningChoice', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'totalVoted', internalType: 'uint256', type: 'uint256' },
            { name: 'totalCommited', internalType: 'uint256', type: 'uint256' },
            { name: 'nbVoters', internalType: 'uint256', type: 'uint256' },
            { name: 'choiceCount', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getVoteInfo',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'commit', internalType: 'bytes32', type: 'bytes32' },
            { name: 'choice', internalType: 'uint256', type: 'uint256' },
            { name: 'voted', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isVoteActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            {
                name: '_beneficiary',
                internalType: 'address payable',
                type: 'address',
            },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'withdrawFeesAndRewards',
        outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd6E96b7c993763B5CDDa1139C7387B82A7c8B8B5)
 */
exports.disputeKitClassicUniversityAddress = {
    421614: '0xd6E96b7c993763B5CDDa1139C7387B82A7c8B8B5',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd6E96b7c993763B5CDDa1139C7387B82A7c8B8B5)
 */
exports.disputeKitClassicUniversityConfig = {
    address: exports.disputeKitClassicUniversityAddress,
    abi: exports.disputeKitClassicUniversityAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitClassicUniversity_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x87e863b94d2CB79A8aB53bD87Dc4A10E11C0918B)
 */
exports.disputeKitClassicUniversityImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'ChoiceFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
        ],
        name: 'CommitCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Contribution',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_numberOfChoices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_justification',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'VoteCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdrawal',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_APPEAL_PERIOD_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ONE_BASIS_POINT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'WINNER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areCommitsAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areVotesAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'castCommit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_core', internalType: 'address', type: 'address' }],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'coreDisputeIDToLocal',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_nbVotes', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: 'jumped', internalType: 'bool', type: 'bool' },
            { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'fundAppeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getCoherentCount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getDegreeOfCoherence',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getFundedChoices',
        outputs: [
            { name: 'fundedChoices', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            { name: 'winningChoice', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'totalVoted', internalType: 'uint256', type: 'uint256' },
            { name: 'totalCommited', internalType: 'uint256', type: 'uint256' },
            { name: 'nbVoters', internalType: 'uint256', type: 'uint256' },
            { name: 'choiceCount', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getVoteInfo',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'commit', internalType: 'bytes32', type: 'bytes32' },
            { name: 'choice', internalType: 'uint256', type: 'uint256' },
            { name: 'voted', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isVoteActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            {
                name: '_beneficiary',
                internalType: 'address payable',
                type: 'address',
            },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'withdrawFeesAndRewards',
        outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x87e863b94d2CB79A8aB53bD87Dc4A10E11C0918B)
 */
exports.disputeKitClassicUniversityImplementationAddress = {
    421614: '0x87e863b94d2CB79A8aB53bD87Dc4A10E11C0918B',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x87e863b94d2CB79A8aB53bD87Dc4A10E11C0918B)
 */
exports.disputeKitClassicUniversityImplementationConfig = {
    address: exports.disputeKitClassicUniversityImplementationAddress,
    abi: exports.disputeKitClassicUniversityImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitClassicUniversity_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd6E96b7c993763B5CDDa1139C7387B82A7c8B8B5)
 */
exports.disputeKitClassicUniversityProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd6E96b7c993763B5CDDa1139C7387B82A7c8B8B5)
 */
exports.disputeKitClassicUniversityProxyAddress = {
    421614: '0xd6E96b7c993763B5CDDa1139C7387B82A7c8B8B5',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd6E96b7c993763B5CDDa1139C7387B82A7c8B8B5)
 */
exports.disputeKitClassicUniversityProxyConfig = {
    address: exports.disputeKitClassicUniversityProxyAddress,
    abi: exports.disputeKitClassicUniversityProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitClassic_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xD76E74049003faCe2EBA0B6FB61DFC9941da959F)
 */
exports.disputeKitClassicImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'ChoiceFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
        ],
        name: 'CommitCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Contribution',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_numberOfChoices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_justification',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'VoteCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdrawal',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_APPEAL_PERIOD_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ONE_BASIS_POINT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'WINNER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        name: 'alreadyDrawn',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areCommitsAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areVotesAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'castCommit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_core', internalType: 'address', type: 'address' }],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'coreDisputeIDToActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'coreDisputeIDToLocal',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_nbVotes', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: 'jumped', internalType: 'bool', type: 'bool' },
            { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'fundAppeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getCoherentCount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getDegreeOfCoherence',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getFundedChoices',
        outputs: [
            { name: 'fundedChoices', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getLocalDisputeRoundID',
        outputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_localDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            { name: 'winningChoice', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'totalVoted', internalType: 'uint256', type: 'uint256' },
            { name: 'totalCommited', internalType: 'uint256', type: 'uint256' },
            { name: 'nbVoters', internalType: 'uint256', type: 'uint256' },
            { name: 'choiceCount', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getVoteInfo',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'commit', internalType: 'bytes32', type: 'bytes32' },
            { name: 'choice', internalType: 'uint256', type: 'uint256' },
            { name: 'voted', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'hashVote',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize7',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isAppealFunded',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isVoteActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'singleDrawPerJuror',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            {
                name: '_beneficiary',
                internalType: 'address payable',
                type: 'address',
            },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'withdrawFeesAndRewards',
        outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xD76E74049003faCe2EBA0B6FB61DFC9941da959F)
 */
exports.disputeKitClassicImplementationAddress = {
    421614: '0xD76E74049003faCe2EBA0B6FB61DFC9941da959F',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xD76E74049003faCe2EBA0B6FB61DFC9941da959F)
 */
exports.disputeKitClassicImplementationConfig = {
    address: exports.disputeKitClassicImplementationAddress,
    abi: exports.disputeKitClassicImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitClassic_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xeEEbbbff8f377dCFc7d4F7876C531db0d22720e1)
 */
exports.disputeKitClassicProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xeEEbbbff8f377dCFc7d4F7876C531db0d22720e1)
 */
exports.disputeKitClassicProxyAddress = {
    421614: '0xeEEbbbff8f377dCFc7d4F7876C531db0d22720e1',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xeEEbbbff8f377dCFc7d4F7876C531db0d22720e1)
 */
exports.disputeKitClassicProxyConfig = {
    address: exports.disputeKitClassicProxyAddress,
    abi: exports.disputeKitClassicProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitGated
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x677dA30B4b27D129354DdA1e219Bcc86802132d1)
 */
exports.disputeKitGatedAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'ChoiceFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
        ],
        name: 'CommitCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Contribution',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_numberOfChoices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_justification',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'VoteCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdrawal',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_APPEAL_PERIOD_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ONE_BASIS_POINT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'WINNER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        name: 'alreadyDrawn',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areCommitsAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areVotesAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'castCommit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_core', internalType: 'address', type: 'address' }],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'coreDisputeIDToActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'coreDisputeIDToLocal',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_nbVotes', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: 'jumped', internalType: 'bool', type: 'bool' },
            { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
        name: 'extraDataToTokenInfo',
        outputs: [
            { name: 'tokenGate', internalType: 'address', type: 'address' },
            { name: 'isERC1155', internalType: 'bool', type: 'bool' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'fundAppeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getCoherentCount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getDegreeOfCoherence',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getFundedChoices',
        outputs: [
            { name: 'fundedChoices', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getLocalDisputeRoundID',
        outputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_localDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            { name: 'winningChoice', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'totalVoted', internalType: 'uint256', type: 'uint256' },
            { name: 'totalCommited', internalType: 'uint256', type: 'uint256' },
            { name: 'nbVoters', internalType: 'uint256', type: 'uint256' },
            { name: 'choiceCount', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getVoteInfo',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'commit', internalType: 'bytes32', type: 'bytes32' },
            { name: 'choice', internalType: 'uint256', type: 'uint256' },
            { name: 'voted', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'hashVote',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize7',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isAppealFunded',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isVoteActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'singleDrawPerJuror',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            {
                name: '_beneficiary',
                internalType: 'address payable',
                type: 'address',
            },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'withdrawFeesAndRewards',
        outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x677dA30B4b27D129354DdA1e219Bcc86802132d1)
 */
exports.disputeKitGatedAddress = {
    421614: '0x677dA30B4b27D129354DdA1e219Bcc86802132d1',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x677dA30B4b27D129354DdA1e219Bcc86802132d1)
 */
exports.disputeKitGatedConfig = {
    address: exports.disputeKitGatedAddress,
    abi: exports.disputeKitGatedAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitGatedShutter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd86b84eb36Cd48f3f384b4490F255b494385F429)
 */
exports.disputeKitGatedShutterAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'ChoiceFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
        ],
        name: 'CommitCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: '_identity',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
            {
                name: '_encryptedVote',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'CommitCastShutter',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Contribution',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_numberOfChoices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_justification',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'VoteCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdrawal',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_APPEAL_PERIOD_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ONE_BASIS_POINT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'WINNER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        name: 'alreadyDrawn',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areCommitsAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areVotesAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'castCommit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
            { name: '_identity', internalType: 'bytes32', type: 'bytes32' },
            { name: '_encryptedVote', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'castCommitShutter',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVoteShutter',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_core', internalType: 'address', type: 'address' }],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'coreDisputeIDToActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'coreDisputeIDToLocal',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_nbVotes', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: 'jumped', internalType: 'bool', type: 'bool' },
            { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'fundAppeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getCoherentCount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getDegreeOfCoherence',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getFundedChoices',
        outputs: [
            { name: 'fundedChoices', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getLocalDisputeRoundID',
        outputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_localDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            { name: 'winningChoice', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'totalVoted', internalType: 'uint256', type: 'uint256' },
            { name: 'totalCommited', internalType: 'uint256', type: 'uint256' },
            { name: 'nbVoters', internalType: 'uint256', type: 'uint256' },
            { name: 'choiceCount', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getVoteInfo',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'commit', internalType: 'bytes32', type: 'bytes32' },
            { name: 'choice', internalType: 'uint256', type: 'uint256' },
            { name: 'voted', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'hashVote',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize7',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isAppealFunded',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isVoteActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'singleDrawPerJuror',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            {
                name: '_beneficiary',
                internalType: 'address payable',
                type: 'address',
            },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'withdrawFeesAndRewards',
        outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd86b84eb36Cd48f3f384b4490F255b494385F429)
 */
exports.disputeKitGatedShutterAddress = {
    421614: '0xd86b84eb36Cd48f3f384b4490F255b494385F429',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd86b84eb36Cd48f3f384b4490F255b494385F429)
 */
exports.disputeKitGatedShutterConfig = {
    address: exports.disputeKitGatedShutterAddress,
    abi: exports.disputeKitGatedShutterAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitGatedShutter_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xC344C28493C51023E5504B6c7f1E86C0fB43C645)
 */
exports.disputeKitGatedShutterImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'ChoiceFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
        ],
        name: 'CommitCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: '_identity',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
            {
                name: '_encryptedVote',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'CommitCastShutter',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Contribution',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_numberOfChoices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_justification',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'VoteCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdrawal',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_APPEAL_PERIOD_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ONE_BASIS_POINT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'WINNER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        name: 'alreadyDrawn',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areCommitsAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areVotesAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'castCommit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
            { name: '_identity', internalType: 'bytes32', type: 'bytes32' },
            { name: '_encryptedVote', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'castCommitShutter',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVoteShutter',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_core', internalType: 'address', type: 'address' }],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'coreDisputeIDToActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'coreDisputeIDToLocal',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_nbVotes', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: 'jumped', internalType: 'bool', type: 'bool' },
            { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'fundAppeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getCoherentCount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getDegreeOfCoherence',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getFundedChoices',
        outputs: [
            { name: 'fundedChoices', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getLocalDisputeRoundID',
        outputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_localDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            { name: 'winningChoice', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'totalVoted', internalType: 'uint256', type: 'uint256' },
            { name: 'totalCommited', internalType: 'uint256', type: 'uint256' },
            { name: 'nbVoters', internalType: 'uint256', type: 'uint256' },
            { name: 'choiceCount', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getVoteInfo',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'commit', internalType: 'bytes32', type: 'bytes32' },
            { name: 'choice', internalType: 'uint256', type: 'uint256' },
            { name: 'voted', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'hashVote',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize7',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isAppealFunded',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isVoteActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'singleDrawPerJuror',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            {
                name: '_beneficiary',
                internalType: 'address payable',
                type: 'address',
            },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'withdrawFeesAndRewards',
        outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xC344C28493C51023E5504B6c7f1E86C0fB43C645)
 */
exports.disputeKitGatedShutterImplementationAddress = {
    421614: '0xC344C28493C51023E5504B6c7f1E86C0fB43C645',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xC344C28493C51023E5504B6c7f1E86C0fB43C645)
 */
exports.disputeKitGatedShutterImplementationConfig = {
    address: exports.disputeKitGatedShutterImplementationAddress,
    abi: exports.disputeKitGatedShutterImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitGatedShutter_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd86b84eb36Cd48f3f384b4490F255b494385F429)
 */
exports.disputeKitGatedShutterProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd86b84eb36Cd48f3f384b4490F255b494385F429)
 */
exports.disputeKitGatedShutterProxyAddress = {
    421614: '0xd86b84eb36Cd48f3f384b4490F255b494385F429',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd86b84eb36Cd48f3f384b4490F255b494385F429)
 */
exports.disputeKitGatedShutterProxyConfig = {
    address: exports.disputeKitGatedShutterProxyAddress,
    abi: exports.disputeKitGatedShutterProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitGated_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4D5Eb5D5b6c270Be8050Cfe93f85324AFb914258)
 */
exports.disputeKitGatedImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'ChoiceFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
        ],
        name: 'CommitCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Contribution',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_numberOfChoices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_justification',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'VoteCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdrawal',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_APPEAL_PERIOD_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ONE_BASIS_POINT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'WINNER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        name: 'alreadyDrawn',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areCommitsAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areVotesAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'castCommit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_core', internalType: 'address', type: 'address' }],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'coreDisputeIDToActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'coreDisputeIDToLocal',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_nbVotes', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: 'jumped', internalType: 'bool', type: 'bool' },
            { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
        name: 'extraDataToTokenInfo',
        outputs: [
            { name: 'tokenGate', internalType: 'address', type: 'address' },
            { name: 'isERC1155', internalType: 'bool', type: 'bool' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'fundAppeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getCoherentCount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getDegreeOfCoherence',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getFundedChoices',
        outputs: [
            { name: 'fundedChoices', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getLocalDisputeRoundID',
        outputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_localDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            { name: 'winningChoice', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'totalVoted', internalType: 'uint256', type: 'uint256' },
            { name: 'totalCommited', internalType: 'uint256', type: 'uint256' },
            { name: 'nbVoters', internalType: 'uint256', type: 'uint256' },
            { name: 'choiceCount', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getVoteInfo',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'commit', internalType: 'bytes32', type: 'bytes32' },
            { name: 'choice', internalType: 'uint256', type: 'uint256' },
            { name: 'voted', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'hashVote',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize7',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isAppealFunded',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isVoteActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'singleDrawPerJuror',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            {
                name: '_beneficiary',
                internalType: 'address payable',
                type: 'address',
            },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'withdrawFeesAndRewards',
        outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4D5Eb5D5b6c270Be8050Cfe93f85324AFb914258)
 */
exports.disputeKitGatedImplementationAddress = {
    421614: '0x4D5Eb5D5b6c270Be8050Cfe93f85324AFb914258',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4D5Eb5D5b6c270Be8050Cfe93f85324AFb914258)
 */
exports.disputeKitGatedImplementationConfig = {
    address: exports.disputeKitGatedImplementationAddress,
    abi: exports.disputeKitGatedImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitGated_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x677dA30B4b27D129354DdA1e219Bcc86802132d1)
 */
exports.disputeKitGatedProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x677dA30B4b27D129354DdA1e219Bcc86802132d1)
 */
exports.disputeKitGatedProxyAddress = {
    421614: '0x677dA30B4b27D129354DdA1e219Bcc86802132d1',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x677dA30B4b27D129354DdA1e219Bcc86802132d1)
 */
exports.disputeKitGatedProxyConfig = {
    address: exports.disputeKitGatedProxyAddress,
    abi: exports.disputeKitGatedProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitShutter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xfE0a958bc744Bb9E224E1822625B53134ac5CB69)
 */
exports.disputeKitShutterAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'ChoiceFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
        ],
        name: 'CommitCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: '_identity',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
            {
                name: '_encryptedVote',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'CommitCastShutter',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Contribution',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_numberOfChoices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_justification',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'VoteCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdrawal',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_APPEAL_PERIOD_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ONE_BASIS_POINT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'WINNER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        name: 'alreadyDrawn',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areCommitsAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areVotesAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'castCommit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
            { name: '_identity', internalType: 'bytes32', type: 'bytes32' },
            { name: '_encryptedVote', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'castCommitShutter',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVoteShutter',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_core', internalType: 'address', type: 'address' }],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'coreDisputeIDToActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'coreDisputeIDToLocal',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_nbVotes', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: 'jumped', internalType: 'bool', type: 'bool' },
            { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'fundAppeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getCoherentCount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getDegreeOfCoherence',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getFundedChoices',
        outputs: [
            { name: 'fundedChoices', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getLocalDisputeRoundID',
        outputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_localDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            { name: 'winningChoice', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'totalVoted', internalType: 'uint256', type: 'uint256' },
            { name: 'totalCommited', internalType: 'uint256', type: 'uint256' },
            { name: 'nbVoters', internalType: 'uint256', type: 'uint256' },
            { name: 'choiceCount', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getVoteInfo',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'commit', internalType: 'bytes32', type: 'bytes32' },
            { name: 'choice', internalType: 'uint256', type: 'uint256' },
            { name: 'voted', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'hashVote',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize8',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isAppealFunded',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isVoteActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'singleDrawPerJuror',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            {
                name: '_beneficiary',
                internalType: 'address payable',
                type: 'address',
            },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'withdrawFeesAndRewards',
        outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xfE0a958bc744Bb9E224E1822625B53134ac5CB69)
 */
exports.disputeKitShutterAddress = {
    421614: '0xfE0a958bc744Bb9E224E1822625B53134ac5CB69',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xfE0a958bc744Bb9E224E1822625B53134ac5CB69)
 */
exports.disputeKitShutterConfig = {
    address: exports.disputeKitShutterAddress,
    abi: exports.disputeKitShutterAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitShutter_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x036d321AfD9Ca457Be9E523736bc9FbB79FA7efc)
 */
exports.disputeKitShutterImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'ChoiceFunded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
        ],
        name: 'CommitCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_commit',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: '_identity',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
            {
                name: '_encryptedVote',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'CommitCastShutter',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Contribution',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_numberOfChoices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_juror',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_voteIDs',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_justification',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'VoteCast',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_coreDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_coreRoundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choice',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_contributor',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdrawal',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_APPEAL_PERIOD_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'LOSER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'ONE_BASIS_POINT',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'WINNER_STAKE_MULTIPLIER',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        name: 'alreadyDrawn',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areCommitsAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'areVotesAllCast',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'castCommit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_commit', internalType: 'bytes32', type: 'bytes32' },
            { name: '_identity', internalType: 'bytes32', type: 'bytes32' },
            { name: '_encryptedVote', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'castCommitShutter',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'castVoteShutter',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_core', internalType: 'address', type: 'address' }],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'coreDisputeIDToActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'coreDisputeIDToLocal',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_nbVotes', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: 'jumped', internalType: 'bool', type: 'bool' },
            { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'fundAppeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getCoherentCount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getDegreeOfCoherence',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getFundedChoices',
        outputs: [
            { name: 'fundedChoices', internalType: 'uint256[]', type: 'uint256[]' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getLocalDisputeRoundID',
        outputs: [
            { name: 'localDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: 'localRoundID', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_localDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            { name: 'winningChoice', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'totalVoted', internalType: 'uint256', type: 'uint256' },
            { name: 'totalCommited', internalType: 'uint256', type: 'uint256' },
            { name: 'nbVoters', internalType: 'uint256', type: 'uint256' },
            { name: 'choiceCount', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getVoteInfo',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'commit', internalType: 'bytes32', type: 'bytes32' },
            { name: 'choice', internalType: 'uint256', type: 'uint256' },
            { name: 'voted', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
            { name: '_salt', internalType: 'uint256', type: 'uint256' },
            { name: '_justification', internalType: 'string', type: 'string' },
        ],
        name: 'hashVote',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize8',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isAppealFunded',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_voteID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isVoteActive',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'singleDrawPerJuror',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            {
                name: '_beneficiary',
                internalType: 'address payable',
                type: 'address',
            },
            { name: '_coreRoundID', internalType: 'uint256', type: 'uint256' },
            { name: '_choice', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'withdrawFeesAndRewards',
        outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x036d321AfD9Ca457Be9E523736bc9FbB79FA7efc)
 */
exports.disputeKitShutterImplementationAddress = {
    421614: '0x036d321AfD9Ca457Be9E523736bc9FbB79FA7efc',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x036d321AfD9Ca457Be9E523736bc9FbB79FA7efc)
 */
exports.disputeKitShutterImplementationConfig = {
    address: exports.disputeKitShutterImplementationAddress,
    abi: exports.disputeKitShutterImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeKitShutter_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xfE0a958bc744Bb9E224E1822625B53134ac5CB69)
 */
exports.disputeKitShutterProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xfE0a958bc744Bb9E224E1822625B53134ac5CB69)
 */
exports.disputeKitShutterProxyAddress = {
    421614: '0xfE0a958bc744Bb9E224E1822625B53134ac5CB69',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xfE0a958bc744Bb9E224E1822625B53134ac5CB69)
 */
exports.disputeKitShutterProxyConfig = {
    address: exports.disputeKitShutterProxyAddress,
    abi: exports.disputeKitShutterProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x16f20604a51Ac1e68c9aAd1C0E53e951B62CC1Cb)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x71f8537e925C753Fe88DA7e69Ae423f9f3a9A292)
 */
exports.disputeResolverAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
            },
            {
                name: '_templateRegistry',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_arbitratorDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_externalDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateUri',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'DisputeRequest',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'function',
        inputs: [],
        name: 'arbitrator',
        outputs: [
            { name: '', internalType: 'contract IArbitratorV2', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'arbitratorDisputeIDToLocalID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
            },
        ],
        name: 'changeArbitrator',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_templateRegistry',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        name: 'changeTemplateRegistry',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
            { name: '_disputeTemplate', internalType: 'string', type: 'string' },
            {
                name: '_disputeTemplateDataMappings',
                internalType: 'string',
                type: 'string',
            },
            {
                name: '_numberOfRulingOptions',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'createDisputeForTemplate',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
            { name: '_disputeTemplateUri', internalType: 'string', type: 'string' },
            {
                name: '_numberOfRulingOptions',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'createDisputeForTemplateUri',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
            { name: 'isRuled', internalType: 'bool', type: 'bool' },
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            {
                name: 'numberOfRulingOptions',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitratorDisputeID',
                internalType: 'uint256',
                type: 'uint256',
            },
            { name: '_ruling', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'rule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'templateRegistry',
        outputs: [
            {
                name: '',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
];
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x16f20604a51Ac1e68c9aAd1C0E53e951B62CC1Cb)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x71f8537e925C753Fe88DA7e69Ae423f9f3a9A292)
 */
exports.disputeResolverAddress = {
    10200: '0x16f20604a51Ac1e68c9aAd1C0E53e951B62CC1Cb',
    421614: '0x71f8537e925C753Fe88DA7e69Ae423f9f3a9A292',
};
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x16f20604a51Ac1e68c9aAd1C0E53e951B62CC1Cb)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x71f8537e925C753Fe88DA7e69Ae423f9f3a9A292)
 */
exports.disputeResolverConfig = {
    address: exports.disputeResolverAddress,
    abi: exports.disputeResolverAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeResolverRuler
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAEB1bbaE58125BA5F32349c69e4274d15dfD6EC3)
 */
exports.disputeResolverRulerAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
            },
            {
                name: '_templateRegistry',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_arbitratorDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_externalDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateUri',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'DisputeRequest',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'function',
        inputs: [],
        name: 'arbitrator',
        outputs: [
            { name: '', internalType: 'contract IArbitratorV2', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'arbitratorDisputeIDToLocalID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
            },
        ],
        name: 'changeArbitrator',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_templateRegistry',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        name: 'changeTemplateRegistry',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
            { name: '_disputeTemplate', internalType: 'string', type: 'string' },
            {
                name: '_disputeTemplateDataMappings',
                internalType: 'string',
                type: 'string',
            },
            {
                name: '_numberOfRulingOptions',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'createDisputeForTemplate',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
            { name: '_disputeTemplateUri', internalType: 'string', type: 'string' },
            {
                name: '_numberOfRulingOptions',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'createDisputeForTemplateUri',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
            { name: 'isRuled', internalType: 'bool', type: 'bool' },
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            {
                name: 'numberOfRulingOptions',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitratorDisputeID',
                internalType: 'uint256',
                type: 'uint256',
            },
            { name: '_ruling', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'rule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'templateRegistry',
        outputs: [
            {
                name: '',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAEB1bbaE58125BA5F32349c69e4274d15dfD6EC3)
 */
exports.disputeResolverRulerAddress = {
    421614: '0xAEB1bbaE58125BA5F32349c69e4274d15dfD6EC3',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAEB1bbaE58125BA5F32349c69e4274d15dfD6EC3)
 */
exports.disputeResolverRulerConfig = {
    address: exports.disputeResolverRulerAddress,
    abi: exports.disputeResolverRulerAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeResolverUniversity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x2Aa1a94307E772BeE42E9EfbD137b1053F1fCfd4)
 */
exports.disputeResolverUniversityAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
            },
            {
                name: '_templateRegistry',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_arbitratorDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_externalDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateUri',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'DisputeRequest',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'function',
        inputs: [],
        name: 'arbitrator',
        outputs: [
            { name: '', internalType: 'contract IArbitratorV2', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'arbitratorDisputeIDToLocalID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
            },
        ],
        name: 'changeArbitrator',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_templateRegistry',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        name: 'changeTemplateRegistry',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
            { name: '_disputeTemplate', internalType: 'string', type: 'string' },
            {
                name: '_disputeTemplateDataMappings',
                internalType: 'string',
                type: 'string',
            },
            {
                name: '_numberOfRulingOptions',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'createDisputeForTemplate',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
            { name: '_disputeTemplateUri', internalType: 'string', type: 'string' },
            {
                name: '_numberOfRulingOptions',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'createDisputeForTemplateUri',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'arbitratorExtraData', internalType: 'bytes', type: 'bytes' },
            { name: 'isRuled', internalType: 'bool', type: 'bool' },
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            {
                name: 'numberOfRulingOptions',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitratorDisputeID',
                internalType: 'uint256',
                type: 'uint256',
            },
            { name: '_ruling', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'rule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'templateRegistry',
        outputs: [
            {
                name: '',
                internalType: 'contract IDisputeTemplateRegistry',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x2Aa1a94307E772BeE42E9EfbD137b1053F1fCfd4)
 */
exports.disputeResolverUniversityAddress = {
    421614: '0x2Aa1a94307E772BeE42E9EfbD137b1053F1fCfd4',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x2Aa1a94307E772BeE42E9EfbD137b1053F1fCfd4)
 */
exports.disputeResolverUniversityConfig = {
    address: exports.disputeResolverUniversityAddress,
    abi: exports.disputeResolverUniversityAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeTemplateRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x96E49552669ea81B8E9cE8694F7E4A55D8bFb957)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xc852F94f90E3B06Da6eCfB61d76561ECfb94613f)
 */
exports.disputeTemplateRegistryAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_templateId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_templateTag',
                internalType: 'string',
                type: 'string',
                indexed: true,
            },
            {
                name: '_templateData',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
            {
                name: '_templateDataMappings',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'DisputeTemplate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize2',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_templateTag', internalType: 'string', type: 'string' },
            { name: '_templateData', internalType: 'string', type: 'string' },
            { name: '_templateDataMappings', internalType: 'string', type: 'string' },
        ],
        name: 'setDisputeTemplate',
        outputs: [{ name: 'templateId', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'templates',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x96E49552669ea81B8E9cE8694F7E4A55D8bFb957)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xc852F94f90E3B06Da6eCfB61d76561ECfb94613f)
 */
exports.disputeTemplateRegistryAddress = {
    10200: '0x96E49552669ea81B8E9cE8694F7E4A55D8bFb957',
    421614: '0xc852F94f90E3B06Da6eCfB61d76561ECfb94613f',
};
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x96E49552669ea81B8E9cE8694F7E4A55D8bFb957)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xc852F94f90E3B06Da6eCfB61d76561ECfb94613f)
 */
exports.disputeTemplateRegistryConfig = {
    address: exports.disputeTemplateRegistryAddress,
    abi: exports.disputeTemplateRegistryAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeTemplateRegistry_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xBc9B5643C9B1C478DAe1b950e886CC50D8d868b1)
 */
exports.disputeTemplateRegistryImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_templateId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_templateTag',
                internalType: 'string',
                type: 'string',
                indexed: true,
            },
            {
                name: '_templateData',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
            {
                name: '_templateDataMappings',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'DisputeTemplate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize2',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_templateTag', internalType: 'string', type: 'string' },
            { name: '_templateData', internalType: 'string', type: 'string' },
            { name: '_templateDataMappings', internalType: 'string', type: 'string' },
        ],
        name: 'setDisputeTemplate',
        outputs: [{ name: 'templateId', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'templates',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xBc9B5643C9B1C478DAe1b950e886CC50D8d868b1)
 */
exports.disputeTemplateRegistryImplementationAddress = {
    421614: '0xBc9B5643C9B1C478DAe1b950e886CC50D8d868b1',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xBc9B5643C9B1C478DAe1b950e886CC50D8d868b1)
 */
exports.disputeTemplateRegistryImplementationConfig = {
    address: exports.disputeTemplateRegistryImplementationAddress,
    abi: exports.disputeTemplateRegistryImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DisputeTemplateRegistry_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xc852F94f90E3B06Da6eCfB61d76561ECfb94613f)
 */
exports.disputeTemplateRegistryProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xc852F94f90E3B06Da6eCfB61d76561ECfb94613f)
 */
exports.disputeTemplateRegistryProxyAddress = {
    421614: '0xc852F94f90E3B06Da6eCfB61d76561ECfb94613f',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xc852F94f90E3B06Da6eCfB61d76561ECfb94613f)
 */
exports.disputeTemplateRegistryProxyConfig = {
    address: exports.disputeTemplateRegistryProxyAddress,
    abi: exports.disputeTemplateRegistryProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EvidenceModule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA1F72e0445fc395A393247F5B8c958Ec9b7C0B49)
 */
exports.evidenceModuleAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_externalDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_party',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_evidence',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'Evidence',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize2',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_externalDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_evidence', internalType: 'string', type: 'string' },
        ],
        name: 'submitEvidence',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA1F72e0445fc395A393247F5B8c958Ec9b7C0B49)
 */
exports.evidenceModuleAddress = {
    421614: '0xA1F72e0445fc395A393247F5B8c958Ec9b7C0B49',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA1F72e0445fc395A393247F5B8c958Ec9b7C0B49)
 */
exports.evidenceModuleConfig = {
    address: exports.evidenceModuleAddress,
    abi: exports.evidenceModuleAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EvidenceModule_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x450Aa35da0ad8B282C5d910254055651417C2200)
 */
exports.evidenceModuleImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_externalDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_party',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_evidence',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'Evidence',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize2',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_externalDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_evidence', internalType: 'string', type: 'string' },
        ],
        name: 'submitEvidence',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x450Aa35da0ad8B282C5d910254055651417C2200)
 */
exports.evidenceModuleImplementationAddress = {
    421614: '0x450Aa35da0ad8B282C5d910254055651417C2200',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x450Aa35da0ad8B282C5d910254055651417C2200)
 */
exports.evidenceModuleImplementationConfig = {
    address: exports.evidenceModuleImplementationAddress,
    abi: exports.evidenceModuleImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EvidenceModule_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA1F72e0445fc395A393247F5B8c958Ec9b7C0B49)
 */
exports.evidenceModuleProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA1F72e0445fc395A393247F5B8c958Ec9b7C0B49)
 */
exports.evidenceModuleProxyAddress = {
    421614: '0xA1F72e0445fc395A393247F5B8c958Ec9b7C0B49',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA1F72e0445fc395A393247F5B8c958Ec9b7C0B49)
 */
exports.evidenceModuleProxyConfig = {
    address: exports.evidenceModuleProxyAddress,
    abi: exports.evidenceModuleProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ForeignGatewayOnGnosis
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x078dAd05373d19d7fd6829735b765F12242a4300)
 */
exports.foreignGatewayOnGnosisAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            { name: '_accepted', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'AcceptedFeeToken',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'ArbitrationCostModified',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_foreignBlockHash',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
            {
                name: '_foreignArbitrable',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_foreignDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'CrossChainDisputeOutgoing',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            {
                name: '_rateInEth',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
            {
                name: '_rateDecimals',
                internalType: 'uint8',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewCurrencyRate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [],
        name: 'DEFAULT_NB_OF_JURORS',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'bytes', type: 'bytes' },
            { name: '', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'arbitrationCost',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeCourtJurorFee',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_homeGateway', internalType: 'address', type: 'address' },
        ],
        name: 'changeHomeGateway',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_veaOutbox', internalType: 'address', type: 'address' },
            { name: '_gracePeriod', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeVea',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_choices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'bytes', type: 'bytes' },
            { name: '', internalType: 'contract IERC20', type: 'address' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'currentRuling',
        outputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'bool', type: 'bool' },
            { name: '', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [],
        name: 'deprecatedVeaOutbox',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'deprecatedVeaOutboxExpiration',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeHash', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'disputeHashToForeignID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        name: 'disputeHashtoDisputeData',
        outputs: [
            { name: 'id', internalType: 'uint248', type: 'uint248' },
            { name: 'ruled', internalType: 'bool', type: 'bool' },
            { name: 'arbitrable', internalType: 'address', type: 'address' },
            { name: 'paid', internalType: 'uint256', type: 'uint256' },
            { name: 'relayer', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
        name: 'feeForJuror',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'homeChainID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'homeGateway',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_veaOutbox', internalType: 'address', type: 'address' },
            { name: '_homeChainID', internalType: 'uint256', type: 'uint256' },
            { name: '_homeGateway', internalType: 'address', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_messageSender', internalType: 'address', type: 'address' },
            { name: '_disputeHash', internalType: 'bytes32', type: 'bytes32' },
            { name: '_ruling', internalType: 'uint256', type: 'uint256' },
            { name: '_relayer', internalType: 'address', type: 'address' },
        ],
        name: 'relayRule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'senderGateway',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'veaOutbox',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeHash', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'withdrawFees',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x078dAd05373d19d7fd6829735b765F12242a4300)
 */
exports.foreignGatewayOnGnosisAddress = {
    10200: '0x078dAd05373d19d7fd6829735b765F12242a4300',
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x078dAd05373d19d7fd6829735b765F12242a4300)
 */
exports.foreignGatewayOnGnosisConfig = {
    address: exports.foreignGatewayOnGnosisAddress,
    abi: exports.foreignGatewayOnGnosisAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ForeignGatewayOnGnosis_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xA4096fDA5291D5bbDD5Ed0D6CF2AF98229168Ace)
 */
exports.foreignGatewayOnGnosisImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            { name: '_accepted', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'AcceptedFeeToken',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'ArbitrationCostModified',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_foreignBlockHash',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
            {
                name: '_foreignArbitrable',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_foreignDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_choices',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'CrossChainDisputeOutgoing',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            {
                name: '_rateInEth',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
            {
                name: '_rateDecimals',
                internalType: 'uint8',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewCurrencyRate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [],
        name: 'DEFAULT_NB_OF_JURORS',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'bytes', type: 'bytes' },
            { name: '', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'arbitrationCost',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeCourtJurorFee',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_homeGateway', internalType: 'address', type: 'address' },
        ],
        name: 'changeHomeGateway',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_veaOutbox', internalType: 'address', type: 'address' },
            { name: '_gracePeriod', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeVea',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_choices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'bytes', type: 'bytes' },
            { name: '', internalType: 'contract IERC20', type: 'address' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'currentRuling',
        outputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'bool', type: 'bool' },
            { name: '', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [],
        name: 'deprecatedVeaOutbox',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'deprecatedVeaOutboxExpiration',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeHash', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'disputeHashToForeignID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        name: 'disputeHashtoDisputeData',
        outputs: [
            { name: 'id', internalType: 'uint248', type: 'uint248' },
            { name: 'ruled', internalType: 'bool', type: 'bool' },
            { name: 'arbitrable', internalType: 'address', type: 'address' },
            { name: 'paid', internalType: 'uint256', type: 'uint256' },
            { name: 'relayer', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
        name: 'feeForJuror',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'homeChainID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'homeGateway',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_veaOutbox', internalType: 'address', type: 'address' },
            { name: '_homeChainID', internalType: 'uint256', type: 'uint256' },
            { name: '_homeGateway', internalType: 'address', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_messageSender', internalType: 'address', type: 'address' },
            { name: '_disputeHash', internalType: 'bytes32', type: 'bytes32' },
            { name: '_ruling', internalType: 'uint256', type: 'uint256' },
            { name: '_relayer', internalType: 'address', type: 'address' },
        ],
        name: 'relayRule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'senderGateway',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'veaOutbox',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeHash', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'withdrawFees',
        outputs: [],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xA4096fDA5291D5bbDD5Ed0D6CF2AF98229168Ace)
 */
exports.foreignGatewayOnGnosisImplementationAddress = {
    10200: '0xA4096fDA5291D5bbDD5Ed0D6CF2AF98229168Ace',
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xA4096fDA5291D5bbDD5Ed0D6CF2AF98229168Ace)
 */
exports.foreignGatewayOnGnosisImplementationConfig = {
    address: exports.foreignGatewayOnGnosisImplementationAddress,
    abi: exports.foreignGatewayOnGnosisImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ForeignGatewayOnGnosis_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x078dAd05373d19d7fd6829735b765F12242a4300)
 */
exports.foreignGatewayOnGnosisProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x078dAd05373d19d7fd6829735b765F12242a4300)
 */
exports.foreignGatewayOnGnosisProxyAddress = {
    10200: '0x078dAd05373d19d7fd6829735b765F12242a4300',
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x078dAd05373d19d7fd6829735b765F12242a4300)
 */
exports.foreignGatewayOnGnosisProxyConfig = {
    address: exports.foreignGatewayOnGnosisProxyAddress,
    abi: exports.foreignGatewayOnGnosisProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IHomeGateway
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.iHomeGatewayAbi = [
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: false,
            },
            {
                name: '_arbitrableChainId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_arbitrable',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_arbitrableDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitratorDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_externalDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateUri',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'CrossChainDisputeIncoming',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_arbitratorDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_externalDisputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_templateUri',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'DisputeRequest',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrator',
                internalType: 'contract IArbitratorV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeHash', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'disputeHashToHomeID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'feeToken',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'foreignChainID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'foreignGateway',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'receiverGateway',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_params',
                internalType: 'struct IHomeGateway.RelayCreateDisputeParams',
                type: 'tuple',
                components: [
                    {
                        name: 'foreignBlockHash',
                        internalType: 'bytes32',
                        type: 'bytes32',
                    },
                    { name: 'foreignChainID', internalType: 'uint256', type: 'uint256' },
                    {
                        name: 'foreignArbitrable',
                        internalType: 'address',
                        type: 'address',
                    },
                    {
                        name: 'foreignDisputeID',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'externalDisputeID',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    { name: 'templateId', internalType: 'uint256', type: 'uint256' },
                    { name: 'templateUri', internalType: 'string', type: 'string' },
                    { name: 'choices', internalType: 'uint256', type: 'uint256' },
                    { name: 'extraData', internalType: 'bytes', type: 'bytes' },
                ],
            },
            { name: '_feeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'relayCreateDispute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_params',
                internalType: 'struct IHomeGateway.RelayCreateDisputeParams',
                type: 'tuple',
                components: [
                    {
                        name: 'foreignBlockHash',
                        internalType: 'bytes32',
                        type: 'bytes32',
                    },
                    { name: 'foreignChainID', internalType: 'uint256', type: 'uint256' },
                    {
                        name: 'foreignArbitrable',
                        internalType: 'address',
                        type: 'address',
                    },
                    {
                        name: 'foreignDisputeID',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'externalDisputeID',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    { name: 'templateId', internalType: 'uint256', type: 'uint256' },
                    { name: 'templateUri', internalType: 'string', type: 'string' },
                    { name: 'choices', internalType: 'uint256', type: 'uint256' },
                    { name: 'extraData', internalType: 'bytes', type: 'bytes' },
                ],
            },
        ],
        name: 'relayCreateDispute',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_ruling', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'rule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'veaInbox',
        outputs: [
            { name: '', internalType: 'contract IVeaInbox', type: 'address' },
        ],
        stateMutability: 'view',
    },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosCore
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1Bd44c4a4511DbFa7DC1d5BC201635596E7200f9)
 */
exports.klerosCoreAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'AppealFeesNotEnough' },
    { type: 'error', inputs: [], name: 'AppealPeriodNotPassed' },
    { type: 'error', inputs: [], name: 'ArbitrationFeesNotEnough' },
    { type: 'error', inputs: [], name: 'CannotDisableClassicDK' },
    { type: 'error', inputs: [], name: 'CommitPeriodNotPassed' },
    { type: 'error', inputs: [], name: 'DisputeKitNotSupportedByCourt' },
    { type: 'error', inputs: [], name: 'DisputeKitOnly' },
    { type: 'error', inputs: [], name: 'DisputeNotAppealable' },
    { type: 'error', inputs: [], name: 'DisputePeriodIsFinal' },
    { type: 'error', inputs: [], name: 'DisputeStillDrawing' },
    { type: 'error', inputs: [], name: 'EvidenceNotPassedAndNotAppeal' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    { type: 'error', inputs: [], name: 'GovernorOnly' },
    { type: 'error', inputs: [], name: 'GuardianOrGovernorOnly' },
    { type: 'error', inputs: [], name: 'InvalidDisputKitParent' },
    { type: 'error', inputs: [], name: 'InvalidForkingCourtAsParent' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'MinStakeLowerThanParentCourt' },
    { type: 'error', inputs: [], name: 'MustSupportDisputeKitClassic' },
    { type: 'error', inputs: [], name: 'NotEvidencePeriod' },
    { type: 'error', inputs: [], name: 'NotExecutionPeriod' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'RulingAlreadyExecuted' },
    { type: 'error', inputs: [], name: 'SortitionModuleOnly' },
    { type: 'error', inputs: [], name: 'StakingInTooManyCourts' },
    { type: 'error', inputs: [], name: 'StakingLessThanCourtMinStake' },
    { type: 'error', inputs: [], name: 'StakingNotPossibleInThisCourt' },
    { type: 'error', inputs: [], name: 'StakingTransferFailed' },
    { type: 'error', inputs: [], name: 'StakingZeroWhenNoStake' },
    { type: 'error', inputs: [], name: 'TokenNotAccepted' },
    { type: 'error', inputs: [], name: 'TransferFailed' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    { type: 'error', inputs: [], name: 'UnstakingTransferFailed' },
    { type: 'error', inputs: [], name: 'UnsuccessfulCall' },
    { type: 'error', inputs: [], name: 'UnsupportedDisputeKit' },
    { type: 'error', inputs: [], name: 'VotePeriodNotPassed' },
    { type: 'error', inputs: [], name: 'WhenNotPausedOnly' },
    { type: 'error', inputs: [], name: 'WhenPausedOnly' },
    { type: 'error', inputs: [], name: 'WrongDisputeKitIndex' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            { name: '_accepted', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'AcceptedFeeToken',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealDecision',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealPossible',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_parent',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
            {
                name: '_supportedDisputeKits',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
        ],
        name: 'CourtCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_fromCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_toCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: false,
            },
        ],
        name: 'CourtJump',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
        ],
        name: 'CourtModified',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_disputeKitAddress',
                internalType: 'contract IDisputeKit',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeKitCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_disputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            { name: '_enable', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'DisputeKitEnabled',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_fromDisputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_toDisputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'DisputeKitJump',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_voteID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Draw',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_pnkAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'LeftoverRewardSent',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            {
                name: '_rateInEth',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
            {
                name: '_rateDecimals',
                internalType: 'uint8',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewCurrencyRate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_period',
                internalType: 'enum KlerosCoreBase.Period',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewPeriod',
    },
    { type: 'event', anonymous: false, inputs: [], name: 'Paused' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_account',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_degreeOfCoherency',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_pnkAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'TokenAndETHShift',
    },
    { type: 'event', anonymous: false, inputs: [], name: 'Unpaused' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_disputeKitAddress',
                internalType: 'contract IDisputeKit',
                type: 'address',
            },
        ],
        name: 'addNewDisputeKit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'appeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'appealCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'appealPeriod',
        outputs: [
            { name: 'start', internalType: 'uint256', type: 'uint256' },
            { name: 'end', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_accepted', internalType: 'bool', type: 'bool' },
        ],
        name: 'changeAcceptedFeeTokens',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        name: 'changeCourtParameters',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: '_rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        name: 'changeCurrencyRates',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_guardian', internalType: 'address', type: 'address' }],
        name: 'changeGuardian',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_jurorProsecutionModule',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'changeJurorProsecutionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'changePinakion',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_sortitionModule',
                internalType: 'contract ISortitionModule',
                type: 'address',
            },
        ],
        name: 'changeSortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_toToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_amountInEth', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'convertEthToTokenAmount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'courts',
        outputs: [
            { name: 'parent', internalType: 'uint96', type: 'uint96' },
            { name: 'hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: 'minStake', internalType: 'uint256', type: 'uint256' },
            { name: 'alpha', internalType: 'uint256', type: 'uint256' },
            { name: 'feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: 'jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            { name: 'disabled', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_parent', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            { name: '_sortitionExtraData', internalType: 'bytes', type: 'bytes' },
            {
                name: '_supportedDisputeKits',
                internalType: 'uint256[]',
                type: 'uint256[]',
            },
        ],
        name: 'createCourt',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_feeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        name: 'currencyRates',
        outputs: [
            { name: 'feePaymentAccepted', internalType: 'bool', type: 'bool' },
            { name: 'rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: 'rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputeKits',
        outputs: [
            { name: '', internalType: 'contract IDisputeKit', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'courtID', internalType: 'uint96', type: 'uint96' },
            {
                name: 'arbitrated',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
            {
                name: 'period',
                internalType: 'enum KlerosCoreBase.Period',
                type: 'uint8',
            },
            { name: 'ruled', internalType: 'bool', type: 'bool' },
            { name: 'lastPeriodChange', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_iterations', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'nbDrawnJurors', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_disputeKitIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_enable', internalType: 'bool', type: 'bool' },
        ],
        name: 'enableDisputeKits',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
            { name: '_iterations', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'executeRuling',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getDisputeKitsLength',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfVotes',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getPnkAtStakePerJuror',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            {
                name: '',
                internalType: 'struct KlerosCoreBase.Round',
                type: 'tuple',
                components: [
                    { name: 'disputeKitID', internalType: 'uint256', type: 'uint256' },
                    {
                        name: 'pnkAtStakePerJuror',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'totalFeesForJurors',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    { name: 'nbVotes', internalType: 'uint256', type: 'uint256' },
                    { name: 'repartitions', internalType: 'uint256', type: 'uint256' },
                    { name: 'pnkPenalties', internalType: 'uint256', type: 'uint256' },
                    { name: 'drawnJurors', internalType: 'address[]', type: 'address[]' },
                    {
                        name: 'sumFeeRewardPaid',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'sumPnkRewardPaid',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'feeToken',
                        internalType: 'contract IERC20',
                        type: 'address',
                    },
                    { name: 'drawIterations', internalType: 'uint256', type: 'uint256' },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_courtID', internalType: 'uint96', type: 'uint96' }],
        name: 'getTimesPerPeriod',
        outputs: [
            {
                name: 'timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'guardian',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_guardian', internalType: 'address', type: 'address' },
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
            {
                name: '_jurorProsecutionModule',
                internalType: 'address',
                type: 'address',
            },
            {
                name: '_disputeKit',
                internalType: 'contract IDisputeKit',
                type: 'address',
            },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            {
                name: '_courtParameters',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            { name: '_sortitionExtraData', internalType: 'bytes', type: 'bytes' },
            {
                name: '_sortitionModuleAddress',
                internalType: 'contract ISortitionModule',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize5',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'isDisputeKitJumping',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_disputeKitID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isSupported',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'jurorProsecutionModule',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'passPeriod',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'paused',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'pinakion',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'setStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'setStakeBySortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'sortitionModule',
        outputs: [
            { name: '', internalType: 'contract ISortitionModule', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transferBySortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'unpause',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1Bd44c4a4511DbFa7DC1d5BC201635596E7200f9)
 */
exports.klerosCoreAddress = {
    421614: '0x1Bd44c4a4511DbFa7DC1d5BC201635596E7200f9',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1Bd44c4a4511DbFa7DC1d5BC201635596E7200f9)
 */
exports.klerosCoreConfig = {
    address: exports.klerosCoreAddress,
    abi: exports.klerosCoreAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosCoreRuler
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0630e4248a17b506809009F5D88E2f5bEE584c83)
 */
exports.klerosCoreRulerAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'AppealFeesNotEnough' },
    { type: 'error', inputs: [], name: 'ArbitrationFeesNotEnough' },
    { type: 'error', inputs: [], name: 'DisputeNotAppealable' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    { type: 'error', inputs: [], name: 'GovernorOnly' },
    { type: 'error', inputs: [], name: 'GovernorOrInstructorOnly' },
    { type: 'error', inputs: [], name: 'InvalidForkingCourtAsParent' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NoRulerSet' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'RulerOnly' },
    { type: 'error', inputs: [], name: 'RulingAlreadyExecuted' },
    { type: 'error', inputs: [], name: 'RulingModeNotSet' },
    { type: 'error', inputs: [], name: 'TokenNotAccepted' },
    { type: 'error', inputs: [], name: 'TransferFailed' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    { type: 'error', inputs: [], name: 'UnsuccessfulCall' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            { name: '_accepted', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'AcceptedFeeToken',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealDecision',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealPossible',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: 'mode',
                internalType: 'enum KlerosCoreRuler.RulingMode',
                type: 'uint8',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            { name: 'tied', internalType: 'bool', type: 'bool', indexed: false },
            {
                name: 'overridden',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
        ],
        name: 'AutoRuled',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_parent',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
        ],
        name: 'CourtCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_fromCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_toCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: false,
            },
        ],
        name: 'CourtJump',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
        ],
        name: 'CourtModified',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_pnkAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'LeftoverRewardSent',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            {
                name: '_rateInEth',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
            {
                name: '_rateDecimals',
                internalType: 'uint8',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewCurrencyRate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_period',
                internalType: 'enum KlerosCoreRuler.Period',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewPeriod',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_oldRuler',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_newRuler',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'RulerChanged',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_settings',
                internalType: 'struct KlerosCoreRuler.RulerSettings',
                type: 'tuple',
                components: [
                    {
                        name: 'rulingMode',
                        internalType: 'enum KlerosCoreRuler.RulingMode',
                        type: 'uint8',
                    },
                    { name: 'presetRuling', internalType: 'uint256', type: 'uint256' },
                    { name: 'presetTied', internalType: 'bool', type: 'bool' },
                    { name: 'presetOverridden', internalType: 'bool', type: 'bool' },
                ],
                indexed: false,
            },
        ],
        name: 'RulerSettingsChanged',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_account',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_degreeOfCoherency',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_pnkAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'TokenAndETHShift',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'bytes', type: 'bytes' },
            { name: '_jump', internalType: 'bool', type: 'bool' },
        ],
        name: 'appeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_jump', internalType: 'bool', type: 'bool' },
        ],
        name: 'appealCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_accepted', internalType: 'bool', type: 'bool' },
        ],
        name: 'changeAcceptedFeeTokens',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        name: 'changeCourtParameters',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: '_rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        name: 'changeCurrencyRates',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'changePinakion',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
            { name: '_newRuler', internalType: 'address', type: 'address' },
        ],
        name: 'changeRuler',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
            { name: '_presetRuling', internalType: 'uint256', type: 'uint256' },
            { name: '_presetTied', internalType: 'bool', type: 'bool' },
            { name: '_presetOverridden', internalType: 'bool', type: 'bool' },
        ],
        name: 'changeRulingModeToAutomaticPreset',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
        ],
        name: 'changeRulingModeToAutomaticRandom',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
        ],
        name: 'changeRulingModeToManual',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_toToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_amountInEth', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'convertEthToTokenAmount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'courts',
        outputs: [
            { name: 'parent', internalType: 'uint96', type: 'uint96' },
            { name: 'hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: 'minStake', internalType: 'uint256', type: 'uint256' },
            { name: 'alpha', internalType: 'uint256', type: 'uint256' },
            { name: 'feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: 'jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            { name: 'disabled', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_parent', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        name: 'createCourt',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_feeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        name: 'currencyRates',
        outputs: [
            { name: 'feePaymentAccepted', internalType: 'bool', type: 'bool' },
            { name: 'rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: 'rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'courtID', internalType: 'uint96', type: 'uint96' },
            {
                name: 'arbitrated',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
            {
                name: 'period',
                internalType: 'enum KlerosCoreRuler.Period',
                type: 'uint8',
            },
            { name: 'ruled', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        name: 'executeRuling',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getNextDisputeID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfVotes',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            {
                name: '',
                internalType: 'struct KlerosCoreRuler.Round',
                type: 'tuple',
                components: [
                    {
                        name: 'totalFeesForJurors',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'sumFeeRewardPaid',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'feeToken',
                        internalType: 'contract IERC20',
                        type: 'address',
                    },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_courtID', internalType: 'uint96', type: 'uint96' }],
        name: 'getTimesPerPeriod',
        outputs: [
            {
                name: 'timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
            {
                name: '_courtParameters',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize2',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'pinakion',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
        ],
        name: 'rulers',
        outputs: [{ name: 'ruler', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'rulingResults',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
        ],
        name: 'settings',
        outputs: [
            {
                name: 'rulingMode',
                internalType: 'enum KlerosCoreRuler.RulingMode',
                type: 'uint8',
            },
            { name: 'presetRuling', internalType: 'uint256', type: 'uint256' },
            { name: 'presetTied', internalType: 'bool', type: 'bool' },
            { name: 'presetOverridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0630e4248a17b506809009F5D88E2f5bEE584c83)
 */
exports.klerosCoreRulerAddress = {
    421614: '0x0630e4248a17b506809009F5D88E2f5bEE584c83',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0630e4248a17b506809009F5D88E2f5bEE584c83)
 */
exports.klerosCoreRulerConfig = {
    address: exports.klerosCoreRulerAddress,
    abi: exports.klerosCoreRulerAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosCoreRuler_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xb8bF3A32730cEc3B0a8516b87246ceE24ca2eaCF)
 */
exports.klerosCoreRulerImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'AppealFeesNotEnough' },
    { type: 'error', inputs: [], name: 'ArbitrationFeesNotEnough' },
    { type: 'error', inputs: [], name: 'DisputeNotAppealable' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    { type: 'error', inputs: [], name: 'GovernorOnly' },
    { type: 'error', inputs: [], name: 'GovernorOrInstructorOnly' },
    { type: 'error', inputs: [], name: 'InvalidForkingCourtAsParent' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NoRulerSet' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'RulerOnly' },
    { type: 'error', inputs: [], name: 'RulingAlreadyExecuted' },
    { type: 'error', inputs: [], name: 'RulingModeNotSet' },
    { type: 'error', inputs: [], name: 'TokenNotAccepted' },
    { type: 'error', inputs: [], name: 'TransferFailed' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    { type: 'error', inputs: [], name: 'UnsuccessfulCall' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            { name: '_accepted', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'AcceptedFeeToken',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealDecision',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealPossible',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: 'mode',
                internalType: 'enum KlerosCoreRuler.RulingMode',
                type: 'uint8',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            { name: 'tied', internalType: 'bool', type: 'bool', indexed: false },
            {
                name: 'overridden',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
        ],
        name: 'AutoRuled',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_parent',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
        ],
        name: 'CourtCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_fromCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_toCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: false,
            },
        ],
        name: 'CourtJump',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
        ],
        name: 'CourtModified',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_pnkAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'LeftoverRewardSent',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            {
                name: '_rateInEth',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
            {
                name: '_rateDecimals',
                internalType: 'uint8',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewCurrencyRate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_period',
                internalType: 'enum KlerosCoreRuler.Period',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewPeriod',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_oldRuler',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_newRuler',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'RulerChanged',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_settings',
                internalType: 'struct KlerosCoreRuler.RulerSettings',
                type: 'tuple',
                components: [
                    {
                        name: 'rulingMode',
                        internalType: 'enum KlerosCoreRuler.RulingMode',
                        type: 'uint8',
                    },
                    { name: 'presetRuling', internalType: 'uint256', type: 'uint256' },
                    { name: 'presetTied', internalType: 'bool', type: 'bool' },
                    { name: 'presetOverridden', internalType: 'bool', type: 'bool' },
                ],
                indexed: false,
            },
        ],
        name: 'RulerSettingsChanged',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_account',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_degreeOfCoherency',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_pnkAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'TokenAndETHShift',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'bytes', type: 'bytes' },
            { name: '_jump', internalType: 'bool', type: 'bool' },
        ],
        name: 'appeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_jump', internalType: 'bool', type: 'bool' },
        ],
        name: 'appealCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_accepted', internalType: 'bool', type: 'bool' },
        ],
        name: 'changeAcceptedFeeTokens',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        name: 'changeCourtParameters',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: '_rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        name: 'changeCurrencyRates',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'changePinakion',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
            { name: '_newRuler', internalType: 'address', type: 'address' },
        ],
        name: 'changeRuler',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
            { name: '_presetRuling', internalType: 'uint256', type: 'uint256' },
            { name: '_presetTied', internalType: 'bool', type: 'bool' },
            { name: '_presetOverridden', internalType: 'bool', type: 'bool' },
        ],
        name: 'changeRulingModeToAutomaticPreset',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
        ],
        name: 'changeRulingModeToAutomaticRandom',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
        ],
        name: 'changeRulingModeToManual',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_toToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_amountInEth', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'convertEthToTokenAmount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'courts',
        outputs: [
            { name: 'parent', internalType: 'uint96', type: 'uint96' },
            { name: 'hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: 'minStake', internalType: 'uint256', type: 'uint256' },
            { name: 'alpha', internalType: 'uint256', type: 'uint256' },
            { name: 'feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: 'jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            { name: 'disabled', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_parent', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        name: 'createCourt',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_feeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        name: 'currencyRates',
        outputs: [
            { name: 'feePaymentAccepted', internalType: 'bool', type: 'bool' },
            { name: 'rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: 'rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'courtID', internalType: 'uint96', type: 'uint96' },
            {
                name: 'arbitrated',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
            {
                name: 'period',
                internalType: 'enum KlerosCoreRuler.Period',
                type: 'uint8',
            },
            { name: 'ruled', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        name: 'executeRuling',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getNextDisputeID',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfVotes',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            {
                name: '',
                internalType: 'struct KlerosCoreRuler.Round',
                type: 'tuple',
                components: [
                    {
                        name: 'totalFeesForJurors',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'sumFeeRewardPaid',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'feeToken',
                        internalType: 'contract IERC20',
                        type: 'address',
                    },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_courtID', internalType: 'uint96', type: 'uint96' }],
        name: 'getTimesPerPeriod',
        outputs: [
            {
                name: 'timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
            {
                name: '_courtParameters',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize2',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'pinakion',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
        ],
        name: 'rulers',
        outputs: [{ name: 'ruler', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'rulingResults',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
        ],
        name: 'settings',
        outputs: [
            {
                name: 'rulingMode',
                internalType: 'enum KlerosCoreRuler.RulingMode',
                type: 'uint8',
            },
            { name: 'presetRuling', internalType: 'uint256', type: 'uint256' },
            { name: 'presetTied', internalType: 'bool', type: 'bool' },
            { name: 'presetOverridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xb8bF3A32730cEc3B0a8516b87246ceE24ca2eaCF)
 */
exports.klerosCoreRulerImplementationAddress = {
    421614: '0xb8bF3A32730cEc3B0a8516b87246ceE24ca2eaCF',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xb8bF3A32730cEc3B0a8516b87246ceE24ca2eaCF)
 */
exports.klerosCoreRulerImplementationConfig = {
    address: exports.klerosCoreRulerImplementationAddress,
    abi: exports.klerosCoreRulerImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosCoreRuler_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0630e4248a17b506809009F5D88E2f5bEE584c83)
 */
exports.klerosCoreRulerProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0630e4248a17b506809009F5D88E2f5bEE584c83)
 */
exports.klerosCoreRulerProxyAddress = {
    421614: '0x0630e4248a17b506809009F5D88E2f5bEE584c83',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0630e4248a17b506809009F5D88E2f5bEE584c83)
 */
exports.klerosCoreRulerProxyConfig = {
    address: exports.klerosCoreRulerProxyAddress,
    abi: exports.klerosCoreRulerProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosCoreSnapshotProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xF924ac62b20901914c101Fa089Da1FB6A0585138)
 */
exports.klerosCoreSnapshotProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract IKlerosCore', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
        name: 'balanceOf',
        outputs: [
            { name: 'totalStaked', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_core', internalType: 'contract IKlerosCore', type: 'address' },
        ],
        name: 'changeCore',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract IKlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'name',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xF924ac62b20901914c101Fa089Da1FB6A0585138)
 */
exports.klerosCoreSnapshotProxyAddress = {
    421614: '0xF924ac62b20901914c101Fa089Da1FB6A0585138',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xF924ac62b20901914c101Fa089Da1FB6A0585138)
 */
exports.klerosCoreSnapshotProxyConfig = {
    address: exports.klerosCoreSnapshotProxyAddress,
    abi: exports.klerosCoreSnapshotProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosCoreUniversity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5AB37F38778Bc175852fA353056591D91c744ce6)
 */
exports.klerosCoreUniversityAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AllJurorsDrawn' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'AppealFeesNotEnough' },
    { type: 'error', inputs: [], name: 'AppealPeriodNotPassed' },
    { type: 'error', inputs: [], name: 'ArbitrationFeesNotEnough' },
    { type: 'error', inputs: [], name: 'ArraysLengthMismatch' },
    { type: 'error', inputs: [], name: 'CannotDisableClassicDK' },
    { type: 'error', inputs: [], name: 'CommitPeriodNotPassed' },
    { type: 'error', inputs: [], name: 'DepthLevelMax' },
    { type: 'error', inputs: [], name: 'DisputeKitNotSupportedByCourt' },
    { type: 'error', inputs: [], name: 'DisputeKitOnly' },
    { type: 'error', inputs: [], name: 'DisputeNotAppealable' },
    { type: 'error', inputs: [], name: 'DisputePeriodIsFinal' },
    { type: 'error', inputs: [], name: 'DisputeStillDrawing' },
    { type: 'error', inputs: [], name: 'EvidenceNotPassedAndNotAppeal' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    { type: 'error', inputs: [], name: 'GovernorOnly' },
    { type: 'error', inputs: [], name: 'GovernorOrInstructorOnly' },
    { type: 'error', inputs: [], name: 'InstructorOnly' },
    { type: 'error', inputs: [], name: 'InvalidDisputKitParent' },
    { type: 'error', inputs: [], name: 'InvalidForkingCourtAsParent' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'MinStakeLowerThanParentCourt' },
    { type: 'error', inputs: [], name: 'MustSupportDisputeKitClassic' },
    { type: 'error', inputs: [], name: 'NoJurorDrawn' },
    { type: 'error', inputs: [], name: 'NotEvidencePeriod' },
    { type: 'error', inputs: [], name: 'NotExecutionPeriod' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'RulingAlreadyExecuted' },
    { type: 'error', inputs: [], name: 'SortitionModuleOnly' },
    { type: 'error', inputs: [], name: 'StakingInTooManyCourts' },
    { type: 'error', inputs: [], name: 'StakingLessThanCourtMinStake' },
    { type: 'error', inputs: [], name: 'StakingNotPossibeInThisCourt' },
    { type: 'error', inputs: [], name: 'StakingTransferFailed' },
    { type: 'error', inputs: [], name: 'TokenNotAccepted' },
    { type: 'error', inputs: [], name: 'TransferFailed' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    { type: 'error', inputs: [], name: 'UnstakingTransferFailed' },
    { type: 'error', inputs: [], name: 'UnsuccessfulCall' },
    { type: 'error', inputs: [], name: 'UnsupportedDisputeKit' },
    { type: 'error', inputs: [], name: 'VotePeriodNotPassed' },
    { type: 'error', inputs: [], name: 'WrongDisputeKitIndex' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            { name: '_accepted', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'AcceptedFeeToken',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealDecision',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealPossible',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_parent',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
            {
                name: '_supportedDisputeKits',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
        ],
        name: 'CourtCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_fromCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_toCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: false,
            },
        ],
        name: 'CourtJump',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
        ],
        name: 'CourtModified',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_disputeKitAddress',
                internalType: 'contract IDisputeKit',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeKitCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_disputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            { name: '_enable', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'DisputeKitEnabled',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_fromDisputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_toDisputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'DisputeKitJump',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_voteID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Draw',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_pnkAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'LeftoverRewardSent',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            {
                name: '_rateInEth',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
            {
                name: '_rateDecimals',
                internalType: 'uint8',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewCurrencyRate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_period',
                internalType: 'enum KlerosCoreUniversity.Period',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewPeriod',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_account',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_degreeOfCoherency',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_pnkAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'TokenAndETHShift',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_disputeKitAddress',
                internalType: 'contract IDisputeKit',
                type: 'address',
            },
        ],
        name: 'addNewDisputeKit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'appeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'appealCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'appealPeriod',
        outputs: [
            { name: 'start', internalType: 'uint256', type: 'uint256' },
            { name: 'end', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_accepted', internalType: 'bool', type: 'bool' },
        ],
        name: 'changeAcceptedFeeTokens',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        name: 'changeCourtParameters',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: '_rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        name: 'changeCurrencyRates',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_instructor', internalType: 'address', type: 'address' }],
        name: 'changeInstructor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_jurorProsecutionModule',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'changeJurorProsecutionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'changePinakion',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_sortitionModule',
                internalType: 'contract ISortitionModuleUniversity',
                type: 'address',
            },
        ],
        name: 'changeSortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_toToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_amountInEth', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'convertEthToTokenAmount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'courts',
        outputs: [
            { name: 'parent', internalType: 'uint96', type: 'uint96' },
            { name: 'hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: 'minStake', internalType: 'uint256', type: 'uint256' },
            { name: 'alpha', internalType: 'uint256', type: 'uint256' },
            { name: 'feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: 'jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            { name: 'disabled', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_parent', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            {
                name: '_supportedDisputeKits',
                internalType: 'uint256[]',
                type: 'uint256[]',
            },
        ],
        name: 'createCourt',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_feeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        name: 'currencyRates',
        outputs: [
            { name: 'feePaymentAccepted', internalType: 'bool', type: 'bool' },
            { name: 'rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: 'rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputeKits',
        outputs: [
            { name: '', internalType: 'contract IDisputeKit', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'courtID', internalType: 'uint96', type: 'uint96' },
            {
                name: 'arbitrated',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
            {
                name: 'period',
                internalType: 'enum KlerosCoreUniversity.Period',
                type: 'uint8',
            },
            { name: 'ruled', internalType: 'bool', type: 'bool' },
            { name: 'lastPeriodChange', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_juror', internalType: 'address', type: 'address' },
        ],
        name: 'draw',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_disputeKitIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_enable', internalType: 'bool', type: 'bool' },
        ],
        name: 'enableDisputeKits',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
            { name: '_iterations', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'executeRuling',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getDisputeKitsLength',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfVotes',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            {
                name: '',
                internalType: 'struct KlerosCoreUniversity.Round',
                type: 'tuple',
                components: [
                    { name: 'disputeKitID', internalType: 'uint256', type: 'uint256' },
                    {
                        name: 'pnkAtStakePerJuror',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'totalFeesForJurors',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    { name: 'nbVotes', internalType: 'uint256', type: 'uint256' },
                    { name: 'repartitions', internalType: 'uint256', type: 'uint256' },
                    { name: 'pnkPenalties', internalType: 'uint256', type: 'uint256' },
                    { name: 'drawnJurors', internalType: 'address[]', type: 'address[]' },
                    {
                        name: 'sumFeeRewardPaid',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'sumPnkRewardPaid',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'feeToken',
                        internalType: 'contract IERC20',
                        type: 'address',
                    },
                    { name: 'drawIterations', internalType: 'uint256', type: 'uint256' },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_courtID', internalType: 'uint96', type: 'uint96' }],
        name: 'getTimesPerPeriod',
        outputs: [
            {
                name: 'timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_instructor', internalType: 'address', type: 'address' },
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
            {
                name: '_jurorProsecutionModule',
                internalType: 'address',
                type: 'address',
            },
            {
                name: '_disputeKit',
                internalType: 'contract IDisputeKit',
                type: 'address',
            },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            {
                name: '_courtParameters',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            {
                name: '_sortitionModuleAddress',
                internalType: 'contract ISortitionModuleUniversity',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'instructor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'isDisputeKitJumping',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_disputeKitID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isSupported',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'jurorProsecutionModule',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'passPeriod',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'pinakion',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'setStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alreadyTransferred', internalType: 'bool', type: 'bool' },
        ],
        name: 'setStakeBySortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'sortitionModule',
        outputs: [
            {
                name: '',
                internalType: 'contract ISortitionModuleUniversity',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5AB37F38778Bc175852fA353056591D91c744ce6)
 */
exports.klerosCoreUniversityAddress = {
    421614: '0x5AB37F38778Bc175852fA353056591D91c744ce6',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5AB37F38778Bc175852fA353056591D91c744ce6)
 */
exports.klerosCoreUniversityConfig = {
    address: exports.klerosCoreUniversityAddress,
    abi: exports.klerosCoreUniversityAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosCoreUniversity_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xF74DaBfC5F5dbdBD07636637204d9C35326D2906)
 */
exports.klerosCoreUniversityImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AllJurorsDrawn' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'AppealFeesNotEnough' },
    { type: 'error', inputs: [], name: 'AppealPeriodNotPassed' },
    { type: 'error', inputs: [], name: 'ArbitrationFeesNotEnough' },
    { type: 'error', inputs: [], name: 'ArraysLengthMismatch' },
    { type: 'error', inputs: [], name: 'CannotDisableClassicDK' },
    { type: 'error', inputs: [], name: 'CommitPeriodNotPassed' },
    { type: 'error', inputs: [], name: 'DepthLevelMax' },
    { type: 'error', inputs: [], name: 'DisputeKitNotSupportedByCourt' },
    { type: 'error', inputs: [], name: 'DisputeKitOnly' },
    { type: 'error', inputs: [], name: 'DisputeNotAppealable' },
    { type: 'error', inputs: [], name: 'DisputePeriodIsFinal' },
    { type: 'error', inputs: [], name: 'DisputeStillDrawing' },
    { type: 'error', inputs: [], name: 'EvidenceNotPassedAndNotAppeal' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    { type: 'error', inputs: [], name: 'GovernorOnly' },
    { type: 'error', inputs: [], name: 'GovernorOrInstructorOnly' },
    { type: 'error', inputs: [], name: 'InstructorOnly' },
    { type: 'error', inputs: [], name: 'InvalidDisputKitParent' },
    { type: 'error', inputs: [], name: 'InvalidForkingCourtAsParent' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'MinStakeLowerThanParentCourt' },
    { type: 'error', inputs: [], name: 'MustSupportDisputeKitClassic' },
    { type: 'error', inputs: [], name: 'NoJurorDrawn' },
    { type: 'error', inputs: [], name: 'NotEvidencePeriod' },
    { type: 'error', inputs: [], name: 'NotExecutionPeriod' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'RulingAlreadyExecuted' },
    { type: 'error', inputs: [], name: 'SortitionModuleOnly' },
    { type: 'error', inputs: [], name: 'StakingInTooManyCourts' },
    { type: 'error', inputs: [], name: 'StakingLessThanCourtMinStake' },
    { type: 'error', inputs: [], name: 'StakingNotPossibeInThisCourt' },
    { type: 'error', inputs: [], name: 'StakingTransferFailed' },
    { type: 'error', inputs: [], name: 'TokenNotAccepted' },
    { type: 'error', inputs: [], name: 'TransferFailed' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    { type: 'error', inputs: [], name: 'UnstakingTransferFailed' },
    { type: 'error', inputs: [], name: 'UnsuccessfulCall' },
    { type: 'error', inputs: [], name: 'UnsupportedDisputeKit' },
    { type: 'error', inputs: [], name: 'VotePeriodNotPassed' },
    { type: 'error', inputs: [], name: 'WrongDisputeKitIndex' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            { name: '_accepted', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'AcceptedFeeToken',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealDecision',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealPossible',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_parent',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
            {
                name: '_supportedDisputeKits',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
        ],
        name: 'CourtCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_fromCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_toCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: false,
            },
        ],
        name: 'CourtJump',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
        ],
        name: 'CourtModified',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_disputeKitAddress',
                internalType: 'contract IDisputeKit',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeKitCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_disputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            { name: '_enable', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'DisputeKitEnabled',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_fromDisputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_toDisputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'DisputeKitJump',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_voteID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Draw',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_pnkAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'LeftoverRewardSent',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            {
                name: '_rateInEth',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
            {
                name: '_rateDecimals',
                internalType: 'uint8',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewCurrencyRate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_period',
                internalType: 'enum KlerosCoreUniversity.Period',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewPeriod',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_account',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_degreeOfCoherency',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_pnkAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'TokenAndETHShift',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_disputeKitAddress',
                internalType: 'contract IDisputeKit',
                type: 'address',
            },
        ],
        name: 'addNewDisputeKit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'appeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'appealCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'appealPeriod',
        outputs: [
            { name: 'start', internalType: 'uint256', type: 'uint256' },
            { name: 'end', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_accepted', internalType: 'bool', type: 'bool' },
        ],
        name: 'changeAcceptedFeeTokens',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        name: 'changeCourtParameters',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: '_rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        name: 'changeCurrencyRates',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_instructor', internalType: 'address', type: 'address' }],
        name: 'changeInstructor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_jurorProsecutionModule',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'changeJurorProsecutionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'changePinakion',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_sortitionModule',
                internalType: 'contract ISortitionModuleUniversity',
                type: 'address',
            },
        ],
        name: 'changeSortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_toToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_amountInEth', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'convertEthToTokenAmount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'courts',
        outputs: [
            { name: 'parent', internalType: 'uint96', type: 'uint96' },
            { name: 'hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: 'minStake', internalType: 'uint256', type: 'uint256' },
            { name: 'alpha', internalType: 'uint256', type: 'uint256' },
            { name: 'feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: 'jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            { name: 'disabled', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_parent', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            {
                name: '_supportedDisputeKits',
                internalType: 'uint256[]',
                type: 'uint256[]',
            },
        ],
        name: 'createCourt',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_feeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        name: 'currencyRates',
        outputs: [
            { name: 'feePaymentAccepted', internalType: 'bool', type: 'bool' },
            { name: 'rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: 'rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputeKits',
        outputs: [
            { name: '', internalType: 'contract IDisputeKit', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'courtID', internalType: 'uint96', type: 'uint96' },
            {
                name: 'arbitrated',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
            {
                name: 'period',
                internalType: 'enum KlerosCoreUniversity.Period',
                type: 'uint8',
            },
            { name: 'ruled', internalType: 'bool', type: 'bool' },
            { name: 'lastPeriodChange', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_juror', internalType: 'address', type: 'address' },
        ],
        name: 'draw',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_disputeKitIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_enable', internalType: 'bool', type: 'bool' },
        ],
        name: 'enableDisputeKits',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
            { name: '_iterations', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'executeRuling',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getDisputeKitsLength',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfVotes',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            {
                name: '',
                internalType: 'struct KlerosCoreUniversity.Round',
                type: 'tuple',
                components: [
                    { name: 'disputeKitID', internalType: 'uint256', type: 'uint256' },
                    {
                        name: 'pnkAtStakePerJuror',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'totalFeesForJurors',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    { name: 'nbVotes', internalType: 'uint256', type: 'uint256' },
                    { name: 'repartitions', internalType: 'uint256', type: 'uint256' },
                    { name: 'pnkPenalties', internalType: 'uint256', type: 'uint256' },
                    { name: 'drawnJurors', internalType: 'address[]', type: 'address[]' },
                    {
                        name: 'sumFeeRewardPaid',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'sumPnkRewardPaid',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'feeToken',
                        internalType: 'contract IERC20',
                        type: 'address',
                    },
                    { name: 'drawIterations', internalType: 'uint256', type: 'uint256' },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_courtID', internalType: 'uint96', type: 'uint96' }],
        name: 'getTimesPerPeriod',
        outputs: [
            {
                name: 'timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_instructor', internalType: 'address', type: 'address' },
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
            {
                name: '_jurorProsecutionModule',
                internalType: 'address',
                type: 'address',
            },
            {
                name: '_disputeKit',
                internalType: 'contract IDisputeKit',
                type: 'address',
            },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            {
                name: '_courtParameters',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            {
                name: '_sortitionModuleAddress',
                internalType: 'contract ISortitionModuleUniversity',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'instructor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'isDisputeKitJumping',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_disputeKitID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isSupported',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'jurorProsecutionModule',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'passPeriod',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'pinakion',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'setStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alreadyTransferred', internalType: 'bool', type: 'bool' },
        ],
        name: 'setStakeBySortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'sortitionModule',
        outputs: [
            {
                name: '',
                internalType: 'contract ISortitionModuleUniversity',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xF74DaBfC5F5dbdBD07636637204d9C35326D2906)
 */
exports.klerosCoreUniversityImplementationAddress = {
    421614: '0xF74DaBfC5F5dbdBD07636637204d9C35326D2906',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xF74DaBfC5F5dbdBD07636637204d9C35326D2906)
 */
exports.klerosCoreUniversityImplementationConfig = {
    address: exports.klerosCoreUniversityImplementationAddress,
    abi: exports.klerosCoreUniversityImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosCoreUniversity_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5AB37F38778Bc175852fA353056591D91c744ce6)
 */
exports.klerosCoreUniversityProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5AB37F38778Bc175852fA353056591D91c744ce6)
 */
exports.klerosCoreUniversityProxyAddress = {
    421614: '0x5AB37F38778Bc175852fA353056591D91c744ce6',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5AB37F38778Bc175852fA353056591D91c744ce6)
 */
exports.klerosCoreUniversityProxyConfig = {
    address: exports.klerosCoreUniversityProxyAddress,
    abi: exports.klerosCoreUniversityProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosCore_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0d91F523fA287A74698A0e6Cd6A2436E91b9BEB9)
 */
exports.klerosCoreImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'AppealFeesNotEnough' },
    { type: 'error', inputs: [], name: 'AppealPeriodNotPassed' },
    { type: 'error', inputs: [], name: 'ArbitrationFeesNotEnough' },
    { type: 'error', inputs: [], name: 'CannotDisableClassicDK' },
    { type: 'error', inputs: [], name: 'CommitPeriodNotPassed' },
    { type: 'error', inputs: [], name: 'DisputeKitNotSupportedByCourt' },
    { type: 'error', inputs: [], name: 'DisputeKitOnly' },
    { type: 'error', inputs: [], name: 'DisputeNotAppealable' },
    { type: 'error', inputs: [], name: 'DisputePeriodIsFinal' },
    { type: 'error', inputs: [], name: 'DisputeStillDrawing' },
    { type: 'error', inputs: [], name: 'EvidenceNotPassedAndNotAppeal' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    { type: 'error', inputs: [], name: 'GovernorOnly' },
    { type: 'error', inputs: [], name: 'GuardianOrGovernorOnly' },
    { type: 'error', inputs: [], name: 'InvalidDisputKitParent' },
    { type: 'error', inputs: [], name: 'InvalidForkingCourtAsParent' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'MinStakeLowerThanParentCourt' },
    { type: 'error', inputs: [], name: 'MustSupportDisputeKitClassic' },
    { type: 'error', inputs: [], name: 'NotEvidencePeriod' },
    { type: 'error', inputs: [], name: 'NotExecutionPeriod' },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'RulingAlreadyExecuted' },
    { type: 'error', inputs: [], name: 'SortitionModuleOnly' },
    { type: 'error', inputs: [], name: 'StakingInTooManyCourts' },
    { type: 'error', inputs: [], name: 'StakingLessThanCourtMinStake' },
    { type: 'error', inputs: [], name: 'StakingNotPossibleInThisCourt' },
    { type: 'error', inputs: [], name: 'StakingTransferFailed' },
    { type: 'error', inputs: [], name: 'StakingZeroWhenNoStake' },
    { type: 'error', inputs: [], name: 'TokenNotAccepted' },
    { type: 'error', inputs: [], name: 'TransferFailed' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    { type: 'error', inputs: [], name: 'UnstakingTransferFailed' },
    { type: 'error', inputs: [], name: 'UnsuccessfulCall' },
    { type: 'error', inputs: [], name: 'UnsupportedDisputeKit' },
    { type: 'error', inputs: [], name: 'VotePeriodNotPassed' },
    { type: 'error', inputs: [], name: 'WhenNotPausedOnly' },
    { type: 'error', inputs: [], name: 'WhenPausedOnly' },
    { type: 'error', inputs: [], name: 'WrongDisputeKitIndex' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            { name: '_accepted', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'AcceptedFeeToken',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealDecision',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AppealPossible',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_parent',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
            {
                name: '_supportedDisputeKits',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
        ],
        name: 'CourtCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_fromCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_toCourtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: false,
            },
        ],
        name: 'CourtJump',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_hiddenVotes',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: '_minStake',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_alpha',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeForJuror',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_jurorsForCourtJump',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
                indexed: false,
            },
        ],
        name: 'CourtModified',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_disputeKitAddress',
                internalType: 'contract IDisputeKit',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'DisputeKitCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_disputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            { name: '_enable', internalType: 'bool', type: 'bool', indexed: true },
        ],
        name: 'DisputeKitEnabled',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_fromDisputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_toDisputeKitID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'DisputeKitJump',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_voteID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Draw',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_pnkAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'LeftoverRewardSent',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: true,
            },
            {
                name: '_rateInEth',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
            {
                name: '_rateDecimals',
                internalType: 'uint8',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewCurrencyRate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_period',
                internalType: 'enum KlerosCoreBase.Period',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewPeriod',
    },
    { type: 'event', anonymous: false, inputs: [], name: 'Paused' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_arbitrable',
                internalType: 'contract IArbitrableV2',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_ruling',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Ruling',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_account',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_disputeID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_roundID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_degreeOfCoherency',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_pnkAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeAmount',
                internalType: 'int256',
                type: 'int256',
                indexed: false,
            },
            {
                name: '_feeToken',
                internalType: 'contract IERC20',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'TokenAndETHShift',
    },
    { type: 'event', anonymous: false, inputs: [], name: 'Unpaused' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_disputeKitAddress',
                internalType: 'contract IDisputeKit',
                type: 'address',
            },
        ],
        name: 'addNewDisputeKit',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'appeal',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'appealCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'appealPeriod',
        outputs: [
            { name: 'start', internalType: 'uint256', type: 'uint256' },
            { name: 'end', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
        name: 'arbitrationCost',
        outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_accepted', internalType: 'bool', type: 'bool' },
        ],
        name: 'changeAcceptedFeeTokens',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        name: 'changeCourtParameters',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: '_rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        name: 'changeCurrencyRates',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address payable', type: 'address' },
        ],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_guardian', internalType: 'address', type: 'address' }],
        name: 'changeGuardian',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_jurorProsecutionModule',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'changeJurorProsecutionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
        ],
        name: 'changePinakion',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_sortitionModule',
                internalType: 'contract ISortitionModule',
                type: 'address',
            },
        ],
        name: 'changeSortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_toToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_amountInEth', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'convertEthToTokenAmount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'courts',
        outputs: [
            { name: 'parent', internalType: 'uint96', type: 'uint96' },
            { name: 'hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: 'minStake', internalType: 'uint256', type: 'uint256' },
            { name: 'alpha', internalType: 'uint256', type: 'uint256' },
            { name: 'feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: 'jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            { name: 'disabled', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_parent', internalType: 'uint96', type: 'uint96' },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            { name: '_minStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alpha', internalType: 'uint256', type: 'uint256' },
            { name: '_feeForJuror', internalType: 'uint256', type: 'uint256' },
            { name: '_jurorsForCourtJump', internalType: 'uint256', type: 'uint256' },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            { name: '_sortitionExtraData', internalType: 'bytes', type: 'bytes' },
            {
                name: '_supportedDisputeKits',
                internalType: 'uint256[]',
                type: 'uint256[]',
            },
        ],
        name: 'createCourt',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_numberOfChoices', internalType: 'uint256', type: 'uint256' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
            { name: '_feeToken', internalType: 'contract IERC20', type: 'address' },
            { name: '_feeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDispute',
        outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        name: 'currencyRates',
        outputs: [
            { name: 'feePaymentAccepted', internalType: 'bool', type: 'bool' },
            { name: 'rateInEth', internalType: 'uint64', type: 'uint64' },
            { name: 'rateDecimals', internalType: 'uint8', type: 'uint8' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'currentRuling',
        outputs: [
            { name: 'ruling', internalType: 'uint256', type: 'uint256' },
            { name: 'tied', internalType: 'bool', type: 'bool' },
            { name: 'overridden', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputeKits',
        outputs: [
            { name: '', internalType: 'contract IDisputeKit', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'disputes',
        outputs: [
            { name: 'courtID', internalType: 'uint96', type: 'uint96' },
            {
                name: 'arbitrated',
                internalType: 'contract IArbitrableV2',
                type: 'address',
            },
            {
                name: 'period',
                internalType: 'enum KlerosCoreBase.Period',
                type: 'uint8',
            },
            { name: 'ruled', internalType: 'bool', type: 'bool' },
            { name: 'lastPeriodChange', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_iterations', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'nbDrawnJurors', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_disputeKitIDs', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_enable', internalType: 'bool', type: 'bool' },
        ],
        name: 'enableDisputeKits',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
            { name: '_iterations', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_destination', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'executeGovernorProposal',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'executeRuling',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getDisputeKitsLength',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfRounds',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'getNumberOfVotes',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getPnkAtStakePerJuror',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_round', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getRoundInfo',
        outputs: [
            {
                name: '',
                internalType: 'struct KlerosCoreBase.Round',
                type: 'tuple',
                components: [
                    { name: 'disputeKitID', internalType: 'uint256', type: 'uint256' },
                    {
                        name: 'pnkAtStakePerJuror',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'totalFeesForJurors',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    { name: 'nbVotes', internalType: 'uint256', type: 'uint256' },
                    { name: 'repartitions', internalType: 'uint256', type: 'uint256' },
                    { name: 'pnkPenalties', internalType: 'uint256', type: 'uint256' },
                    { name: 'drawnJurors', internalType: 'address[]', type: 'address[]' },
                    {
                        name: 'sumFeeRewardPaid',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'sumPnkRewardPaid',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'feeToken',
                        internalType: 'contract IERC20',
                        type: 'address',
                    },
                    { name: 'drawIterations', internalType: 'uint256', type: 'uint256' },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_courtID', internalType: 'uint96', type: 'uint96' }],
        name: 'getTimesPerPeriod',
        outputs: [
            {
                name: 'timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'guardian',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_guardian', internalType: 'address', type: 'address' },
            { name: '_pinakion', internalType: 'contract IERC20', type: 'address' },
            {
                name: '_jurorProsecutionModule',
                internalType: 'address',
                type: 'address',
            },
            {
                name: '_disputeKit',
                internalType: 'contract IDisputeKit',
                type: 'address',
            },
            { name: '_hiddenVotes', internalType: 'bool', type: 'bool' },
            {
                name: '_courtParameters',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            {
                name: '_timesPerPeriod',
                internalType: 'uint256[4]',
                type: 'uint256[4]',
            },
            { name: '_sortitionExtraData', internalType: 'bytes', type: 'bytes' },
            {
                name: '_sortitionModuleAddress',
                internalType: 'contract ISortitionModule',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize5',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'isDisputeKitJumping',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_disputeKitID', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isSupported',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'jurorProsecutionModule',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
        name: 'passPeriod',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'paused',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'pinakion',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'setStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'setStakeBySortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'sortitionModule',
        outputs: [
            { name: '', internalType: 'contract ISortitionModule', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transferBySortitionModule',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'unpause',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0d91F523fA287A74698A0e6Cd6A2436E91b9BEB9)
 */
exports.klerosCoreImplementationAddress = {
    421614: '0x0d91F523fA287A74698A0e6Cd6A2436E91b9BEB9',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0d91F523fA287A74698A0e6Cd6A2436E91b9BEB9)
 */
exports.klerosCoreImplementationConfig = {
    address: exports.klerosCoreImplementationAddress,
    abi: exports.klerosCoreImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosCore_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1Bd44c4a4511DbFa7DC1d5BC201635596E7200f9)
 */
exports.klerosCoreProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1Bd44c4a4511DbFa7DC1d5BC201635596E7200f9)
 */
exports.klerosCoreProxyAddress = {
    421614: '0x1Bd44c4a4511DbFa7DC1d5BC201635596E7200f9',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1Bd44c4a4511DbFa7DC1d5BC201635596E7200f9)
 */
exports.klerosCoreProxyConfig = {
    address: exports.klerosCoreProxyAddress,
    abi: exports.klerosCoreProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KlerosV2NeoEarlyUser
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0d60Ff8bbCF49Bc5352328E7E28e141834d7750F)
 */
exports.klerosV2NeoEarlyUserAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_name', internalType: 'string', type: 'string' },
            { name: '_symbol', internalType: 'string', type: 'string' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'approved',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'tokenId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'Approval',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'operator',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
        ],
        name: 'ApprovalForAll',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', internalType: 'address', type: 'address', indexed: true },
            { name: 'to', internalType: 'address', type: 'address', indexed: true },
            {
                name: 'tokenId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'Transfer',
    },
    {
        type: 'function',
        inputs: [
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_newOwner', internalType: 'address', type: 'address' }],
        name: 'changeOwner',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'operator', internalType: 'address', type: 'address' },
        ],
        name: 'isApprovedForAll',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'name',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
        name: 'safeMint',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'from', internalType: 'address', type: 'address' },
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'from', internalType: 'address', type: 'address' },
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'operator', internalType: 'address', type: 'address' },
            { name: 'approved', internalType: 'bool', type: 'bool' },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'from', internalType: 'address', type: 'address' },
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0d60Ff8bbCF49Bc5352328E7E28e141834d7750F)
 */
exports.klerosV2NeoEarlyUserAddress = {
    421614: '0x0d60Ff8bbCF49Bc5352328E7E28e141834d7750F',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0d60Ff8bbCF49Bc5352328E7E28e141834d7750F)
 */
exports.klerosV2NeoEarlyUserConfig = {
    address: exports.klerosV2NeoEarlyUserAddress,
    abi: exports.klerosV2NeoEarlyUserAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PNK
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 */
exports.pnkAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'spender',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Approval',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', internalType: 'address', type: 'address', indexed: true },
            { name: 'to', internalType: 'address', type: 'address', indexed: true },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Transfer',
    },
    {
        type: 'function',
        inputs: [
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'spender', internalType: 'address', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'decreaseAllowance',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'name',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'from', internalType: 'address', type: 'address' },
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 */
exports.pnkAddress = {
    421614: '0x34B944D42cAcfC8266955D07A80181D2054aa225',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 */
exports.pnkConfig = { address: exports.pnkAddress, abi: exports.pnkAbi };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PNKFaucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x7EFE468003Ad6A858b5350CDE0A67bBED58739dD)
 */
exports.pnkFaucetAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_token', internalType: 'contract IERC20', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'amount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'balance',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
        name: 'changeAmount',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'request',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'token',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'address', type: 'address' }],
        name: 'withdrewAlready',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x7EFE468003Ad6A858b5350CDE0A67bBED58739dD)
 */
exports.pnkFaucetAddress = {
    421614: '0x7EFE468003Ad6A858b5350CDE0A67bBED58739dD',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x7EFE468003Ad6A858b5350CDE0A67bBED58739dD)
 */
exports.pnkFaucetConfig = {
    address: exports.pnkFaucetAddress,
    abi: exports.pnkFaucetAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PinakionV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x593e89704D285B0c3fbF157c7CF2537456CE64b5)
 */
exports.pinakionV2Abi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'spender',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Approval',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', internalType: 'address', type: 'address', indexed: true },
            { name: 'to', internalType: 'address', type: 'address', indexed: true },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Transfer',
    },
    {
        type: 'function',
        inputs: [
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'spender', internalType: 'address', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'decreaseAllowance',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'name',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'from', internalType: 'address', type: 'address' },
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
];
/**
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x593e89704D285B0c3fbF157c7CF2537456CE64b5)
 */
exports.pinakionV2Address = {
    421614: '0x34B944D42cAcfC8266955D07A80181D2054aa225',
    11155111: '0x593e89704D285B0c3fbF157c7CF2537456CE64b5',
};
/**
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x593e89704D285B0c3fbF157c7CF2537456CE64b5)
 */
exports.pinakionV2Config = {
    address: exports.pinakionV2Address,
    abi: exports.pinakionV2Abi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PolicyRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd8681dBF525ecBda2F799BFddB96840065075e8A)
 */
exports.policyRegistryAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_courtName',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
            {
                name: '_policy',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'PolicyUpdate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize2',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'policies',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint256', type: 'uint256' },
            { name: '_courtName', internalType: 'string', type: 'string' },
            { name: '_policy', internalType: 'string', type: 'string' },
        ],
        name: 'setPolicy',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd8681dBF525ecBda2F799BFddB96840065075e8A)
 */
exports.policyRegistryAddress = {
    421614: '0xd8681dBF525ecBda2F799BFddB96840065075e8A',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd8681dBF525ecBda2F799BFddB96840065075e8A)
 */
exports.policyRegistryConfig = {
    address: exports.policyRegistryAddress,
    abi: exports.policyRegistryAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PolicyRegistry_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x472846F88D1356bb483a88f97B55026654Fc5deD)
 */
exports.policyRegistryImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_courtID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: '_courtName',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
            {
                name: '_policy',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
        ],
        name: 'PolicyUpdate',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize2',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'policies',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_courtID', internalType: 'uint256', type: 'uint256' },
            { name: '_courtName', internalType: 'string', type: 'string' },
            { name: '_policy', internalType: 'string', type: 'string' },
        ],
        name: 'setPolicy',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x472846F88D1356bb483a88f97B55026654Fc5deD)
 */
exports.policyRegistryImplementationAddress = {
    421614: '0x472846F88D1356bb483a88f97B55026654Fc5deD',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x472846F88D1356bb483a88f97B55026654Fc5deD)
 */
exports.policyRegistryImplementationConfig = {
    address: exports.policyRegistryImplementationAddress,
    abi: exports.policyRegistryImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PolicyRegistry_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd8681dBF525ecBda2F799BFddB96840065075e8A)
 */
exports.policyRegistryProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd8681dBF525ecBda2F799BFddB96840065075e8A)
 */
exports.policyRegistryProxyAddress = {
    421614: '0xd8681dBF525ecBda2F799BFddB96840065075e8A',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd8681dBF525ecBda2F799BFddB96840065075e8A)
 */
exports.policyRegistryProxyConfig = {
    address: exports.policyRegistryProxyAddress,
    abi: exports.policyRegistryProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RandomizerOracle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE775D7fde1d0D09ae627C0131040012ccBcC4b9b)
 */
exports.randomizerOracleAbi = [];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE775D7fde1d0D09ae627C0131040012ccBcC4b9b)
 */
exports.randomizerOracleAddress = {
    421614: '0xE775D7fde1d0D09ae627C0131040012ccBcC4b9b',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE775D7fde1d0D09ae627C0131040012ccBcC4b9b)
 */
exports.randomizerOracleConfig = {
    address: exports.randomizerOracleAddress,
    abi: exports.randomizerOracleAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SortitionModule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x6F24A90fBBeabB2B4343Bb9c1eD8ee6AcAa50663)
 */
exports.sortitionModuleAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_account',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'LeftoverPNK',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_account',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'LeftoverPNKWithdrawn',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_phase',
                internalType: 'enum ISortitionModule.Phase',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewPhase',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'StakeDelayed',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_relativeAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            { name: '_unlock', internalType: 'bool', type: 'bool', indexed: false },
        ],
        name: 'StakeLocked',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_courtID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_amountAllCourts',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'StakeSet',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_maxDrawingTime', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeMaxDrawingTime',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_minStakingTime', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeMinStakingTime',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_rng', internalType: 'contract RNG', type: 'address' },
            { name: '_rngLookahead', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeRandomNumberGenerator',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDisputeHook',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_key', internalType: 'bytes32', type: 'bytes32' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createTree',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'delayedStakeReadIndex',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'delayedStakeWriteIndex',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'delayedStakes',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'courtID', internalType: 'uint96', type: 'uint96' },
            { name: 'stake', internalType: 'uint256', type: 'uint256' },
            { name: 'alreadyTransferred', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'disputesWithoutJurors',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_key', internalType: 'bytes32', type: 'bytes32' },
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_iterations', internalType: 'uint256', type: 'uint256' }],
        name: 'executeDelayedStakes',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_juror', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
        ],
        name: 'getJurorBalance',
        outputs: [
            { name: 'totalStaked', internalType: 'uint256', type: 'uint256' },
            { name: 'totalLocked', internalType: 'uint256', type: 'uint256' },
            { name: 'stakedInCourt', internalType: 'uint256', type: 'uint256' },
            { name: 'nbCourts', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'getJurorCourtIDs',
        outputs: [{ name: '', internalType: 'uint96[]', type: 'uint96[]' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'getJurorLeftoverPNK',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
            { name: '_minStakingTime', internalType: 'uint256', type: 'uint256' },
            { name: '_maxDrawingTime', internalType: 'uint256', type: 'uint256' },
            { name: '_rng', internalType: 'contract RNG', type: 'address' },
            { name: '_rngLookahead', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize4',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'isJurorStaked',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'jurors',
        outputs: [
            { name: 'stakedPnk', internalType: 'uint256', type: 'uint256' },
            { name: 'lockedPnk', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'lastPhaseChange',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'jurorAccount', internalType: 'address', type: 'address' },
            { name: 'courtId', internalType: 'uint96', type: 'uint96' },
        ],
        name: 'latestDelayedStakeIndex',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'lockStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'maxDrawingTime',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'minStakingTime',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_randomNumber', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'notifyRandomNumber',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'passPhase',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'penalizeStake',
        outputs: [
            { name: 'pnkBalance', internalType: 'uint256', type: 'uint256' },
            { name: 'availablePenalty', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'phase',
        outputs: [
            { name: '', internalType: 'enum ISortitionModule.Phase', type: 'uint8' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'postDrawHook',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'randomNumber',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'randomNumberRequestBlock',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'rng',
        outputs: [{ name: '', internalType: 'contract RNG', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'rngLookahead',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
        name: 'setJurorInactive',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_pnkDeposit', internalType: 'uint256', type: 'uint256' },
            { name: '_pnkWithdrawal', internalType: 'uint256', type: 'uint256' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'setStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_key', internalType: 'bytes32', type: 'bytes32' },
            { name: '_ID', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'stakeOf',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_juror', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
        ],
        name: 'stakeOf',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'validateStake',
        outputs: [
            { name: 'pnkDeposit', internalType: 'uint256', type: 'uint256' },
            { name: 'pnkWithdrawal', internalType: 'uint256', type: 'uint256' },
            {
                name: 'stakingResult',
                internalType: 'enum StakingResult',
                type: 'uint8',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
        name: 'withdrawLeftoverPNK',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x6F24A90fBBeabB2B4343Bb9c1eD8ee6AcAa50663)
 */
exports.sortitionModuleAddress = {
    421614: '0x6F24A90fBBeabB2B4343Bb9c1eD8ee6AcAa50663',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x6F24A90fBBeabB2B4343Bb9c1eD8ee6AcAa50663)
 */
exports.sortitionModuleConfig = {
    address: exports.sortitionModuleAddress,
    abi: exports.sortitionModuleAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SortitionModuleUniversity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4B2c2d048921f694cCE3AEa35698c6B1f5fcbb79)
 */
exports.sortitionModuleUniversityAbi = [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_phase',
                internalType: 'enum ISortitionModule.Phase',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewPhase',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_relativeAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            { name: '_unlock', internalType: 'bool', type: 'bool', indexed: false },
        ],
        name: 'StakeLocked',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_courtID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'StakeSet',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            {
                name: '',
                internalType: 'contract KlerosCoreUniversity',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDisputeHook',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_key', internalType: 'bytes32', type: 'bytes32' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createTree',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'disputesWithoutJurors',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'bytes32', type: 'bytes32' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_juror', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
        ],
        name: 'getJurorBalance',
        outputs: [
            { name: 'totalStaked', internalType: 'uint256', type: 'uint256' },
            { name: 'totalLocked', internalType: 'uint256', type: 'uint256' },
            { name: 'stakedInCourt', internalType: 'uint256', type: 'uint256' },
            { name: 'nbCourts', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'getJurorCourtIDs',
        outputs: [{ name: '', internalType: 'uint96[]', type: 'uint96[]' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            {
                name: '_core',
                internalType: 'contract KlerosCoreUniversity',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'isJurorStaked',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'jurors',
        outputs: [
            { name: 'stakedPnk', internalType: 'uint256', type: 'uint256' },
            { name: 'lockedPnk', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'lockStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_randomNumber', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'notifyRandomNumber',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'penalizeStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'postDrawHook',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
        name: 'setJurorInactive',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alreadyTransferred', internalType: 'bool', type: 'bool' },
        ],
        name: 'setStake',
        outputs: [
            { name: 'pnkDeposit', internalType: 'uint256', type: 'uint256' },
            { name: 'pnkWithdrawal', internalType: 'uint256', type: 'uint256' },
            {
                name: 'stakingResult',
                internalType: 'enum StakingResult',
                type: 'uint8',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'setTransientJuror',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4B2c2d048921f694cCE3AEa35698c6B1f5fcbb79)
 */
exports.sortitionModuleUniversityAddress = {
    421614: '0x4B2c2d048921f694cCE3AEa35698c6B1f5fcbb79',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4B2c2d048921f694cCE3AEa35698c6B1f5fcbb79)
 */
exports.sortitionModuleUniversityConfig = {
    address: exports.sortitionModuleUniversityAddress,
    abi: exports.sortitionModuleUniversityAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SortitionModuleUniversity_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5CAD621D69E0535422aCFaCC0017bC32beC7A486)
 */
exports.sortitionModuleUniversityImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_phase',
                internalType: 'enum ISortitionModule.Phase',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewPhase',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_relativeAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            { name: '_unlock', internalType: 'bool', type: 'bool', indexed: false },
        ],
        name: 'StakeLocked',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_courtID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'StakeSet',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            {
                name: '',
                internalType: 'contract KlerosCoreUniversity',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDisputeHook',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_key', internalType: 'bytes32', type: 'bytes32' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createTree',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'disputesWithoutJurors',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'bytes32', type: 'bytes32' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_juror', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
        ],
        name: 'getJurorBalance',
        outputs: [
            { name: 'totalStaked', internalType: 'uint256', type: 'uint256' },
            { name: 'totalLocked', internalType: 'uint256', type: 'uint256' },
            { name: 'stakedInCourt', internalType: 'uint256', type: 'uint256' },
            { name: 'nbCourts', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'getJurorCourtIDs',
        outputs: [{ name: '', internalType: 'uint96[]', type: 'uint96[]' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            {
                name: '_core',
                internalType: 'contract KlerosCoreUniversity',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'isJurorStaked',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'jurors',
        outputs: [
            { name: 'stakedPnk', internalType: 'uint256', type: 'uint256' },
            { name: 'lockedPnk', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'lockStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_randomNumber', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'notifyRandomNumber',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'penalizeStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'postDrawHook',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
        name: 'setJurorInactive',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
            { name: '_alreadyTransferred', internalType: 'bool', type: 'bool' },
        ],
        name: 'setStake',
        outputs: [
            { name: 'pnkDeposit', internalType: 'uint256', type: 'uint256' },
            { name: 'pnkWithdrawal', internalType: 'uint256', type: 'uint256' },
            {
                name: 'stakingResult',
                internalType: 'enum StakingResult',
                type: 'uint8',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'setTransientJuror',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5CAD621D69E0535422aCFaCC0017bC32beC7A486)
 */
exports.sortitionModuleUniversityImplementationAddress = {
    421614: '0x5CAD621D69E0535422aCFaCC0017bC32beC7A486',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5CAD621D69E0535422aCFaCC0017bC32beC7A486)
 */
exports.sortitionModuleUniversityImplementationConfig = {
    address: exports.sortitionModuleUniversityImplementationAddress,
    abi: exports.sortitionModuleUniversityImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SortitionModuleUniversity_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4B2c2d048921f694cCE3AEa35698c6B1f5fcbb79)
 */
exports.sortitionModuleUniversityProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4B2c2d048921f694cCE3AEa35698c6B1f5fcbb79)
 */
exports.sortitionModuleUniversityProxyAddress = {
    421614: '0x4B2c2d048921f694cCE3AEa35698c6B1f5fcbb79',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4B2c2d048921f694cCE3AEa35698c6B1f5fcbb79)
 */
exports.sortitionModuleUniversityProxyConfig = {
    address: exports.sortitionModuleUniversityProxyAddress,
    abi: exports.sortitionModuleUniversityProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SortitionModule_Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x8a26445989c944C58503275ad87Ab4d7b17d4F1e)
 */
exports.sortitionModuleImplementationAbi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'error', inputs: [], name: 'AlreadyInitialized' },
    { type: 'error', inputs: [], name: 'FailedDelegateCall' },
    {
        type: 'error',
        inputs: [
            { name: 'implementation', internalType: 'address', type: 'address' },
        ],
        name: 'InvalidImplementation',
    },
    { type: 'error', inputs: [], name: 'NotInitializing' },
    { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
    {
        type: 'error',
        inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
        name: 'UUPSUnsupportedProxiableUUID',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
        ],
        name: 'Initialized',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_account',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'LeftoverPNK',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_account',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'LeftoverPNKWithdrawn',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_phase',
                internalType: 'enum ISortitionModule.Phase',
                type: 'uint8',
                indexed: false,
            },
        ],
        name: 'NewPhase',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_courtID',
                internalType: 'uint96',
                type: 'uint96',
                indexed: true,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'StakeDelayed',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_relativeAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            { name: '_unlock', internalType: 'bool', type: 'bool', indexed: false },
        ],
        name: 'StakeLocked',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: '_address',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: '_courtID',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: '_amountAllCourts',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'StakeSet',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'Upgraded',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_maxDrawingTime', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeMaxDrawingTime',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_minStakingTime', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeMinStakingTime',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_rng', internalType: 'contract RNG', type: 'address' },
            { name: '_rngLookahead', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'changeRandomNumberGenerator',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'core',
        outputs: [
            { name: '', internalType: 'contract KlerosCore', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'createDisputeHook',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_key', internalType: 'bytes32', type: 'bytes32' },
            { name: '_extraData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'createTree',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'delayedStakeReadIndex',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'delayedStakeWriteIndex',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'delayedStakes',
        outputs: [
            { name: 'account', internalType: 'address', type: 'address' },
            { name: 'courtID', internalType: 'uint96', type: 'uint96' },
            { name: 'stake', internalType: 'uint256', type: 'uint256' },
            { name: 'alreadyTransferred', internalType: 'bool', type: 'bool' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'disputesWithoutJurors',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_key', internalType: 'bytes32', type: 'bytes32' },
            { name: '_coreDisputeID', internalType: 'uint256', type: 'uint256' },
            { name: '_nonce', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'draw',
        outputs: [
            { name: 'drawnAddress', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_iterations', internalType: 'uint256', type: 'uint256' }],
        name: 'executeDelayedStakes',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_juror', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
        ],
        name: 'getJurorBalance',
        outputs: [
            { name: 'totalStaked', internalType: 'uint256', type: 'uint256' },
            { name: 'totalLocked', internalType: 'uint256', type: 'uint256' },
            { name: 'stakedInCourt', internalType: 'uint256', type: 'uint256' },
            { name: 'nbCourts', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'getJurorCourtIDs',
        outputs: [{ name: '', internalType: 'uint96[]', type: 'uint96[]' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'getJurorLeftoverPNK',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_governor', internalType: 'address', type: 'address' },
            { name: '_core', internalType: 'contract KlerosCore', type: 'address' },
            { name: '_minStakingTime', internalType: 'uint256', type: 'uint256' },
            { name: '_maxDrawingTime', internalType: 'uint256', type: 'uint256' },
            { name: '_rng', internalType: 'contract RNG', type: 'address' },
            { name: '_rngLookahead', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'initialize4',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_juror', internalType: 'address', type: 'address' }],
        name: 'isJurorStaked',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'jurors',
        outputs: [
            { name: 'stakedPnk', internalType: 'uint256', type: 'uint256' },
            { name: 'lockedPnk', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'lastPhaseChange',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'jurorAccount', internalType: 'address', type: 'address' },
            { name: 'courtId', internalType: 'uint96', type: 'uint96' },
        ],
        name: 'latestDelayedStakeIndex',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'lockStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'maxDrawingTime',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'minStakingTime',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_randomNumber', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'notifyRandomNumber',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'passPhase',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'penalizeStake',
        outputs: [
            { name: 'pnkBalance', internalType: 'uint256', type: 'uint256' },
            { name: 'availablePenalty', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'phase',
        outputs: [
            { name: '', internalType: 'enum ISortitionModule.Phase', type: 'uint8' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'postDrawHook',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'randomNumber',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'randomNumberRequestBlock',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'rng',
        outputs: [{ name: '', internalType: 'contract RNG', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'rngLookahead',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
        name: 'setJurorInactive',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_pnkDeposit', internalType: 'uint256', type: 'uint256' },
            { name: '_pnkWithdrawal', internalType: 'uint256', type: 'uint256' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'setStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_key', internalType: 'bytes32', type: 'bytes32' },
            { name: '_ID', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'stakeOf',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_juror', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
        ],
        name: 'stakeOf',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_relativeAmount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'newImplementation', internalType: 'address', type: 'address' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_account', internalType: 'address', type: 'address' },
            { name: '_courtID', internalType: 'uint96', type: 'uint96' },
            { name: '_newStake', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'validateStake',
        outputs: [
            { name: 'pnkDeposit', internalType: 'uint256', type: 'uint256' },
            { name: 'pnkWithdrawal', internalType: 'uint256', type: 'uint256' },
            {
                name: 'stakingResult',
                internalType: 'enum StakingResult',
                type: 'uint8',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'version',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
        name: 'withdrawLeftoverPNK',
        outputs: [],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x8a26445989c944C58503275ad87Ab4d7b17d4F1e)
 */
exports.sortitionModuleImplementationAddress = {
    421614: '0x8a26445989c944C58503275ad87Ab4d7b17d4F1e',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x8a26445989c944C58503275ad87Ab4d7b17d4F1e)
 */
exports.sortitionModuleImplementationConfig = {
    address: exports.sortitionModuleImplementationAddress,
    abi: exports.sortitionModuleImplementationAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SortitionModule_Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x6F24A90fBBeabB2B4343Bb9c1eD8ee6AcAa50663)
 */
exports.sortitionModuleProxyAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_implementation', internalType: 'address', type: 'address' },
            { name: '_data', internalType: 'bytes', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x6F24A90fBBeabB2B4343Bb9c1eD8ee6AcAa50663)
 */
exports.sortitionModuleProxyAddress = {
    421614: '0x6F24A90fBBeabB2B4343Bb9c1eD8ee6AcAa50663',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x6F24A90fBBeabB2B4343Bb9c1eD8ee6AcAa50663)
 */
exports.sortitionModuleProxyConfig = {
    address: exports.sortitionModuleProxyAddress,
    abi: exports.sortitionModuleProxyAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TransactionBatcher
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x35f93986950804ac1F93519BF68C2a7Dd776db0E)
 */
exports.transactionBatcherAbi = [
    {
        type: 'function',
        inputs: [
            { name: 'targets', internalType: 'address[]', type: 'address[]' },
            { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
            { name: 'datas', internalType: 'bytes[]', type: 'bytes[]' },
        ],
        name: 'batchSend',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'targets', internalType: 'address[]', type: 'address[]' },
            { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
            { name: 'datas', internalType: 'bytes[]', type: 'bytes[]' },
        ],
        name: 'batchSendUnchecked',
        outputs: [],
        stateMutability: 'payable',
    },
];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x35f93986950804ac1F93519BF68C2a7Dd776db0E)
 */
exports.transactionBatcherAddress = {
    421614: '0x35f93986950804ac1F93519BF68C2a7Dd776db0E',
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x35f93986950804ac1F93519BF68C2a7Dd776db0E)
 */
exports.transactionBatcherConfig = {
    address: exports.transactionBatcherAddress,
    abi: exports.transactionBatcherAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WETH
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x2DFC9c3141268e6eac04a7D6d98Fbf64BDe836a8)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x3829A2486d53ee984a0ca2D76552715726b77138)
 */
exports.wethAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_name', internalType: 'string', type: 'string' },
            { name: '_symbol', internalType: 'string', type: 'string' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'spender',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Approval',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', internalType: 'address', type: 'address', indexed: true },
            { name: 'to', internalType: 'address', type: 'address', indexed: true },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Transfer',
    },
    {
        type: 'function',
        inputs: [
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'spender', internalType: 'address', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'decreaseAllowance',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'name',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'from', internalType: 'address', type: 'address' },
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
];
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x2DFC9c3141268e6eac04a7D6d98Fbf64BDe836a8)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x3829A2486d53ee984a0ca2D76552715726b77138)
 */
exports.wethAddress = {
    10200: '0x2DFC9c3141268e6eac04a7D6d98Fbf64BDe836a8',
    421614: '0x3829A2486d53ee984a0ca2D76552715726b77138',
};
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x2DFC9c3141268e6eac04a7D6d98Fbf64BDe836a8)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x3829A2486d53ee984a0ca2D76552715726b77138)
 */
exports.wethConfig = { address: exports.wethAddress, abi: exports.wethAbi };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WETHFaucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x22CB016c4b57413ca4DF5F1AC44a0E0d3c69811F)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x6F8C10E0030aDf5B8030a5E282F026ADdB6525fd)
 */
exports.wethFaucetAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_token', internalType: 'contract IERC20', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'amount',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'balance',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
        name: 'changeAmount',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
        name: 'changeGovernor',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'governor',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'request',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'token',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'address', type: 'address' }],
        name: 'withdrewAlready',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
];
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x22CB016c4b57413ca4DF5F1AC44a0E0d3c69811F)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x6F8C10E0030aDf5B8030a5E282F026ADdB6525fd)
 */
exports.wethFaucetAddress = {
    10200: '0x22CB016c4b57413ca4DF5F1AC44a0E0d3c69811F',
    421614: '0x6F8C10E0030aDf5B8030a5E282F026ADdB6525fd',
};
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x22CB016c4b57413ca4DF5F1AC44a0E0d3c69811F)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x6F8C10E0030aDf5B8030a5E282F026ADdB6525fd)
 */
exports.wethFaucetConfig = {
    address: exports.wethFaucetAddress,
    abi: exports.wethFaucetAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WPNKFaucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x5898aeE045A25B276369914c3448B72a41758B2c)
 */
exports.wpnkFaucetAbi = [
    {
        type: 'constructor',
        inputs: [
            { name: '_token', internalType: 'contract IERC20', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'balance',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'request',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'token',
        outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'address', type: 'address' }],
        name: 'withdrewAlready',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
];
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x5898aeE045A25B276369914c3448B72a41758B2c)
 */
exports.wpnkFaucetAddress = {
    10200: '0x5898aeE045A25B276369914c3448B72a41758B2c',
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x5898aeE045A25B276369914c3448B72a41758B2c)
 */
exports.wpnkFaucetConfig = {
    address: exports.wpnkFaucetAddress,
    abi: exports.wpnkFaucetAbi,
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WrappedPinakionV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xD75E27A56AaF9eE7F8d9A472a8C2EF2f65a764dd)
 */
exports.wrappedPinakionV2Abi = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'spender',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Approval',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', internalType: 'address', type: 'address', indexed: true },
            { name: 'to', internalType: 'address', type: 'address', indexed: true },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Transfer',
    },
    {
        type: 'function',
        inputs: [
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'spender', internalType: 'address', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'decreaseAllowance',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'spender', internalType: 'address', type: 'address' },
            { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'name',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', internalType: 'string', type: 'string' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'from', internalType: 'address', type: 'address' },
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
];
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xD75E27A56AaF9eE7F8d9A472a8C2EF2f65a764dd)
 */
exports.wrappedPinakionV2Address = {
    10200: '0xD75E27A56AaF9eE7F8d9A472a8C2EF2f65a764dd',
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xD75E27A56AaF9eE7F8d9A472a8C2EF2f65a764dd)
 */
exports.wrappedPinakionV2Config = {
    address: exports.wrappedPinakionV2Address,
    abi: exports.wrappedPinakionV2Abi,
};
