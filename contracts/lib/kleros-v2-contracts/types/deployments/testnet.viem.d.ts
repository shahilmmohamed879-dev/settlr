/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x438ca5337AE771dF926B7f4fDE1A21D72a315bDC)
 */
export declare const arbitrableExampleAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
    }, {
        readonly name: "_templateData";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_templateDataMappings";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_arbitratorExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "_templateRegistry";
        readonly internalType: "contract IDisputeTemplateRegistry";
        readonly type: "address";
    }, {
        readonly name: "_weth";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_action";
        readonly internalType: "string";
        readonly type: "string";
        readonly indexed: true;
    }];
    readonly name: "Action";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrator";
        readonly internalType: "contract IArbitratorV2";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrableDisputeID";
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
    readonly inputs: readonly [];
    readonly name: "arbitratorExtraData";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes";
        readonly type: "bytes";
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
        readonly name: "_arbitratorExtraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "changeArbitratorExtraData";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_templateData";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_templateDataMappings";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "changeDisputeTemplate";
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
        readonly name: "_action";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_feeInWeth";
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
        readonly name: "_action";
        readonly internalType: "string";
        readonly type: "string";
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
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disputes";
    readonly outputs: readonly [{
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
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "externalIDtoLocalID";
    readonly outputs: readonly [{
        readonly name: "";
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
        readonly name: "_externalDisputeID";
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
    readonly name: "templateId";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
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
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "weth";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x438ca5337AE771dF926B7f4fDE1A21D72a315bDC)
 */
export declare const arbitrableExampleAddress: {
    readonly 10200: "0x438ca5337AE771dF926B7f4fDE1A21D72a315bDC";
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x438ca5337AE771dF926B7f4fDE1A21D72a315bDC)
 */
export declare const arbitrableExampleConfig: {
    readonly address: {
        readonly 10200: "0x438ca5337AE771dF926B7f4fDE1A21D72a315bDC";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_arbitrator";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
        }, {
            readonly name: "_templateData";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_templateDataMappings";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_arbitratorExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "_templateRegistry";
            readonly internalType: "contract IDisputeTemplateRegistry";
            readonly type: "address";
        }, {
            readonly name: "_weth";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_action";
            readonly internalType: "string";
            readonly type: "string";
            readonly indexed: true;
        }];
        readonly name: "Action";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrator";
            readonly internalType: "contract IArbitratorV2";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrableDisputeID";
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
        readonly inputs: readonly [];
        readonly name: "arbitratorExtraData";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bytes";
            readonly type: "bytes";
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
            readonly name: "_arbitratorExtraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "changeArbitratorExtraData";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_templateData";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_templateDataMappings";
            readonly internalType: "string";
            readonly type: "string";
        }];
        readonly name: "changeDisputeTemplate";
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
            readonly name: "_action";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_feeInWeth";
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
            readonly name: "_action";
            readonly internalType: "string";
            readonly type: "string";
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
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
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
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "externalIDtoLocalID";
        readonly outputs: readonly [{
            readonly name: "";
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
            readonly name: "_externalDisputeID";
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
        readonly name: "templateId";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "weth";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }];
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0298a3EFa6Faf90865725E2b48Cf0F66e5d52754)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0298a3EFa6Faf90865725E2b48Cf0F66e5d52754)
 */
export declare const blockHashRngAddress: {
    readonly 421614: "0x0298a3EFa6Faf90865725E2b48Cf0F66e5d52754";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0298a3EFa6Faf90865725E2b48Cf0F66e5d52754)
 */
export declare const blockHashRngConfig: {
    readonly address: {
        readonly 421614: "0x0298a3EFa6Faf90865725E2b48Cf0F66e5d52754";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAd5cCc93429e3A977c273cEeD106Ef16A69EAf79)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAd5cCc93429e3A977c273cEeD106Ef16A69EAf79)
 */
export declare const chainlinkRngAddress: {
    readonly 421614: "0xAd5cCc93429e3A977c273cEeD106Ef16A69EAf79";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAd5cCc93429e3A977c273cEeD106Ef16A69EAf79)
 */
export declare const chainlinkRngConfig: {
    readonly address: {
        readonly 421614: "0xAd5cCc93429e3A977c273cEeD106Ef16A69EAf79";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5CE8D5A2BC84beb22a398CCA51996F7930313D61)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5CE8D5A2BC84beb22a398CCA51996F7930313D61)
 */
export declare const chainlinkVrfCoordinatorAddress: {
    readonly 421614: "0x5CE8D5A2BC84beb22a398CCA51996F7930313D61";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x5CE8D5A2BC84beb22a398CCA51996F7930313D61)
 */
export declare const chainlinkVrfCoordinatorConfig: {
    readonly address: {
        readonly 421614: "0x5CE8D5A2BC84beb22a398CCA51996F7930313D61";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xc34aeFEa232956542C5b2f2EE55fD5c378B35c03)
 */
export declare const daiAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_name";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_symbol";
        readonly internalType: "string";
        readonly type: "string";
    }];
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xc34aeFEa232956542C5b2f2EE55fD5c378B35c03)
 */
