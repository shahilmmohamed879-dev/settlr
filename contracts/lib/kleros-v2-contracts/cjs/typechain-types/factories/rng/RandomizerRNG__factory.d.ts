import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type { RandomizerRNG, RandomizerRNGInterface } from "../../rng/RandomizerRNG.js";
type RandomizerRNGConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RandomizerRNG__factory extends ContractFactory {
    constructor(...args: RandomizerRNGConstructorParams);
    getDeployTransaction(_governor: AddressLike, _sortitionModule: AddressLike, _randomizer: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_governor: AddressLike, _sortitionModule: AddressLike, _randomizer: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RandomizerRNG & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RandomizerRNG__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50604051610716380380610716833981016040819052602c91608a565b600080546001600160a01b039485166001600160a01b03199182161790915560018054938516938216939093179092556002805491909316911617905561c35060035560d0565b6001600160a01b0381168114608757600080fd5b50565b600080600060608486031215609e57600080fd5b835160a7816073565b602085015190935060b6816073565b604085015190925060c5816073565b809150509250925092565b610637806100df6000396000f3fe608060405234801561001057600080fd5b50600436106100ca5760003560e01c8063767bcab51161007c578063767bcab5146101955780638a54942f146101a8578063b0049637146101bb578063e4c0aaf4146101ce578063ebe93caf146101e1578063f10fb584146101f4578063fc2a88c31461020757600080fd5b80630c340a24146100cf57806313cf9054146100ff57806324f74697146101315780632e1daf2f1461013a5780634e07c9391461014d5780635257cd90146101625780637363ae1f14610182575b600080fd5b6000546100e2906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61012361010d366004610556565b5060045460009081526005602052604090205490565b6040519081526020016100f6565b61012360035481565b6001546100e2906001600160a01b031681565b61016061015b366004610556565b610210565b005b610123610170366004610556565b60056020526000908152604090205481565b610160610190366004610556565b6102aa565b6101606101a336600461056f565b6103a6565b6101606101b6366004610556565b6103f2565b6101606101c936600461056f565b610421565b6101606101dc36600461056f565b61046d565b6101606101ef36600461059f565b6104b9565b6002546100e2906001600160a01b031681565b61012360045481565b6000546001600160a01b031633146102435760405162461bcd60e51b815260040161023a906105c1565b60405180910390fd5b600254604051632465f8f560e01b8152336004820152602481018390526001600160a01b0390911690632465f8f590604401600060405180830381600087803b15801561028f57600080fd5b505af11580156102a3573d6000803e3d6000fd5b5050505050565b6001546001600160a01b031633146102fb5760405162461bcd60e51b8152602060048201526014602482015273536f72746974696f6e4d6f64756c65206f6e6c7960601b604482015260640161023a565b60025460035460405163d845a4b360e01b815260048101919091526000916001600160a01b03169063d845a4b3906024016020604051808303816000875af115801561034b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036f91906105e8565b600481905560405190915081907f0cd21a41891ff04ecd9a8754bec97e2fb85d2a4e7694329d4dc364c796f23d0690600090a25050565b6000546001600160a01b031633146103d05760405162461bcd60e51b815260040161023a906105c1565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461041c5760405162461bcd60e51b815260040161023a906105c1565b600355565b6000546001600160a01b0316331461044b5760405162461bcd60e51b815260040161023a906105c1565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146104975760405162461bcd60e51b815260040161023a906105c1565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6002546001600160a01b031633146105055760405162461bcd60e51b815260206004820152600f60248201526e52616e646f6d697a6572206f6e6c7960881b604482015260640161023a565b600082815260056020526040908190208290555182907f5c69e7026b653d8606b5613bb00fd8c4b0504b1cbe8db600c406faac180924d59061054a9084815260200190565b60405180910390a25050565b60006020828403121561056857600080fd5b5035919050565b60006020828403121561058157600080fd5b81356001600160a01b038116811461059857600080fd5b9392505050565b600080604083850312156105b257600080fd5b50508035926020909101359150565b6020808252600d908201526c476f7665726e6f72206f6e6c7960981b604082015260600190565b6000602082840312156105fa57600080fd5b505191905056fea26469706673582212203bca84fde0b8fe25e14ed629cea19993e1ed80198acb01fb29f874bdab2389f164736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_governor";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_sortitionModule";
            readonly type: "address";
        }, {
            readonly internalType: "contract IRandomizer";
            readonly name: "_randomizer";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "requestId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "randomWords";
            readonly type: "uint256";
        }];
        readonly name: "RequestFulfilled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "requestId";
            readonly type: "uint256";
        }];
        readonly name: "RequestSent";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "callbackGasLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_governor";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sortitionModule";
            readonly type: "address";
        }];
        readonly name: "changeSortitionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governor";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lastRequestId";
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
            readonly name: "requestId";
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
        readonly inputs: readonly [];
        readonly name: "randomizer";
        readonly outputs: readonly [{
            readonly internalType: "contract IRandomizer";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_id";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_value";
            readonly type: "bytes32";
        }];
        readonly name: "randomizerCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "randomizerWithdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "receiveRandomness";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "randomNumber";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "requestRandomness";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_callbackGasLimit";
            readonly type: "uint256";
        }];
        readonly name: "setCallbackGasLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_randomizer";
            readonly type: "address";
        }];
        readonly name: "setRandomizer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sortitionModule";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): RandomizerRNGInterface;
    static connect(address: string, runner?: ContractRunner | null): RandomizerRNG;
}
export {};
