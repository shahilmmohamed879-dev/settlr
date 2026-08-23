import { type ContractRunner } from "ethers";
import type { IPinakion, IPinakionInterface } from "../../../../kleros-v1/kleros-liquid/KlerosLiquidToV2Governor.sol/IPinakion.js";
export declare class IPinakion__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "who";
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
    }];
    static createInterface(): IPinakionInterface;
    static connect(address: string, runner?: ContractRunner | null): IPinakion;
}
