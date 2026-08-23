import { type ContractRunner } from "ethers";
import type { IEvidenceV1, IEvidenceV1Interface } from "../../../kleros-v1/interfaces/IEvidenceV1.js";
export declare class IEvidenceV1__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IArbitratorV1";
            readonly name: "_arbitrator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_metaEvidenceID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_evidenceGroupID";
            readonly type: "uint256";
        }];
        readonly name: "Dispute";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IArbitratorV1";
            readonly name: "_arbitrator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_evidenceGroupID";
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
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_metaEvidenceID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_evidence";
            readonly type: "string";
        }];
        readonly name: "MetaEvidence";
        readonly type: "event";
    }];
    static createInterface(): IEvidenceV1Interface;
    static connect(address: string, runner?: ContractRunner | null): IEvidenceV1;
}
