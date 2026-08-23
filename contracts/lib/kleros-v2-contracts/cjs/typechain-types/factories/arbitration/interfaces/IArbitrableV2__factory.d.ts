import { type ContractRunner } from "ethers";
import type { IArbitrableV2, IArbitrableV2Interface } from "../../../arbitration/interfaces/IArbitrableV2.js";
export declare class IArbitrableV2__factory {
    static readonly abi: readonly [{
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
    }];
    static createInterface(): IArbitrableV2Interface;
    static connect(address: string, runner?: ContractRunner | null): IArbitrableV2;
}
