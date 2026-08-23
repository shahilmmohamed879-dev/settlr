declare const _default: {
    readonly name: "arbitrumSepolia";
    readonly chainId: "421614";
    readonly contracts: {
        readonly BlockHashRNG: {
            readonly address: "0x0298a3EFa6Faf90865725E2b48Cf0F66e5d52754";
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
            readonly address: "0xAd5cCc93429e3A977c273cEeD106Ef16A69EAf79";
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
            readonly address: "0x5CE8D5A2BC84beb22a398CCA51996F7930313D61";
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
            readonly address: "0xc34aeFEa232956542C5b2f2EE55fD5c378B35c03";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "_name";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_symbol";
                    readonly type: "string";
                }];
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
        readonly DAIFaucet: {
            readonly address: "0x1Fa58B52326488D62A406E71DBaD839560e810fF";
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
        readonly DisputeKitClassic: {
            readonly address: "0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94";
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
        readonly DisputeKitClassic_Implementation: {
            readonly address: "0xBed62D71A93c7E4415dF9b32B9A8116CeEd23b28";
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
        readonly DisputeKitClassic_Proxy: {
            readonly address: "0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94";
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
        readonly DisputeResolver: {
            readonly address: "0xed31bEE8b1F7cE89E93033C0d3B2ccF4cEb27652";
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
            readonly address: "0xe763d31Cb096B4bc7294012B78FC7F148324ebcb";
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
        readonly DisputeTemplateRegistry_Implementation: {
            readonly address: "0xf97791DA66e0A8Ff8Ee4908872CfCAcc641829Ec";
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
        readonly DisputeTemplateRegistry_Proxy: {
            readonly address: "0xe763d31Cb096B4bc7294012B78FC7F148324ebcb";
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
            readonly address: "0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397";
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
            readonly address: "0xC4e64e6E949936a18269937FC1e18cb11E3db14D";
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
            readonly address: "0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397";
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
        readonly KlerosCore: {
            readonly address: "0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479";
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
        readonly KlerosCoreSnapshotProxy: {
            readonly address: "0xd74e61A4dB9C6c3F2C97b62a319aE194f616858C";
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
        readonly KlerosCore_Implementation: {
            readonly address: "0x71c56fbE58706C1B3f64a7baf913eCA3Cec04164";
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
        readonly KlerosCore_Proxy: {
            readonly address: "0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479";
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
        readonly PNK: {
            readonly address: "0x34B944D42cAcfC8266955D07A80181D2054aa225";
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
            readonly address: "0x9f6ffc13B685A68ae359fCA128dfE776458Df464";
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
        readonly PinakionV2: {
            readonly address: "0x34B944D42cAcfC8266955D07A80181D2054aa225";
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
            readonly address: "0x2668c46A14af8997417138B064ca1bEB70769585";
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
            readonly address: "0x7CC8E0787e381aE159C4d3e137f20f9203313D41";
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
            readonly address: "0x2668c46A14af8997417138B064ca1bEB70769585";
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
            readonly address: "0xE775D7fde1d0D09ae627C0131040012ccBcC4b9b";
            readonly abi: readonly [];
        };
        readonly RandomizerRNG: {
            readonly address: "0x51a97ad9F0aA818e75819da3cA20CAc319580627";
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
            readonly address: "0x1237F02bBeFDAEA20cE3A66aCAe458C4106Ae203";
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
            readonly address: "0x51a97ad9F0aA818e75819da3cA20CAc319580627";
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
        readonly SortitionModule: {
            readonly address: "0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD";
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
        readonly SortitionModule_Implementation: {
            readonly address: "0xAe750D6Fa39b1044d4081CB0bfecF886d176Be5b";
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
        readonly SortitionModule_Proxy: {
            readonly address: "0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD";
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
            readonly address: "0x35f93986950804ac1F93519BF68C2a7Dd776db0E";
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
            readonly address: "0xAEE953CC26DbDeA52beBE3F97f281981f2B9d511";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "_name";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_symbol";
                    readonly type: "string";
                }];
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
        readonly WETHFaucet: {
            readonly address: "0x922B84134e41BC5c9EDE7D5EFCE22Ba3D0e71835";
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
        readonly VeaInboxArbToEthDevnet: {
            readonly address: "0xF6C5640de593fEf76129F1F1A863F7ddc65776C9";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_epochPeriod";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_veaOutboxArbToEth";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "bytes";
                    readonly name: "_nodeData";
                    readonly type: "bytes";
                }];
                readonly name: "MessageSent";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "_snapshot";
                    readonly type: "bytes32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_epoch";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "_count";
                    readonly type: "uint64";
                }];
                readonly name: "SnapshotSaved";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_epochSent";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "_ticketId";
                    readonly type: "bytes32";
                }];
                readonly name: "SnapshotSent";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "count";
                readonly outputs: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "";
                    readonly type: "uint64";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_timestamp";
                    readonly type: "uint256";
                }];
                readonly name: "epochAt";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochFinalized";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochNow";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochPeriod";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "saveSnapshot";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_to";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes4";
                    readonly name: "_fnSelector";
                    readonly type: "bytes4";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "sendMessage";
                readonly outputs: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "";
                    readonly type: "uint64";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_epoch";
                    readonly type: "uint256";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "stateRoot";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address";
                        readonly name: "claimer";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "timestampClaimed";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "timestampVerification";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "blocknumberVerification";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "enum Party";
                        readonly name: "honest";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "challenger";
                        readonly type: "address";
                    }];
                    readonly internalType: "struct Claim";
                    readonly name: "_claim";
                    readonly type: "tuple";
                }];
                readonly name: "sendSnapshot";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly name: "snapshots";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "veaOutboxArbToEth";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly VeaInboxArbToEthTestnet: {
            readonly address: "0xE12daFE59Bc3A996362d54b37DFd2BA9279cAd06";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_epochPeriod";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_veaOutboxArbToEth";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "bytes";
                    readonly name: "_nodeData";
                    readonly type: "bytes";
                }];
                readonly name: "MessageSent";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "_snapshot";
                    readonly type: "bytes32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_epoch";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "_count";
                    readonly type: "uint64";
                }];
                readonly name: "SnapshotSaved";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_epochSent";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "_ticketId";
                    readonly type: "bytes32";
                }];
                readonly name: "SnapshotSent";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "count";
                readonly outputs: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "";
                    readonly type: "uint64";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_timestamp";
                    readonly type: "uint256";
                }];
                readonly name: "epochAt";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochFinalized";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochNow";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochPeriod";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "saveSnapshot";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_to";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes4";
                    readonly name: "_fnSelector";
                    readonly type: "bytes4";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "sendMessage";
                readonly outputs: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "";
                    readonly type: "uint64";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_epoch";
                    readonly type: "uint256";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "stateRoot";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address";
                        readonly name: "claimer";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "timestampClaimed";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "timestampVerification";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "blocknumberVerification";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "enum Party";
                        readonly name: "honest";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "challenger";
                        readonly type: "address";
                    }];
                    readonly internalType: "struct Claim";
                    readonly name: "_claim";
                    readonly type: "tuple";
                }];
                readonly name: "sendSnapshot";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly name: "snapshots";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "veaOutboxArbToEth";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly VeaInboxArbToGnosisDevnet: {
            readonly address: "0xF6286b9C6c7F1B33Ea976FA43434027c7b8421A7";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_epochPeriod";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_routerArbToGnosis";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "bytes";
                    readonly name: "_nodeData";
                    readonly type: "bytes";
                }];
                readonly name: "MessageSent";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "_snapshot";
                    readonly type: "bytes32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_epoch";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "_count";
                    readonly type: "uint64";
                }];
                readonly name: "SnapshotSaved";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_epochSent";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "_ticketId";
                    readonly type: "bytes32";
                }];
                readonly name: "SnapshotSent";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "count";
                readonly outputs: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "";
                    readonly type: "uint64";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_timestamp";
                    readonly type: "uint256";
                }];
                readonly name: "epochAt";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochFinalized";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochNow";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochPeriod";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "routerArbToGnosis";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "saveSnapshot";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_to";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes4";
                    readonly name: "_fnSelector";
                    readonly type: "bytes4";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "sendMessage";
                readonly outputs: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "";
                    readonly type: "uint64";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_epoch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_gasLimit";
                    readonly type: "uint256";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "stateRoot";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address";
                        readonly name: "claimer";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "timestampClaimed";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "timestampVerification";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "blocknumberVerification";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "enum Party";
                        readonly name: "honest";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "challenger";
                        readonly type: "address";
                    }];
                    readonly internalType: "struct Claim";
                    readonly name: "_claim";
                    readonly type: "tuple";
                }];
                readonly name: "sendSnapshot";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly name: "snapshots";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
        readonly VeaInboxArbToGnosisTestnet: {
            readonly address: "0x62403e9Fbac618301175C89fb21920e4FF235A6a";
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_epochPeriod";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_routerArbToGnosis";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "bytes";
                    readonly name: "_nodeData";
                    readonly type: "bytes";
                }];
                readonly name: "MessageSent";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "_snapshot";
                    readonly type: "bytes32";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint256";
                    readonly name: "_epoch";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "uint64";
                    readonly name: "_count";
                    readonly type: "uint64";
                }];
                readonly name: "SnapshotSaved";
                readonly type: "event";
            }, {
                readonly anonymous: false;
                readonly inputs: readonly [{
                    readonly indexed: true;
                    readonly internalType: "uint256";
                    readonly name: "_epochSent";
                    readonly type: "uint256";
                }, {
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                    readonly name: "_ticketId";
                    readonly type: "bytes32";
                }];
                readonly name: "SnapshotSent";
                readonly type: "event";
            }, {
                readonly inputs: readonly [];
                readonly name: "count";
                readonly outputs: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "";
                    readonly type: "uint64";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_timestamp";
                    readonly type: "uint256";
                }];
                readonly name: "epochAt";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochFinalized";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochNow";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "epochPeriod";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "routerArbToGnosis";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }, {
                readonly inputs: readonly [];
                readonly name: "saveSnapshot";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_to";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes4";
                    readonly name: "_fnSelector";
                    readonly type: "bytes4";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_data";
                    readonly type: "bytes";
                }];
                readonly name: "sendMessage";
                readonly outputs: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "";
                    readonly type: "uint64";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_epoch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_gasLimit";
                    readonly type: "uint256";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "stateRoot";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address";
                        readonly name: "claimer";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "timestampClaimed";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "timestampVerification";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "blocknumberVerification";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "enum Party";
                        readonly name: "honest";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "challenger";
                        readonly type: "address";
                    }];
                    readonly internalType: "struct Claim";
                    readonly name: "_claim";
                    readonly type: "tuple";
                }];
                readonly name: "sendSnapshot";
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "epoch";
                    readonly type: "uint256";
                }];
                readonly name: "snapshots";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=arbitrumSepolia.d.ts.map