import { type ContractRunner } from "ethers";
import type { IDisputeTemplateRegistry, IDisputeTemplateRegistryInterface } from "../../../arbitration/interfaces/IDisputeTemplateRegistry.js";
export declare class IDisputeTemplateRegistry__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_templateId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "_templateTag";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_templateData";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_templateDataMappings";
            readonly type: "string";
        }];
        readonly name: "DisputeTemplate";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_templateTag";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_templateData";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_templateDataMappings";
            readonly type: "string";
        }];
        readonly name: "setDisputeTemplate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "templateId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IDisputeTemplateRegistryInterface;
    static connect(address: string, runner?: ContractRunner | null): IDisputeTemplateRegistry;
}
//# sourceMappingURL=IDisputeTemplateRegistry__factory.d.ts.map