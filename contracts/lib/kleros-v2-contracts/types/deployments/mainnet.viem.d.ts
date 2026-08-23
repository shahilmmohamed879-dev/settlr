/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x39D123fc4cFD24EA5bB76195f9ecFE1f0DF35b0B)
 */
export declare const blockHashRngAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "block";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "randomNumbers";
    readonly outputs: readonly [{
        readonly name: "number";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_block";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "receiveRandomness";
    readonly outputs: readonly [{
        readonly name: "randomNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_block";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "requestRandomness";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x39D123fc4cFD24EA5bB76195f9ecFE1f0DF35b0B)
 */
export declare const blockHashRngAddress: {
    readonly 42161: "0x39D123fc4cFD24EA5bB76195f9ecFE1f0DF35b0B";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x39D123fc4cFD24EA5bB76195f9ecFE1f0DF35b0B)
 */
export declare const blockHashRngConfig: {
    readonly address: {
        readonly 42161: "0x39D123fc4cFD24EA5bB76195f9ecFE1f0DF35b0B";
    };
    readonly abi: readonly [{
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "block";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "randomNumbers";
        readonly outputs: readonly [{
            readonly name: "number";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_block";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "receiveRandomness";
        readonly outputs: readonly [{
            readonly name: "randomNumber";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_block";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "requestRandomness";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x897d83a7d5F23555eFA15e1BE297d5503522cbA3)
 */
export declare const chainlinkRngAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_sortitionModule";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_vrfCoordinator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_keyHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "_subscriptionId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_requestConfirmations";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "_callbackGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "have";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "want";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OnlyCoordinatorCanFulfill";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "have";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "coordinator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OnlyOwnerOrCoordinator";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ZeroAddress";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "vrfCoordinator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "CoordinatorSet";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferRequested";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "randomWord";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "RequestFulfilled";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "RequestSent";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "acceptOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "callbackGasLimit";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_callbackGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "changeCallbackGasLimit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_keyHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "changeKeyHash";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_requestConfirmations";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }];
    readonly name: "changeRequestConfirmations";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_sortitionModule";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeSortitionModule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_subscriptionId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeSubscriptionId";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_vrfCoordinator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeVrfCoordinator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "keyHash";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lastRequestId";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "randomNumbers";
    readonly outputs: readonly [{
        readonly name: "number";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "randomWords";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "rawFulfillRandomWords";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "receiveRandomness";
    readonly outputs: readonly [{
        readonly name: "randomNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "requestConfirmations";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "requestRandomness";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "s_vrfCoordinator";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IVRFCoordinatorV2Plus";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_vrfCoordinator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setCoordinator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "sortitionModule";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "subscriptionId";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x897d83a7d5F23555eFA15e1BE297d5503522cbA3)
 */
export declare const chainlinkRngAddress: {
    readonly 42161: "0x897d83a7d5F23555eFA15e1BE297d5503522cbA3";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x897d83a7d5F23555eFA15e1BE297d5503522cbA3)
 */
export declare const chainlinkRngConfig: {
    readonly address: {
        readonly 42161: "0x897d83a7d5F23555eFA15e1BE297d5503522cbA3";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_sortitionModule";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_vrfCoordinator";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_keyHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "_subscriptionId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_requestConfirmations";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "_callbackGasLimit";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "have";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "want";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "OnlyCoordinatorCanFulfill";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "have";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "coordinator";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "OnlyOwnerOrCoordinator";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "ZeroAddress";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "vrfCoordinator";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "CoordinatorSet";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "OwnershipTransferRequested";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "OwnershipTransferred";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "randomWord";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "RequestFulfilled";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "RequestSent";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "acceptOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "callbackGasLimit";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_callbackGasLimit";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }];
        readonly name: "changeCallbackGasLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_keyHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "changeKeyHash";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_requestConfirmations";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }];
        readonly name: "changeRequestConfirmations";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_sortitionModule";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeSortitionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_subscriptionId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeSubscriptionId";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_vrfCoordinator";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeVrfCoordinator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "keyHash";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "lastRequestId";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "randomNumbers";
        readonly outputs: readonly [{
            readonly name: "number";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "randomWords";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
        readonly name: "rawFulfillRandomWords";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "receiveRandomness";
        readonly outputs: readonly [{
            readonly name: "randomNumber";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "requestConfirmations";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "requestRandomness";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "s_vrfCoordinator";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IVRFCoordinatorV2Plus";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_vrfCoordinator";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "setCoordinator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "sortitionModule";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "subscriptionId";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3C0Ca683b403E37668AE3DC4FB62F4B29B6f7a3e)
 */
export declare const chainlinkVrfCoordinatorAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "blockhashStore";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "internalBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "externalBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "BalanceInvariantViolated";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "blockNum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "BlockhashNotInStore";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "coordinatorAddress";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "CoordinatorAlreadyRegistered";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "coordinatorAddress";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "CoordinatorNotRegistered";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedToSendNative";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedToTransferLink";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "have";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "want";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "GasLimitTooBig";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "gasPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "maxGas";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "GasPriceExceeded";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "IncorrectCommitment";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "IndexOutOfRange";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidCalldata";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "consumer";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidConsumer";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidExtraArgsTag";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "linkWei";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "InvalidLinkWeiPrice";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "premiumPercentage";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "max";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "InvalidPremiumPercentage";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "have";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "min";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "max";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }];
    readonly name: "InvalidRequestConfirmations";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidSubscription";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "LinkAlreadySet";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "flatFeeLinkDiscountPPM";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "flatFeeNativePPM";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "LinkDiscountTooHigh";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "LinkNotSet";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "have";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "max";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "MsgDataTooBig";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "proposedOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "MustBeRequestedOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "MustBeSubOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NoCorrespondingRequest";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "NoSuchProvingKey";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "have";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "want";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "NumWordsTooBig";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "OnlyCallableFromLink";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PaymentTooLarge";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PendingRequestExists";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "ProvingKeyAlreadyRegistered";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "Reentrant";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "TooManyConsumers";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "minimumRequestConfirmations";
        readonly internalType: "uint16";
        readonly type: "uint16";
        readonly indexed: false;
    }, {
        readonly name: "maxGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "stalenessSeconds";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "gasAfterPaymentCalculation";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "fallbackWeiPerUnitLink";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }, {
        readonly name: "fulfillmentFlatFeeNativePPM";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "fulfillmentFlatFeeLinkDiscountPPM";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "nativePremiumPercentage";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }, {
        readonly name: "linkPremiumPercentage";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "ConfigSet";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "coordinatorAddress";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "CoordinatorDeregistered";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "coordinatorAddress";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "CoordinatorRegistered";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "fallbackWeiPerUnitLink";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }];
    readonly name: "FallbackWeiPerUnitLinkUsed";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "FundsRecovered";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newCoordinator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "MigrationCompleted";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "NativeFundsRecovered";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferRequested";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
        readonly indexed: false;
    }, {
        readonly name: "maxGas";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "ProvingKeyDeregistered";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
        readonly indexed: false;
    }, {
        readonly name: "maxGas";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "ProvingKeyRegistered";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "outputSeed";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "payment";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: false;
    }, {
        readonly name: "nativePayment";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "success";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "onlyPremium";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "RandomWordsFulfilled";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
        readonly indexed: true;
    }, {
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "preSeed";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "minimumRequestConfirmations";
        readonly internalType: "uint16";
        readonly type: "uint16";
        readonly indexed: false;
    }, {
        readonly name: "callbackGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "numWords";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "extraArgs";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }, {
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "RandomWordsRequested";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amountLink";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amountNative";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "SubscriptionCanceled";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "consumer";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SubscriptionConsumerAdded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "consumer";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SubscriptionConsumerRemoved";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SubscriptionCreated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "oldBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "SubscriptionFunded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "oldNativeBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newNativeBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "SubscriptionFundedWithNative";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SubscriptionOwnerTransferRequested";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SubscriptionOwnerTransferred";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "BLOCKHASH_STORE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract BlockhashStoreInterface";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "LINK";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract LinkTokenInterface";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "LINK_NATIVE_FEED";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract AggregatorV3Interface";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MAX_CONSUMERS";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MAX_NUM_WORDS";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MAX_REQUEST_CONFIRMATIONS";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "acceptOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "acceptSubscriptionOwnerTransfer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "consumer";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "addConsumer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "cancelSubscription";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "createSubscription";
    readonly outputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "deregisterMigratableCoordinator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "publicProvingKey";
        readonly internalType: "uint256[2]";
        readonly type: "uint256[2]";
    }];
    readonly name: "deregisterProvingKey";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "proof";
        readonly internalType: "struct VRF.Proof";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "pk";
            readonly internalType: "uint256[2]";
            readonly type: "uint256[2]";
        }, {
            readonly name: "gamma";
            readonly internalType: "uint256[2]";
            readonly type: "uint256[2]";
        }, {
            readonly name: "c";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "s";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "seed";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "uWitness";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "cGammaWitness";
            readonly internalType: "uint256[2]";
            readonly type: "uint256[2]";
        }, {
            readonly name: "sHashWitness";
            readonly internalType: "uint256[2]";
            readonly type: "uint256[2]";
        }, {
            readonly name: "zInv";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }, {
        readonly name: "rc";
        readonly internalType: "struct VRFTypes.RequestCommitmentV2Plus";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "blockNum";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "callbackGasLimit";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "numWords";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "sender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "extraArgs";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }, {
        readonly name: "onlyPremium";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "fulfillRandomWords";
    readonly outputs: readonly [{
        readonly name: "payment";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "fundSubscriptionWithNative";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "startIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "maxCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getActiveSubscriptionIds";
    readonly outputs: readonly [{
        readonly name: "ids";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getSubscription";
    readonly outputs: readonly [{
        readonly name: "balance";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "nativeBalance";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "reqCount";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "subOwner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "consumers";
        readonly internalType: "address[]";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "publicKey";
        readonly internalType: "uint256[2]";
        readonly type: "uint256[2]";
    }];
    readonly name: "hashOfKey";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "newCoordinator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "migrate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "onTokenTransfer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerCancelSubscription";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pendingRequestExists";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "recoverFunds";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address payable";
        readonly type: "address";
    }];
    readonly name: "recoverNativeFunds";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "registerMigratableCoordinator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "publicProvingKey";
        readonly internalType: "uint256[2]";
        readonly type: "uint256[2]";
    }, {
        readonly name: "maxGas";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }];
    readonly name: "registerProvingKey";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "consumer";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "removeConsumer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "req";
        readonly internalType: "struct VRFV2PlusClient.RandomWordsRequest";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "keyHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "requestConfirmations";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "callbackGasLimit";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "numWords";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "extraArgs";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly name: "requestRandomWords";
    readonly outputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "subId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "requestSubscriptionOwnerTransfer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "s_config";
    readonly outputs: readonly [{
        readonly name: "minimumRequestConfirmations";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "maxGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "reentrancyLock";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "stalenessSeconds";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "gasAfterPaymentCalculation";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "fulfillmentFlatFeeNativePPM";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "fulfillmentFlatFeeLinkDiscountPPM";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "nativePremiumPercentage";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "linkPremiumPercentage";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "s_currentSubNonce";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "s_fallbackWeiPerUnitLink";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "s_provingKeyHashes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "s_provingKeys";
    readonly outputs: readonly [{
        readonly name: "exists";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "maxGas";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "s_requestCommitments";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "s_totalBalance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "s_totalNativeBalance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "minimumRequestConfirmations";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "maxGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "stalenessSeconds";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "gasAfterPaymentCalculation";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "fallbackWeiPerUnitLink";
        readonly internalType: "int256";
        readonly type: "int256";
    }, {
        readonly name: "fulfillmentFlatFeeNativePPM";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "fulfillmentFlatFeeLinkDiscountPPM";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "nativePremiumPercentage";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "linkPremiumPercentage";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "setConfig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "link";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "linkNativeFeed";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setLINKAndLINKNativeFeed";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "withdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address payable";
        readonly type: "address";
    }];
    readonly name: "withdrawNative";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3C0Ca683b403E37668AE3DC4FB62F4B29B6f7a3e)
 */
export declare const chainlinkVrfCoordinatorAddress: {
    readonly 42161: "0x3C0Ca683b403E37668AE3DC4FB62F4B29B6f7a3e";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3C0Ca683b403E37668AE3DC4FB62F4B29B6f7a3e)
 */
export declare const chainlinkVrfCoordinatorConfig: {
    readonly address: {
        readonly 42161: "0x3C0Ca683b403E37668AE3DC4FB62F4B29B6f7a3e";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "blockhashStore";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "internalBalance";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "externalBalance";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "BalanceInvariantViolated";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "blockNum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "BlockhashNotInStore";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "coordinatorAddress";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "CoordinatorAlreadyRegistered";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "coordinatorAddress";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "CoordinatorNotRegistered";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedToSendNative";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedToTransferLink";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "have";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "want";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }];
        readonly name: "GasLimitTooBig";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "gasPrice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "maxGas";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "GasPriceExceeded";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "IncorrectCommitment";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "IndexOutOfRange";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "InsufficientBalance";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "InvalidCalldata";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "consumer";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidConsumer";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "InvalidExtraArgsTag";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "linkWei";
            readonly internalType: "int256";
            readonly type: "int256";
        }];
        readonly name: "InvalidLinkWeiPrice";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "premiumPercentage";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "max";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly name: "InvalidPremiumPercentage";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "have";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "min";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "max";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }];
        readonly name: "InvalidRequestConfirmations";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "InvalidSubscription";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "LinkAlreadySet";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "flatFeeLinkDiscountPPM";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "flatFeeNativePPM";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }];
        readonly name: "LinkDiscountTooHigh";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "LinkNotSet";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "have";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "max";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }];
        readonly name: "MsgDataTooBig";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "proposedOwner";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "MustBeRequestedOwner";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "MustBeSubOwner";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NoCorrespondingRequest";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "keyHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "NoSuchProvingKey";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "have";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "want";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }];
        readonly name: "NumWordsTooBig";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "OnlyCallableFromLink";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "PaymentTooLarge";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "PendingRequestExists";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "keyHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "ProvingKeyAlreadyRegistered";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "Reentrant";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "TooManyConsumers";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "minimumRequestConfirmations";
            readonly internalType: "uint16";
            readonly type: "uint16";
            readonly indexed: false;
        }, {
            readonly name: "maxGasLimit";
            readonly internalType: "uint32";
            readonly type: "uint32";
            readonly indexed: false;
        }, {
            readonly name: "stalenessSeconds";
            readonly internalType: "uint32";
            readonly type: "uint32";
            readonly indexed: false;
        }, {
            readonly name: "gasAfterPaymentCalculation";
            readonly internalType: "uint32";
            readonly type: "uint32";
            readonly indexed: false;
        }, {
            readonly name: "fallbackWeiPerUnitLink";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }, {
            readonly name: "fulfillmentFlatFeeNativePPM";
            readonly internalType: "uint32";
            readonly type: "uint32";
            readonly indexed: false;
        }, {
            readonly name: "fulfillmentFlatFeeLinkDiscountPPM";
            readonly internalType: "uint32";
            readonly type: "uint32";
            readonly indexed: false;
        }, {
            readonly name: "nativePremiumPercentage";
            readonly internalType: "uint8";
            readonly type: "uint8";
            readonly indexed: false;
        }, {
            readonly name: "linkPremiumPercentage";
            readonly internalType: "uint8";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "ConfigSet";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "coordinatorAddress";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "CoordinatorDeregistered";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "coordinatorAddress";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "CoordinatorRegistered";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "fallbackWeiPerUnitLink";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }];
        readonly name: "FallbackWeiPerUnitLinkUsed";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "FundsRecovered";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newCoordinator";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }, {
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "MigrationCompleted";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "NativeFundsRecovered";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "OwnershipTransferRequested";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "OwnershipTransferred";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "keyHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
            readonly indexed: false;
        }, {
            readonly name: "maxGas";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "ProvingKeyDeregistered";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "keyHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
            readonly indexed: false;
        }, {
            readonly name: "maxGas";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "ProvingKeyRegistered";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "outputSeed";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "payment";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: false;
        }, {
            readonly name: "nativePayment";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "success";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "onlyPremium";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "RandomWordsFulfilled";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "keyHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
            readonly indexed: true;
        }, {
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "preSeed";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "minimumRequestConfirmations";
            readonly internalType: "uint16";
            readonly type: "uint16";
            readonly indexed: false;
        }, {
            readonly name: "callbackGasLimit";
            readonly internalType: "uint32";
            readonly type: "uint32";
            readonly indexed: false;
        }, {
            readonly name: "numWords";
            readonly internalType: "uint32";
            readonly type: "uint32";
            readonly indexed: false;
        }, {
            readonly name: "extraArgs";
            readonly internalType: "bytes";
            readonly type: "bytes";
            readonly indexed: false;
        }, {
            readonly name: "sender";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "RandomWordsRequested";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }, {
            readonly name: "amountLink";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "amountNative";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "SubscriptionCanceled";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "consumer";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "SubscriptionConsumerAdded";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "consumer";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "SubscriptionConsumerRemoved";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "SubscriptionCreated";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "oldBalance";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "newBalance";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "SubscriptionFunded";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "oldNativeBalance";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "newNativeBalance";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "SubscriptionFundedWithNative";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "SubscriptionOwnerTransferRequested";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "SubscriptionOwnerTransferred";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "BLOCKHASH_STORE";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract BlockhashStoreInterface";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "LINK";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract LinkTokenInterface";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "LINK_NATIVE_FEED";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract AggregatorV3Interface";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "MAX_CONSUMERS";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "MAX_NUM_WORDS";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "MAX_REQUEST_CONFIRMATIONS";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "acceptOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "acceptSubscriptionOwnerTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "consumer";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "addConsumer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "cancelSubscription";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "createSubscription";
        readonly outputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "deregisterMigratableCoordinator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "publicProvingKey";
            readonly internalType: "uint256[2]";
            readonly type: "uint256[2]";
        }];
        readonly name: "deregisterProvingKey";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "proof";
            readonly internalType: "struct VRF.Proof";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "pk";
                readonly internalType: "uint256[2]";
                readonly type: "uint256[2]";
            }, {
                readonly name: "gamma";
                readonly internalType: "uint256[2]";
                readonly type: "uint256[2]";
            }, {
                readonly name: "c";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "s";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "seed";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "uWitness";
                readonly internalType: "address";
                readonly type: "address";
            }, {
                readonly name: "cGammaWitness";
                readonly internalType: "uint256[2]";
                readonly type: "uint256[2]";
            }, {
                readonly name: "sHashWitness";
                readonly internalType: "uint256[2]";
                readonly type: "uint256[2]";
            }, {
                readonly name: "zInv";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }];
        }, {
            readonly name: "rc";
            readonly internalType: "struct VRFTypes.RequestCommitmentV2Plus";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "blockNum";
                readonly internalType: "uint64";
                readonly type: "uint64";
            }, {
                readonly name: "subId";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "callbackGasLimit";
                readonly internalType: "uint32";
                readonly type: "uint32";
            }, {
                readonly name: "numWords";
                readonly internalType: "uint32";
                readonly type: "uint32";
            }, {
                readonly name: "sender";
                readonly internalType: "address";
                readonly type: "address";
            }, {
                readonly name: "extraArgs";
                readonly internalType: "bytes";
                readonly type: "bytes";
            }];
        }, {
            readonly name: "onlyPremium";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "fulfillRandomWords";
        readonly outputs: readonly [{
            readonly name: "payment";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "fundSubscriptionWithNative";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "startIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "maxCount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getActiveSubscriptionIds";
        readonly outputs: readonly [{
            readonly name: "ids";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getSubscription";
        readonly outputs: readonly [{
            readonly name: "balance";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "nativeBalance";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "reqCount";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "subOwner";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "consumers";
            readonly internalType: "address[]";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "publicKey";
            readonly internalType: "uint256[2]";
            readonly type: "uint256[2]";
        }];
        readonly name: "hashOfKey";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "newCoordinator";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "migrate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "onTokenTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "ownerCancelSubscription";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "pendingRequestExists";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "recoverFunds";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address payable";
            readonly type: "address";
        }];
        readonly name: "recoverNativeFunds";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "registerMigratableCoordinator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "publicProvingKey";
            readonly internalType: "uint256[2]";
            readonly type: "uint256[2]";
        }, {
            readonly name: "maxGas";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }];
        readonly name: "registerProvingKey";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "consumer";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "removeConsumer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "req";
            readonly internalType: "struct VRFV2PlusClient.RandomWordsRequest";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "keyHash";
                readonly internalType: "bytes32";
                readonly type: "bytes32";
            }, {
                readonly name: "subId";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "requestConfirmations";
                readonly internalType: "uint16";
                readonly type: "uint16";
            }, {
                readonly name: "callbackGasLimit";
                readonly internalType: "uint32";
                readonly type: "uint32";
            }, {
                readonly name: "numWords";
                readonly internalType: "uint32";
                readonly type: "uint32";
            }, {
                readonly name: "extraArgs";
                readonly internalType: "bytes";
                readonly type: "bytes";
            }];
        }];
        readonly name: "requestRandomWords";
        readonly outputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "subId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "newOwner";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "requestSubscriptionOwnerTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "s_config";
        readonly outputs: readonly [{
            readonly name: "minimumRequestConfirmations";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "maxGasLimit";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "reentrancyLock";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "stalenessSeconds";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "gasAfterPaymentCalculation";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "fulfillmentFlatFeeNativePPM";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "fulfillmentFlatFeeLinkDiscountPPM";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "nativePremiumPercentage";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "linkPremiumPercentage";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "s_currentSubNonce";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "s_fallbackWeiPerUnitLink";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "int256";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "s_provingKeyHashes";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "s_provingKeys";
        readonly outputs: readonly [{
            readonly name: "exists";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "maxGas";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "s_requestCommitments";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "s_totalBalance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "s_totalNativeBalance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "minimumRequestConfirmations";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "maxGasLimit";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "stalenessSeconds";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "gasAfterPaymentCalculation";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "fallbackWeiPerUnitLink";
            readonly internalType: "int256";
            readonly type: "int256";
        }, {
            readonly name: "fulfillmentFlatFeeNativePPM";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "fulfillmentFlatFeeLinkDiscountPPM";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "nativePremiumPercentage";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "linkPremiumPercentage";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly name: "setConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "link";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "linkNativeFeed";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "setLINKAndLINKNativeFeed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly internalType: "address payable";
            readonly type: "address";
        }];
        readonly name: "withdrawNative";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1)
 */
export declare const daiAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "usr";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Deny";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "usr";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Rely";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "DOMAIN_SEPARATOR";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "PERMIT_TYPEHASH";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "burn";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "usr";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "deny";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "deploymentChainId";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deadline";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "v";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "r";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "permit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "usr";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "rely";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "wards";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1)
 */
