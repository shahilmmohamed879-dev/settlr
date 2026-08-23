import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type { UUPSProxy, UUPSProxyInterface } from "../../proxy/UUPSProxy.js";
type UUPSProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UUPSProxy__factory extends ContractFactory {
    constructor(...args: UUPSProxyConstructorParams);
    getDeployTransaction(_implementation: AddressLike, _data: BytesLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_implementation: AddressLike, _data: BytesLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<UUPSProxy & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): UUPSProxy__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161030438038061030483398101604081905261002f9161014d565b817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55805160001461010c576000826001600160a01b0316826040516100759190610221565b600060405180830381855af49150503d80600081146100b0576040519150601f19603f3d011682016040523d82523d6000602084013e6100b5565b606091505b505090508061010a5760405162461bcd60e51b815260206004820152601860248201527f50726f787920436f6e7374727563746f72206661696c65640000000000000000604482015260640160405180910390fd5b505b505061023d565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561014457818101518382015260200161012c565b50506000910152565b6000806040838503121561016057600080fd5b82516001600160a01b038116811461017757600080fd5b60208401519092506001600160401b0381111561019357600080fd5b8301601f810185136101a457600080fd5b80516001600160401b038111156101bd576101bd610113565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101eb576101eb610113565b60405281815282820160200187101561020357600080fd5b610214826020830160208601610129565b8093505050509250929050565b60008251610233818460208701610129565b9190910192915050565b60b98061024b6000396000f3fe608060405236603757603560317f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6060565b005b603560317f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e808015607e573d6000f35b3d6000fdfea264697066735822122081649864e544a2f9f61cfd8734fe4e3f3ed6e0548e1656fb13c6b43d5748212464736f6c634300081c0033";
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
    static createInterface(): UUPSProxyInterface;
    static connect(address: string, runner?: ContractRunner | null): UUPSProxy;
}
export {};
