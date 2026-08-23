import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common.js";
import type { DisputeTemplateRegistryProxy, DisputeTemplateRegistryProxyInterface } from "../../../proxy/KlerosProxies.sol/DisputeTemplateRegistryProxy.js";
type DisputeTemplateRegistryProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DisputeTemplateRegistryProxy__factory extends ContractFactory {
    constructor(...args: DisputeTemplateRegistryProxyConstructorParams);
    getDeployTransaction(_implementation: AddressLike, _data: BytesLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_implementation: AddressLike, _data: BytesLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<DisputeTemplateRegistryProxy & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): DisputeTemplateRegistryProxy__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161030838038061030883398101604081905261002f91610151565b8181817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55805160001461010e576000826001600160a01b0316826040516100779190610225565b600060405180830381855af49150503d80600081146100b2576040519150601f19603f3d011682016040523d82523d6000602084013e6100b7565b606091505b505090508061010c5760405162461bcd60e51b815260206004820152601860248201527f50726f787920436f6e7374727563746f72206661696c65640000000000000000604482015260640160405180910390fd5b505b50505050610241565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610148578181015183820152602001610130565b50506000910152565b6000806040838503121561016457600080fd5b82516001600160a01b038116811461017b57600080fd5b60208401519092506001600160401b0381111561019757600080fd5b8301601f810185136101a857600080fd5b80516001600160401b038111156101c1576101c1610117565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101ef576101ef610117565b60405281815282820160200187101561020757600080fd5b61021882602083016020860161012d565b8093505050509250929050565b6000825161023781846020870161012d565b9190910192915050565b60b98061024f6000396000f3fe608060405236603757603560317f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6060565b005b603560317f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e808015607e573d6000f35b3d6000fdfea2646970667358221220c5a63c370bd1e5c29d148b45ecb1c6ba27ace4fde028c998100ed1a65bdeedc564736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_implementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): DisputeTemplateRegistryProxyInterface;
    static connect(address: string, runner?: ContractRunner | null): DisputeTemplateRegistryProxy;
}
export {};
