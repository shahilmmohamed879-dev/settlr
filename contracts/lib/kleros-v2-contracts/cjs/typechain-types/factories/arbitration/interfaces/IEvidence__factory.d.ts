import { type ContractRunner } from "ethers";
import type { IEvidence, IEvidenceInterface } from "../../../arbitration/interfaces/IEvidence.js";
export declare class IEvidence__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_externalDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_party";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_evidence";
            readonly type: "string";
        }];
        readonly name: "Evidence";
        readonly type: "event";
    }];
    static createInterface(): IEvidenceInterface;
    static connect(address: string, runner?: ContractRunner | null): IEvidence;
}