export declare const daiAddress: {
    readonly 42161: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1)
 */
export declare const daiConfig: {
    readonly address: {
        readonly 42161: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "usr";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Deny";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "usr";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Rely";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "PERMIT_TYPEHASH";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "subtractedValue";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "usr";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "deny";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "deploymentChainId";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "addedValue";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deadline";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "v";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "r";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "s";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "usr";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "rely";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "wards";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x70B464be85A547144C72485eBa2577E5D3A45421)
 */
export declare const disputeKitClassicNeoAbi: readonly [{
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "ChoiceFunded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_voteIDs";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
        readonly indexed: false;
    }, {
        readonly name: "_commit";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
        readonly indexed: false;
    }];
    readonly name: "CommitCast";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_contributor";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Contribution";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "DisputeCreation";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_voteIDs";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
        readonly indexed: false;
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_justification";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "VoteCast";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_contributor";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Withdrawal";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "LOSER_APPEAL_PERIOD_MULTIPLIER";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "LOSER_STAKE_MULTIPLIER";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "ONE_BASIS_POINT";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "WINNER_STAKE_MULTIPLIER";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "localDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "localRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "drawnAddress";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "alreadyDrawn";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "areCommitsAllCast";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "areVotesAllCast";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteIDs";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "_commit";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "castCommit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteIDs";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_salt";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_justification";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "castVote";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_core";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeCore";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address payable";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "core";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract KlerosCore";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "coreDisputeIDToLocal";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_nbVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "currentRuling";
    readonly outputs: readonly [{
        readonly name: "ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputes";
    readonly outputs: readonly [{
        readonly name: "numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "jumped";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "draw";
    readonly outputs: readonly [{
        readonly name: "drawnAddress";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_destination";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "executeGovernorProposal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "fundAppeal";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getCoherentCount";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getDegreeOfCoherence";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getFundedChoices";
    readonly outputs: readonly [{
        readonly name: "fundedChoices";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getRoundInfo";
    readonly outputs: readonly [{
        readonly name: "winningChoice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "totalVoted";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "totalCommited";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "nbVoters";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "choiceCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getVoteInfo";
    readonly outputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "commit";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "voted";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_core";
        readonly internalType: "contract KlerosCore";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize6";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isAppealFunded";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isVoteActive";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "singleDrawPerJuror";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_beneficiary";
        readonly internalType: "address payable";
        readonly type: "address";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "withdrawFeesAndRewards";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x70B464be85A547144C72485eBa2577E5D3A45421)
 */
export declare const disputeKitClassicNeoAddress: {
    readonly 42161: "0x70B464be85A547144C72485eBa2577E5D3A45421";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x70B464be85A547144C72485eBa2577E5D3A45421)
 */
export declare const disputeKitClassicNeoConfig: {
    readonly address: {
        readonly 42161: "0x70B464be85A547144C72485eBa2577E5D3A45421";
    };
    readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "ChoiceFunded";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_voteIDs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
            readonly indexed: false;
        }, {
            readonly name: "_commit";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
            readonly indexed: false;
        }];
        readonly name: "CommitCast";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_contributor";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Contribution";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
            readonly indexed: false;
        }];
        readonly name: "DisputeCreation";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_voteIDs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
            readonly indexed: false;
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_justification";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }];
        readonly name: "VoteCast";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_contributor";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Withdrawal";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "LOSER_APPEAL_PERIOD_MULTIPLIER";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "LOSER_STAKE_MULTIPLIER";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "ONE_BASIS_POINT";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "WINNER_STAKE_MULTIPLIER";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "localDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "localRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "drawnAddress";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "alreadyDrawn";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "areCommitsAllCast";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "areVotesAllCast";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteIDs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "_commit";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "castCommit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteIDs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_salt";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_justification";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "castVote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_core";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeCore";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address payable";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "core";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract KlerosCore";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "coreDisputeIDToLocal";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_nbVotes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly name: "ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly name: "numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "jumped";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_nonce";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "draw";
        readonly outputs: readonly [{
            readonly name: "drawnAddress";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_destination";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "executeGovernorProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "fundAppeal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getCoherentCount";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getDegreeOfCoherence";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getFundedChoices";
        readonly outputs: readonly [{
            readonly name: "fundedChoices";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getRoundInfo";
        readonly outputs: readonly [{
            readonly name: "winningChoice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "totalVoted";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "totalCommited";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "nbVoters";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "choiceCount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getVoteInfo";
        readonly outputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "commit";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "voted";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_core";
            readonly internalType: "contract KlerosCore";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "initialize6";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "isAppealFunded";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "isVoteActive";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "singleDrawPerJuror";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_beneficiary";
            readonly internalType: "address payable";
            readonly type: "address";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "withdrawFeesAndRewards";
        readonly outputs: readonly [{
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x7F3C3C9f9c6238885d958afa1bCc92f1032ef81d)
 */
export declare const disputeKitClassicNeoImplementationAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "ChoiceFunded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_voteIDs";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
        readonly indexed: false;
    }, {
        readonly name: "_commit";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
        readonly indexed: false;
    }];
    readonly name: "CommitCast";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_contributor";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Contribution";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "DisputeCreation";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_voteIDs";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
        readonly indexed: false;
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_justification";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "VoteCast";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_contributor";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Withdrawal";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "LOSER_APPEAL_PERIOD_MULTIPLIER";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "LOSER_STAKE_MULTIPLIER";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "ONE_BASIS_POINT";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "WINNER_STAKE_MULTIPLIER";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "localDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "localRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "drawnAddress";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "alreadyDrawn";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "areCommitsAllCast";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "areVotesAllCast";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteIDs";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "_commit";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "castCommit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteIDs";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_salt";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_justification";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "castVote";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_core";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeCore";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address payable";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "core";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract KlerosCore";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "coreDisputeIDToLocal";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_nbVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "currentRuling";
    readonly outputs: readonly [{
        readonly name: "ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputes";
    readonly outputs: readonly [{
        readonly name: "numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "jumped";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "draw";
    readonly outputs: readonly [{
        readonly name: "drawnAddress";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_destination";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "executeGovernorProposal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "fundAppeal";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getCoherentCount";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getDegreeOfCoherence";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getFundedChoices";
    readonly outputs: readonly [{
        readonly name: "fundedChoices";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getRoundInfo";
    readonly outputs: readonly [{
        readonly name: "winningChoice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "totalVoted";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "totalCommited";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "nbVoters";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "choiceCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getVoteInfo";
    readonly outputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "commit";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "voted";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_core";
        readonly internalType: "contract KlerosCore";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize6";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isAppealFunded";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isVoteActive";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "singleDrawPerJuror";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_beneficiary";
        readonly internalType: "address payable";
        readonly type: "address";
    }, {
        readonly name: "_coreRoundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_choice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "withdrawFeesAndRewards";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x7F3C3C9f9c6238885d958afa1bCc92f1032ef81d)
 */
export declare const disputeKitClassicNeoImplementationAddress: {
    readonly 42161: "0x7F3C3C9f9c6238885d958afa1bCc92f1032ef81d";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x7F3C3C9f9c6238885d958afa1bCc92f1032ef81d)
 */
export declare const disputeKitClassicNeoImplementationConfig: {
    readonly address: {
        readonly 42161: "0x7F3C3C9f9c6238885d958afa1bCc92f1032ef81d";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "ChoiceFunded";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_voteIDs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
            readonly indexed: false;
        }, {
            readonly name: "_commit";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
            readonly indexed: false;
        }];
        readonly name: "CommitCast";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_contributor";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Contribution";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
            readonly indexed: false;
        }];
        readonly name: "DisputeCreation";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_voteIDs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
            readonly indexed: false;
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_justification";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }];
        readonly name: "VoteCast";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_contributor";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Withdrawal";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "LOSER_APPEAL_PERIOD_MULTIPLIER";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "LOSER_STAKE_MULTIPLIER";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "ONE_BASIS_POINT";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "WINNER_STAKE_MULTIPLIER";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "localDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "localRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "drawnAddress";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "alreadyDrawn";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "areCommitsAllCast";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "areVotesAllCast";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteIDs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "_commit";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "castCommit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteIDs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_salt";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_justification";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "castVote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_core";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeCore";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address payable";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "core";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract KlerosCore";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "coreDisputeIDToLocal";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_nbVotes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly name: "ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly name: "numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "jumped";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_nonce";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "draw";
        readonly outputs: readonly [{
            readonly name: "drawnAddress";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_destination";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "executeGovernorProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "fundAppeal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getCoherentCount";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getDegreeOfCoherence";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getFundedChoices";
        readonly outputs: readonly [{
            readonly name: "fundedChoices";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getRoundInfo";
        readonly outputs: readonly [{
            readonly name: "winningChoice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "totalVoted";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "totalCommited";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "nbVoters";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "choiceCount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getVoteInfo";
        readonly outputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "commit";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "voted";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_core";
            readonly internalType: "contract KlerosCore";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "initialize6";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "isAppealFunded";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "isVoteActive";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "singleDrawPerJuror";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_beneficiary";
            readonly internalType: "address payable";
            readonly type: "address";
        }, {
            readonly name: "_coreRoundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_choice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "withdrawFeesAndRewards";
        readonly outputs: readonly [{
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x70B464be85A547144C72485eBa2577E5D3A45421)
 */
export declare const disputeKitClassicNeoProxyAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x70B464be85A547144C72485eBa2577E5D3A45421)
 */
export declare const disputeKitClassicNeoProxyAddress: {
    readonly 42161: "0x70B464be85A547144C72485eBa2577E5D3A45421";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x70B464be85A547144C72485eBa2577E5D3A45421)
 */
export declare const disputeKitClassicNeoProxyConfig: {
    readonly address: {
        readonly 42161: "0x70B464be85A547144C72485eBa2577E5D3A45421";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xb5526D022962A1fFf6eD32C93e8b714c901F4323)
 */
export declare const disputeResolverNeoAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
    }, {
        readonly name: "_templateRegistry";
        readonly internalType: "contract IDisputeTemplateRegistry";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_arbitratorDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_externalDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_templateId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_templateUri";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "DisputeRequest";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Ruling";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "arbitrator";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "arbitratorDisputeIDToLocalID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
    }];
    readonly name: "changeArbitrator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_templateRegistry";
        readonly internalType: "contract IDisputeTemplateRegistry";
        readonly type: "address";
    }];
    readonly name: "changeTemplateRegistry";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitratorExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_disputeTemplate";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_disputeTemplateDataMappings";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_numberOfRulingOptions";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDisputeForTemplate";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitratorExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_disputeTemplateUri";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_numberOfRulingOptions";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDisputeForTemplateUri";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputes";
    readonly outputs: readonly [{
        readonly name: "arbitratorExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "isRuled";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "numberOfRulingOptions";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitratorDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "rule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "templateRegistry";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IDisputeTemplateRegistry";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xb5526D022962A1fFf6eD32C93e8b714c901F4323)
 */
export declare const disputeResolverNeoAddress: {
    readonly 42161: "0xb5526D022962A1fFf6eD32C93e8b714c901F4323";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xb5526D022962A1fFf6eD32C93e8b714c901F4323)
 */
export declare const disputeResolverNeoConfig: {
    readonly address: {
        readonly 42161: "0xb5526D022962A1fFf6eD32C93e8b714c901F4323";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_arbitrator";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
        }, {
            readonly name: "_templateRegistry";
            readonly internalType: "contract IDisputeTemplateRegistry";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrator";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_arbitratorDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_externalDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_templateId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_templateUri";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }];
        readonly name: "DisputeRequest";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrator";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Ruling";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "arbitrator";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "arbitratorDisputeIDToLocalID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrator";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
        }];
        readonly name: "changeArbitrator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_templateRegistry";
            readonly internalType: "contract IDisputeTemplateRegistry";
            readonly type: "address";
        }];
        readonly name: "changeTemplateRegistry";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitratorExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_disputeTemplate";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_disputeTemplateDataMappings";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_numberOfRulingOptions";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDisputeForTemplate";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitratorExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_disputeTemplateUri";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_numberOfRulingOptions";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDisputeForTemplateUri";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly name: "arbitratorExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "isRuled";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "numberOfRulingOptions";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitratorDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "rule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "templateRegistry";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IDisputeTemplateRegistry";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xb3a5FdEAF461c42caCe148e978e6FBCa97bE6140)
 */
export declare const disputeResolverRulerNeoAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
    }, {
        readonly name: "_templateRegistry";
        readonly internalType: "contract IDisputeTemplateRegistry";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_arbitratorDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_externalDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_templateId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_templateUri";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "DisputeRequest";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Ruling";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "arbitrator";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "arbitratorDisputeIDToLocalID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
    }];
    readonly name: "changeArbitrator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_templateRegistry";
        readonly internalType: "contract IDisputeTemplateRegistry";
        readonly type: "address";
    }];
    readonly name: "changeTemplateRegistry";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitratorExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_disputeTemplate";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_disputeTemplateDataMappings";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_numberOfRulingOptions";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDisputeForTemplate";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitratorExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_disputeTemplateUri";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_numberOfRulingOptions";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDisputeForTemplateUri";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputes";
    readonly outputs: readonly [{
        readonly name: "arbitratorExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "isRuled";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "numberOfRulingOptions";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitratorDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "rule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "templateRegistry";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IDisputeTemplateRegistry";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xb3a5FdEAF461c42caCe148e978e6FBCa97bE6140)
 */
export declare const disputeResolverRulerNeoAddress: {
    readonly 42161: "0xb3a5FdEAF461c42caCe148e978e6FBCa97bE6140";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xb3a5FdEAF461c42caCe148e978e6FBCa97bE6140)
 */
export declare const disputeResolverRulerNeoConfig: {
    readonly address: {
        readonly 42161: "0xb3a5FdEAF461c42caCe148e978e6FBCa97bE6140";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_arbitrator";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
        }, {
            readonly name: "_templateRegistry";
            readonly internalType: "contract IDisputeTemplateRegistry";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrator";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_arbitratorDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_externalDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_templateId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_templateUri";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }];
        readonly name: "DisputeRequest";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrator";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Ruling";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "arbitrator";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "arbitratorDisputeIDToLocalID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrator";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
        }];
        readonly name: "changeArbitrator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_templateRegistry";
            readonly internalType: "contract IDisputeTemplateRegistry";
            readonly type: "address";
        }];
        readonly name: "changeTemplateRegistry";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitratorExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_disputeTemplate";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_disputeTemplateDataMappings";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_numberOfRulingOptions";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDisputeForTemplate";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitratorExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_disputeTemplateUri";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_numberOfRulingOptions";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDisputeForTemplateUri";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly name: "arbitratorExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "isRuled";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "numberOfRulingOptions";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitratorDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "rule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "templateRegistry";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IDisputeTemplateRegistry";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2)
 */
export declare const disputeTemplateRegistryAbi: readonly [{
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_templateId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_templateTag";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: true;
    }, {
        readonly name: "_templateData";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }, {
        readonly name: "_templateDataMappings";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "DisputeTemplate";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_templateTag";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_templateData";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_templateDataMappings";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "setDisputeTemplate";
    readonly outputs: readonly [{
        readonly name: "templateId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "templates";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2)
 */
export declare const disputeTemplateRegistryAddress: {
    readonly 42161: "0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2)
 */
export declare const disputeTemplateRegistryConfig: {
    readonly address: {
        readonly 42161: "0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2";
    };
    readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_templateId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_templateTag";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: true;
        }, {
            readonly name: "_templateData";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }, {
            readonly name: "_templateDataMappings";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }];
        readonly name: "DisputeTemplate";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_templateTag";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_templateData";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_templateDataMappings";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "setDisputeTemplate";
        readonly outputs: readonly [{
            readonly name: "templateId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "templates";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x57EfD43DAfCeb6C58Df57932b2B299f46fef5c87)
 */
export declare const disputeTemplateRegistryImplementationAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_templateId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_templateTag";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: true;
    }, {
        readonly name: "_templateData";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }, {
        readonly name: "_templateDataMappings";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "DisputeTemplate";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_templateTag";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_templateData";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_templateDataMappings";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "setDisputeTemplate";
    readonly outputs: readonly [{
        readonly name: "templateId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "templates";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x57EfD43DAfCeb6C58Df57932b2B299f46fef5c87)
 */
export declare const disputeTemplateRegistryImplementationAddress: {
    readonly 42161: "0x57EfD43DAfCeb6C58Df57932b2B299f46fef5c87";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x57EfD43DAfCeb6C58Df57932b2B299f46fef5c87)
 */
export declare const disputeTemplateRegistryImplementationConfig: {
    readonly address: {
        readonly 42161: "0x57EfD43DAfCeb6C58Df57932b2B299f46fef5c87";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_templateId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_templateTag";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: true;
        }, {
            readonly name: "_templateData";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }, {
            readonly name: "_templateDataMappings";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }];
        readonly name: "DisputeTemplate";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_templateTag";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_templateData";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_templateDataMappings";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "setDisputeTemplate";
        readonly outputs: readonly [{
            readonly name: "templateId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "templates";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2)
 */
export declare const disputeTemplateRegistryProxyAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2)
 */
export declare const disputeTemplateRegistryProxyAddress: {
    readonly 42161: "0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2)
 */
export declare const disputeTemplateRegistryProxyConfig: {
    readonly address: {
        readonly 42161: "0x0cFBaCA5C72e7Ca5fFABE768E135654fB3F2a5A2";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3)
 */
export declare const evidenceModuleAbi: readonly [{
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_externalDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_party";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_evidence";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "Evidence";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize2";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_externalDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_evidence";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "submitEvidence";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3)
 */
export declare const evidenceModuleAddress: {
    readonly 42161: "0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3)
 */
export declare const evidenceModuleConfig: {
    readonly address: {
        readonly 42161: "0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3";
    };
    readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_externalDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_party";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_evidence";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }];
        readonly name: "Evidence";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "initialize2";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_externalDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_evidence";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "submitEvidence";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xA502A3942abCF8e71FBD87ed442B39b798b192C8)
 */
export declare const evidenceModuleImplementationAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_externalDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_party";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_evidence";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "Evidence";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize2";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_externalDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_evidence";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "submitEvidence";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xA502A3942abCF8e71FBD87ed442B39b798b192C8)
 */
export declare const evidenceModuleImplementationAddress: {
    readonly 42161: "0xA502A3942abCF8e71FBD87ed442B39b798b192C8";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xA502A3942abCF8e71FBD87ed442B39b798b192C8)
 */
export declare const evidenceModuleImplementationConfig: {
    readonly address: {
        readonly 42161: "0xA502A3942abCF8e71FBD87ed442B39b798b192C8";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_externalDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_party";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_evidence";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }];
        readonly name: "Evidence";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "initialize2";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_externalDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_evidence";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "submitEvidence";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3)
 */
export declare const evidenceModuleProxyAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3)
 */
export declare const evidenceModuleProxyAddress: {
    readonly 42161: "0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3)
 */
export declare const evidenceModuleProxyConfig: {
    readonly address: {
        readonly 42161: "0x48e052B4A6dC4F30e90930F1CeaAFd83b3981EB3";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
export declare const iHomeGatewayAbi: readonly [{
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "_arbitrableChainId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrableDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitratorDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_externalDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_templateId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_templateUri";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "CrossChainDisputeIncoming";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_arbitratorDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_externalDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_templateId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_templateUri";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "DisputeRequest";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Ruling";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "disputeHashToHomeID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "feeToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "foreignChainID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "foreignGateway";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "receiverGateway";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_params";
        readonly internalType: "struct IHomeGateway.RelayCreateDisputeParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "foreignBlockHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "foreignChainID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "foreignArbitrable";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "foreignDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "externalDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "templateId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "templateUri";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "choices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "relayCreateDispute";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_params";
        readonly internalType: "struct IHomeGateway.RelayCreateDisputeParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "foreignBlockHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "foreignChainID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "foreignArbitrable";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "foreignDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "externalDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "templateId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "templateUri";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "choices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly name: "relayCreateDispute";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "rule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "veaInbox";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IVeaInbox";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x991d2df165670b9cac3B022f4B68D65b664222ea)
 */
export declare const klerosCoreNeoAbi: readonly [{
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AppealFeesNotEnough";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AppealPeriodNotPassed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ArbitrableNotWhitelisted";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ArbitrationFeesNotEnough";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "CannotDisableClassicDK";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "CommitPeriodNotPassed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputeKitNotSupportedByCourt";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputeKitOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputeNotAppealable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputePeriodIsFinal";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputeStillDrawing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "EvidenceNotPassedAndNotAppeal";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "GovernorOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "GuardianOrGovernorOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidDisputKitParent";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidForkingCourtAsParent";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MinStakeLowerThanParentCourt";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MustSupportDisputeKitClassic";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotEligibleForStaking";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotEvidencePeriod";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotExecutionPeriod";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "RulingAlreadyExecuted";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "SortitionModuleOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingInTooManyCourts";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingLessThanCourtMinStake";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingMoreThanMaxStakePerJuror";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingMoreThanMaxTotalStaked";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingNotPossibleInThisCourt";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingTransferFailed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingZeroWhenNoStake";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "TokenNotAccepted";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "TransferFailed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UnstakingTransferFailed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UnsuccessfulCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UnsupportedDisputeKit";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotePeriodNotPassed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "WhenNotPausedOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "WhenPausedOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "WrongDisputeKitIndex";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_accepted";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: true;
    }];
    readonly name: "AcceptedFeeToken";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "AppealDecision";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "AppealPossible";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
        readonly indexed: false;
    }, {
        readonly name: "_supportedDisputeKits";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
        readonly indexed: false;
    }];
    readonly name: "CourtCreated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_fromCourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_toCourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: false;
    }];
    readonly name: "CourtJump";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
        readonly indexed: false;
    }];
    readonly name: "CourtModified";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DisputeCreation";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeKitID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_disputeKitAddress";
        readonly internalType: "contract IDisputeKit";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DisputeKitCreated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_disputeKitID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_enable";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: true;
    }];
    readonly name: "DisputeKitEnabled";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_fromDisputeKitID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_toDisputeKitID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "DisputeKitJump";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_voteID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Draw";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_pnkAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "LeftoverRewardSent";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }, {
        readonly name: "_rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewCurrencyRate";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_period";
        readonly internalType: "enum KlerosCoreBase.Period";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewPeriod";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "Paused";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Ruling";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_degreeOfCoherency";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_pnkAmount";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "TokenAndETHShift";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "Unpaused";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeKitAddress";
        readonly internalType: "contract IDisputeKit";
        readonly type: "address";
    }];
    readonly name: "addNewDisputeKit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "appeal";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "appealCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "appealPeriod";
    readonly outputs: readonly [{
        readonly name: "start";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "end";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "arbitrableWhitelist";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "arbitrationCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "arbitrationCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_accepted";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "changeAcceptedFeeTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_allowed";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "changeArbitrableWhitelist";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly name: "changeCourtParameters";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "_rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "changeCurrencyRates";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address payable";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_guardian";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGuardian";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_jurorNft";
        readonly internalType: "contract IERC721";
        readonly type: "address";
    }];
    readonly name: "changeJurorNft";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_jurorProsecutionModule";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeJurorProsecutionModule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_pinakion";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "changePinakion";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_sortitionModule";
        readonly internalType: "contract ISortitionModule";
        readonly type: "address";
    }];
    readonly name: "changeSortitionModule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_toToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_amountInEth";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "convertEthToTokenAmount";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "courts";
    readonly outputs: readonly [{
        readonly name: "parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "disabled";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }, {
        readonly name: "_sortitionExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_supportedDisputeKits";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "createCourt";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "currencyRates";
    readonly outputs: readonly [{
        readonly name: "feePaymentAccepted";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "currentRuling";
    readonly outputs: readonly [{
        readonly name: "ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputeKits";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IDisputeKit";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputes";
    readonly outputs: readonly [{
        readonly name: "courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "arbitrated";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }, {
        readonly name: "period";
        readonly internalType: "enum KlerosCoreBase.Period";
        readonly type: "uint8";
    }, {
        readonly name: "ruled";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "lastPeriodChange";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_iterations";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "draw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_disputeKitIDs";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "_enable";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "enableDisputeKits";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_round";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_iterations";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "execute";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_destination";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "executeGovernorProposal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "executeRuling";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getDisputeKitsLength";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getNumberOfRounds";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getNumberOfVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_round";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPnkAtStakePerJuror";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_round";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getRoundInfo";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct KlerosCoreBase.Round";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "disputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "pnkAtStakePerJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "totalFeesForJurors";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "nbVotes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "repartitions";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "pnkPenalties";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "drawnJurors";
            readonly internalType: "address[]";
            readonly type: "address[]";
        }, {
            readonly name: "sumFeeRewardPaid";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "sumPnkRewardPaid";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "drawIterations";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "getTimesPerPeriod";
    readonly outputs: readonly [{
        readonly name: "timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "guardian";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_guardian";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_pinakion";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_jurorProsecutionModule";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_disputeKit";
        readonly internalType: "contract IDisputeKit";
        readonly type: "address";
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_courtParameters";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }, {
        readonly name: "_sortitionExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_sortitionModuleAddress";
        readonly internalType: "contract ISortitionModule";
        readonly type: "address";
    }, {
        readonly name: "_jurorNft";
        readonly internalType: "contract IERC721";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize4";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isDisputeKitJumping";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_disputeKitID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isSupported";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "jurorNft";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC721";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "jurorProsecutionModule";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "passPeriod";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "pause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "paused";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "pinakion";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_newStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_newStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alreadyTransferred";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setStakeBySortitionModule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "sortitionModule";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract ISortitionModule";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "unpause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x991d2df165670b9cac3B022f4B68D65b664222ea)
 */
export declare const klerosCoreNeoAddress: {
    readonly 42161: "0x991d2df165670b9cac3B022f4B68D65b664222ea";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x991d2df165670b9cac3B022f4B68D65b664222ea)
 */
export declare const klerosCoreNeoConfig: {
    readonly address: {
        readonly 42161: "0x991d2df165670b9cac3B022f4B68D65b664222ea";
    };
    readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AppealFeesNotEnough";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AppealPeriodNotPassed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "ArbitrableNotWhitelisted";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "ArbitrationFeesNotEnough";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "CannotDisableClassicDK";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "CommitPeriodNotPassed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputeKitNotSupportedByCourt";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputeKitOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputeNotAppealable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputePeriodIsFinal";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputeStillDrawing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "EvidenceNotPassedAndNotAppeal";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "GovernorOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "GuardianOrGovernorOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "InvalidDisputKitParent";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "InvalidForkingCourtAsParent";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "MinStakeLowerThanParentCourt";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "MustSupportDisputeKitClassic";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotEligibleForStaking";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotEvidencePeriod";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotExecutionPeriod";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "RulingAlreadyExecuted";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "SortitionModuleOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingInTooManyCourts";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingLessThanCourtMinStake";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingMoreThanMaxStakePerJuror";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingMoreThanMaxTotalStaked";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingNotPossibleInThisCourt";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingTransferFailed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingZeroWhenNoStake";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "TokenNotAccepted";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UnstakingTransferFailed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UnsuccessfulCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UnsupportedDisputeKit";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "VotePeriodNotPassed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "WhenNotPausedOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "WhenPausedOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "WrongDisputeKitIndex";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_accepted";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: true;
        }];
        readonly name: "AcceptedFeeToken";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "AppealDecision";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "AppealPossible";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
            readonly indexed: false;
        }, {
            readonly name: "_supportedDisputeKits";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
            readonly indexed: false;
        }];
        readonly name: "CourtCreated";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_fromCourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_toCourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: false;
        }];
        readonly name: "CourtJump";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
            readonly indexed: false;
        }];
        readonly name: "CourtModified";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "DisputeCreation";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_disputeKitAddress";
            readonly internalType: "contract IDisputeKit";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "DisputeKitCreated";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_disputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_enable";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: true;
        }];
        readonly name: "DisputeKitEnabled";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_fromDisputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_toDisputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "DisputeKitJump";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_voteID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Draw";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_pnkAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "LeftoverRewardSent";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }, {
            readonly name: "_rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewCurrencyRate";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_period";
            readonly internalType: "enum KlerosCoreBase.Period";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewPeriod";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "Paused";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Ruling";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_degreeOfCoherency";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_pnkAmount";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "TokenAndETHShift";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "Unpaused";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeKitAddress";
            readonly internalType: "contract IDisputeKit";
            readonly type: "address";
        }];
        readonly name: "addNewDisputeKit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "appeal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "appealCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "appealPeriod";
        readonly outputs: readonly [{
            readonly name: "start";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "end";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "arbitrableWhitelist";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_accepted";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "changeAcceptedFeeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_allowed";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "changeArbitrableWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly name: "changeCourtParameters";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "_rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly name: "changeCurrencyRates";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address payable";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_guardian";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGuardian";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_jurorNft";
            readonly internalType: "contract IERC721";
            readonly type: "address";
        }];
        readonly name: "changeJurorNft";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_jurorProsecutionModule";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeJurorProsecutionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_pinakion";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "changePinakion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_sortitionModule";
            readonly internalType: "contract ISortitionModule";
            readonly type: "address";
        }];
        readonly name: "changeSortitionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_toToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_amountInEth";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "convertEthToTokenAmount";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "courts";
        readonly outputs: readonly [{
            readonly name: "parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "disabled";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }, {
            readonly name: "_sortitionExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_supportedDisputeKits";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
        readonly name: "createCourt";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "currencyRates";
        readonly outputs: readonly [{
            readonly name: "feePaymentAccepted";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly name: "ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputeKits";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IDisputeKit";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly name: "courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "arbitrated";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }, {
            readonly name: "period";
            readonly internalType: "enum KlerosCoreBase.Period";
            readonly type: "uint8";
        }, {
            readonly name: "ruled";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "lastPeriodChange";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_iterations";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "draw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_disputeKitIDs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "_enable";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "enableDisputeKits";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_round";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_iterations";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_destination";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "executeGovernorProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "executeRuling";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "getDisputeKitsLength";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfRounds";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfVotes";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_round";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getPnkAtStakePerJuror";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_round";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getRoundInfo";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "struct KlerosCoreBase.Round";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "disputeKitID";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "pnkAtStakePerJuror";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "totalFeesForJurors";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "nbVotes";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "repartitions";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "pnkPenalties";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "drawnJurors";
                readonly internalType: "address[]";
                readonly type: "address[]";
            }, {
                readonly name: "sumFeeRewardPaid";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "sumPnkRewardPaid";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "feeToken";
                readonly internalType: "contract IERC20";
                readonly type: "address";
            }, {
                readonly name: "drawIterations";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "getTimesPerPeriod";
        readonly outputs: readonly [{
            readonly name: "timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "guardian";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_guardian";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_pinakion";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_jurorProsecutionModule";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_disputeKit";
            readonly internalType: "contract IDisputeKit";
            readonly type: "address";
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_courtParameters";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }, {
            readonly name: "_sortitionExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_sortitionModuleAddress";
            readonly internalType: "contract ISortitionModule";
            readonly type: "address";
        }, {
            readonly name: "_jurorNft";
            readonly internalType: "contract IERC721";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "initialize4";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "isDisputeKitJumping";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_disputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "isSupported";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "jurorNft";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC721";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "jurorProsecutionModule";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "passPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "pinakion";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_newStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "setStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_newStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alreadyTransferred";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "setStakeBySortitionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "sortitionModule";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract ISortitionModule";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "unpause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xEb6D9E61921506f876dc662B2398E34C92330faB)
 */
export declare const klerosCoreNeoImplementationAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AppealFeesNotEnough";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AppealPeriodNotPassed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ArbitrableNotWhitelisted";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ArbitrationFeesNotEnough";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "CannotDisableClassicDK";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "CommitPeriodNotPassed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputeKitNotSupportedByCourt";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputeKitOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputeNotAppealable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputePeriodIsFinal";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputeStillDrawing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "EvidenceNotPassedAndNotAppeal";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "GovernorOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "GuardianOrGovernorOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidDisputKitParent";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidForkingCourtAsParent";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MinStakeLowerThanParentCourt";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MustSupportDisputeKitClassic";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotEligibleForStaking";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotEvidencePeriod";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotExecutionPeriod";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "RulingAlreadyExecuted";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "SortitionModuleOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingInTooManyCourts";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingLessThanCourtMinStake";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingMoreThanMaxStakePerJuror";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingMoreThanMaxTotalStaked";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingNotPossibleInThisCourt";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingTransferFailed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "StakingZeroWhenNoStake";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "TokenNotAccepted";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "TransferFailed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UnstakingTransferFailed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UnsuccessfulCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UnsupportedDisputeKit";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotePeriodNotPassed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "WhenNotPausedOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "WhenPausedOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "WrongDisputeKitIndex";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_accepted";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: true;
    }];
    readonly name: "AcceptedFeeToken";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "AppealDecision";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "AppealPossible";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
        readonly indexed: false;
    }, {
        readonly name: "_supportedDisputeKits";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
        readonly indexed: false;
    }];
    readonly name: "CourtCreated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_fromCourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_toCourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: false;
    }];
    readonly name: "CourtJump";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
        readonly indexed: false;
    }];
    readonly name: "CourtModified";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DisputeCreation";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeKitID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_disputeKitAddress";
        readonly internalType: "contract IDisputeKit";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DisputeKitCreated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_disputeKitID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_enable";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: true;
    }];
    readonly name: "DisputeKitEnabled";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_fromDisputeKitID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_toDisputeKitID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "DisputeKitJump";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_voteID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Draw";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_pnkAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "LeftoverRewardSent";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }, {
        readonly name: "_rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewCurrencyRate";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_period";
        readonly internalType: "enum KlerosCoreBase.Period";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewPeriod";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "Paused";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Ruling";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_degreeOfCoherency";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_pnkAmount";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "TokenAndETHShift";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "Unpaused";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeKitAddress";
        readonly internalType: "contract IDisputeKit";
        readonly type: "address";
    }];
    readonly name: "addNewDisputeKit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "appeal";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "appealCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "appealPeriod";
    readonly outputs: readonly [{
        readonly name: "start";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "end";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "arbitrableWhitelist";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "arbitrationCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "arbitrationCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_accepted";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "changeAcceptedFeeTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_allowed";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "changeArbitrableWhitelist";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly name: "changeCourtParameters";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "_rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "changeCurrencyRates";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address payable";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_guardian";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGuardian";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_jurorNft";
        readonly internalType: "contract IERC721";
        readonly type: "address";
    }];
    readonly name: "changeJurorNft";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_jurorProsecutionModule";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeJurorProsecutionModule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_pinakion";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "changePinakion";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_sortitionModule";
        readonly internalType: "contract ISortitionModule";
        readonly type: "address";
    }];
    readonly name: "changeSortitionModule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_toToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_amountInEth";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "convertEthToTokenAmount";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "courts";
    readonly outputs: readonly [{
        readonly name: "parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "disabled";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }, {
        readonly name: "_sortitionExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_supportedDisputeKits";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "createCourt";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "currencyRates";
    readonly outputs: readonly [{
        readonly name: "feePaymentAccepted";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "currentRuling";
    readonly outputs: readonly [{
        readonly name: "ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputeKits";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IDisputeKit";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputes";
    readonly outputs: readonly [{
        readonly name: "courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "arbitrated";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }, {
        readonly name: "period";
        readonly internalType: "enum KlerosCoreBase.Period";
        readonly type: "uint8";
    }, {
        readonly name: "ruled";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "lastPeriodChange";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_iterations";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "draw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_disputeKitIDs";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "_enable";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "enableDisputeKits";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_round";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_iterations";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "execute";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_destination";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "executeGovernorProposal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "executeRuling";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getDisputeKitsLength";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getNumberOfRounds";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getNumberOfVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_round";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPnkAtStakePerJuror";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_round";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getRoundInfo";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct KlerosCoreBase.Round";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "disputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "pnkAtStakePerJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "totalFeesForJurors";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "nbVotes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "repartitions";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "pnkPenalties";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "drawnJurors";
            readonly internalType: "address[]";
            readonly type: "address[]";
        }, {
            readonly name: "sumFeeRewardPaid";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "sumPnkRewardPaid";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "drawIterations";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "getTimesPerPeriod";
    readonly outputs: readonly [{
        readonly name: "timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "guardian";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_guardian";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_pinakion";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_jurorProsecutionModule";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_disputeKit";
        readonly internalType: "contract IDisputeKit";
        readonly type: "address";
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_courtParameters";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }, {
        readonly name: "_sortitionExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_sortitionModuleAddress";
        readonly internalType: "contract ISortitionModule";
        readonly type: "address";
    }, {
        readonly name: "_jurorNft";
        readonly internalType: "contract IERC721";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize4";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isDisputeKitJumping";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_disputeKitID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isSupported";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "jurorNft";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC721";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "jurorProsecutionModule";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "passPeriod";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "pause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "paused";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "pinakion";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_newStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_newStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alreadyTransferred";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setStakeBySortitionModule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "sortitionModule";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract ISortitionModule";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "unpause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xEb6D9E61921506f876dc662B2398E34C92330faB)
 */
export declare const klerosCoreNeoImplementationAddress: {
    readonly 42161: "0xEb6D9E61921506f876dc662B2398E34C92330faB";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xEb6D9E61921506f876dc662B2398E34C92330faB)
 */
export declare const klerosCoreNeoImplementationConfig: {
    readonly address: {
        readonly 42161: "0xEb6D9E61921506f876dc662B2398E34C92330faB";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AppealFeesNotEnough";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AppealPeriodNotPassed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "ArbitrableNotWhitelisted";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "ArbitrationFeesNotEnough";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "CannotDisableClassicDK";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "CommitPeriodNotPassed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputeKitNotSupportedByCourt";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputeKitOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputeNotAppealable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputePeriodIsFinal";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputeStillDrawing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "EvidenceNotPassedAndNotAppeal";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "GovernorOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "GuardianOrGovernorOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "InvalidDisputKitParent";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "InvalidForkingCourtAsParent";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "MinStakeLowerThanParentCourt";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "MustSupportDisputeKitClassic";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotEligibleForStaking";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotEvidencePeriod";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotExecutionPeriod";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "RulingAlreadyExecuted";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "SortitionModuleOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingInTooManyCourts";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingLessThanCourtMinStake";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingMoreThanMaxStakePerJuror";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingMoreThanMaxTotalStaked";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingNotPossibleInThisCourt";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingTransferFailed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "StakingZeroWhenNoStake";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "TokenNotAccepted";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UnstakingTransferFailed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UnsuccessfulCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UnsupportedDisputeKit";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "VotePeriodNotPassed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "WhenNotPausedOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "WhenPausedOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "WrongDisputeKitIndex";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_accepted";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: true;
        }];
        readonly name: "AcceptedFeeToken";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "AppealDecision";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "AppealPossible";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
            readonly indexed: false;
        }, {
            readonly name: "_supportedDisputeKits";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
            readonly indexed: false;
        }];
        readonly name: "CourtCreated";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_fromCourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_toCourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: false;
        }];
        readonly name: "CourtJump";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
            readonly indexed: false;
        }];
        readonly name: "CourtModified";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "DisputeCreation";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_disputeKitAddress";
            readonly internalType: "contract IDisputeKit";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "DisputeKitCreated";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_disputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_enable";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: true;
        }];
        readonly name: "DisputeKitEnabled";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_fromDisputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_toDisputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "DisputeKitJump";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_voteID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Draw";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_pnkAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "LeftoverRewardSent";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }, {
            readonly name: "_rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewCurrencyRate";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_period";
            readonly internalType: "enum KlerosCoreBase.Period";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewPeriod";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "Paused";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Ruling";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_degreeOfCoherency";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_pnkAmount";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "TokenAndETHShift";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "Unpaused";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeKitAddress";
            readonly internalType: "contract IDisputeKit";
            readonly type: "address";
        }];
        readonly name: "addNewDisputeKit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "appeal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "appealCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "appealPeriod";
        readonly outputs: readonly [{
            readonly name: "start";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "end";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "arbitrableWhitelist";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_accepted";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "changeAcceptedFeeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_allowed";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "changeArbitrableWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly name: "changeCourtParameters";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "_rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly name: "changeCurrencyRates";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address payable";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_guardian";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGuardian";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_jurorNft";
            readonly internalType: "contract IERC721";
            readonly type: "address";
        }];
        readonly name: "changeJurorNft";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_jurorProsecutionModule";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeJurorProsecutionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_pinakion";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "changePinakion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_sortitionModule";
            readonly internalType: "contract ISortitionModule";
            readonly type: "address";
        }];
        readonly name: "changeSortitionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_toToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_amountInEth";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "convertEthToTokenAmount";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "courts";
        readonly outputs: readonly [{
            readonly name: "parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "disabled";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }, {
            readonly name: "_sortitionExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_supportedDisputeKits";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
        readonly name: "createCourt";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "currencyRates";
        readonly outputs: readonly [{
            readonly name: "feePaymentAccepted";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly name: "ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputeKits";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IDisputeKit";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly name: "courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "arbitrated";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }, {
            readonly name: "period";
            readonly internalType: "enum KlerosCoreBase.Period";
            readonly type: "uint8";
        }, {
            readonly name: "ruled";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "lastPeriodChange";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_iterations";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "draw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_disputeKitIDs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "_enable";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "enableDisputeKits";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_round";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_iterations";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_destination";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "executeGovernorProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "executeRuling";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "getDisputeKitsLength";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfRounds";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfVotes";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_round";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getPnkAtStakePerJuror";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_round";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getRoundInfo";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "struct KlerosCoreBase.Round";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "disputeKitID";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "pnkAtStakePerJuror";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "totalFeesForJurors";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "nbVotes";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "repartitions";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "pnkPenalties";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "drawnJurors";
                readonly internalType: "address[]";
                readonly type: "address[]";
            }, {
                readonly name: "sumFeeRewardPaid";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "sumPnkRewardPaid";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "feeToken";
                readonly internalType: "contract IERC20";
                readonly type: "address";
            }, {
                readonly name: "drawIterations";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "getTimesPerPeriod";
        readonly outputs: readonly [{
            readonly name: "timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "guardian";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_guardian";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_pinakion";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_jurorProsecutionModule";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_disputeKit";
            readonly internalType: "contract IDisputeKit";
            readonly type: "address";
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_courtParameters";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }, {
            readonly name: "_sortitionExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_sortitionModuleAddress";
            readonly internalType: "contract ISortitionModule";
            readonly type: "address";
        }, {
            readonly name: "_jurorNft";
            readonly internalType: "contract IERC721";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "initialize4";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "isDisputeKitJumping";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_disputeKitID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "isSupported";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "jurorNft";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC721";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "jurorProsecutionModule";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "passPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "pinakion";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_newStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "setStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_newStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alreadyTransferred";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "setStakeBySortitionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "sortitionModule";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract ISortitionModule";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "unpause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x991d2df165670b9cac3B022f4B68D65b664222ea)
 */
export declare const klerosCoreNeoProxyAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x991d2df165670b9cac3B022f4B68D65b664222ea)
 */
export declare const klerosCoreNeoProxyAddress: {
    readonly 42161: "0x991d2df165670b9cac3B022f4B68D65b664222ea";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x991d2df165670b9cac3B022f4B68D65b664222ea)
 */
export declare const klerosCoreNeoProxyConfig: {
    readonly address: {
        readonly 42161: "0x991d2df165670b9cac3B022f4B68D65b664222ea";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc0169e0B19aE02ac4fADD689260CF038726DFE13)
 */
export declare const klerosCoreRulerNeoAbi: readonly [{
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AppealFeesNotEnough";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ArbitrationFeesNotEnough";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputeNotAppealable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "GovernorOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "GovernorOrInstructorOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidForkingCourtAsParent";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NoRulerSet";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "RulerOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "RulingAlreadyExecuted";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "RulingModeNotSet";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "TokenNotAccepted";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "TransferFailed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UnsuccessfulCall";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_accepted";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: true;
    }];
    readonly name: "AcceptedFeeToken";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "AppealDecision";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "AppealPossible";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "mode";
        readonly internalType: "enum KlerosCoreRuler.RulingMode";
        readonly type: "uint8";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "AutoRuled";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
        readonly indexed: false;
    }];
    readonly name: "CourtCreated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_fromCourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_toCourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: false;
    }];
    readonly name: "CourtJump";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
        readonly indexed: false;
    }];
    readonly name: "CourtModified";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DisputeCreation";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_pnkAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "LeftoverRewardSent";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }, {
        readonly name: "_rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewCurrencyRate";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_period";
        readonly internalType: "enum KlerosCoreRuler.Period";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewPeriod";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_oldRuler";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_newRuler";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "RulerChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_settings";
        readonly internalType: "struct KlerosCoreRuler.RulerSettings";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "rulingMode";
            readonly internalType: "enum KlerosCoreRuler.RulingMode";
            readonly type: "uint8";
        }, {
            readonly name: "presetRuling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "presetTied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "presetOverridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly indexed: false;
    }];
    readonly name: "RulerSettingsChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Ruling";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_degreeOfCoherency";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_pnkAmount";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "TokenAndETHShift";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_jump";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "appeal";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_jump";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "appealCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "arbitrationCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "arbitrationCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_accepted";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "changeAcceptedFeeTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly name: "changeCourtParameters";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "_rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "changeCurrencyRates";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address payable";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_pinakion";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "changePinakion";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }, {
        readonly name: "_newRuler";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeRuler";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }, {
        readonly name: "_presetRuling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_presetTied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_presetOverridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "changeRulingModeToAutomaticPreset";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }];
    readonly name: "changeRulingModeToAutomaticRandom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }];
    readonly name: "changeRulingModeToManual";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_toToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_amountInEth";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "convertEthToTokenAmount";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "courts";
    readonly outputs: readonly [{
        readonly name: "parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "disabled";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly name: "createCourt";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "currencyRates";
    readonly outputs: readonly [{
        readonly name: "feePaymentAccepted";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "currentRuling";
    readonly outputs: readonly [{
        readonly name: "ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputes";
    readonly outputs: readonly [{
        readonly name: "courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "arbitrated";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }, {
        readonly name: "period";
        readonly internalType: "enum KlerosCoreRuler.Period";
        readonly type: "uint8";
    }, {
        readonly name: "ruled";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_round";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "execute";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_destination";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "executeGovernorProposal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "executeRuling";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getNextDisputeID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getNumberOfRounds";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getNumberOfVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_round";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getRoundInfo";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct KlerosCoreRuler.Round";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "totalFeesForJurors";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "sumFeeRewardPaid";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "getTimesPerPeriod";
    readonly outputs: readonly [{
        readonly name: "timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_pinakion";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_courtParameters";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "pinakion";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }];
    readonly name: "rulers";
    readonly outputs: readonly [{
        readonly name: "ruler";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "rulingResults";
    readonly outputs: readonly [{
        readonly name: "ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }];
    readonly name: "settings";
    readonly outputs: readonly [{
        readonly name: "rulingMode";
        readonly internalType: "enum KlerosCoreRuler.RulingMode";
        readonly type: "uint8";
    }, {
        readonly name: "presetRuling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "presetTied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "presetOverridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc0169e0B19aE02ac4fADD689260CF038726DFE13)
 */
export declare const klerosCoreRulerNeoAddress: {
    readonly 42161: "0xc0169e0B19aE02ac4fADD689260CF038726DFE13";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc0169e0B19aE02ac4fADD689260CF038726DFE13)
 */
export declare const klerosCoreRulerNeoConfig: {
    readonly address: {
        readonly 42161: "0xc0169e0B19aE02ac4fADD689260CF038726DFE13";
    };
    readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AppealFeesNotEnough";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "ArbitrationFeesNotEnough";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputeNotAppealable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "GovernorOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "GovernorOrInstructorOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "InvalidForkingCourtAsParent";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NoRulerSet";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "RulerOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "RulingAlreadyExecuted";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "RulingModeNotSet";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "TokenNotAccepted";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UnsuccessfulCall";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_accepted";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: true;
        }];
        readonly name: "AcceptedFeeToken";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "AppealDecision";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "AppealPossible";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "mode";
            readonly internalType: "enum KlerosCoreRuler.RulingMode";
            readonly type: "uint8";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "AutoRuled";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
            readonly indexed: false;
        }];
        readonly name: "CourtCreated";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_fromCourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_toCourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: false;
        }];
        readonly name: "CourtJump";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
            readonly indexed: false;
        }];
        readonly name: "CourtModified";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "DisputeCreation";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_pnkAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "LeftoverRewardSent";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }, {
            readonly name: "_rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewCurrencyRate";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_period";
            readonly internalType: "enum KlerosCoreRuler.Period";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewPeriod";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_oldRuler";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_newRuler";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "RulerChanged";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_settings";
            readonly internalType: "struct KlerosCoreRuler.RulerSettings";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "rulingMode";
                readonly internalType: "enum KlerosCoreRuler.RulingMode";
                readonly type: "uint8";
            }, {
                readonly name: "presetRuling";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "presetTied";
                readonly internalType: "bool";
                readonly type: "bool";
            }, {
                readonly name: "presetOverridden";
                readonly internalType: "bool";
                readonly type: "bool";
            }];
            readonly indexed: false;
        }];
        readonly name: "RulerSettingsChanged";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Ruling";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_degreeOfCoherency";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_pnkAmount";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "TokenAndETHShift";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_jump";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "appeal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_jump";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "appealCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_accepted";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "changeAcceptedFeeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly name: "changeCourtParameters";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "_rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly name: "changeCurrencyRates";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address payable";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_pinakion";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "changePinakion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }, {
            readonly name: "_newRuler";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeRuler";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }, {
            readonly name: "_presetRuling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_presetTied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_presetOverridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "changeRulingModeToAutomaticPreset";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }];
        readonly name: "changeRulingModeToAutomaticRandom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }];
        readonly name: "changeRulingModeToManual";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_toToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_amountInEth";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "convertEthToTokenAmount";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "courts";
        readonly outputs: readonly [{
            readonly name: "parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "disabled";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly name: "createCourt";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "currencyRates";
        readonly outputs: readonly [{
            readonly name: "feePaymentAccepted";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly name: "ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly name: "courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "arbitrated";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }, {
            readonly name: "period";
            readonly internalType: "enum KlerosCoreRuler.Period";
            readonly type: "uint8";
        }, {
            readonly name: "ruled";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_round";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_destination";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "executeGovernorProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "executeRuling";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "getNextDisputeID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfRounds";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfVotes";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_round";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getRoundInfo";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "struct KlerosCoreRuler.Round";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "totalFeesForJurors";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "sumFeeRewardPaid";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "feeToken";
                readonly internalType: "contract IERC20";
                readonly type: "address";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "getTimesPerPeriod";
        readonly outputs: readonly [{
            readonly name: "timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_pinakion";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_courtParameters";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "pinakion";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }];
        readonly name: "rulers";
        readonly outputs: readonly [{
            readonly name: "ruler";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "rulingResults";
        readonly outputs: readonly [{
            readonly name: "ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }];
        readonly name: "settings";
        readonly outputs: readonly [{
            readonly name: "rulingMode";
            readonly internalType: "enum KlerosCoreRuler.RulingMode";
            readonly type: "uint8";
        }, {
            readonly name: "presetRuling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "presetTied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "presetOverridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85093b5EDa4F2e2E2fEDae34Da91239D6a08e324)
 */
export declare const klerosCoreRulerNeoImplementationAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AppealFeesNotEnough";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ArbitrationFeesNotEnough";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "DisputeNotAppealable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "GovernorOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "GovernorOrInstructorOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidForkingCourtAsParent";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NoRulerSet";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "RulerOnly";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "RulingAlreadyExecuted";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "RulingModeNotSet";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "TokenNotAccepted";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "TransferFailed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UnsuccessfulCall";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_accepted";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: true;
    }];
    readonly name: "AcceptedFeeToken";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "AppealDecision";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "AppealPossible";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "mode";
        readonly internalType: "enum KlerosCoreRuler.RulingMode";
        readonly type: "uint8";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "AutoRuled";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
        readonly indexed: false;
    }];
    readonly name: "CourtCreated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_fromCourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_toCourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: false;
    }];
    readonly name: "CourtJump";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
        readonly indexed: false;
    }];
    readonly name: "CourtModified";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DisputeCreation";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_pnkAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "LeftoverRewardSent";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }, {
        readonly name: "_rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewCurrencyRate";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_period";
        readonly internalType: "enum KlerosCoreRuler.Period";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewPeriod";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_oldRuler";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_newRuler";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "RulerChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_settings";
        readonly internalType: "struct KlerosCoreRuler.RulerSettings";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "rulingMode";
            readonly internalType: "enum KlerosCoreRuler.RulingMode";
            readonly type: "uint8";
        }, {
            readonly name: "presetRuling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "presetTied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "presetOverridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly indexed: false;
    }];
    readonly name: "RulerSettingsChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Ruling";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_roundID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_degreeOfCoherency";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_pnkAmount";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "TokenAndETHShift";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_jump";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "appeal";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_jump";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "appealCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "arbitrationCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "arbitrationCost";
    readonly outputs: readonly [{
        readonly name: "cost";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_accepted";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "changeAcceptedFeeTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly name: "changeCourtParameters";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "_rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "changeCurrencyRates";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address payable";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_pinakion";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "changePinakion";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }, {
        readonly name: "_newRuler";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeRuler";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }, {
        readonly name: "_presetRuling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_presetTied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_presetOverridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "changeRulingModeToAutomaticPreset";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }];
    readonly name: "changeRulingModeToAutomaticRandom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }];
    readonly name: "changeRulingModeToManual";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_toToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_amountInEth";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "convertEthToTokenAmount";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "courts";
    readonly outputs: readonly [{
        readonly name: "parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "disabled";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_parent";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_hiddenVotes";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly name: "createCourt";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_feeToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_feeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "currencyRates";
    readonly outputs: readonly [{
        readonly name: "feePaymentAccepted";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "rateInEth";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "rateDecimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "currentRuling";
    readonly outputs: readonly [{
        readonly name: "ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputes";
    readonly outputs: readonly [{
        readonly name: "courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "arbitrated";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }, {
        readonly name: "period";
        readonly internalType: "enum KlerosCoreRuler.Period";
        readonly type: "uint8";
    }, {
        readonly name: "ruled";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_round";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "execute";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_destination";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "executeGovernorProposal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "executeRuling";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getNextDisputeID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getNumberOfRounds";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getNumberOfVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_round";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getRoundInfo";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct KlerosCoreRuler.Round";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "totalFeesForJurors";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "sumFeeRewardPaid";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "getTimesPerPeriod";
    readonly outputs: readonly [{
        readonly name: "timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_pinakion";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_courtParameters";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "pinakion";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }];
    readonly name: "rulers";
    readonly outputs: readonly [{
        readonly name: "ruler";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "rulingResults";
    readonly outputs: readonly [{
        readonly name: "ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "overridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "arbitrable";
        readonly internalType: "contract IArbitrableV2";
        readonly type: "address";
    }];
    readonly name: "settings";
    readonly outputs: readonly [{
        readonly name: "rulingMode";
        readonly internalType: "enum KlerosCoreRuler.RulingMode";
        readonly type: "uint8";
    }, {
        readonly name: "presetRuling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "presetTied";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "presetOverridden";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85093b5EDa4F2e2E2fEDae34Da91239D6a08e324)
 */
export declare const klerosCoreRulerNeoImplementationAddress: {
    readonly 42161: "0x85093b5EDa4F2e2E2fEDae34Da91239D6a08e324";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85093b5EDa4F2e2E2fEDae34Da91239D6a08e324)
 */
export declare const klerosCoreRulerNeoImplementationConfig: {
    readonly address: {
        readonly 42161: "0x85093b5EDa4F2e2E2fEDae34Da91239D6a08e324";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AppealFeesNotEnough";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "ArbitrationFeesNotEnough";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "DisputeNotAppealable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "GovernorOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "GovernorOrInstructorOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "InvalidForkingCourtAsParent";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NoRulerSet";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "RulerOnly";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "RulingAlreadyExecuted";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "RulingModeNotSet";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "TokenNotAccepted";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UnsuccessfulCall";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_accepted";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: true;
        }];
        readonly name: "AcceptedFeeToken";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "AppealDecision";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "AppealPossible";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "mode";
            readonly internalType: "enum KlerosCoreRuler.RulingMode";
            readonly type: "uint8";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "AutoRuled";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
            readonly indexed: false;
        }];
        readonly name: "CourtCreated";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_fromCourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_toCourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: false;
        }];
        readonly name: "CourtJump";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
            readonly indexed: false;
        }];
        readonly name: "CourtModified";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "DisputeCreation";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_pnkAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "LeftoverRewardSent";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }, {
            readonly name: "_rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewCurrencyRate";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_period";
            readonly internalType: "enum KlerosCoreRuler.Period";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewPeriod";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_oldRuler";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_newRuler";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "RulerChanged";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_settings";
            readonly internalType: "struct KlerosCoreRuler.RulerSettings";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "rulingMode";
                readonly internalType: "enum KlerosCoreRuler.RulingMode";
                readonly type: "uint8";
            }, {
                readonly name: "presetRuling";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "presetTied";
                readonly internalType: "bool";
                readonly type: "bool";
            }, {
                readonly name: "presetOverridden";
                readonly internalType: "bool";
                readonly type: "bool";
            }];
            readonly indexed: false;
        }];
        readonly name: "RulerSettingsChanged";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Ruling";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_roundID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_degreeOfCoherency";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_pnkAmount";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "TokenAndETHShift";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_jump";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "appeal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_jump";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "appealCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly name: "cost";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_accepted";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "changeAcceptedFeeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly name: "changeCourtParameters";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "_rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly name: "changeCurrencyRates";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address payable";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_pinakion";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "changePinakion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }, {
            readonly name: "_newRuler";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeRuler";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }, {
            readonly name: "_presetRuling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_presetTied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_presetOverridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "changeRulingModeToAutomaticPreset";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }];
        readonly name: "changeRulingModeToAutomaticRandom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }];
        readonly name: "changeRulingModeToManual";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_toToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_amountInEth";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "convertEthToTokenAmount";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "courts";
        readonly outputs: readonly [{
            readonly name: "parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "disabled";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_parent";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_hiddenVotes";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly name: "createCourt";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_feeToken";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_feeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "currencyRates";
        readonly outputs: readonly [{
            readonly name: "feePaymentAccepted";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "rateInEth";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "rateDecimals";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly name: "ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly name: "courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "arbitrated";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }, {
            readonly name: "period";
            readonly internalType: "enum KlerosCoreRuler.Period";
            readonly type: "uint8";
        }, {
            readonly name: "ruled";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_round";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_destination";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "executeGovernorProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "executeRuling";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "getNextDisputeID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfRounds";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfVotes";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_round";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getRoundInfo";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "struct KlerosCoreRuler.Round";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "totalFeesForJurors";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "sumFeeRewardPaid";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "feeToken";
                readonly internalType: "contract IERC20";
                readonly type: "address";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "getTimesPerPeriod";
        readonly outputs: readonly [{
            readonly name: "timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_pinakion";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "_courtParameters";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "pinakion";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }];
        readonly name: "rulers";
        readonly outputs: readonly [{
            readonly name: "ruler";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "rulingResults";
        readonly outputs: readonly [{
            readonly name: "ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "overridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "arbitrable";
            readonly internalType: "contract IArbitrableV2";
            readonly type: "address";
        }];
        readonly name: "settings";
        readonly outputs: readonly [{
            readonly name: "rulingMode";
            readonly internalType: "enum KlerosCoreRuler.RulingMode";
            readonly type: "uint8";
        }, {
            readonly name: "presetRuling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "presetTied";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "presetOverridden";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc0169e0B19aE02ac4fADD689260CF038726DFE13)
 */
export declare const klerosCoreRulerNeoProxyAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc0169e0B19aE02ac4fADD689260CF038726DFE13)
 */
export declare const klerosCoreRulerNeoProxyAddress: {
    readonly 42161: "0xc0169e0B19aE02ac4fADD689260CF038726DFE13";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc0169e0B19aE02ac4fADD689260CF038726DFE13)
 */
export declare const klerosCoreRulerNeoProxyConfig: {
    readonly address: {
        readonly 42161: "0xc0169e0B19aE02ac4fADD689260CF038726DFE13";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xEF719a5B3352F607e6C4E17b7e0cDAd8322fEC95)
 */
export declare const klerosCoreSnapshotProxyAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_core";
        readonly internalType: "contract IKlerosCore";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "totalStaked";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_core";
        readonly internalType: "contract IKlerosCore";
        readonly type: "address";
    }];
    readonly name: "changeCore";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "core";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IKlerosCore";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xEF719a5B3352F607e6C4E17b7e0cDAd8322fEC95)
 */
export declare const klerosCoreSnapshotProxyAddress: {
    readonly 42161: "0xEF719a5B3352F607e6C4E17b7e0cDAd8322fEC95";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xEF719a5B3352F607e6C4E17b7e0cDAd8322fEC95)
 */
export declare const klerosCoreSnapshotProxyConfig: {
    readonly address: {
        readonly 42161: "0xEF719a5B3352F607e6C4E17b7e0cDAd8322fEC95";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_core";
            readonly internalType: "contract IKlerosCore";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "totalStaked";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_core";
            readonly internalType: "contract IKlerosCore";
            readonly type: "address";
        }];
        readonly name: "changeCore";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "core";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IKlerosCore";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xfE34a72c55e512601E7d491A9c5b36373cE34d63)
 */
export declare const klerosV2NeoEarlyUserAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newMinter";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "EventMinterAdded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "oldMinter";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "EventMinterRemoved";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "minter";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "addMinter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "baseURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "burn";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "ids";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "burnBatch";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "cid";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getNumMinted";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isOwnerOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "cid";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "cidArr";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "mintBatch";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "minters";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "minter";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "removeMinter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newName";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "setName";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newSymbol";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "setSymbol";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "transferable";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setTransferable";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newURI";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "setURI";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "transferable";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xfE34a72c55e512601E7d491A9c5b36373cE34d63)
 */
export declare const klerosV2NeoEarlyUserAddress: {
    readonly 42161: "0xfE34a72c55e512601E7d491A9c5b36373cE34d63";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xfE34a72c55e512601E7d491A9c5b36373cE34d63)
 */
export declare const klerosV2NeoEarlyUserConfig: {
    readonly address: {
        readonly 42161: "0xfE34a72c55e512601E7d491A9c5b36373cE34d63";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "approved";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "operator";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "approved";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "ApprovalForAll";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newMinter";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "EventMinterAdded";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "oldMinter";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "EventMinterRemoved";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "newOwner";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "OwnershipTransferred";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Transfer";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "minter";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "addMinter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "baseURI";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "id";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "ids";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
        readonly name: "burnBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "cid";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "getNumMinted";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "operator";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "id";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "isOwnerOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "cid";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "cidArr";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
        readonly name: "mintBatch";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "minters";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "minter";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "removeMinter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "approved";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newName";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "setName";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newSymbol";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "setSymbol";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "transferable";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "setTransferable";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newURI";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "setURI";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly internalType: "bytes4";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "index";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "tokenOfOwnerByIndex";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "transferable";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x330bD769382cFc6d50175903434CCC8D206DCAE5)
 */
export declare const pnkAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x330bD769382cFc6d50175903434CCC8D206DCAE5)
 */
export declare const pnkAddress: {
    readonly 42161: "0x330bD769382cFc6d50175903434CCC8D206DCAE5";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x330bD769382cFc6d50175903434CCC8D206DCAE5)
 */
export declare const pnkConfig: {
    readonly address: {
        readonly 42161: "0x330bD769382cFc6d50175903434CCC8D206DCAE5";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "subtractedValue";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "addedValue";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0000000000000000000000000000000000000000)
 */
export declare const pnkFaucetAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "amount";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "balance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeAmount";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "request";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "token";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "withdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "withdrewAlready";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0000000000000000000000000000000000000000)
 */
export declare const pnkFaucetAddress: {
    readonly 42161: "0x0000000000000000000000000000000000000000";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0000000000000000000000000000000000000000)
 */
export declare const pnkFaucetConfig: {
    readonly address: {
        readonly 42161: "0x0000000000000000000000000000000000000000";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "amount";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "balance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeAmount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "request";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "withdrewAlready";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x330bD769382cFc6d50175903434CCC8D206DCAE5)
 */
export declare const pinakionAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x330bD769382cFc6d50175903434CCC8D206DCAE5)
 */
export declare const pinakionAddress: {
    readonly 42161: "0x330bD769382cFc6d50175903434CCC8D206DCAE5";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x330bD769382cFc6d50175903434CCC8D206DCAE5)
 */
export declare const pinakionConfig: {
    readonly address: {
        readonly 42161: "0x330bD769382cFc6d50175903434CCC8D206DCAE5";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "subtractedValue";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "addedValue";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9d494768936b6bDaabc46733b8D53A937A6c6D7e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c)
 */
export declare const policyRegistryAbi: readonly [{
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_courtName";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }, {
        readonly name: "_policy";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "PolicyUpdate";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize2";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "policies";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_courtName";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_policy";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "setPolicy";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9d494768936b6bDaabc46733b8D53A937A6c6D7e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c)
 */
export declare const policyRegistryAddress: {
    readonly 100: "0x9d494768936b6bDaabc46733b8D53A937A6c6D7e";
    readonly 42161: "0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c";
};
/**
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9d494768936b6bDaabc46733b8D53A937A6c6D7e)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c)
 */
export declare const policyRegistryConfig: {
    readonly address: {
        readonly 100: "0x9d494768936b6bDaabc46733b8D53A937A6c6D7e";
        readonly 42161: "0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c";
    };
    readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_courtName";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }, {
            readonly name: "_policy";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }];
        readonly name: "PolicyUpdate";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "initialize2";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "policies";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_courtName";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_policy";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "setPolicy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf7EE0Cd4E33C832DC05fB359896Add6E14E96C28)
 */
export declare const policyRegistryImplementationAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_courtName";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }, {
        readonly name: "_policy";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: false;
    }];
    readonly name: "PolicyUpdate";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize2";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "policies";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_courtName";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_policy";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "setPolicy";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf7EE0Cd4E33C832DC05fB359896Add6E14E96C28)
 */
export declare const policyRegistryImplementationAddress: {
    readonly 42161: "0xf7EE0Cd4E33C832DC05fB359896Add6E14E96C28";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf7EE0Cd4E33C832DC05fB359896Add6E14E96C28)
 */
export declare const policyRegistryImplementationConfig: {
    readonly address: {
        readonly 42161: "0xf7EE0Cd4E33C832DC05fB359896Add6E14E96C28";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_courtName";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }, {
            readonly name: "_policy";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: false;
        }];
        readonly name: "PolicyUpdate";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "initialize2";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "policies";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_courtName";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_policy";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "setPolicy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c)
 */
export declare const policyRegistryProxyAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c)
 */
export declare const policyRegistryProxyAddress: {
    readonly 42161: "0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c)
 */
export declare const policyRegistryProxyConfig: {
    readonly address: {
        readonly 42161: "0x553dcbF6aB3aE06a1064b5200Df1B5A9fB403d3c";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x5b8bB80f2d72D0C85caB8fB169e8170A05C94bAF)
 */
export declare const randomizerOracleAbi: readonly [];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x5b8bB80f2d72D0C85caB8fB169e8170A05C94bAF)
 */
export declare const randomizerOracleAddress: {
    readonly 42161: "0x5b8bB80f2d72D0C85caB8fB169e8170A05C94bAF";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x5b8bB80f2d72D0C85caB8fB169e8170A05C94bAF)
 */
export declare const randomizerOracleConfig: {
    readonly address: {
        readonly 42161: "0x5b8bB80f2d72D0C85caB8fB169e8170A05C94bAF";
    };
    readonly abi: readonly [];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3)
 */
export declare const randomizerRngAbi: readonly [{
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "callbackGasLimit";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_randomizer";
        readonly internalType: "contract IRandomizer";
        readonly type: "address";
    }, {
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "randomNumbers";
    readonly outputs: readonly [{
        readonly name: "number";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "randomizer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IRandomizer";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_id";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_value";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "randomizerCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "randomizerWithdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "receiveRandomness";
    readonly outputs: readonly [{
        readonly name: "randomNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "requestRandomness";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "requester";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "requesterToID";
    readonly outputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_callbackGasLimit";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setCallbackGasLimit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_randomizer";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setRandomizer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3)
 */
export declare const randomizerRngAddress: {
    readonly 42161: "0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3)
 */
export declare const randomizerRngConfig: {
    readonly address: {
        readonly 42161: "0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3";
    };
    readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "callbackGasLimit";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_randomizer";
            readonly internalType: "contract IRandomizer";
            readonly type: "address";
        }, {
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "randomNumbers";
        readonly outputs: readonly [{
            readonly name: "number";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "randomizer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IRandomizer";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_value";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "randomizerCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "randomizerWithdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "receiveRandomness";
        readonly outputs: readonly [{
            readonly name: "randomNumber";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "requestRandomness";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "requester";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "requesterToID";
        readonly outputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_callbackGasLimit";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "setCallbackGasLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_randomizer";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "setRandomizer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xF1a7Cd3115F5852966430f8E3877D2221F074A2e)
 */
export declare const randomizerRngImplementationAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "callbackGasLimit";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_randomizer";
        readonly internalType: "contract IRandomizer";
        readonly type: "address";
    }, {
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "randomNumbers";
    readonly outputs: readonly [{
        readonly name: "number";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "randomizer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IRandomizer";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_id";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_value";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "randomizerCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "randomizerWithdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "receiveRandomness";
    readonly outputs: readonly [{
        readonly name: "randomNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "requestRandomness";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "requester";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "requesterToID";
    readonly outputs: readonly [{
        readonly name: "requestId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_callbackGasLimit";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setCallbackGasLimit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_randomizer";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setRandomizer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xF1a7Cd3115F5852966430f8E3877D2221F074A2e)
 */
export declare const randomizerRngImplementationAddress: {
    readonly 42161: "0xF1a7Cd3115F5852966430f8E3877D2221F074A2e";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xF1a7Cd3115F5852966430f8E3877D2221F074A2e)
 */
export declare const randomizerRngImplementationConfig: {
    readonly address: {
        readonly 42161: "0xF1a7Cd3115F5852966430f8E3877D2221F074A2e";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "callbackGasLimit";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_randomizer";
            readonly internalType: "contract IRandomizer";
            readonly type: "address";
        }, {
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "randomNumbers";
        readonly outputs: readonly [{
            readonly name: "number";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "randomizer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IRandomizer";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_value";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "randomizerCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "randomizerWithdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "receiveRandomness";
        readonly outputs: readonly [{
            readonly name: "randomNumber";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "requestRandomness";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "requester";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "requesterToID";
        readonly outputs: readonly [{
            readonly name: "requestId";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_callbackGasLimit";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "setCallbackGasLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_randomizer";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "setRandomizer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3)
 */
export declare const randomizerRngProxyAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3)
 */
export declare const randomizerRngProxyAddress: {
    readonly 42161: "0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3)
 */
export declare const randomizerRngProxyConfig: {
    readonly address: {
        readonly 42161: "0x044AfE0069C0fd641BC5f90d9A4218eF0b2Fa9d3";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x21A9402aDb818744B296e1d1BE58C804118DC03D)
 */
export declare const sortitionModuleNeoAbi: readonly [{
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_phase";
        readonly internalType: "enum ISortitionModule.Phase";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewPhase";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "StakeDelayedAlreadyTransferredDeposited";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "StakeDelayedAlreadyTransferredWithdrawn";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "StakeDelayedNotTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_relativeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_unlock";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "StakeLocked";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_amountAllCourts";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "StakeSet";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_maxDrawingTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeMaxDrawingTime";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_maxStakePerJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeMaxStakePerJuror";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_maxTotalStaked";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeMaxTotalStaked";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_minStakingTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeMinStakingTime";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_rng";
        readonly internalType: "contract RNG";
        readonly type: "address";
    }, {
        readonly name: "_rngLookahead";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeRandomNumberGenerator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "core";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract KlerosCore";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDisputeHook";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_key";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "createTree";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "delayedStakeReadIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "delayedStakeWriteIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "delayedStakes";
    readonly outputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "stake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "alreadyTransferred";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "disputesWithoutJurors";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_key";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "draw";
    readonly outputs: readonly [{
        readonly name: "drawnAddress";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_iterations";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "executeDelayedStakes";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "getJurorBalance";
    readonly outputs: readonly [{
        readonly name: "totalStaked";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "totalLocked";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "stakedInCourt";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "nbCourts";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getJurorCourtIDs";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint96[]";
        readonly type: "uint96[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_core";
        readonly internalType: "contract KlerosCore";
        readonly type: "address";
    }, {
        readonly name: "_minStakingTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_maxDrawingTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_rng";
        readonly internalType: "contract RNG";
        readonly type: "address";
    }, {
        readonly name: "_rngLookahead";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_maxStakePerJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_maxTotalStaked";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize3";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isJurorStaked";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "jurors";
    readonly outputs: readonly [{
        readonly name: "stakedPnk";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lockedPnk";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lastPhaseChange";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "jurorAccount";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "courtId";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "latestDelayedStakeIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_relativeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "lockStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "maxDrawingTime";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "maxStakePerJuror";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "maxTotalStaked";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "minStakingTime";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_randomNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "notifyRandomNumber";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "passPhase";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_relativeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "penalizeStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "phase";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "enum ISortitionModule.Phase";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "postDrawHook";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "randomNumber";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "randomNumberRequestBlock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "rng";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract RNG";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "rngLookahead";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setJurorInactive";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_newStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alreadyTransferred";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setStake";
    readonly outputs: readonly [{
        readonly name: "pnkDeposit";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pnkWithdrawal";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "stakingResult";
        readonly internalType: "enum StakingResult";
        readonly type: "uint8";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_key";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "_ID";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "stakeOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "stakeOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalStaked";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_relativeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "unlockStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x21A9402aDb818744B296e1d1BE58C804118DC03D)
 */
export declare const sortitionModuleNeoAddress: {
    readonly 42161: "0x21A9402aDb818744B296e1d1BE58C804118DC03D";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x21A9402aDb818744B296e1d1BE58C804118DC03D)
 */
export declare const sortitionModuleNeoConfig: {
    readonly address: {
        readonly 42161: "0x21A9402aDb818744B296e1d1BE58C804118DC03D";
    };
    readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_phase";
            readonly internalType: "enum ISortitionModule.Phase";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewPhase";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "StakeDelayedAlreadyTransferredDeposited";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "StakeDelayedAlreadyTransferredWithdrawn";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "StakeDelayedNotTransferred";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_relativeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_unlock";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "StakeLocked";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_amountAllCourts";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "StakeSet";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_maxDrawingTime";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeMaxDrawingTime";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_maxStakePerJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeMaxStakePerJuror";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_maxTotalStaked";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeMaxTotalStaked";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_minStakingTime";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeMinStakingTime";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_rng";
            readonly internalType: "contract RNG";
            readonly type: "address";
        }, {
            readonly name: "_rngLookahead";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeRandomNumberGenerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "core";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract KlerosCore";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDisputeHook";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "createTree";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "delayedStakeReadIndex";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "delayedStakeWriteIndex";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "delayedStakes";
        readonly outputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "stake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "alreadyTransferred";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "disputesWithoutJurors";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_nonce";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "draw";
        readonly outputs: readonly [{
            readonly name: "drawnAddress";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_iterations";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "executeDelayedStakes";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "getJurorBalance";
        readonly outputs: readonly [{
            readonly name: "totalStaked";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "totalLocked";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "stakedInCourt";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "nbCourts";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "getJurorCourtIDs";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint96[]";
            readonly type: "uint96[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_core";
            readonly internalType: "contract KlerosCore";
            readonly type: "address";
        }, {
            readonly name: "_minStakingTime";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_maxDrawingTime";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_rng";
            readonly internalType: "contract RNG";
            readonly type: "address";
        }, {
            readonly name: "_rngLookahead";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_maxStakePerJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_maxTotalStaked";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "initialize3";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "isJurorStaked";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "jurors";
        readonly outputs: readonly [{
            readonly name: "stakedPnk";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "lockedPnk";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "lastPhaseChange";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "jurorAccount";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "courtId";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "latestDelayedStakeIndex";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_relativeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "lockStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "maxDrawingTime";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "maxStakePerJuror";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "maxTotalStaked";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "minStakingTime";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_randomNumber";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "notifyRandomNumber";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "passPhase";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_relativeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "penalizeStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "phase";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "enum ISortitionModule.Phase";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "postDrawHook";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "randomNumber";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "randomNumberRequestBlock";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "rng";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract RNG";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "rngLookahead";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "setJurorInactive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_newStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alreadyTransferred";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "setStake";
        readonly outputs: readonly [{
            readonly name: "pnkDeposit";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "pnkWithdrawal";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "stakingResult";
            readonly internalType: "enum StakingResult";
            readonly type: "uint8";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "_ID";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "stakeOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "stakeOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalStaked";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_relativeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "unlockStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0cB3626Edf41F27a192102630D0502cCd93Cf043)
 */
export declare const sortitionModuleNeoImplementationAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedDelegateCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "InvalidImplementation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint64";
        readonly type: "uint64";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_phase";
        readonly internalType: "enum ISortitionModule.Phase";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewPhase";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "StakeDelayedAlreadyTransferredDeposited";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "StakeDelayedAlreadyTransferredWithdrawn";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "StakeDelayedNotTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_relativeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_unlock";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "StakeLocked";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_amountAllCourts";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "StakeSet";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeGovernor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_maxDrawingTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeMaxDrawingTime";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_maxStakePerJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeMaxStakePerJuror";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_maxTotalStaked";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeMaxTotalStaked";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_minStakingTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeMinStakingTime";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_rng";
        readonly internalType: "contract RNG";
        readonly type: "address";
    }, {
        readonly name: "_rngLookahead";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeRandomNumberGenerator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "core";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract KlerosCore";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDisputeHook";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_key";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "createTree";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "delayedStakeReadIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "delayedStakeWriteIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "delayedStakes";
    readonly outputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "stake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "alreadyTransferred";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "disputesWithoutJurors";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_key";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "_coreDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "draw";
    readonly outputs: readonly [{
        readonly name: "drawnAddress";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_iterations";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "executeDelayedStakes";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "getJurorBalance";
    readonly outputs: readonly [{
        readonly name: "totalStaked";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "totalLocked";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "stakedInCourt";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "nbCourts";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getJurorCourtIDs";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint96[]";
        readonly type: "uint96[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "governor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_core";
        readonly internalType: "contract KlerosCore";
        readonly type: "address";
    }, {
        readonly name: "_minStakingTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_maxDrawingTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_rng";
        readonly internalType: "contract RNG";
        readonly type: "address";
    }, {
        readonly name: "_rngLookahead";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_maxStakePerJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_maxTotalStaked";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "initialize3";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isJurorStaked";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "jurors";
    readonly outputs: readonly [{
        readonly name: "stakedPnk";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lockedPnk";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lastPhaseChange";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "jurorAccount";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "courtId";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "latestDelayedStakeIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_relativeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "lockStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "maxDrawingTime";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "maxStakePerJuror";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "maxTotalStaked";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "minStakingTime";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_randomNumber";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "notifyRandomNumber";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "passPhase";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_relativeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "penalizeStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "phase";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "enum ISortitionModule.Phase";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "postDrawHook";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "randomNumber";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "randomNumberRequestBlock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "rng";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract RNG";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "rngLookahead";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setJurorInactive";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_newStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_alreadyTransferred";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setStake";
    readonly outputs: readonly [{
        readonly name: "pnkDeposit";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pnkWithdrawal";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "stakingResult";
        readonly internalType: "enum StakingResult";
        readonly type: "uint8";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_key";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "_ID";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "stakeOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_juror";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "stakeOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalStaked";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_relativeAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "unlockStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0cB3626Edf41F27a192102630D0502cCd93Cf043)
 */
export declare const sortitionModuleNeoImplementationAddress: {
    readonly 42161: "0x0cB3626Edf41F27a192102630D0502cCd93Cf043";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0cB3626Edf41F27a192102630D0502cCd93Cf043)
 */
export declare const sortitionModuleNeoImplementationConfig: {
    readonly address: {
        readonly 42161: "0x0cB3626Edf41F27a192102630D0502cCd93Cf043";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "slot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly internalType: "uint64";
            readonly type: "uint64";
            readonly indexed: false;
        }];
        readonly name: "Initialized";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_phase";
            readonly internalType: "enum ISortitionModule.Phase";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewPhase";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "StakeDelayedAlreadyTransferredDeposited";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "StakeDelayedAlreadyTransferredWithdrawn";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "StakeDelayedNotTransferred";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_relativeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_unlock";
            readonly internalType: "bool";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "StakeLocked";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_amountAllCourts";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "StakeSet";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_maxDrawingTime";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeMaxDrawingTime";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_maxStakePerJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeMaxStakePerJuror";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_maxTotalStaked";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeMaxTotalStaked";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_minStakingTime";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeMinStakingTime";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_rng";
            readonly internalType: "contract RNG";
            readonly type: "address";
        }, {
            readonly name: "_rngLookahead";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeRandomNumberGenerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "core";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract KlerosCore";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDisputeHook";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "createTree";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "delayedStakeReadIndex";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "delayedStakeWriteIndex";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "delayedStakes";
        readonly outputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "stake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "alreadyTransferred";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "disputesWithoutJurors";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "_coreDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_nonce";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "draw";
        readonly outputs: readonly [{
            readonly name: "drawnAddress";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_iterations";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "executeDelayedStakes";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "getJurorBalance";
        readonly outputs: readonly [{
            readonly name: "totalStaked";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "totalLocked";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "stakedInCourt";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "nbCourts";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "getJurorCourtIDs";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint96[]";
            readonly type: "uint96[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_core";
            readonly internalType: "contract KlerosCore";
            readonly type: "address";
        }, {
            readonly name: "_minStakingTime";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_maxDrawingTime";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_rng";
            readonly internalType: "contract RNG";
            readonly type: "address";
        }, {
            readonly name: "_rngLookahead";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_maxStakePerJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_maxTotalStaked";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "initialize3";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "isJurorStaked";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "jurors";
        readonly outputs: readonly [{
            readonly name: "stakedPnk";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "lockedPnk";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "lastPhaseChange";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "jurorAccount";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "courtId";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "latestDelayedStakeIndex";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_relativeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "lockStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "maxDrawingTime";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "maxStakePerJuror";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "maxTotalStaked";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "minStakingTime";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_randomNumber";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "notifyRandomNumber";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "passPhase";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_relativeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "penalizeStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "phase";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "enum ISortitionModule.Phase";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "postDrawHook";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "randomNumber";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "randomNumberRequestBlock";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "rng";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract RNG";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "rngLookahead";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "setJurorInactive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_newStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_alreadyTransferred";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly name: "setStake";
        readonly outputs: readonly [{
            readonly name: "pnkDeposit";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "pnkWithdrawal";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "stakingResult";
            readonly internalType: "enum StakingResult";
            readonly type: "uint8";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "_ID";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "stakeOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_juror";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "stakeOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalStaked";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_relativeAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "unlockStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x21A9402aDb818744B296e1d1BE58C804118DC03D)
 */
export declare const sortitionModuleNeoProxyAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_implementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x21A9402aDb818744B296e1d1BE58C804118DC03D)
 */
export declare const sortitionModuleNeoProxyAddress: {
    readonly 42161: "0x21A9402aDb818744B296e1d1BE58C804118DC03D";
};
/**
 * [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x21A9402aDb818744B296e1d1BE58C804118DC03D)
 */
export declare const sortitionModuleNeoProxyConfig: {
    readonly address: {
        readonly 42161: "0x21A9402aDb818744B296e1d1BE58C804118DC03D";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_implementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d)
 */
export declare const tokenBridgeAbi: readonly [{
    readonly constant: false;
    readonly payable: false;
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "version";
        readonly type: "uint256";
    }, {
        readonly name: "implementation";
        readonly type: "address";
    }];
    readonly name: "upgradeTo";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly constant: true;
    readonly payable: false;
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly constant: true;
    readonly payable: false;
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "implementation";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly constant: true;
    readonly payable: false;
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "upgradeabilityOwner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly constant: false;
    readonly payable: true;
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "version";
        readonly type: "uint256";
    }, {
        readonly name: "implementation";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly constant: false;
    readonly payable: false;
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferProxyOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly payable: true;
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "ProxyOwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "implementation";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}];
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d)
 */
export declare const tokenBridgeAddress: {
    readonly 100: "0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d";
};
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d)
 */
export declare const tokenBridgeConfig: {
    readonly address: {
        readonly 100: "0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d";
    };
    readonly abi: readonly [{
        readonly constant: false;
        readonly payable: false;
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "uint256";
        }, {
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly constant: true;
        readonly payable: false;
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly constant: true;
        readonly payable: false;
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly constant: true;
        readonly payable: false;
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "upgradeabilityOwner";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly constant: false;
        readonly payable: true;
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "uint256";
        }, {
            readonly name: "implementation";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly constant: false;
        readonly payable: false;
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferProxyOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly payable: true;
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: false;
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "ProxyOwnershipTransferred";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "implementation";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }];
};
/**
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6426800F8508b15AED271337498fa5e7D0794d46)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xBC5ef8d9ad307154447AE148c088f083d2dEa4eF)
 */
export declare const transactionBatcherAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "targets";
        readonly internalType: "address[]";
        readonly type: "address[]";
    }, {
        readonly name: "values";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "datas";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "batchSend";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "targets";
        readonly internalType: "address[]";
        readonly type: "address[]";
    }, {
        readonly name: "values";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "datas";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "batchSendUnchecked";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}];
/**
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6426800F8508b15AED271337498fa5e7D0794d46)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xBC5ef8d9ad307154447AE148c088f083d2dEa4eF)
 */
export declare const transactionBatcherAddress: {
    readonly 100: "0x6426800F8508b15AED271337498fa5e7D0794d46";
    readonly 42161: "0xBC5ef8d9ad307154447AE148c088f083d2dEa4eF";
};
/**
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6426800F8508b15AED271337498fa5e7D0794d46)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xBC5ef8d9ad307154447AE148c088f083d2dEa4eF)
 */
export declare const transactionBatcherConfig: {
    readonly address: {
        readonly 100: "0x6426800F8508b15AED271337498fa5e7D0794d46";
        readonly 42161: "0xBC5ef8d9ad307154447AE148c088f083d2dEa4eF";
    };
    readonly abi: readonly [{
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly internalType: "address[]";
            readonly type: "address[]";
        }, {
            readonly name: "values";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "datas";
            readonly internalType: "bytes[]";
            readonly type: "bytes[]";
        }];
        readonly name: "batchSend";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly internalType: "address[]";
            readonly type: "address[]";
        }, {
            readonly name: "values";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "datas";
            readonly internalType: "bytes[]";
            readonly type: "bytes[]";
        }];
        readonly name: "batchSendUnchecked";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
};
/**
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 */
export declare const wethAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_logic";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "admin_";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "AdminChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "admin";
    readonly outputs: readonly [{
        readonly name: "admin_";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeAdmin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "implementation";
    readonly outputs: readonly [{
        readonly name: "implementation_";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "upgradeTo";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 */
export declare const wethAddress: {
    readonly 100: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1";
    readonly 42161: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
};
/**
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 */
export declare const wethConfig: {
    readonly address: {
        readonly 100: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1";
        readonly 42161: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_logic";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "admin_";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "previousAdmin";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }, {
            readonly name: "newAdmin";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "AdminChanged";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly name: "admin_";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newAdmin";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly name: "implementation_";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcb3231aBA3b451343e0Fddfc45883c842f223846)
 */
export declare const wrappedPinakionAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_logic";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_admin";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "AdminChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "admin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeAdmin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "implementation";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "upgradeTo";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcb3231aBA3b451343e0Fddfc45883c842f223846)
 */
export declare const wrappedPinakionAddress: {
    readonly 100: "0xcb3231aBA3b451343e0Fddfc45883c842f223846";
};
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xcb3231aBA3b451343e0Fddfc45883c842f223846)
 */
export declare const wrappedPinakionConfig: {
    readonly address: {
        readonly 100: "0xcb3231aBA3b451343e0Fddfc45883c842f223846";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_logic";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_admin";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "previousAdmin";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }, {
            readonly name: "newAdmin";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "AdminChanged";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newAdmin";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002)
 */
export declare const xKlerosLiquidAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_logic";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_admin";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "AdminChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "Upgraded";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "admin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeAdmin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "implementation";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "upgradeTo";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002)
 */
export declare const xKlerosLiquidAddress: {
    readonly 100: "0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002";
};
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002)
 */
export declare const xKlerosLiquidConfig: {
    readonly address: {
        readonly 100: "0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_logic";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_admin";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "previousAdmin";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }, {
            readonly name: "newAdmin";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: false;
        }];
        readonly name: "AdminChanged";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "Upgraded";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newAdmin";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newImplementation";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
};
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x37b60f4E9A31A64cCc0024dce7D0fD07eAA0F7B3)
 */
export declare const xPnkAbi: readonly [];
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x37b60f4E9A31A64cCc0024dce7D0fD07eAA0F7B3)
 */
export declare const xPnkAddress: {
    readonly 100: "0x37b60f4E9A31A64cCc0024dce7D0fD07eAA0F7B3";
};
/**
 * [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x37b60f4E9A31A64cCc0024dce7D0fD07eAA0F7B3)
 */
export declare const xPnkConfig: {
    readonly address: {
        readonly 100: "0x37b60f4E9A31A64cCc0024dce7D0fD07eAA0F7B3";
    };
    readonly abi: readonly [];
};
//# sourceMappingURL=mainnet.viem.d.ts.map