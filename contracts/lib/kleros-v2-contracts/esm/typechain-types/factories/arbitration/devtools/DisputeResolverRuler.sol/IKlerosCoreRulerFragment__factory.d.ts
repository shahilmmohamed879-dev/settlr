import { type ContractRunner } from "ethers";
import type { IKlerosCoreRulerFragment, IKlerosCoreRulerFragmentInterface } from "../../../../arbitration/devtools/DisputeResolverRuler.sol/IKlerosCoreRulerFragment.js";
export declare class IKlerosCoreRulerFragment__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "getNextDisputeID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IKlerosCoreRulerFragmentInterface;
    static connect(address: string, runner?: ContractRunner | null): IKlerosCoreRulerFragment;
}
