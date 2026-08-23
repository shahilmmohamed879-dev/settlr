import { type ContractRunner } from "ethers";
import type { IProofOfHumanity, IProofOfHumanityInterface } from "../../../../arbitration/dispute-kits/DisputeKitSybilResistant.sol/IProofOfHumanity.js";
export declare class IProofOfHumanity__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_submissionID";
            readonly type: "address";
        }];
        readonly name: "isRegistered";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IProofOfHumanityInterface;
    static connect(address: string, runner?: ContractRunner | null): IProofOfHumanity;
}
