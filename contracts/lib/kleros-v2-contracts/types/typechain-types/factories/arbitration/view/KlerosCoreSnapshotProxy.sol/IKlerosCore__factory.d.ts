import { type ContractRunner } from "ethers";
import type { IKlerosCore, IKlerosCoreInterface } from "../../../../arbitration/view/KlerosCoreSnapshotProxy.sol/IKlerosCore.js";
export declare class IKlerosCore__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "sortitionModule";
        readonly outputs: readonly [{
            readonly internalType: "contract ISortitionModule";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IKlerosCoreInterface;
    static connect(address: string, runner?: ContractRunner | null): IKlerosCore;
}
//# sourceMappingURL=IKlerosCore__factory.d.ts.map