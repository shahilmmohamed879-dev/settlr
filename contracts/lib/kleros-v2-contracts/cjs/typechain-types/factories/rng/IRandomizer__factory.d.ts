import { type ContractRunner } from "ethers";
import type { IRandomizer, IRandomizerInterface } from "../../rng/IRandomizer.js";
export declare class IRandomizer__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "clientWithdrawTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "callbackGasLimit";
            readonly type: "uint256";
        }];
        readonly name: "request";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IRandomizerInterface;
    static connect(address: string, runner?: ContractRunner | null): IRandomizer;
}
