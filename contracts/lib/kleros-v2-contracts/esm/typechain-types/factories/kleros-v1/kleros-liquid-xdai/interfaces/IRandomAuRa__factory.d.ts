import { type ContractRunner } from "ethers";
import type { IRandomAuRa, IRandomAuRaInterface } from "../../../../kleros-v1/kleros-liquid-xdai/interfaces/IRandomAuRa.js";
export declare class IRandomAuRa__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "collectRoundLength";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "currentSeed";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isCommitPhase";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nextCommitPhaseStartBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IRandomAuRaInterface;
    static connect(address: string, runner?: ContractRunner | null): IRandomAuRa;
}