export declare const daiAddress: {
    readonly 421614: "0xc34aeFEa232956542C5b2f2EE55fD5c378B35c03";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xc34aeFEa232956542C5b2f2EE55fD5c378B35c03)
 */
export declare const daiConfig: {
    readonly address: {
        readonly 421614: "0xc34aeFEa232956542C5b2f2EE55fD5c378B35c03";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_name";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_symbol";
            readonly internalType: "string";
            readonly type: "string";
        }];
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1Fa58B52326488D62A406E71DBaD839560e810fF)
 */
export declare const daiFaucetAbi: readonly [{
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1Fa58B52326488D62A406E71DBaD839560e810fF)
 */
export declare const daiFaucetAddress: {
    readonly 421614: "0x1Fa58B52326488D62A406E71DBaD839560e810fF";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1Fa58B52326488D62A406E71DBaD839560e810fF)
 */
export declare const daiFaucetConfig: {
    readonly address: {
        readonly 421614: "0x1Fa58B52326488D62A406E71DBaD839560e810fF";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94)
 */
export declare const disputeKitClassicAbi: readonly [{
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94)
 */
export declare const disputeKitClassicAddress: {
    readonly 421614: "0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94)
 */
export declare const disputeKitClassicConfig: {
    readonly address: {
        readonly 421614: "0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xBed62D71A93c7E4415dF9b32B9A8116CeEd23b28)
 */
export declare const disputeKitClassicImplementationAbi: readonly [{
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xBed62D71A93c7E4415dF9b32B9A8116CeEd23b28)
 */
export declare const disputeKitClassicImplementationAddress: {
    readonly 421614: "0xBed62D71A93c7E4415dF9b32B9A8116CeEd23b28";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xBed62D71A93c7E4415dF9b32B9A8116CeEd23b28)
 */
export declare const disputeKitClassicImplementationConfig: {
    readonly address: {
        readonly 421614: "0xBed62D71A93c7E4415dF9b32B9A8116CeEd23b28";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94)
 */
export declare const disputeKitClassicProxyAbi: readonly [{
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94)
 */
export declare const disputeKitClassicProxyAddress: {
    readonly 421614: "0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94)
 */
export declare const disputeKitClassicProxyConfig: {
    readonly address: {
        readonly 421614: "0x0c38f115D001d3b5bBec5e8D44f78C7B61A27D94";
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
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x5f79737f65320bA12440aA88087281cC8e71A781)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xed31bEE8b1F7cE89E93033C0d3B2ccF4cEb27652)
 */
export declare const disputeResolverAbi: readonly [{
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
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x5f79737f65320bA12440aA88087281cC8e71A781)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xed31bEE8b1F7cE89E93033C0d3B2ccF4cEb27652)
 */
export declare const disputeResolverAddress: {
    readonly 10200: "0x5f79737f65320bA12440aA88087281cC8e71A781";
    readonly 421614: "0xed31bEE8b1F7cE89E93033C0d3B2ccF4cEb27652";
};
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x5f79737f65320bA12440aA88087281cC8e71A781)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xed31bEE8b1F7cE89E93033C0d3B2ccF4cEb27652)
 */
export declare const disputeResolverConfig: {
    readonly address: {
        readonly 10200: "0x5f79737f65320bA12440aA88087281cC8e71A781";
        readonly 421614: "0xed31bEE8b1F7cE89E93033C0d3B2ccF4cEb27652";
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
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xA55D4b90c1F8D1fD0408232bF6FA498dD6786385)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xe763d31Cb096B4bc7294012B78FC7F148324ebcb)
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
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xA55D4b90c1F8D1fD0408232bF6FA498dD6786385)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xe763d31Cb096B4bc7294012B78FC7F148324ebcb)
 */
export declare const disputeTemplateRegistryAddress: {
    readonly 10200: "0xA55D4b90c1F8D1fD0408232bF6FA498dD6786385";
    readonly 421614: "0xe763d31Cb096B4bc7294012B78FC7F148324ebcb";
};
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xA55D4b90c1F8D1fD0408232bF6FA498dD6786385)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xe763d31Cb096B4bc7294012B78FC7F148324ebcb)
 */
export declare const disputeTemplateRegistryConfig: {
    readonly address: {
        readonly 10200: "0xA55D4b90c1F8D1fD0408232bF6FA498dD6786385";
        readonly 421614: "0xe763d31Cb096B4bc7294012B78FC7F148324ebcb";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf97791DA66e0A8Ff8Ee4908872CfCAcc641829Ec)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf97791DA66e0A8Ff8Ee4908872CfCAcc641829Ec)
 */
export declare const disputeTemplateRegistryImplementationAddress: {
    readonly 421614: "0xf97791DA66e0A8Ff8Ee4908872CfCAcc641829Ec";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf97791DA66e0A8Ff8Ee4908872CfCAcc641829Ec)
 */
export declare const disputeTemplateRegistryImplementationConfig: {
    readonly address: {
        readonly 421614: "0xf97791DA66e0A8Ff8Ee4908872CfCAcc641829Ec";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xe763d31Cb096B4bc7294012B78FC7F148324ebcb)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xe763d31Cb096B4bc7294012B78FC7F148324ebcb)
 */
export declare const disputeTemplateRegistryProxyAddress: {
    readonly 421614: "0xe763d31Cb096B4bc7294012B78FC7F148324ebcb";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xe763d31Cb096B4bc7294012B78FC7F148324ebcb)
 */
export declare const disputeTemplateRegistryProxyConfig: {
    readonly address: {
        readonly 421614: "0xe763d31Cb096B4bc7294012B78FC7F148324ebcb";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397)
 */
export declare const evidenceModuleAddress: {
    readonly 421614: "0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397)
 */
export declare const evidenceModuleConfig: {
    readonly address: {
        readonly 421614: "0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xC4e64e6E949936a18269937FC1e18cb11E3db14D)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xC4e64e6E949936a18269937FC1e18cb11E3db14D)
 */
export declare const evidenceModuleImplementationAddress: {
    readonly 421614: "0xC4e64e6E949936a18269937FC1e18cb11E3db14D";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xC4e64e6E949936a18269937FC1e18cb11E3db14D)
 */
export declare const evidenceModuleImplementationConfig: {
    readonly address: {
        readonly 421614: "0xC4e64e6E949936a18269937FC1e18cb11E3db14D";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397)
 */
export declare const evidenceModuleProxyAddress: {
    readonly 421614: "0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397)
 */
export declare const evidenceModuleProxyConfig: {
    readonly address: {
        readonly 421614: "0xA88A9a25cE7f1d8b3941dA3b322Ba91D009E1397";
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
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x2824bdcc752b1272D56A84be03A74Ee856C06e43)
 */
export declare const foreignGatewayOnGnosisAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_governor";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_veaOutbox";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_homeChainID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_homeGateway";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
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
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
        readonly indexed: true;
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "ArbitrationCostModified";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_foreignBlockHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
        readonly indexed: false;
    }, {
        readonly name: "_foreignArbitrable";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_foreignDisputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_choices";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "CrossChainDisputeOutgoing";
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
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "DEFAULT_NB_OF_JURORS";
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
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "arbitrationCost";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
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
        readonly name: "_courtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeCourtJurorFee";
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
        readonly name: "_homeGateway";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "changeHomeGateway";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_veaOutbox";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_gracePeriod";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeVea";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_choices";
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
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createDispute";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "currentRuling";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "deprecatedVeaOutbox";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "deprecatedVeaOutboxExpiration";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "disputeHashToForeignID";
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
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "disputeHashtoDisputeData";
    readonly outputs: readonly [{
        readonly name: "id";
        readonly internalType: "uint248";
        readonly type: "uint248";
    }, {
        readonly name: "ruled";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "arbitrable";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "paid";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "relayer";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "feeForJuror";
    readonly outputs: readonly [{
        readonly name: "";
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
    readonly inputs: readonly [];
    readonly name: "homeChainID";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "homeGateway";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_messageSender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_disputeHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "_ruling";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_relayer";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "relayRule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "senderGateway";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "veaOutbox";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "withdrawFees";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x2824bdcc752b1272D56A84be03A74Ee856C06e43)
 */
export declare const foreignGatewayOnGnosisAddress: {
    readonly 10200: "0x2824bdcc752b1272D56A84be03A74Ee856C06e43";
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x2824bdcc752b1272D56A84be03A74Ee856C06e43)
 */
export declare const foreignGatewayOnGnosisConfig: {
    readonly address: {
        readonly 10200: "0x2824bdcc752b1272D56A84be03A74Ee856C06e43";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_veaOutbox";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_homeChainID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_homeGateway";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
            readonly indexed: true;
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "ArbitrationCostModified";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_foreignBlockHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
            readonly indexed: false;
        }, {
            readonly name: "_foreignArbitrable";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_foreignDisputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_choices";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_extraData";
            readonly internalType: "bytes";
            readonly type: "bytes";
            readonly indexed: false;
        }];
        readonly name: "CrossChainDisputeOutgoing";
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
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "DEFAULT_NB_OF_JURORS";
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
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
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
            readonly name: "_courtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeCourtJurorFee";
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
            readonly name: "_homeGateway";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "changeHomeGateway";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_veaOutbox";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_gracePeriod";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeVea";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_choices";
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
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "deprecatedVeaOutbox";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "deprecatedVeaOutboxExpiration";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "disputeHashToForeignID";
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
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "disputeHashtoDisputeData";
        readonly outputs: readonly [{
            readonly name: "id";
            readonly internalType: "uint248";
            readonly type: "uint248";
        }, {
            readonly name: "ruled";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "arbitrable";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "paid";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "relayer";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "feeForJuror";
        readonly outputs: readonly [{
            readonly name: "";
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
        readonly inputs: readonly [];
        readonly name: "homeChainID";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "homeGateway";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_messageSender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_disputeHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "_ruling";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_relayer";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "relayRule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "senderGateway";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "veaOutbox";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeHash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "withdrawFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479)
 */
export declare const klerosCoreAbi: readonly [{
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479)
 */
export declare const klerosCoreAddress: {
    readonly 421614: "0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479)
 */
export declare const klerosCoreConfig: {
    readonly address: {
        readonly 421614: "0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd74e61A4dB9C6c3F2C97b62a319aE194f616858C)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd74e61A4dB9C6c3F2C97b62a319aE194f616858C)
 */
export declare const klerosCoreSnapshotProxyAddress: {
    readonly 421614: "0xd74e61A4dB9C6c3F2C97b62a319aE194f616858C";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xd74e61A4dB9C6c3F2C97b62a319aE194f616858C)
 */
export declare const klerosCoreSnapshotProxyConfig: {
    readonly address: {
        readonly 421614: "0xd74e61A4dB9C6c3F2C97b62a319aE194f616858C";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x71c56fbE58706C1B3f64a7baf913eCA3Cec04164)
 */
export declare const klerosCoreImplementationAbi: readonly [{
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x71c56fbE58706C1B3f64a7baf913eCA3Cec04164)
 */
export declare const klerosCoreImplementationAddress: {
    readonly 421614: "0x71c56fbE58706C1B3f64a7baf913eCA3Cec04164";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x71c56fbE58706C1B3f64a7baf913eCA3Cec04164)
 */
export declare const klerosCoreImplementationConfig: {
    readonly address: {
        readonly 421614: "0x71c56fbE58706C1B3f64a7baf913eCA3Cec04164";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479)
 */
export declare const klerosCoreProxyAbi: readonly [{
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479)
 */
export declare const klerosCoreProxyAddress: {
    readonly 421614: "0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479)
 */
export declare const klerosCoreProxyConfig: {
    readonly address: {
        readonly 421614: "0xE8442307d36e9bf6aB27F1A009F95CE8E11C3479";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 */
export declare const pnkAddress: {
    readonly 421614: "0x34B944D42cAcfC8266955D07A80181D2054aa225";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 */
export declare const pnkConfig: {
    readonly address: {
        readonly 421614: "0x34B944D42cAcfC8266955D07A80181D2054aa225";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x9f6ffc13B685A68ae359fCA128dfE776458Df464)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x9f6ffc13B685A68ae359fCA128dfE776458Df464)
 */
export declare const pnkFaucetAddress: {
    readonly 421614: "0x9f6ffc13B685A68ae359fCA128dfE776458Df464";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x9f6ffc13B685A68ae359fCA128dfE776458Df464)
 */
export declare const pnkFaucetConfig: {
    readonly address: {
        readonly 421614: "0x9f6ffc13B685A68ae359fCA128dfE776458Df464";
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
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x593e89704D285B0c3fbF157c7CF2537456CE64b5)
 */
export declare const pinakionV2Abi: readonly [{
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
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x593e89704D285B0c3fbF157c7CF2537456CE64b5)
 */
export declare const pinakionV2Address: {
    readonly 421614: "0x34B944D42cAcfC8266955D07A80181D2054aa225";
    readonly 11155111: "0x593e89704D285B0c3fbF157c7CF2537456CE64b5";
};
/**
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x34B944D42cAcfC8266955D07A80181D2054aa225)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x593e89704D285B0c3fbF157c7CF2537456CE64b5)
 */
export declare const pinakionV2Config: {
    readonly address: {
        readonly 421614: "0x34B944D42cAcfC8266955D07A80181D2054aa225";
        readonly 11155111: "0x593e89704D285B0c3fbF157c7CF2537456CE64b5";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x2668c46A14af8997417138B064ca1bEB70769585)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x2668c46A14af8997417138B064ca1bEB70769585)
 */
export declare const policyRegistryAddress: {
    readonly 421614: "0x2668c46A14af8997417138B064ca1bEB70769585";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x2668c46A14af8997417138B064ca1bEB70769585)
 */
export declare const policyRegistryConfig: {
    readonly address: {
        readonly 421614: "0x2668c46A14af8997417138B064ca1bEB70769585";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x7CC8E0787e381aE159C4d3e137f20f9203313D41)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x7CC8E0787e381aE159C4d3e137f20f9203313D41)
 */
export declare const policyRegistryImplementationAddress: {
    readonly 421614: "0x7CC8E0787e381aE159C4d3e137f20f9203313D41";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x7CC8E0787e381aE159C4d3e137f20f9203313D41)
 */
export declare const policyRegistryImplementationConfig: {
    readonly address: {
        readonly 421614: "0x7CC8E0787e381aE159C4d3e137f20f9203313D41";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x2668c46A14af8997417138B064ca1bEB70769585)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x2668c46A14af8997417138B064ca1bEB70769585)
 */
export declare const policyRegistryProxyAddress: {
    readonly 421614: "0x2668c46A14af8997417138B064ca1bEB70769585";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x2668c46A14af8997417138B064ca1bEB70769585)
 */
export declare const policyRegistryProxyConfig: {
    readonly address: {
        readonly 421614: "0x2668c46A14af8997417138B064ca1bEB70769585";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE775D7fde1d0D09ae627C0131040012ccBcC4b9b)
 */
export declare const randomizerOracleAbi: readonly [];
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE775D7fde1d0D09ae627C0131040012ccBcC4b9b)
 */
export declare const randomizerOracleAddress: {
    readonly 421614: "0xE775D7fde1d0D09ae627C0131040012ccBcC4b9b";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xE775D7fde1d0D09ae627C0131040012ccBcC4b9b)
 */
export declare const randomizerOracleConfig: {
    readonly address: {
        readonly 421614: "0xE775D7fde1d0D09ae627C0131040012ccBcC4b9b";
    };
    readonly abi: readonly [];
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x51a97ad9F0aA818e75819da3cA20CAc319580627)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x51a97ad9F0aA818e75819da3cA20CAc319580627)
 */
export declare const randomizerRngAddress: {
    readonly 421614: "0x51a97ad9F0aA818e75819da3cA20CAc319580627";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x51a97ad9F0aA818e75819da3cA20CAc319580627)
 */
export declare const randomizerRngConfig: {
    readonly address: {
        readonly 421614: "0x51a97ad9F0aA818e75819da3cA20CAc319580627";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1237F02bBeFDAEA20cE3A66aCAe458C4106Ae203)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1237F02bBeFDAEA20cE3A66aCAe458C4106Ae203)
 */
export declare const randomizerRngImplementationAddress: {
    readonly 421614: "0x1237F02bBeFDAEA20cE3A66aCAe458C4106Ae203";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x1237F02bBeFDAEA20cE3A66aCAe458C4106Ae203)
 */
export declare const randomizerRngImplementationConfig: {
    readonly address: {
        readonly 421614: "0x1237F02bBeFDAEA20cE3A66aCAe458C4106Ae203";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x51a97ad9F0aA818e75819da3cA20CAc319580627)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x51a97ad9F0aA818e75819da3cA20CAc319580627)
 */
export declare const randomizerRngProxyAddress: {
    readonly 421614: "0x51a97ad9F0aA818e75819da3cA20CAc319580627";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x51a97ad9F0aA818e75819da3cA20CAc319580627)
 */
export declare const randomizerRngProxyConfig: {
    readonly address: {
        readonly 421614: "0x51a97ad9F0aA818e75819da3cA20CAc319580627";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD)
 */
export declare const sortitionModuleAbi: readonly [{
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD)
 */
export declare const sortitionModuleAddress: {
    readonly 421614: "0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD)
 */
export declare const sortitionModuleConfig: {
    readonly address: {
        readonly 421614: "0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAe750D6Fa39b1044d4081CB0bfecF886d176Be5b)
 */
export declare const sortitionModuleImplementationAbi: readonly [{
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAe750D6Fa39b1044d4081CB0bfecF886d176Be5b)
 */
export declare const sortitionModuleImplementationAddress: {
    readonly 421614: "0xAe750D6Fa39b1044d4081CB0bfecF886d176Be5b";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAe750D6Fa39b1044d4081CB0bfecF886d176Be5b)
 */
export declare const sortitionModuleImplementationConfig: {
    readonly address: {
        readonly 421614: "0xAe750D6Fa39b1044d4081CB0bfecF886d176Be5b";
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD)
 */
export declare const sortitionModuleProxyAbi: readonly [{
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD)
 */
export declare const sortitionModuleProxyAddress: {
    readonly 421614: "0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD)
 */
export declare const sortitionModuleProxyConfig: {
    readonly address: {
        readonly 421614: "0xbAA5068F0bD1417046250A3eDe2B1F27e31383BD";
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
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xc7e3BF90299f6BD9FA7c3703837A9CAbB5743636)
 */
export declare const sortitionSumTreeFactoryAbi: readonly [];
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xc7e3BF90299f6BD9FA7c3703837A9CAbB5743636)
 */
export declare const sortitionSumTreeFactoryAddress: {
    readonly 10200: "0xc7e3BF90299f6BD9FA7c3703837A9CAbB5743636";
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xc7e3BF90299f6BD9FA7c3703837A9CAbB5743636)
 */
export declare const sortitionSumTreeFactoryConfig: {
    readonly address: {
        readonly 10200: "0xc7e3BF90299f6BD9FA7c3703837A9CAbB5743636";
    };
    readonly abi: readonly [];
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xbb3c86f9918C3C1d83668fA84e79E876d147fFf2)
 */
export declare const tokenBridgeAbi: readonly [];
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xbb3c86f9918C3C1d83668fA84e79E876d147fFf2)
 */
export declare const tokenBridgeAddress: {
    readonly 10200: "0xbb3c86f9918C3C1d83668fA84e79E876d147fFf2";
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xbb3c86f9918C3C1d83668fA84e79E876d147fFf2)
 */
export declare const tokenBridgeConfig: {
    readonly address: {
        readonly 10200: "0xbb3c86f9918C3C1d83668fA84e79E876d147fFf2";
    };
    readonly abi: readonly [];
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x35f93986950804ac1F93519BF68C2a7Dd776db0E)
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
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x35f93986950804ac1F93519BF68C2a7Dd776db0E)
 */
export declare const transactionBatcherAddress: {
    readonly 421614: "0x35f93986950804ac1F93519BF68C2a7Dd776db0E";
};
/**
 * [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x35f93986950804ac1F93519BF68C2a7Dd776db0E)
 */
export declare const transactionBatcherConfig: {
    readonly address: {
        readonly 421614: "0x35f93986950804ac1F93519BF68C2a7Dd776db0E";
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
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x2DFC9c3141268e6eac04a7D6d98Fbf64BDe836a8)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAEE953CC26DbDeA52beBE3F97f281981f2B9d511)
 */
export declare const wethAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_name";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_symbol";
        readonly internalType: "string";
        readonly type: "string";
    }];
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
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x2DFC9c3141268e6eac04a7D6d98Fbf64BDe836a8)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAEE953CC26DbDeA52beBE3F97f281981f2B9d511)
 */
export declare const wethAddress: {
    readonly 10200: "0x2DFC9c3141268e6eac04a7D6d98Fbf64BDe836a8";
    readonly 421614: "0xAEE953CC26DbDeA52beBE3F97f281981f2B9d511";
};
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x2DFC9c3141268e6eac04a7D6d98Fbf64BDe836a8)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xAEE953CC26DbDeA52beBE3F97f281981f2B9d511)
 */
export declare const wethConfig: {
    readonly address: {
        readonly 10200: "0x2DFC9c3141268e6eac04a7D6d98Fbf64BDe836a8";
        readonly 421614: "0xAEE953CC26DbDeA52beBE3F97f281981f2B9d511";
    };
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_name";
            readonly internalType: "string";
            readonly type: "string";
        }, {
            readonly name: "_symbol";
            readonly internalType: "string";
            readonly type: "string";
        }];
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
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x22CB016c4b57413ca4DF5F1AC44a0E0d3c69811F)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x922B84134e41BC5c9EDE7D5EFCE22Ba3D0e71835)
 */
export declare const wethFaucetAbi: readonly [{
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
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x22CB016c4b57413ca4DF5F1AC44a0E0d3c69811F)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x922B84134e41BC5c9EDE7D5EFCE22Ba3D0e71835)
 */
export declare const wethFaucetAddress: {
    readonly 10200: "0x22CB016c4b57413ca4DF5F1AC44a0E0d3c69811F";
    readonly 421614: "0x922B84134e41BC5c9EDE7D5EFCE22Ba3D0e71835";
};
/**
 * - [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x22CB016c4b57413ca4DF5F1AC44a0E0d3c69811F)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x922B84134e41BC5c9EDE7D5EFCE22Ba3D0e71835)
 */
export declare const wethFaucetConfig: {
    readonly address: {
        readonly 10200: "0x22CB016c4b57413ca4DF5F1AC44a0E0d3c69811F";
        readonly 421614: "0x922B84134e41BC5c9EDE7D5EFCE22Ba3D0e71835";
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
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x5898aeE045A25B276369914c3448B72a41758B2c)
 */
export declare const wpnkFaucetAbi: readonly [{
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
    readonly name: "balance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
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
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x5898aeE045A25B276369914c3448B72a41758B2c)
 */
export declare const wpnkFaucetAddress: {
    readonly 10200: "0x5898aeE045A25B276369914c3448B72a41758B2c";
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x5898aeE045A25B276369914c3448B72a41758B2c)
 */
export declare const wpnkFaucetConfig: {
    readonly address: {
        readonly 10200: "0x5898aeE045A25B276369914c3448B72a41758B2c";
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
        readonly name: "balance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
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
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xD75E27A56AaF9eE7F8d9A472a8C2EF2f65a764dd)
 */
export declare const wrappedPinakionV2Abi: readonly [{
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
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xD75E27A56AaF9eE7F8d9A472a8C2EF2f65a764dd)
 */
export declare const wrappedPinakionV2Address: {
    readonly 10200: "0xD75E27A56AaF9eE7F8d9A472a8C2EF2f65a764dd";
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0xD75E27A56AaF9eE7F8d9A472a8C2EF2f65a764dd)
 */
export declare const wrappedPinakionV2Config: {
    readonly address: {
        readonly 10200: "0xD75E27A56AaF9eE7F8d9A472a8C2EF2f65a764dd";
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
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x34E520dc1d2Db660113b64724e14CEdCD01Ee879)
 */
export declare const xKlerosLiquidV2Abi: readonly [{
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrable";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DisputeCreation";
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
        readonly name: "_appeal";
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
        readonly internalType: "uint8";
        readonly type: "uint8";
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
        readonly name: "_period";
        readonly internalType: "enum xKlerosLiquidV2.Period";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewPeriod";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_phase";
        readonly internalType: "enum xKlerosLiquidV2.Phase";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "NewPhase";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_arbitrable";
        readonly internalType: "contract IArbitrable";
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
        readonly name: "_address";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "_subcourtID";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "_stake";
        readonly internalType: "uint128";
        readonly type: "uint128";
        readonly indexed: false;
    }, {
        readonly name: "_newTotalStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "StakeSet";
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
        readonly name: "_tokenAmount";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }, {
        readonly name: "_ETHAmount";
        readonly internalType: "int256";
        readonly type: "int256";
        readonly indexed: false;
    }];
    readonly name: "TokenAndETHShift";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "ALPHA_DIVISOR";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MAX_STAKE_PATHS";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MIN_JURORS";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "NON_PAYABLE_AMOUNT";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "RN";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "RNBlock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "RNGenerator";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IRandomAuRa";
        readonly type: "address";
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
        readonly name: "_foreignGateway";
        readonly internalType: "contract IForeignGateway";
        readonly type: "address";
    }];
    readonly name: "changeForeignGateway";
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
        readonly name: "_pinakion";
        readonly internalType: "contract WrappedPinakion";
        readonly type: "address";
    }];
    readonly name: "changePinakion";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_RNGenerator";
        readonly internalType: "contract IRandomAuRa";
        readonly type: "address";
    }];
    readonly name: "changeRNGenerator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_subcourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_alpha";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeSubcourtAlpha";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_subcourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_feeForJuror";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeSubcourtJurorFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_subcourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_jurorsForCourtJump";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeSubcourtJurorsForJump";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_subcourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_minStake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "changeSubcourtMinStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_subcourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly name: "changeSubcourtTimesPerPeriod";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_weth";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "changeWethAddress";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    }];
    readonly stateMutability: "view";
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
        readonly name: "_sortitionSumTreeK";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "createSubcourt";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "delayedSetStakes";
    readonly outputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subcourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "stake";
        readonly internalType: "uint128";
        readonly type: "uint128";
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
        readonly name: "subcourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "arbitrated";
        readonly internalType: "contract IArbitrable";
        readonly type: "address";
    }, {
        readonly name: "numberOfChoices";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "period";
        readonly internalType: "enum xKlerosLiquidV2.Period";
        readonly type: "uint8";
    }, {
        readonly name: "lastPeriodChange";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "drawsInRound";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "commitsInRound";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "ruled";
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
    readonly name: "disputesRuling";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
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
        readonly name: "_iterations";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "executeDelayedSetStakes";
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
    readonly inputs: readonly [];
    readonly name: "foreignGateway";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IForeignGateway";
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
    readonly name: "getDispute";
    readonly outputs: readonly [{
        readonly name: "votesLengths";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "tokensAtStakePerJuror";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "totalFeesForJurors";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "votesInEachRound";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "repartitionsInEachRound";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "penaltiesInEachRound";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getJuror";
    readonly outputs: readonly [{
        readonly name: "subcourtIDs";
        readonly internalType: "uint96[]";
        readonly type: "uint96[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_subcourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "getSubcourt";
    readonly outputs: readonly [{
        readonly name: "children";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "timesPerPeriod";
        readonly internalType: "uint256[4]";
        readonly type: "uint256[4]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_appeal";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_voteID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getVote";
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
    readonly inputs: readonly [{
        readonly name: "_disputeID";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_appeal";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getVoteCounter";
    readonly outputs: readonly [{
        readonly name: "winningChoice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "counts";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "tied";
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
        readonly name: "_pinakion";
        readonly internalType: "contract WrappedPinakion";
        readonly type: "address";
    }, {
        readonly name: "_RNGenerator";
        readonly internalType: "contract IRandomAuRa";
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
        readonly name: "_sortitionSumTreeK";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_foreignGateway";
        readonly internalType: "contract IForeignGateway";
        readonly type: "address";
    }, {
        readonly name: "_weth";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "jurors";
    readonly outputs: readonly [{
        readonly name: "stakedTokens";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lockedTokens";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lastDelayedSetStake";
    readonly outputs: readonly [{
        readonly name: "";
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
    readonly inputs: readonly [];
    readonly name: "lockInsolventTransfers";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
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
    readonly name: "minStakingTime";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextDelayedSetStake";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "onApprove";
    readonly outputs: readonly [{
        readonly name: "allowed";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "onTransfer";
    readonly outputs: readonly [{
        readonly name: "allowed";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "phase";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "enum xKlerosLiquidV2.Phase";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "pinakion";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract WrappedPinakion";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "proxyPayment";
    readonly outputs: readonly [{
        readonly name: "allowed";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
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
    readonly inputs: readonly [{
        readonly name: "_subcourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }, {
        readonly name: "_stake";
        readonly internalType: "uint128";
        readonly type: "uint128";
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
        readonly name: "_subcourtID";
        readonly internalType: "uint96";
        readonly type: "uint96";
    }];
    readonly name: "stakeOf";
    readonly outputs: readonly [{
        readonly name: "stake";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalDisputes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "weth";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x34E520dc1d2Db660113b64724e14CEdCD01Ee879)
 */
export declare const xKlerosLiquidV2Address: {
    readonly 10200: "0x34E520dc1d2Db660113b64724e14CEdCD01Ee879";
};
/**
 * [__View Contract on Gnosis Chiado Blockscout__](https://blockscout.chiadochain.net/address/0x34E520dc1d2Db660113b64724e14CEdCD01Ee879)
 */
export declare const xKlerosLiquidV2Config: {
    readonly address: {
        readonly 10200: "0x34E520dc1d2Db660113b64724e14CEdCD01Ee879";
    };
    readonly abi: readonly [{
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: true;
        }, {
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrable";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly name: "DisputeCreation";
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
            readonly name: "_appeal";
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
            readonly internalType: "uint8";
            readonly type: "uint8";
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
            readonly name: "_period";
            readonly internalType: "enum xKlerosLiquidV2.Period";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewPeriod";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_phase";
            readonly internalType: "enum xKlerosLiquidV2.Phase";
            readonly type: "uint8";
            readonly indexed: false;
        }];
        readonly name: "NewPhase";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "_arbitrable";
            readonly internalType: "contract IArbitrable";
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
            readonly name: "_address";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "_subcourtID";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "_stake";
            readonly internalType: "uint128";
            readonly type: "uint128";
            readonly indexed: false;
        }, {
            readonly name: "_newTotalStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "StakeSet";
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
            readonly name: "_tokenAmount";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }, {
            readonly name: "_ETHAmount";
            readonly internalType: "int256";
            readonly type: "int256";
            readonly indexed: false;
        }];
        readonly name: "TokenAndETHShift";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "ALPHA_DIVISOR";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "MAX_STAKE_PATHS";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "MIN_JURORS";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "NON_PAYABLE_AMOUNT";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "RN";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "RNBlock";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "RNGenerator";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IRandomAuRa";
            readonly type: "address";
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
            readonly name: "_foreignGateway";
            readonly internalType: "contract IForeignGateway";
            readonly type: "address";
        }];
        readonly name: "changeForeignGateway";
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
            readonly name: "_pinakion";
            readonly internalType: "contract WrappedPinakion";
            readonly type: "address";
        }];
        readonly name: "changePinakion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_RNGenerator";
            readonly internalType: "contract IRandomAuRa";
            readonly type: "address";
        }];
        readonly name: "changeRNGenerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_subcourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_alpha";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeSubcourtAlpha";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_subcourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_feeForJuror";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeSubcourtJurorFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_subcourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_jurorsForCourtJump";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeSubcourtJurorsForJump";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_subcourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_minStake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "changeSubcourtMinStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_subcourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly name: "changeSubcourtTimesPerPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_weth";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "changeWethAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        }];
        readonly stateMutability: "view";
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
            readonly name: "_sortitionSumTreeK";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "createSubcourt";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "delayedSetStakes";
        readonly outputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "subcourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "stake";
            readonly internalType: "uint128";
            readonly type: "uint128";
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
            readonly name: "subcourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "arbitrated";
            readonly internalType: "contract IArbitrable";
            readonly type: "address";
        }, {
            readonly name: "numberOfChoices";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "period";
            readonly internalType: "enum xKlerosLiquidV2.Period";
            readonly type: "uint8";
        }, {
            readonly name: "lastPeriodChange";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "drawsInRound";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "commitsInRound";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "ruled";
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
        readonly name: "disputesRuling";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
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
            readonly name: "_iterations";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "executeDelayedSetStakes";
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
        readonly inputs: readonly [];
        readonly name: "foreignGateway";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IForeignGateway";
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
        readonly name: "getDispute";
        readonly outputs: readonly [{
            readonly name: "votesLengths";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "tokensAtStakePerJuror";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "totalFeesForJurors";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "votesInEachRound";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "repartitionsInEachRound";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "penaltiesInEachRound";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "getJuror";
        readonly outputs: readonly [{
            readonly name: "subcourtIDs";
            readonly internalType: "uint96[]";
            readonly type: "uint96[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_subcourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "getSubcourt";
        readonly outputs: readonly [{
            readonly name: "children";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "timesPerPeriod";
            readonly internalType: "uint256[4]";
            readonly type: "uint256[4]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_appeal";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_voteID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getVote";
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
        readonly inputs: readonly [{
            readonly name: "_disputeID";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_appeal";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "getVoteCounter";
        readonly outputs: readonly [{
            readonly name: "winningChoice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "counts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "tied";
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
            readonly name: "_pinakion";
            readonly internalType: "contract WrappedPinakion";
            readonly type: "address";
        }, {
            readonly name: "_RNGenerator";
            readonly internalType: "contract IRandomAuRa";
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
            readonly name: "_sortitionSumTreeK";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_foreignGateway";
            readonly internalType: "contract IForeignGateway";
            readonly type: "address";
        }, {
            readonly name: "_weth";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "jurors";
        readonly outputs: readonly [{
            readonly name: "stakedTokens";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "lockedTokens";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "lastDelayedSetStake";
        readonly outputs: readonly [{
            readonly name: "";
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
        readonly inputs: readonly [];
        readonly name: "lockInsolventTransfers";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
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
        readonly name: "minStakingTime";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "nextDelayedSetStake";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "onApprove";
        readonly outputs: readonly [{
            readonly name: "allowed";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "_amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "onTransfer";
        readonly outputs: readonly [{
            readonly name: "allowed";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "phase";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "enum xKlerosLiquidV2.Phase";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "pinakion";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract WrappedPinakion";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "proxyPayment";
        readonly outputs: readonly [{
            readonly name: "allowed";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
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
        readonly inputs: readonly [{
            readonly name: "_subcourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }, {
            readonly name: "_stake";
            readonly internalType: "uint128";
            readonly type: "uint128";
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
            readonly name: "_subcourtID";
            readonly internalType: "uint96";
            readonly type: "uint96";
        }];
        readonly name: "stakeOf";
        readonly outputs: readonly [{
            readonly name: "stake";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalDisputes";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "weth";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }];
};
//# sourceMappingURL=testnet.viem.d.ts.map