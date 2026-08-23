import { type ContractRunner } from "ethers";
import type { RNG, RNGInterface } from "../../rng/RNG.js";
export declare class RNG__factory {
    static readonly abi: readonly [{
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
    static createInterface(): RNGInterface;
    static connect(address: string, runner?: ContractRunner | null): RNG;
}
//# sourceMappingURL=RNG__factory.d.ts.map