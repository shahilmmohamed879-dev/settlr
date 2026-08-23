import { type ContractRunner } from "ethers";
import type { IArbitrableV1, IArbitrableV1Interface } from "../../../kleros-v1/interfaces/IArbitrableV1.js";
export declare class IArbitrableV1__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IArbitratorV1";
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
    static createInterface(): IArbitrableV1Interface;
    static connect(address: string, runner?: ContractRunner | null): IArbitrableV1;
}
//# sourceMappingURL=IArbitrableV1__factory.d.ts.map