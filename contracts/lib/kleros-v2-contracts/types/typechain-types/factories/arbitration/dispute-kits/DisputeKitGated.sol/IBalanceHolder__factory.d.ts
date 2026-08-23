import { type ContractRunner } from "ethers";
import type { IBalanceHolder, IBalanceHolderInterface } from "../../../../arbitration/dispute-kits/DisputeKitGated.sol/IBalanceHolder.js";
export declare class IBalanceHolder__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IBalanceHolderInterface;
    static connect(address: string, runner?: ContractRunner | null): IBalanceHolder;
}
//# sourceMappingURL=IBalanceHolder__factory.d.ts.map