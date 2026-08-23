import { type ContractRunner } from "ethers";
import type { IHomeGateway, IHomeGatewayInterface } from "../../../gateway/interfaces/IHomeGateway.js";
export declare class IHomeGateway__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "contract IArbitratorV2";
            readonly name: "_arbitrator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_arbitrableChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_arbitrable";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_arbitrableDisputeID";
            readonly type: "uint256";
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
        readonly name: "CrossChainDisputeIncoming";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_disputeHash";
            readonly type: "bytes32";
        }];
        readonly name: "disputeHashToHomeID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "feeToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "foreignChainID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "foreignGateway";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "receiverGateway";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "foreignBlockHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "foreignChainID";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "foreignArbitrable";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "foreignDisputeID";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "externalDisputeID";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "templateId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "templateUri";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "choices";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IHomeGateway.RelayCreateDisputeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_feeAmount";
            readonly type: "uint256";
        }];
        readonly name: "relayCreateDispute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "foreignBlockHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "foreignChainID";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "foreignArbitrable";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "foreignDisputeID";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "externalDisputeID";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "templateId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "templateUri";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "choices";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IHomeGateway.RelayCreateDisputeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }];
        readonly name: "relayCreateDispute";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        }];
        readonly name: "rule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "veaInbox";
        readonly outputs: readonly [{
            readonly internalType: "contract IVeaInbox";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IHomeGatewayInterface;
    static connect(address: string, runner?: ContractRunner | null): IHomeGateway;
}
