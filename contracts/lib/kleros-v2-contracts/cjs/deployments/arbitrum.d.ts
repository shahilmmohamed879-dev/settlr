declare const _default: {
    readonly name: "arbitrum";
    readonly chainId: "42161";
    readonly contracts: {
        readonly BlockHashRNG: {
            readonly address: "0x39D123fc4cFD24EA5bB76195f9ecFE1f0DF35b0B";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "block";
                    readonly type: "uint256";
                }];
                readonly name: "randomNumbers";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "number";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_block";
                    readonly type: "uint256";
                }];
                readonly name: "receiveRandomness";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "randomNumber";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_block";
                    readonly type: "uint256";
                }];
                readonly name: "requestRandomness";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }];
        };
        readonly ChainlinkRNG: {
            readonly address: "0x897d83a7d5F23555eFA15e1BE297d5503522cbA3";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_sortitionModule";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_vrfCoordinator";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_keyHash";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_subscriptionId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "_requestConfirmations";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "_callbackGasLimit";
                    readonly type: "uint32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "have";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "want";
                    readonly type: "address";
                }];
                readonly name: "OnlyCoordinatorCanFulfill";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "have";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "coordinator";
                    readonly type: "address";
                }];
                readonly name: "OnlyOwnerOrCoordinator";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "ZeroAddress";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "vrfCoordinator";
                    readonly type: "address";
                }];
                readonly name: "CoordinatorSet";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "OwnershipTransferRequested";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "OwnershipTransferred";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "randomWord";
                    readonly type: "uint256";
                }];
                readonly name: "RequestFulfilled";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }];
                readonly name: "RequestSent";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "acceptOwnership";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "callbackGasLimit";
                readonly outputs: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "";
                    readonly type: "uint32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "_callbackGasLimit";
                    readonly type: "uint32";
                }];
                readonly name: "changeCallbackGasLimit";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_keyHash";
                    readonly type: "bytes32";
                }];
                readonly name: "changeKeyHash";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint16";
                    readonly name: "_requestConfirmations";
                    readonly type: "uint16";
                }];
                readonly name: "changeRequestConfirmations";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_sortitionModule";
                    readonly type: "address";
                }];
                readonly name: "changeSortitionModule";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_subscriptionId";
                    readonly type: "uint256";
                }];
                readonly name: "changeSubscriptionId";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_vrfCoordinator";
                    readonly type: "address";
                }];
                readonly name: "changeVrfCoordinator";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "keyHash";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "lastRequestId";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "owner";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }];
                readonly name: "randomNumbers";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "number";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "randomWords";
                    readonly type: "uint256[]";
                }];
                readonly name: "rawFulfillRandomWords";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "receiveRandomness";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "randomNumber";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "requestConfirmations";
                readonly outputs: readonly [{
                    readonly internalType: "uint16";
                    readonly name: "";
                    readonly type: "uint16";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "requestRandomness";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "s_vrfCoordinator";
                readonly outputs: readonly [{
                    readonly internalType: "contract IVRFCoordinatorV2Plus";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_vrfCoordinator";
                    readonly type: "address";
                }];
                readonly name: "setCoordinator";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "sortitionModule";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "subscriptionId";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "transferOwnership";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }];
        };
        readonly ChainlinkVRFCoordinator: {
            readonly address: "0x3C0Ca683b403E37668AE3DC4FB62F4B29B6f7a3e";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "blockhashStore";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "internalBalance";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "externalBalance";
                    readonly type: "uint256";
                }];
                readonly name: "BalanceInvariantViolated";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "blockNum";
                    readonly type: "uint256";
                }];
                readonly name: "BlockhashNotInStore";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "coordinatorAddress";
                    readonly type: "address";
                }];
                readonly name: "CoordinatorAlreadyRegistered";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "coordinatorAddress";
                    readonly type: "address";
                }];
                readonly name: "CoordinatorNotRegistered";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedToSendNative";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedToTransferLink";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "have";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "want";
                    readonly type: "uint32";
                }];
                readonly name: "GasLimitTooBig";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "gasPrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxGas";
                    readonly type: "uint256";
                }];
                readonly name: "GasPriceExceeded";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "IncorrectCommitment";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "IndexOutOfRange";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "InsufficientBalance";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "InvalidCalldata";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "consumer";
                    readonly type: "address";
                }];
                readonly name: "InvalidConsumer";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "InvalidExtraArgsTag";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "linkWei";
                    readonly type: "int256";
                }];
                readonly name: "InvalidLinkWeiPrice";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "premiumPercentage";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "max";
                    readonly type: "uint8";
                }];
                readonly name: "InvalidPremiumPercentage";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint16";
                    readonly name: "have";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "min";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "max";
                    readonly type: "uint16";
                }];
                readonly name: "InvalidRequestConfirmations";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "InvalidSubscription";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "LinkAlreadySet";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "flatFeeLinkDiscountPPM";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "flatFeeNativePPM";
                    readonly type: "uint32";
                }];
                readonly name: "LinkDiscountTooHigh";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "LinkNotSet";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "have";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "max";
                    readonly type: "uint32";
                }];
                readonly name: "MsgDataTooBig";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "proposedOwner";
                    readonly type: "address";
                }];
                readonly name: "MustBeRequestedOwner";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly name: "MustBeSubOwner";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NoCorrespondingRequest";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "keyHash";
                    readonly type: "bytes32";
                }];
                readonly name: "NoSuchProvingKey";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "have";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "want";
                    readonly type: "uint32";
                }];
                readonly name: "NumWordsTooBig";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "OnlyCallableFromLink";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "PaymentTooLarge";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "PendingRequestExists";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "keyHash";
                    readonly type: "bytes32";
                }];
                readonly name: "ProvingKeyAlreadyRegistered";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "Reentrant";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "TooManyConsumers";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint16";
                    readonly name: "minimumRequestConfirmations";
                    readonly type: "uint16";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint32";
                    readonly name: "maxGasLimit";
                    readonly type: "uint32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint32";
                    readonly name: "stalenessSeconds";
                    readonly type: "uint32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint32";
                    readonly name: "gasAfterPaymentCalculation";
                    readonly type: "uint32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "int256";
                    readonly name: "fallbackWeiPerUnitLink";
                    readonly type: "int256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint32";
                    readonly name: "fulfillmentFlatFeeNativePPM";
                    readonly type: "uint32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint32";
                    readonly name: "fulfillmentFlatFeeLinkDiscountPPM";
                    readonly type: "uint32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint8";
                    readonly name: "nativePremiumPercentage";
                    readonly type: "uint8";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint8";
                    readonly name: "linkPremiumPercentage";
                    readonly type: "uint8";
                }];
                readonly name: "ConfigSet";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "coordinatorAddress";
                    readonly type: "address";
                }];
                readonly name: "CoordinatorDeregistered";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "coordinatorAddress";
                    readonly type: "address";
                }];
                readonly name: "CoordinatorRegistered";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "int256";
                    readonly name: "fallbackWeiPerUnitLink";
                    readonly type: "int256";
                }];
                readonly name: "FallbackWeiPerUnitLinkUsed";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly name: "FundsRecovered";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "newCoordinator";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }];
                readonly name: "MigrationCompleted";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly name: "NativeFundsRecovered";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "OwnershipTransferRequested";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "OwnershipTransferred";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "keyHash";
                    readonly type: "bytes32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "maxGas";
                    readonly type: "uint64";
                }];
                readonly name: "ProvingKeyDeregistered";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "keyHash";
                    readonly type: "bytes32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "maxGas";
                    readonly type: "uint64";
                }];
                readonly name: "ProvingKeyRegistered";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "outputSeed";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint96";
                    readonly name: "payment";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "nativePayment";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "success";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "onlyPremium";
                    readonly type: "bool";
                }];
                readonly name: "RandomWordsFulfilled";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "bytes32";
                    readonly name: "keyHash";
                    readonly type: "bytes32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "preSeed";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint16";
                    readonly name: "minimumRequestConfirmations";
                    readonly type: "uint16";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint32";
                    readonly name: "callbackGasLimit";
                    readonly type: "uint32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint32";
                    readonly name: "numWords";
                    readonly type: "uint32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bytes";
                    readonly name: "extraArgs";
                    readonly type: "bytes";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "sender";
                    readonly type: "address";
                }];
                readonly name: "RandomWordsRequested";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "amountLink";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "amountNative";
                    readonly type: "uint256";
                }];
                readonly name: "SubscriptionCanceled";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "consumer";
                    readonly type: "address";
                }];
                readonly name: "SubscriptionConsumerAdded";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "consumer";
                    readonly type: "address";
                }];
                readonly name: "SubscriptionConsumerRemoved";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly name: "SubscriptionCreated";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "oldBalance";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "newBalance";
                    readonly type: "uint256";
                }];
                readonly name: "SubscriptionFunded";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "oldNativeBalance";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "newNativeBalance";
                    readonly type: "uint256";
                }];
                readonly name: "SubscriptionFundedWithNative";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "SubscriptionOwnerTransferRequested";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "SubscriptionOwnerTransferred";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "BLOCKHASH_STORE";
                readonly outputs: readonly [{
                    readonly internalType: "contract BlockhashStoreInterface";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "LINK";
                readonly outputs: readonly [{
                    readonly internalType: "contract LinkTokenInterface";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "LINK_NATIVE_FEED";
                readonly outputs: readonly [{
                    readonly internalType: "contract AggregatorV3Interface";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "MAX_CONSUMERS";
                readonly outputs: readonly [{
                    readonly internalType: "uint16";
                    readonly name: "";
                    readonly type: "uint16";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "MAX_NUM_WORDS";
                readonly outputs: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "";
                    readonly type: "uint32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "MAX_REQUEST_CONFIRMATIONS";
                readonly outputs: readonly [{
                    readonly internalType: "uint16";
                    readonly name: "";
                    readonly type: "uint16";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "acceptOwnership";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }];
                readonly name: "acceptSubscriptionOwnerTransfer";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "consumer";
                    readonly type: "address";
                }];
                readonly name: "addConsumer";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "cancelSubscription";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "createSubscription";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                }];
                readonly name: "deregisterMigratableCoordinator";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256[2]";
                    readonly name: "publicProvingKey";
                    readonly type: "uint256[2]";
                }];
                readonly name: "deregisterProvingKey";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly components: readonly [{
                        readonly internalType: "uint256[2]";
                        readonly name: "pk";
                        readonly type: "uint256[2]";
                    }, {
                        readonly internalType: "uint256[2]";
                        readonly name: "gamma";
                        readonly type: "uint256[2]";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "c";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "s";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "seed";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "uWitness";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256[2]";
                        readonly name: "cGammaWitness";
                        readonly type: "uint256[2]";
                    }, {
                        readonly internalType: "uint256[2]";
                        readonly name: "sHashWitness";
                        readonly type: "uint256[2]";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "zInv";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct VRF.Proof";
                    readonly name: "proof";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "blockNum";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "subId";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "callbackGasLimit";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "numWords";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "address";
                        readonly name: "sender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraArgs";
                        readonly type: "bytes";
                    }];
                    readonly internalType: "struct VRFTypes.RequestCommitmentV2Plus";
                    readonly name: "rc";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "bool";
                    readonly name: "onlyPremium";
                    readonly type: "bool";
                }];
                readonly name: "fulfillRandomWords";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "payment";
                    readonly type: "uint96";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }];
                readonly name: "fundSubscriptionWithNative";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "startIndex";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxCount";
                    readonly type: "uint256";
                }];
                readonly name: "getActiveSubscriptionIds";
                readonly outputs: readonly [{
                    readonly internalType: "uint256[]";
                    readonly name: "ids";
                    readonly type: "uint256[]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }];
                readonly name: "getSubscription";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "balance";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "nativeBalance";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "reqCount";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "address";
                    readonly name: "subOwner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address[]";
                    readonly name: "consumers";
                    readonly type: "address[]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256[2]";
                    readonly name: "publicKey";
                    readonly type: "uint256[2]";
                }];
                readonly name: "hashOfKey";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "newCoordinator";
                    readonly type: "address";
                }];
                readonly name: "migrate";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "onTokenTransfer";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "owner";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }];
                readonly name: "ownerCancelSubscription";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }];
                readonly name: "pendingRequestExists";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "recoverFunds";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address payable";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "recoverNativeFunds";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                }];
                readonly name: "registerMigratableCoordinator";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256[2]";
                    readonly name: "publicProvingKey";
                    readonly type: "uint256[2]";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "maxGas";
                    readonly type: "uint64";
                }];
                readonly name: "registerProvingKey";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "consumer";
                    readonly type: "address";
                }];
                readonly name: "removeConsumer";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "keyHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "subId";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint16";
                        readonly name: "requestConfirmations";
                        readonly type: "uint16";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "callbackGasLimit";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "numWords";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraArgs";
                        readonly type: "bytes";
                    }];
                    readonly internalType: "struct VRFV2PlusClient.RandomWordsRequest";
                    readonly name: "req";
                    readonly type: "tuple";
                }];
                readonly name: "requestRandomWords";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "subId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "newOwner";
                    readonly type: "address";
                }];
                readonly name: "requestSubscriptionOwnerTransfer";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "s_config";
                readonly outputs: readonly [{
                    readonly internalType: "uint16";
                    readonly name: "minimumRequestConfirmations";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "maxGasLimit";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "bool";
                    readonly name: "reentrancyLock";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "stalenessSeconds";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "gasAfterPaymentCalculation";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "fulfillmentFlatFeeNativePPM";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "fulfillmentFlatFeeLinkDiscountPPM";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "nativePremiumPercentage";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "linkPremiumPercentage";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "s_currentSubNonce";
                readonly outputs: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "";
                    readonly type: "uint64";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "s_fallbackWeiPerUnitLink";
                readonly outputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "s_provingKeyHashes";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly name: "s_provingKeys";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "exists";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "maxGas";
                    readonly type: "uint64";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "s_requestCommitments";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "s_totalBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "";
                    readonly type: "uint96";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "s_totalNativeBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "";
                    readonly type: "uint96";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint16";
                    readonly name: "minimumRequestConfirmations";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "maxGasLimit";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "stalenessSeconds";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "gasAfterPaymentCalculation";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "int256";
                    readonly name: "fallbackWeiPerUnitLink";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "fulfillmentFlatFeeNativePPM";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "fulfillmentFlatFeeLinkDiscountPPM";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "nativePremiumPercentage";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "linkPremiumPercentage";
                    readonly type: "uint8";
                }];
                readonly name: "setConfig";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "link";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "linkNativeFeed";
                    readonly type: "address";
                }];
                readonly name: "setLINKAndLINKNativeFeed";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }];
                readonly name: "transferOwnership";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }];
                readonly name: "withdraw";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address payable";
                    readonly name: "recipient";
                    readonly type: "address";
                }];
                readonly name: "withdrawNative";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }];
        };
        readonly DAI: {
            readonly address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "Approval";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "usr";
                    readonly type: "address";
                }];
                readonly name: "Deny";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "usr";
                    readonly type: "address";
                }];
                readonly name: "Rely";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "Transfer";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "DOMAIN_SEPARATOR";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "PERMIT_TYPEHASH";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "allowance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "approve";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "burn";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "decimals";
                readonly outputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "subtractedValue";
                    readonly type: "uint256";
                }];
                readonly name: "decreaseAllowance";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "usr";
                    readonly type: "address";
                }];
                readonly name: "deny";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "deploymentChainId";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "addedValue";
                    readonly type: "uint256";
                }];
                readonly name: "increaseAllowance";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "mint";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "nonces";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }];
                readonly name: "permit";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "usr";
                    readonly type: "address";
                }];
                readonly name: "rely";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "transfer";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "transferFrom";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "wards";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly DisputeKitClassicNeo: {
            readonly address: "0x70B464be85A547144C72485eBa2577E5D3A45421";
            readonly abi: readonly [{
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }];
                readonly name: "ChoiceFunded";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[]";
                    readonly name: "_voteIDs";
                    readonly type: "uint256[]";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "_commit";
                    readonly type: "bytes32";
                }];
                readonly name: "CommitCast";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_contributor";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "Contribution";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "DisputeCreation";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[]";
                    readonly name: "_voteIDs";
                    readonly type: "uint256[]";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_justification";
                    readonly type: "string";
                }];
                readonly name: "VoteCast";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_contributor";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "Withdrawal";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "LOSER_APPEAL_PERIOD_MULTIPLIER";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "LOSER_STAKE_MULTIPLIER";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "ONE_BASIS_POINT";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "WINNER_STAKE_MULTIPLIER";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "localDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "localRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "drawnAddress";
                    readonly type: "address";
                }];
                readonly name: "alreadyDrawn";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }];
                readonly name: "areCommitsAllCast";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }];
                readonly name: "areVotesAllCast";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "_voteIDs";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_commit";
                    readonly type: "bytes32";
                }];
                readonly name: "castCommit";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "_voteIDs";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_salt";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "string";
                    readonly name: "_justification";
                    readonly type: "string";
                }];
                readonly name: "castVote";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_core";
                    readonly type: "address";
                }];
                readonly name: "changeCore";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address payable";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "core";
                readonly outputs: readonly [{
                    readonly internalType: "contract KlerosCore";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "coreDisputeIDToLocal";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_nbVotes";
                    readonly type: "uint256";
                }];
                readonly name: "createDispute";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }];
                readonly name: "currentRuling";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "disputes";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "jumped";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "extraData";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_nonce";
                    readonly type: "uint256";
                }];
                readonly name: "draw";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "drawnAddress";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_destination";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "executeGovernorProposal";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }];
                readonly name: "fundAppeal";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }];
                readonly name: "getCoherentCount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_voteID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "getDegreeOfCoherence";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }];
                readonly name: "getFundedChoices";
                readonly outputs: readonly [{
                    readonly internalType: "uint256[]";
                    readonly name: "fundedChoices";
                    readonly type: "uint256[]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }];
                readonly name: "getRoundInfo";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "winningChoice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalVoted";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalCommited";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "nbVoters";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "choiceCount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_voteID";
                    readonly type: "uint256";
                }];
                readonly name: "getVoteInfo";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "commit";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "choice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "voted";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract KlerosCore";
                    readonly name: "_core";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "initialize6";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }];
                readonly name: "isAppealFunded";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_voteID";
                    readonly type: "uint256";
                }];
                readonly name: "isVoteActive";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "singleDrawPerJuror";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address payable";
                    readonly name: "_beneficiary";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }];
                readonly name: "withdrawFeesAndRewards";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }];
        };
        readonly DisputeKitClassicNeo_Implementation: {
            readonly address: "0x7F3C3C9f9c6238885d958afa1bCc92f1032ef81d";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }];
                readonly name: "ChoiceFunded";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[]";
                    readonly name: "_voteIDs";
                    readonly type: "uint256[]";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "_commit";
                    readonly type: "bytes32";
                }];
                readonly name: "CommitCast";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_contributor";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "Contribution";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "DisputeCreation";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[]";
                    readonly name: "_voteIDs";
                    readonly type: "uint256[]";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_justification";
                    readonly type: "string";
                }];
                readonly name: "VoteCast";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_contributor";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "Withdrawal";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "LOSER_APPEAL_PERIOD_MULTIPLIER";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "LOSER_STAKE_MULTIPLIER";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "ONE_BASIS_POINT";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "WINNER_STAKE_MULTIPLIER";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "localDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "localRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "drawnAddress";
                    readonly type: "address";
                }];
                readonly name: "alreadyDrawn";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }];
                readonly name: "areCommitsAllCast";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }];
                readonly name: "areVotesAllCast";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "_voteIDs";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_commit";
                    readonly type: "bytes32";
                }];
                readonly name: "castCommit";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "_voteIDs";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_salt";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "string";
                    readonly name: "_justification";
                    readonly type: "string";
                }];
                readonly name: "castVote";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_core";
                    readonly type: "address";
                }];
                readonly name: "changeCore";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address payable";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "core";
                readonly outputs: readonly [{
                    readonly internalType: "contract KlerosCore";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "coreDisputeIDToLocal";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_nbVotes";
                    readonly type: "uint256";
                }];
                readonly name: "createDispute";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }];
                readonly name: "currentRuling";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "disputes";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "jumped";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "extraData";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_nonce";
                    readonly type: "uint256";
                }];
                readonly name: "draw";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "drawnAddress";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_destination";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "executeGovernorProposal";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }];
                readonly name: "fundAppeal";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }];
                readonly name: "getCoherentCount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_voteID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "getDegreeOfCoherence";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }];
                readonly name: "getFundedChoices";
                readonly outputs: readonly [{
                    readonly internalType: "uint256[]";
                    readonly name: "fundedChoices";
                    readonly type: "uint256[]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }];
                readonly name: "getRoundInfo";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "winningChoice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalVoted";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalCommited";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "nbVoters";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "choiceCount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_voteID";
                    readonly type: "uint256";
                }];
                readonly name: "getVoteInfo";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "commit";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "choice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "voted";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract KlerosCore";
                    readonly name: "_core";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "initialize6";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }];
                readonly name: "isAppealFunded";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_voteID";
                    readonly type: "uint256";
                }];
                readonly name: "isVoteActive";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "singleDrawPerJuror";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address payable";
                    readonly name: "_beneficiary";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreRoundID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_choice";
                    readonly type: "uint256";
                }];
                readonly name: "withdrawFeesAndRewards";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }];
        };
        readonly DisputeKitClassicNeo_Proxy: {
            readonly address: "0x70B464be85A547144C72485eBa2577E5D3A45421";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }];
        };
        readonly DisputeResolverNeo: {
            readonly address: "0xb5526D022962A1fFf6eD32C93e8b714c901F4323";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitratorV2";
                    readonly name: "_arbitrator";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IDisputeTemplateRegistry";
                    readonly name: "_templateRegistry";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitratorV2";
                    readonly name: "_arbitrator";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_arbitratorDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_externalDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_templateId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_templateUri";
                    readonly type: "string";
                }];
                readonly name: "DisputeRequest";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitratorV2";
                    readonly name: "_arbitrator";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }];
                readonly name: "Ruling";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "arbitrator";
                readonly outputs: readonly [{
                    readonly internalType: "contract IArbitratorV2";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "arbitratorDisputeIDToLocalID";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitratorV2";
                    readonly name: "_arbitrator";
                    readonly type: "address";
                }];
                readonly name: "changeArbitrator";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IDisputeTemplateRegistry";
                    readonly name: "_templateRegistry";
                    readonly type: "address";
                }];
                readonly name: "changeTemplateRegistry";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_arbitratorExtraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "string";
                    readonly name: "_disputeTemplate";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_disputeTemplateDataMappings";
                    readonly type: "string";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_numberOfRulingOptions";
                    readonly type: "uint256";
                }];
                readonly name: "createDisputeForTemplate";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_arbitratorExtraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "string";
                    readonly name: "_disputeTemplateUri";
                    readonly type: "string";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_numberOfRulingOptions";
                    readonly type: "uint256";
                }];
                readonly name: "createDisputeForTemplateUri";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "disputes";
                readonly outputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "arbitratorExtraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isRuled";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "numberOfRulingOptions";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_arbitratorDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }];
                readonly name: "rule";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "templateRegistry";
                readonly outputs: readonly [{
                    readonly internalType: "contract IDisputeTemplateRegistry";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly DisputeResolverRulerNeo: {
            readonly address: "0xb3a5FdEAF461c42caCe148e978e6FBCa97bE6140";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitratorV2";
                    readonly name: "_arbitrator";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IDisputeTemplateRegistry";
                    readonly name: "_templateRegistry";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitratorV2";
                    readonly name: "_arbitrator";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_arbitratorDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_externalDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_templateId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_templateUri";
                    readonly type: "string";
                }];
                readonly name: "DisputeRequest";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitratorV2";
                    readonly name: "_arbitrator";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }];
                readonly name: "Ruling";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "arbitrator";
                readonly outputs: readonly [{
                    readonly internalType: "contract IArbitratorV2";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "arbitratorDisputeIDToLocalID";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitratorV2";
                    readonly name: "_arbitrator";
                    readonly type: "address";
                }];
                readonly name: "changeArbitrator";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IDisputeTemplateRegistry";
                    readonly name: "_templateRegistry";
                    readonly type: "address";
                }];
                readonly name: "changeTemplateRegistry";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_arbitratorExtraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "string";
                    readonly name: "_disputeTemplate";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_disputeTemplateDataMappings";
                    readonly type: "string";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_numberOfRulingOptions";
                    readonly type: "uint256";
                }];
                readonly name: "createDisputeForTemplate";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_arbitratorExtraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "string";
                    readonly name: "_disputeTemplateUri";
                    readonly type: "string";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_numberOfRulingOptions";
                    readonly type: "uint256";
                }];
                readonly name: "createDisputeForTemplateUri";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "disputes";
                readonly outputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "arbitratorExtraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isRuled";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "numberOfRulingOptions";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_arbitratorDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }];
                readonly name: "rule";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "templateRegistry";
                readonly outputs: readonly [{
                    readonly internalType: "contract IDisputeTemplateRegistry";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly DisputeTemplateRegistry: {
            readonly address: "0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2";
            readonly abi: readonly [{
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_templateId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "string";
                    readonly name: "_templateTag";
                    readonly type: "string";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_templateData";
                    readonly type: "string";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_templateDataMappings";
                    readonly type: "string";
                }];
                readonly name: "DisputeTemplate";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "_templateTag";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_templateData";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_templateDataMappings";
                    readonly type: "string";
                }];
                readonly name: "setDisputeTemplate";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "templateId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "templates";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }];
        };
        readonly DisputeTemplateRegistry_Implementation: {
            readonly address: "0x57EfD43DAfCeb6C58Df57932b2B299f46fef5c87";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_templateId";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "string";
                    readonly name: "_templateTag";
                    readonly type: "string";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_templateData";
                    readonly type: "string";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_templateDataMappings";
                    readonly type: "string";
                }];
                readonly name: "DisputeTemplate";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "_templateTag";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_templateData";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_templateDataMappings";
                    readonly type: "string";
                }];
                readonly name: "setDisputeTemplate";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "templateId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "templates";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }];
        };
        readonly DisputeTemplateRegistry_Proxy: {
            readonly address: "0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }];
        };
        readonly EvidenceModule: {
            readonly address: "0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3";
            readonly abi: readonly [{
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_externalDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_party";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_evidence";
                    readonly type: "string";
                }];
                readonly name: "Evidence";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "initialize2";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_externalDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "string";
                    readonly name: "_evidence";
                    readonly type: "string";
                }];
                readonly name: "submitEvidence";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }];
        };
        readonly EvidenceModule_Implementation: {
            readonly address: "0xA502A3942abCF8e71FBD87ed442B39b798b192C8";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_externalDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_party";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_evidence";
                    readonly type: "string";
                }];
                readonly name: "Evidence";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "initialize2";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_externalDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "string";
                    readonly name: "_evidence";
                    readonly type: "string";
                }];
                readonly name: "submitEvidence";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly EvidenceModule_Proxy: {
            readonly address: "0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }];
        };
        readonly KlerosCoreNeo: {
            readonly address: "0x991d2df165670b9cac3B022f4B68D65b664222ea";
            readonly abi: readonly [{
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "AppealFeesNotEnough";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "AppealPeriodNotPassed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "ArbitrableNotWhitelisted";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "ArbitrationFeesNotEnough";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "CannotDisableClassicDK";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "CommitPeriodNotPassed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputeKitNotSupportedByCourt";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputeKitOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputeNotAppealable";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputePeriodIsFinal";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputeStillDrawing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "EvidenceNotPassedAndNotAppeal";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "GovernorOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "GuardianOrGovernorOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "InvalidDisputKitParent";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "InvalidForkingCourtAsParent";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "MinStakeLowerThanParentCourt";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "MustSupportDisputeKitClassic";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotEligibleForStaking";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotEvidencePeriod";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotExecutionPeriod";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "RulingAlreadyExecuted";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "SortitionModuleOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingInTooManyCourts";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingLessThanCourtMinStake";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingMoreThanMaxStakePerJuror";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingMoreThanMaxTotalStaked";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingNotPossibleInThisCourt";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingTransferFailed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingZeroWhenNoStake";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "TokenNotAccepted";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "TransferFailed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UnstakingTransferFailed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UnsuccessfulCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UnsupportedDisputeKit";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "VotePeriodNotPassed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "WhenNotPausedOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "WhenPausedOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "WrongDisputeKitIndex";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IERC20";
                    readonly name: "_token";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "bool";
                    readonly name: "_accepted";
                    readonly type: "bool";
                }];
                readonly name: "AcceptedFeeToken";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "AppealDecision";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "AppealPossible";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_parent";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[]";
                    readonly name: "_supportedDisputeKits";
                    readonly type: "uint256[]";
                }];
                readonly name: "CourtCreated";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_fromCourtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint96";
                    readonly name: "_toCourtID";
                    readonly type: "uint96";
                }];
                readonly name: "CourtJump";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "CourtModified";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "DisputeCreation";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeKitID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IDisputeKit";
                    readonly name: "_disputeKitAddress";
                    readonly type: "address";
                }];
                readonly name: "DisputeKitCreated";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeKitID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "bool";
                    readonly name: "_enable";
                    readonly type: "bool";
                }];
                readonly name: "DisputeKitEnabled";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_fromDisputeKitID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_toDisputeKitID";
                    readonly type: "uint256";
                }];
                readonly name: "DisputeKitJump";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_voteID";
                    readonly type: "uint256";
                }];
                readonly name: "Draw";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_pnkAmount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeAmount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "LeftoverRewardSent";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "_rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint8";
                    readonly name: "_rateDecimals";
                    readonly type: "uint8";
                }];
                readonly name: "NewCurrencyRate";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "enum KlerosCoreBase.Period";
                    readonly name: "_period";
                    readonly type: "uint8";
                }];
                readonly name: "NewPeriod";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [];
                readonly name: "Paused";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }];
                readonly name: "Ruling";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_degreeOfCoherency";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "int256";
                    readonly name: "_pnkAmount";
                    readonly type: "int256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "int256";
                    readonly name: "_feeAmount";
                    readonly type: "int256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "TokenAndETHShift";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [];
                readonly name: "Unpaused";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IDisputeKit";
                    readonly name: "_disputeKitAddress";
                    readonly type: "address";
                }];
                readonly name: "addNewDisputeKit";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "appeal";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "appealCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "appealPeriod";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "start";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "end";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "arbitrableWhitelist";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "arbitrationCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "arbitrationCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_accepted";
                    readonly type: "bool";
                }];
                readonly name: "changeAcceptedFeeTokens";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_allowed";
                    readonly type: "bool";
                }];
                readonly name: "changeArbitrableWhitelist";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "changeCourtParameters";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "_rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "_rateDecimals";
                    readonly type: "uint8";
                }];
                readonly name: "changeCurrencyRates";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address payable";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_guardian";
                    readonly type: "address";
                }];
                readonly name: "changeGuardian";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC721";
                    readonly name: "_jurorNft";
                    readonly type: "address";
                }];
                readonly name: "changeJurorNft";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_jurorProsecutionModule";
                    readonly type: "address";
                }];
                readonly name: "changeJurorProsecutionModule";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_pinakion";
                    readonly type: "address";
                }];
                readonly name: "changePinakion";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract ISortitionModule";
                    readonly name: "_sortitionModule";
                    readonly type: "address";
                }];
                readonly name: "changeSortitionModule";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_toToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountInEth";
                    readonly type: "uint256";
                }];
                readonly name: "convertEthToTokenAmount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "courts";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "parent";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "disabled";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_parent";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_sortitionExtraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "_supportedDisputeKits";
                    readonly type: "uint256[]";
                }];
                readonly name: "createCourt";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "createDispute";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeAmount";
                    readonly type: "uint256";
                }];
                readonly name: "createDispute";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "currencyRates";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "feePaymentAccepted";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "rateDecimals";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "currentRuling";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "disputeKits";
                readonly outputs: readonly [{
                    readonly internalType: "contract IDisputeKit";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "disputes";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "arbitrated";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum KlerosCoreBase.Period";
                    readonly name: "period";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bool";
                    readonly name: "ruled";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lastPeriodChange";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_iterations";
                    readonly type: "uint256";
                }];
                readonly name: "draw";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "_disputeKitIDs";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_enable";
                    readonly type: "bool";
                }];
                readonly name: "enableDisputeKits";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_round";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_iterations";
                    readonly type: "uint256";
                }];
                readonly name: "execute";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_destination";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "executeGovernorProposal";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "executeRuling";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "getDisputeKitsLength";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "getNumberOfRounds";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "getNumberOfVotes";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_round";
                    readonly type: "uint256";
                }];
                readonly name: "getPnkAtStakePerJuror";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_round";
                    readonly type: "uint256";
                }];
                readonly name: "getRoundInfo";
                readonly outputs: readonly [{
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "disputeKitID";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pnkAtStakePerJuror";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "totalFeesForJurors";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "nbVotes";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "repartitions";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pnkPenalties";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address[]";
                        readonly name: "drawnJurors";
                        readonly type: "address[]";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "sumFeeRewardPaid";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "sumPnkRewardPaid";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "contract IERC20";
                        readonly name: "feeToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "drawIterations";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct KlerosCoreBase.Round";
                    readonly name: "";
                    readonly type: "tuple";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }];
                readonly name: "getTimesPerPeriod";
                readonly outputs: readonly [{
                    readonly internalType: "uint256[4]";
                    readonly name: "timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "guardian";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_guardian";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_pinakion";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_jurorProsecutionModule";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IDisputeKit";
                    readonly name: "_disputeKit";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_courtParameters";
                    readonly type: "uint256[4]";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_sortitionExtraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "contract ISortitionModule";
                    readonly name: "_sortitionModuleAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IERC721";
                    readonly name: "_jurorNft";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "initialize4";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "isDisputeKitJumping";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_disputeKitID";
                    readonly type: "uint256";
                }];
                readonly name: "isSupported";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "jurorNft";
                readonly outputs: readonly [{
                    readonly internalType: "contract IERC721";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "jurorProsecutionModule";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "passPeriod";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "pause";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "paused";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "pinakion";
                readonly outputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_newStake";
                    readonly type: "uint256";
                }];
                readonly name: "setStake";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_newStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_alreadyTransferred";
                    readonly type: "bool";
                }];
                readonly name: "setStakeBySortitionModule";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "sortitionModule";
                readonly outputs: readonly [{
                    readonly internalType: "contract ISortitionModule";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "unpause";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }];
        };
        readonly KlerosCoreNeo_Implementation: {
            readonly address: "0xEb6D9E61921506f876dc662B2398E34C92330faB";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "AppealFeesNotEnough";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "AppealPeriodNotPassed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "ArbitrableNotWhitelisted";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "ArbitrationFeesNotEnough";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "CannotDisableClassicDK";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "CommitPeriodNotPassed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputeKitNotSupportedByCourt";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputeKitOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputeNotAppealable";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputePeriodIsFinal";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputeStillDrawing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "EvidenceNotPassedAndNotAppeal";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "GovernorOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "GuardianOrGovernorOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "InvalidDisputKitParent";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "InvalidForkingCourtAsParent";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "MinStakeLowerThanParentCourt";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "MustSupportDisputeKitClassic";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotEligibleForStaking";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotEvidencePeriod";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotExecutionPeriod";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "RulingAlreadyExecuted";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "SortitionModuleOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingInTooManyCourts";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingLessThanCourtMinStake";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingMoreThanMaxStakePerJuror";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingMoreThanMaxTotalStaked";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingNotPossibleInThisCourt";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingTransferFailed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "StakingZeroWhenNoStake";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "TokenNotAccepted";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "TransferFailed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UnstakingTransferFailed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UnsuccessfulCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UnsupportedDisputeKit";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "VotePeriodNotPassed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "WhenNotPausedOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "WhenPausedOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "WrongDisputeKitIndex";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IERC20";
                    readonly name: "_token";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "bool";
                    readonly name: "_accepted";
                    readonly type: "bool";
                }];
                readonly name: "AcceptedFeeToken";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "AppealDecision";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "AppealPossible";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_parent";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[]";
                    readonly name: "_supportedDisputeKits";
                    readonly type: "uint256[]";
                }];
                readonly name: "CourtCreated";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_fromCourtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint96";
                    readonly name: "_toCourtID";
                    readonly type: "uint96";
                }];
                readonly name: "CourtJump";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "CourtModified";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "DisputeCreation";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeKitID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IDisputeKit";
                    readonly name: "_disputeKitAddress";
                    readonly type: "address";
                }];
                readonly name: "DisputeKitCreated";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeKitID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "bool";
                    readonly name: "_enable";
                    readonly type: "bool";
                }];
                readonly name: "DisputeKitEnabled";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_fromDisputeKitID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_toDisputeKitID";
                    readonly type: "uint256";
                }];
                readonly name: "DisputeKitJump";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_voteID";
                    readonly type: "uint256";
                }];
                readonly name: "Draw";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_pnkAmount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeAmount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "LeftoverRewardSent";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "_rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint8";
                    readonly name: "_rateDecimals";
                    readonly type: "uint8";
                }];
                readonly name: "NewCurrencyRate";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "enum KlerosCoreBase.Period";
                    readonly name: "_period";
                    readonly type: "uint8";
                }];
                readonly name: "NewPeriod";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [];
                readonly name: "Paused";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }];
                readonly name: "Ruling";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_degreeOfCoherency";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "int256";
                    readonly name: "_pnkAmount";
                    readonly type: "int256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "int256";
                    readonly name: "_feeAmount";
                    readonly type: "int256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "TokenAndETHShift";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [];
                readonly name: "Unpaused";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IDisputeKit";
                    readonly name: "_disputeKitAddress";
                    readonly type: "address";
                }];
                readonly name: "addNewDisputeKit";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "appeal";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "appealCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "appealPeriod";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "start";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "end";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "arbitrableWhitelist";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "arbitrationCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "arbitrationCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_accepted";
                    readonly type: "bool";
                }];
                readonly name: "changeAcceptedFeeTokens";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_allowed";
                    readonly type: "bool";
                }];
                readonly name: "changeArbitrableWhitelist";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "changeCourtParameters";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "_rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "_rateDecimals";
                    readonly type: "uint8";
                }];
                readonly name: "changeCurrencyRates";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address payable";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_guardian";
                    readonly type: "address";
                }];
                readonly name: "changeGuardian";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC721";
                    readonly name: "_jurorNft";
                    readonly type: "address";
                }];
                readonly name: "changeJurorNft";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_jurorProsecutionModule";
                    readonly type: "address";
                }];
                readonly name: "changeJurorProsecutionModule";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_pinakion";
                    readonly type: "address";
                }];
                readonly name: "changePinakion";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract ISortitionModule";
                    readonly name: "_sortitionModule";
                    readonly type: "address";
                }];
                readonly name: "changeSortitionModule";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_toToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountInEth";
                    readonly type: "uint256";
                }];
                readonly name: "convertEthToTokenAmount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "courts";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "parent";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "disabled";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_parent";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_sortitionExtraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "_supportedDisputeKits";
                    readonly type: "uint256[]";
                }];
                readonly name: "createCourt";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "createDispute";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeAmount";
                    readonly type: "uint256";
                }];
                readonly name: "createDispute";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "currencyRates";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "feePaymentAccepted";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "rateDecimals";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "currentRuling";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "disputeKits";
                readonly outputs: readonly [{
                    readonly internalType: "contract IDisputeKit";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "disputes";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "arbitrated";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum KlerosCoreBase.Period";
                    readonly name: "period";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bool";
                    readonly name: "ruled";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lastPeriodChange";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_iterations";
                    readonly type: "uint256";
                }];
                readonly name: "draw";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "_disputeKitIDs";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_enable";
                    readonly type: "bool";
                }];
                readonly name: "enableDisputeKits";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_round";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_iterations";
                    readonly type: "uint256";
                }];
                readonly name: "execute";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_destination";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "executeGovernorProposal";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "executeRuling";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "getDisputeKitsLength";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "getNumberOfRounds";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "getNumberOfVotes";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_round";
                    readonly type: "uint256";
                }];
                readonly name: "getPnkAtStakePerJuror";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_round";
                    readonly type: "uint256";
                }];
                readonly name: "getRoundInfo";
                readonly outputs: readonly [{
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "disputeKitID";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pnkAtStakePerJuror";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "totalFeesForJurors";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "nbVotes";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "repartitions";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pnkPenalties";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address[]";
                        readonly name: "drawnJurors";
                        readonly type: "address[]";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "sumFeeRewardPaid";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "sumPnkRewardPaid";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "contract IERC20";
                        readonly name: "feeToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "drawIterations";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct KlerosCoreBase.Round";
                    readonly name: "";
                    readonly type: "tuple";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }];
                readonly name: "getTimesPerPeriod";
                readonly outputs: readonly [{
                    readonly internalType: "uint256[4]";
                    readonly name: "timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "guardian";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_guardian";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_pinakion";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_jurorProsecutionModule";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IDisputeKit";
                    readonly name: "_disputeKit";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_courtParameters";
                    readonly type: "uint256[4]";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_sortitionExtraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "contract ISortitionModule";
                    readonly name: "_sortitionModuleAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IERC721";
                    readonly name: "_jurorNft";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "initialize4";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "isDisputeKitJumping";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_disputeKitID";
                    readonly type: "uint256";
                }];
                readonly name: "isSupported";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "jurorNft";
                readonly outputs: readonly [{
                    readonly internalType: "contract IERC721";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "jurorProsecutionModule";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "passPeriod";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "pause";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "paused";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "pinakion";
                readonly outputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_newStake";
                    readonly type: "uint256";
                }];
                readonly name: "setStake";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_newStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_alreadyTransferred";
                    readonly type: "bool";
                }];
                readonly name: "setStakeBySortitionModule";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "sortitionModule";
                readonly outputs: readonly [{
                    readonly internalType: "contract ISortitionModule";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "unpause";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly KlerosCoreNeo_Proxy: {
            readonly address: "0x991d2df165670b9cac3B022f4B68D65b664222ea";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }];
        };
        readonly KlerosCoreRulerNeo: {
            readonly address: "0xc0169e0B19aE02ac4fADD689260CF038726DFE13";
            readonly abi: readonly [{
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "AppealFeesNotEnough";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "ArbitrationFeesNotEnough";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputeNotAppealable";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "GovernorOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "GovernorOrInstructorOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "InvalidForkingCourtAsParent";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NoRulerSet";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "RulerOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "RulingAlreadyExecuted";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "RulingModeNotSet";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "TokenNotAccepted";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "TransferFailed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UnsuccessfulCall";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IERC20";
                    readonly name: "_token";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "bool";
                    readonly name: "_accepted";
                    readonly type: "bool";
                }];
                readonly name: "AcceptedFeeToken";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "AppealDecision";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "AppealPossible";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "enum KlerosCoreRuler.RulingMode";
                    readonly name: "mode";
                    readonly type: "uint8";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly name: "AutoRuled";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_parent";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "CourtCreated";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_fromCourtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint96";
                    readonly name: "_toCourtID";
                    readonly type: "uint96";
                }];
                readonly name: "CourtJump";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "CourtModified";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "DisputeCreation";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_pnkAmount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeAmount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "LeftoverRewardSent";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "_rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint8";
                    readonly name: "_rateDecimals";
                    readonly type: "uint8";
                }];
                readonly name: "NewCurrencyRate";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "enum KlerosCoreRuler.Period";
                    readonly name: "_period";
                    readonly type: "uint8";
                }];
                readonly name: "NewPeriod";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_oldRuler";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_newRuler";
                    readonly type: "address";
                }];
                readonly name: "RulerChanged";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "enum KlerosCoreRuler.RulingMode";
                        readonly name: "rulingMode";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "presetRuling";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "presetTied";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "presetOverridden";
                        readonly type: "bool";
                    }];
                    readonly indexed: false;
                    readonly internalType: "struct KlerosCoreRuler.RulerSettings";
                    readonly name: "_settings";
                    readonly type: "tuple";
                }];
                readonly name: "RulerSettingsChanged";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }];
                readonly name: "Ruling";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_degreeOfCoherency";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "int256";
                    readonly name: "_pnkAmount";
                    readonly type: "int256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "int256";
                    readonly name: "_feeAmount";
                    readonly type: "int256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "TokenAndETHShift";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_jump";
                    readonly type: "bool";
                }];
                readonly name: "appeal";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_jump";
                    readonly type: "bool";
                }];
                readonly name: "appealCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "arbitrationCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "arbitrationCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_accepted";
                    readonly type: "bool";
                }];
                readonly name: "changeAcceptedFeeTokens";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "changeCourtParameters";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "_rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "_rateDecimals";
                    readonly type: "uint8";
                }];
                readonly name: "changeCurrencyRates";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address payable";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_pinakion";
                    readonly type: "address";
                }];
                readonly name: "changePinakion";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_newRuler";
                    readonly type: "address";
                }];
                readonly name: "changeRuler";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_presetRuling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_presetTied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_presetOverridden";
                    readonly type: "bool";
                }];
                readonly name: "changeRulingModeToAutomaticPreset";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "changeRulingModeToAutomaticRandom";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "changeRulingModeToManual";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_toToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountInEth";
                    readonly type: "uint256";
                }];
                readonly name: "convertEthToTokenAmount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "courts";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "parent";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "disabled";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_parent";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "createCourt";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "createDispute";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeAmount";
                    readonly type: "uint256";
                }];
                readonly name: "createDispute";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "currencyRates";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "feePaymentAccepted";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "rateDecimals";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "currentRuling";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "disputes";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "arbitrated";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum KlerosCoreRuler.Period";
                    readonly name: "period";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bool";
                    readonly name: "ruled";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_round";
                    readonly type: "uint256";
                }];
                readonly name: "execute";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_destination";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "executeGovernorProposal";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly name: "executeRuling";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "getNextDisputeID";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "getNumberOfRounds";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "getNumberOfVotes";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_round";
                    readonly type: "uint256";
                }];
                readonly name: "getRoundInfo";
                readonly outputs: readonly [{
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "totalFeesForJurors";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "sumFeeRewardPaid";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "contract IERC20";
                        readonly name: "feeToken";
                        readonly type: "address";
                    }];
                    readonly internalType: "struct KlerosCoreRuler.Round";
                    readonly name: "";
                    readonly type: "tuple";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }];
                readonly name: "getTimesPerPeriod";
                readonly outputs: readonly [{
                    readonly internalType: "uint256[4]";
                    readonly name: "timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_pinakion";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_courtParameters";
                    readonly type: "uint256[4]";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "pinakion";
                readonly outputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "arbitrable";
                    readonly type: "address";
                }];
                readonly name: "rulers";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "ruler";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "rulingResults";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "arbitrable";
                    readonly type: "address";
                }];
                readonly name: "settings";
                readonly outputs: readonly [{
                    readonly internalType: "enum KlerosCoreRuler.RulingMode";
                    readonly name: "rulingMode";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "presetRuling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "presetTied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "presetOverridden";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }];
        };
        readonly KlerosCoreRulerNeo_Implementation: {
            readonly address: "0x85093b5EDa4F2e2E2fEDae34Da91239D6a08e324";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "AppealFeesNotEnough";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "ArbitrationFeesNotEnough";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "DisputeNotAppealable";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "GovernorOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "GovernorOrInstructorOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "InvalidForkingCourtAsParent";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NoRulerSet";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "RulerOnly";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "RulingAlreadyExecuted";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "RulingModeNotSet";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "TokenNotAccepted";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "TransferFailed";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UnsuccessfulCall";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IERC20";
                    readonly name: "_token";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "bool";
                    readonly name: "_accepted";
                    readonly type: "bool";
                }];
                readonly name: "AcceptedFeeToken";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "AppealDecision";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "AppealPossible";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "enum KlerosCoreRuler.RulingMode";
                    readonly name: "mode";
                    readonly type: "uint8";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly name: "AutoRuled";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_parent";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "CourtCreated";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_fromCourtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint96";
                    readonly name: "_toCourtID";
                    readonly type: "uint96";
                }];
                readonly name: "CourtJump";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "CourtModified";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "DisputeCreation";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_pnkAmount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_feeAmount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "LeftoverRewardSent";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "_rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint8";
                    readonly name: "_rateDecimals";
                    readonly type: "uint8";
                }];
                readonly name: "NewCurrencyRate";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "enum KlerosCoreRuler.Period";
                    readonly name: "_period";
                    readonly type: "uint8";
                }];
                readonly name: "NewPeriod";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_oldRuler";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_newRuler";
                    readonly type: "address";
                }];
                readonly name: "RulerChanged";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "enum KlerosCoreRuler.RulingMode";
                        readonly name: "rulingMode";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "presetRuling";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "presetTied";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "presetOverridden";
                        readonly type: "bool";
                    }];
                    readonly indexed: false;
                    readonly internalType: "struct KlerosCoreRuler.RulerSettings";
                    readonly name: "_settings";
                    readonly type: "tuple";
                }];
                readonly name: "RulerSettingsChanged";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }];
                readonly name: "Ruling";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_roundID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_degreeOfCoherency";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "int256";
                    readonly name: "_pnkAmount";
                    readonly type: "int256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "int256";
                    readonly name: "_feeAmount";
                    readonly type: "int256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "TokenAndETHShift";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_jump";
                    readonly type: "bool";
                }];
                readonly name: "appeal";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_jump";
                    readonly type: "bool";
                }];
                readonly name: "appealCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }];
                readonly name: "arbitrationCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "arbitrationCost";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "cost";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_accepted";
                    readonly type: "bool";
                }];
                readonly name: "changeAcceptedFeeTokens";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "changeCourtParameters";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "_rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "_rateDecimals";
                    readonly type: "uint8";
                }];
                readonly name: "changeCurrencyRates";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address payable";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_pinakion";
                    readonly type: "address";
                }];
                readonly name: "changePinakion";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_newRuler";
                    readonly type: "address";
                }];
                readonly name: "changeRuler";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_presetRuling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_presetTied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_presetOverridden";
                    readonly type: "bool";
                }];
                readonly name: "changeRulingModeToAutomaticPreset";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "changeRulingModeToAutomaticRandom";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "_arbitrable";
                    readonly type: "address";
                }];
                readonly name: "changeRulingModeToManual";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_toToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountInEth";
                    readonly type: "uint256";
                }];
                readonly name: "convertEthToTokenAmount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "courts";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "parent";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "disabled";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_parent";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_hiddenVotes";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_alpha";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeForJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_jurorsForCourtJump";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly name: "createCourt";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "createDispute";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_numberOfChoices";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_feeToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_feeAmount";
                    readonly type: "uint256";
                }];
                readonly name: "createDispute";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "currencyRates";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "feePaymentAccepted";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "rateInEth";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "rateDecimals";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "currentRuling";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "disputes";
                readonly outputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "arbitrated";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum KlerosCoreRuler.Period";
                    readonly name: "period";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bool";
                    readonly name: "ruled";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_round";
                    readonly type: "uint256";
                }];
                readonly name: "execute";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_destination";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "executeGovernorProposal";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly name: "executeRuling";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "getNextDisputeID";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "getNumberOfRounds";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "getNumberOfVotes";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_disputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_round";
                    readonly type: "uint256";
                }];
                readonly name: "getRoundInfo";
                readonly outputs: readonly [{
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "totalFeesForJurors";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "sumFeeRewardPaid";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "contract IERC20";
                        readonly name: "feeToken";
                        readonly type: "address";
                    }];
                    readonly internalType: "struct KlerosCoreRuler.Round";
                    readonly name: "";
                    readonly type: "tuple";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }];
                readonly name: "getTimesPerPeriod";
                readonly outputs: readonly [{
                    readonly internalType: "uint256[4]";
                    readonly name: "timesPerPeriod";
                    readonly type: "uint256[4]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "_pinakion";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256[4]";
                    readonly name: "_courtParameters";
                    readonly type: "uint256[4]";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "pinakion";
                readonly outputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "arbitrable";
                    readonly type: "address";
                }];
                readonly name: "rulers";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "ruler";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "disputeID";
                    readonly type: "uint256";
                }];
                readonly name: "rulingResults";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "ruling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "tied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "overridden";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IArbitrableV2";
                    readonly name: "arbitrable";
                    readonly type: "address";
                }];
                readonly name: "settings";
                readonly outputs: readonly [{
                    readonly internalType: "enum KlerosCoreRuler.RulingMode";
                    readonly name: "rulingMode";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "presetRuling";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "presetTied";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "presetOverridden";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }];
        };
        readonly KlerosCoreRulerNeo_Proxy: {
            readonly address: "0xc0169e0B19aE02ac4fADD689260CF038726DFE13";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }];
        };
        readonly KlerosCoreSnapshotProxy: {
            readonly address: "0xEF719a5B3352F607e6C4E17b7e0cDAd8322fEC95";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IKlerosCore";
                    readonly name: "_core";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }];
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "totalStaked";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IKlerosCore";
                    readonly name: "_core";
                    readonly type: "address";
                }];
                readonly name: "changeCore";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "core";
                readonly outputs: readonly [{
                    readonly internalType: "contract IKlerosCore";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "decimals";
                readonly outputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly KlerosV2NeoEarlyUser: {
            readonly address: "0xfE34a72c55e512601E7d491A9c5b36373cE34d63";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "approved";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly name: "Approval";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                }];
                readonly name: "ApprovalForAll";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newMinter";
                    readonly type: "address";
                }];
                readonly name: "EventMinterAdded";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "oldMinter";
                    readonly type: "address";
                }];
                readonly name: "EventMinterRemoved";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "previousOwner";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newOwner";
                    readonly type: "address";
                }];
                readonly name: "OwnershipTransferred";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly name: "Transfer";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "minter";
                    readonly type: "address";
                }];
                readonly name: "addMinter";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly name: "approve";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "baseURI";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "id";
                    readonly type: "uint256";
                }];
                readonly name: "burn";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "ids";
                    readonly type: "uint256[]";
                }];
                readonly name: "burnBatch";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly name: "cid";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly name: "getApproved";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "getNumMinted";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }];
                readonly name: "isApprovedForAll";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "id";
                    readonly type: "uint256";
                }];
                readonly name: "isOwnerOf";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "cid";
                    readonly type: "uint256";
                }];
                readonly name: "mint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "cidArr";
                    readonly type: "uint256[]";
                }];
                readonly name: "mintBatch";
                readonly outputs: readonly [{
                    readonly internalType: "uint256[]";
                    readonly name: "";
                    readonly type: "uint256[]";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }];
                readonly name: "minters";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "owner";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly name: "ownerOf";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "minter";
                    readonly type: "address";
                }];
                readonly name: "removeMinter";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "renounceOwnership";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly name: "safeTransferFrom";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "safeTransferFrom";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                }];
                readonly name: "setApprovalForAll";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "newName";
                    readonly type: "string";
                }];
                readonly name: "setName";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "newSymbol";
                    readonly type: "string";
                }];
                readonly name: "setSymbol";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "transferable";
                    readonly type: "bool";
                }];
                readonly name: "setTransferable";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "newURI";
                    readonly type: "string";
                }];
                readonly name: "setURI";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes4";
                    readonly name: "interfaceId";
                    readonly type: "bytes4";
                }];
                readonly name: "supportsInterface";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "index";
                    readonly type: "uint256";
                }];
                readonly name: "tokenOfOwnerByIndex";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly name: "tokenURI";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly name: "transferFrom";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newOwner";
                    readonly type: "address";
                }];
                readonly name: "transferOwnership";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "transferable";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly PNK: {
            readonly address: "0x330bD769382cFc6d50175903434CCC8D206DCAE5";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "Approval";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "Transfer";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }];
                readonly name: "allowance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly name: "approve";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }];
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "decimals";
                readonly outputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "subtractedValue";
                    readonly type: "uint256";
                }];
                readonly name: "decreaseAllowance";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "addedValue";
                    readonly type: "uint256";
                }];
                readonly name: "increaseAllowance";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly name: "transfer";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly name: "transferFrom";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }];
        };
        readonly PNKFaucet: {
            readonly address: "0x0000000000000000000000000000000000000000";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_token";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly name: "amount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "balance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "changeAmount";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "request";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "token";
                readonly outputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "withdraw";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly name: "withdrewAlready";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly Pinakion: {
            readonly address: "0x330bD769382cFc6d50175903434CCC8D206DCAE5";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "Approval";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly name: "Transfer";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }];
                readonly name: "allowance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly name: "approve";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }];
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "decimals";
                readonly outputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "subtractedValue";
                    readonly type: "uint256";
                }];
                readonly name: "decreaseAllowance";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "addedValue";
                    readonly type: "uint256";
                }];
                readonly name: "increaseAllowance";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly name: "transfer";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly name: "transferFrom";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }];
        };
        readonly PolicyRegistry: {
            readonly address: "0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c";
            readonly abi: readonly [{
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_courtName";
                    readonly type: "string";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_policy";
                    readonly type: "string";
                }];
                readonly name: "PolicyUpdate";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "initialize2";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "policies";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "string";
                    readonly name: "_courtName";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_policy";
                    readonly type: "string";
                }];
                readonly name: "setPolicy";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }];
        };
        readonly PolicyRegistry_Implementation: {
            readonly address: "0xf7EE0Cd4E33C832DC05fB359896Add6E14E96C28";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_courtName";
                    readonly type: "string";
                }, {
                    readonly indexed: false;
                    readonly internalType: "string";
                    readonly name: "_policy";
                    readonly type: "string";
                }];
                readonly name: "PolicyUpdate";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "initialize2";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "policies";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "string";
                    readonly name: "_courtName";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_policy";
                    readonly type: "string";
                }];
                readonly name: "setPolicy";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly PolicyRegistry_Proxy: {
            readonly address: "0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }];
        };
        readonly RandomizerOracle: {
            readonly address: "0x5b8bB80f2d72D0C85caB8fB169e8170A05C94bAF";
            readonly abi: readonly [];
        };
        readonly RandomizerRNG: {
            readonly address: "0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3";
            readonly abi: readonly [{
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "callbackGasLimit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IRandomizer";
                    readonly name: "_randomizer";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }];
                readonly name: "randomNumbers";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "number";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "randomizer";
                readonly outputs: readonly [{
                    readonly internalType: "contract IRandomizer";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_id";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_value";
                    readonly type: "bytes32";
                }];
                readonly name: "randomizerCallback";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "randomizerWithdraw";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "receiveRandomness";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "randomNumber";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "requestRandomness";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "requester";
                    readonly type: "address";
                }];
                readonly name: "requesterToID";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_callbackGasLimit";
                    readonly type: "uint256";
                }];
                readonly name: "setCallbackGasLimit";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_randomizer";
                    readonly type: "address";
                }];
                readonly name: "setRandomizer";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }];
        };
        readonly RandomizerRNG_Implementation: {
            readonly address: "0xF1a7Cd3115F5852966430f8E3877D2221F074A2e";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "callbackGasLimit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IRandomizer";
                    readonly name: "_randomizer";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }];
                readonly name: "randomNumbers";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "number";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "randomizer";
                readonly outputs: readonly [{
                    readonly internalType: "contract IRandomizer";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_id";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_value";
                    readonly type: "bytes32";
                }];
                readonly name: "randomizerCallback";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "randomizerWithdraw";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "receiveRandomness";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "randomNumber";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "requestRandomness";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "requester";
                    readonly type: "address";
                }];
                readonly name: "requesterToID";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "requestId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_callbackGasLimit";
                    readonly type: "uint256";
                }];
                readonly name: "setCallbackGasLimit";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_randomizer";
                    readonly type: "address";
                }];
                readonly name: "setRandomizer";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }];
        };
        readonly RandomizerRNG_Proxy: {
            readonly address: "0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }];
        };
        readonly SortitionModuleNeo: {
            readonly address: "0x21A9402aDb818744B296e1d1BE58C804118DC03D";
            readonly abi: readonly [{
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "enum ISortitionModule.Phase";
                    readonly name: "_phase";
                    readonly type: "uint8";
                }];
                readonly name: "NewPhase";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "StakeDelayedAlreadyTransferredDeposited";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "StakeDelayedAlreadyTransferredWithdrawn";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "StakeDelayedNotTransferred";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_relativeAmount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "_unlock";
                    readonly type: "bool";
                }];
                readonly name: "StakeLocked";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amountAllCourts";
                    readonly type: "uint256";
                }];
                readonly name: "StakeSet";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_maxDrawingTime";
                    readonly type: "uint256";
                }];
                readonly name: "changeMaxDrawingTime";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_maxStakePerJuror";
                    readonly type: "uint256";
                }];
                readonly name: "changeMaxStakePerJuror";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_maxTotalStaked";
                    readonly type: "uint256";
                }];
                readonly name: "changeMaxTotalStaked";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_minStakingTime";
                    readonly type: "uint256";
                }];
                readonly name: "changeMinStakingTime";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract RNG";
                    readonly name: "_rng";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_rngLookahead";
                    readonly type: "uint256";
                }];
                readonly name: "changeRandomNumberGenerator";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "core";
                readonly outputs: readonly [{
                    readonly internalType: "contract KlerosCore";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "createDisputeHook";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "createTree";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "delayedStakeReadIndex";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "delayedStakeWriteIndex";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "delayedStakes";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "stake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "alreadyTransferred";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "disputesWithoutJurors";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_nonce";
                    readonly type: "uint256";
                }];
                readonly name: "draw";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "drawnAddress";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_iterations";
                    readonly type: "uint256";
                }];
                readonly name: "executeDelayedStakes";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }];
                readonly name: "getJurorBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "totalStaked";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalLocked";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "stakedInCourt";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "nbCourts";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }];
                readonly name: "getJurorCourtIDs";
                readonly outputs: readonly [{
                    readonly internalType: "uint96[]";
                    readonly name: "";
                    readonly type: "uint96[]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract KlerosCore";
                    readonly name: "_core";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minStakingTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxDrawingTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "contract RNG";
                    readonly name: "_rng";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_rngLookahead";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxStakePerJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxTotalStaked";
                    readonly type: "uint256";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "initialize3";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }];
                readonly name: "isJurorStaked";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }];
                readonly name: "jurors";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "stakedPnk";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lockedPnk";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "lastPhaseChange";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "jurorAccount";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "courtId";
                    readonly type: "uint96";
                }];
                readonly name: "latestDelayedStakeIndex";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_relativeAmount";
                    readonly type: "uint256";
                }];
                readonly name: "lockStake";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "maxDrawingTime";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "maxStakePerJuror";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "maxTotalStaked";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "minStakingTime";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_randomNumber";
                    readonly type: "uint256";
                }];
                readonly name: "notifyRandomNumber";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "passPhase";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_relativeAmount";
                    readonly type: "uint256";
                }];
                readonly name: "penalizeStake";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "phase";
                readonly outputs: readonly [{
                    readonly internalType: "enum ISortitionModule.Phase";
                    readonly name: "";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "postDrawHook";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "randomNumber";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "randomNumberRequestBlock";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "rng";
                readonly outputs: readonly [{
                    readonly internalType: "contract RNG";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "rngLookahead";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }];
                readonly name: "setJurorInactive";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_newStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_alreadyTransferred";
                    readonly type: "bool";
                }];
                readonly name: "setStake";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "pnkDeposit";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "pnkWithdrawal";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "enum StakingResult";
                    readonly name: "stakingResult";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_ID";
                    readonly type: "bytes32";
                }];
                readonly name: "stakeOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }];
                readonly name: "stakeOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "totalStaked";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_relativeAmount";
                    readonly type: "uint256";
                }];
                readonly name: "unlockStake";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }];
        };
        readonly SortitionModuleNeo_Implementation: {
            readonly address: "0x0cB3626Edf41F27a192102630D0502cCd93Cf043";
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly name: "AlreadyInitialized";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "FailedDelegateCall";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "InvalidImplementation";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "NotInitializing";
                readonly type: "error";
            }, {
                readonly inputs: readonly [];
                readonly name: "UUPSUnauthorizedCallContext";
                readonly type: "error";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "slot";
                    readonly type: "bytes32";
                }];
                readonly name: "UUPSUnsupportedProxiableUUID";
                readonly type: "error";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "version";
                    readonly type: "uint64";
                }];
                readonly name: "Initialized";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "enum ISortitionModule.Phase";
                    readonly name: "_phase";
                    readonly type: "uint8";
                }];
                readonly name: "NewPhase";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "StakeDelayedAlreadyTransferredDeposited";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: true;
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "StakeDelayedAlreadyTransferredWithdrawn";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly name: "StakeDelayedNotTransferred";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_relativeAmount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bool";
                    readonly name: "_unlock";
                    readonly type: "bool";
                }];
                readonly name: "StakeLocked";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "_address";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_courtID";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_amountAllCourts";
                    readonly type: "uint256";
                }];
                readonly name: "StakeSet";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }];
                readonly name: "changeGovernor";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_maxDrawingTime";
                    readonly type: "uint256";
                }];
                readonly name: "changeMaxDrawingTime";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_maxStakePerJuror";
                    readonly type: "uint256";
                }];
                readonly name: "changeMaxStakePerJuror";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_maxTotalStaked";
                    readonly type: "uint256";
                }];
                readonly name: "changeMaxTotalStaked";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_minStakingTime";
                    readonly type: "uint256";
                }];
                readonly name: "changeMinStakingTime";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract RNG";
                    readonly name: "_rng";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_rngLookahead";
                    readonly type: "uint256";
                }];
                readonly name: "changeRandomNumberGenerator";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "core";
                readonly outputs: readonly [{
                    readonly internalType: "contract KlerosCore";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "createDisputeHook";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }];
                readonly name: "createTree";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "delayedStakeReadIndex";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "delayedStakeWriteIndex";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "delayedStakes";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "stake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "alreadyTransferred";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "disputesWithoutJurors";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_coreDisputeID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_nonce";
                    readonly type: "uint256";
                }];
                readonly name: "draw";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "drawnAddress";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_iterations";
                    readonly type: "uint256";
                }];
                readonly name: "executeDelayedStakes";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }];
                readonly name: "getJurorBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "totalStaked";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalLocked";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "stakedInCourt";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "nbCourts";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }];
                readonly name: "getJurorCourtIDs";
                readonly outputs: readonly [{
                    readonly internalType: "uint96[]";
                    readonly name: "";
                    readonly type: "uint96[]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "governor";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governor";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract KlerosCore";
                    readonly name: "_core";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minStakingTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxDrawingTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "contract RNG";
                    readonly name: "_rng";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_rngLookahead";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxStakePerJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxTotalStaked";
                    readonly type: "uint256";
                }];
                readonly name: "initialize";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "initialize3";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }];
                readonly name: "isJurorStaked";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }];
                readonly name: "jurors";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "stakedPnk";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lockedPnk";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "lastPhaseChange";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "jurorAccount";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "courtId";
                    readonly type: "uint96";
                }];
                readonly name: "latestDelayedStakeIndex";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_relativeAmount";
                    readonly type: "uint256";
                }];
                readonly name: "lockStake";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "maxDrawingTime";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "maxStakePerJuror";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "maxTotalStaked";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "minStakingTime";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_randomNumber";
                    readonly type: "uint256";
                }];
                readonly name: "notifyRandomNumber";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "passPhase";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_relativeAmount";
                    readonly type: "uint256";
                }];
                readonly name: "penalizeStake";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "phase";
                readonly outputs: readonly [{
                    readonly internalType: "enum ISortitionModule.Phase";
                    readonly name: "";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly name: "postDrawHook";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "proxiableUUID";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "randomNumber";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "randomNumberRequestBlock";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "rng";
                readonly outputs: readonly [{
                    readonly internalType: "contract RNG";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "rngLookahead";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }];
                readonly name: "setJurorInactive";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_newStake";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_alreadyTransferred";
                    readonly type: "bool";
                }];
                readonly name: "setStake";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "pnkDeposit";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "pnkWithdrawal";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "enum StakingResult";
                    readonly name: "stakingResult";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_ID";
                    readonly type: "bytes32";
                }];
                readonly name: "stakeOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_juror";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "_courtID";
                    readonly type: "uint96";
                }];
                readonly name: "stakeOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "totalStaked";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_relativeAmount";
                    readonly type: "uint256";
                }];
                readonly name: "unlockStake";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "version";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly SortitionModuleNeo_Proxy: {
            readonly address: "0x21A9402aDb818744B296e1d1BE58C804118DC03D";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_implementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }];
        };
        readonly TransactionBatcher: {
            readonly address: "0xBC5ef8d9ad307154447AE148c088f083d2dEa4eF";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "targets";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "values";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "bytes[]";
                    readonly name: "datas";
                    readonly type: "bytes[]";
                }];
                readonly name: "batchSend";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "targets";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "values";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "bytes[]";
                    readonly name: "datas";
                    readonly type: "bytes[]";
                }];
                readonly name: "batchSendUnchecked";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }];
        };
        readonly WETH: {
            readonly address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_logic";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "admin_";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "payable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "previousAdmin";
                    readonly type: "address";
                }, {
                    readonly indexed: false;
                    readonly internalType: "address";
                    readonly name: "newAdmin";
                    readonly type: "address";
                }];
                readonly name: "AdminChanged";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "address";
                    readonly name: "implementation";
                    readonly type: "address";
                }];
                readonly name: "Upgraded";
                readonly type: "event";
            }, {
                readonly stateMutability: "payable";
                readonly type: "fallback";
            }, {
                readonly inputs: readonly [];
                readonly name: "admin";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "admin_";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newAdmin";
                    readonly type: "address";
                }];
                readonly name: "changeAdmin";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "implementation";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "implementation_";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }];
                readonly name: "upgradeTo";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newImplementation";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "upgradeToAndCall";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }, {
                readonly stateMutability: "payable";
                readonly type: "receive";
            }];
        };
    };
};
export default _default;
