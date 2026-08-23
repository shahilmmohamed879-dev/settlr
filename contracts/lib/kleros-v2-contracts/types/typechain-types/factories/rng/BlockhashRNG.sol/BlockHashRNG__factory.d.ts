import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common.js";
import type { BlockHashRNG, BlockHashRNGInterface } from "../../../rng/BlockhashRNG.sol/BlockHashRNG.js";
type BlockHashRNGConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BlockHashRNG__factory extends ContractFactory {
    constructor(...args: BlockHashRNGConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BlockHashRNG & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BlockHashRNG__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b506101698061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806313cf9054146100465780635257cd901461006b5780637363ae1f1461008b575b600080fd5b6100596100543660046100f3565b61009e565b60405190815260200160405180910390f35b6100596100793660046100f3565b60006020819052908152604090205481565b61009c6100993660046100f3565b50565b005b60008181526020819052604090205480156100b857919050565b438210156100de578140156100cf575080406100de565b6100da60014361010c565b4090505b60009182526020829052604090912081905590565b60006020828403121561010557600080fd5b5035919050565b8181038181111561012d57634e487b7160e01b600052601160045260246000fd5b9291505056fea2646970667358221220f5b770c2f0275e9fe1a2fa40c9ebd1a8f79ee127a358c7fa11085b6d3a2486c564736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "block";
            readonly type: "uint256";
        }];
        readonly name: "randomNumbers";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "number";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }];
        readonly name: "receiveRandomness";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "randomNumber";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }];
        readonly name: "requestRandomness";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): BlockHashRNGInterface;
    static connect(address: string, runner?: ContractRunner | null): BlockHashRNG;
}
export {};
//# sourceMappingURL=BlockHashRNG__factory.d.ts.map