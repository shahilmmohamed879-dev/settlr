import { type ContractRunner } from "ethers";
import type { IArbitratorV1, IArbitratorV1Interface } from "../../../kleros-v1/interfaces/IArbitratorV1.js";
export declare class IArbitratorV1__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "contract IArbitrableV1";
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
            readonly internalType: "contract IArbitrableV1";
            readonly name: "_arbitrable";
            readonly type: "address";
        }];
        readonly name: "AppealPossible";
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
            readonly internalType: "contract IArbitrableV1";
            readonly name: "_arbitrable";
            readonly type: "address";
        }];
        readonly name: "DisputeCreation";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
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
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
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
            readonly name: "_choices";
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
            readonly name: "_disputeID";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ruling";
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
        readonly name: "disputeStatus";
        readonly outputs: readonly [{
            readonly internalType: "enum IArbitratorV1.DisputeStatus";
            readonly name: "status";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IArbitratorV1Interface;
    static connect(address: string, runner?: ContractRunner | null): IArbitratorV1;
}
