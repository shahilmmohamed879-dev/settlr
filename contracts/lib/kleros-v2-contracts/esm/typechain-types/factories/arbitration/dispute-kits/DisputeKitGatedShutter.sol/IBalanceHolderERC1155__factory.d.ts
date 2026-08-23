import { type ContractRunner } from "ethers";
import type { IBalanceHolderERC1155, IBalanceHolderERC1155Interface } from "../../../../arbitration/dispute-kits/DisputeKitGatedShutter.sol/IBalanceHolderERC1155.js";
export declare class IBalanceHolderERC1155__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
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
    static createInterface(): IBalanceHolderERC1155Interface;
    static connect(address: string, runner?: ContractRunner | null): IBalanceHolderERC1155;
}
