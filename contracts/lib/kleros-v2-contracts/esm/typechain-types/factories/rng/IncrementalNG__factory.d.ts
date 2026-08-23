import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type { IncrementalNG, IncrementalNGInterface } from "../../rng/IncrementalNG.js";
type IncrementalNGConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class IncrementalNG__factory extends ContractFactory {
    constructor(...args: IncrementalNGConstructorParams);
    getDeployTransaction(_start: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_start: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<IncrementalNG & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): IncrementalNG__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060405161012c38038061012c833981016040819052602c916033565b600055604b565b600060208284031215604457600080fd5b5051919050565b60d3806100596000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c806313cf90541460415780637363ae1f14606d5780638381f58a14607d575b600080fd5b605b604c3660046085565b50600080546001810190915590565b60405190815260200160405180910390f35b607b60783660046085565b50565b005b605b60005481565b600060208284031215609657600080fd5b503591905056fea2646970667358221220f41250b45f70047ded0a505af5aaba3ea7f27c2e25f586f4cabea53e19c8261164736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_start";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "number";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
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
    static createInterface(): IncrementalNGInterface;
    static connect(address: string, runner?: ContractRunner | null): IncrementalNG;
}
export {};
