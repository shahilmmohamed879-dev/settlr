import { type ContractRunner } from "ethers";
import type { IForeignGateway, IForeignGatewayInterface } from "../../../gateway/interfaces/IForeignGateway.js";
export declare class IForeignGateway__factory {
    static readonly abi: readonly [{
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
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_foreignBlockHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_foreignArbitrable";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_foreignDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_choices";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "CrossChainDisputeOutgoing";
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
            readonly internalType: "bytes32";
            readonly name: "_disputeHash";
            readonly type: "bytes32";
        }];
        readonly name: "disputeHashToForeignID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "homeChainID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "homeGateway";
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
            readonly name: "_messageSender";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_disputeHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_ruling";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_forwarder";
            readonly type: "address";
        }];
        readonly name: "relayRule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "senderGateway";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "veaOutbox";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_disputeHash";
            readonly type: "bytes32";
        }];
        readonly name: "withdrawFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IForeignGatewayInterface;
    static connect(address: string, runner?: ContractRunner | null): IForeignGateway;
}
