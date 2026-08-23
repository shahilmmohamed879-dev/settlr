import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type { ChainlinkRNG, ChainlinkRNGInterface } from "../../rng/ChainlinkRNG.js";
type ChainlinkRNGConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ChainlinkRNG__factory extends ContractFactory {
    constructor(...args: ChainlinkRNGConstructorParams);
    getDeployTransaction(_governor: AddressLike, _sortitionModule: AddressLike, _vrfCoordinator: AddressLike, _keyHash: BytesLike, _subscriptionId: BigNumberish, _requestConfirmations: BigNumberish, _callbackGasLimit: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_governor: AddressLike, _sortitionModule: AddressLike, _vrfCoordinator: AddressLike, _keyHash: BytesLike, _subscriptionId: BigNumberish, _requestConfirmations: BigNumberish, _callbackGasLimit: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ChainlinkRNG & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ChainlinkRNG__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610f48380380610f4883398101604081905261002f9161021f565b8433806000816100865760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b03848116919091179091558116156100b6576100b68161015a565b5050506001600160a01b0381166100e05760405163d92e233d60e01b815260040160405180910390fd5b600280546001600160a01b03199081166001600160a01b03938416179091556003805482169983169990991790985560048054909816961695909517909555600591909155600655506007805461ffff90931665ffffffffffff19909316929092176201000063ffffffff909216919091021790556102ae565b336001600160a01b038216036101b25760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015260640161007d565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b80516001600160a01b038116811461021a57600080fd5b919050565b600080600080600080600060e0888a03121561023a57600080fd5b61024388610203565b965061025160208901610203565b955061025f60408901610203565b9450606088015193506080880151925060a088015161ffff8116811461028457600080fd5b60c089015190925063ffffffff8116811461029e57600080fd5b8091505092959891949750929550565b610c8b806102bd6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806379ba5097116100c3578063e4c0aaf41161007c578063e4c0aaf4146102e5578063e86a51cb146102f8578063f2fde38b1461030b578063f50d390d1461031e578063f9f5dd9114610331578063fc2a88c31461034457600080fd5b806379ba5097146102725780638da5cb5b1461027a5780638ea981171461028b5780639eccacf61461029e578063b0049637146102b1578063b0fb162f146102c457600080fd5b80632e1daf2f116101155780632e1daf2f146101fd5780632f68f4821461021057806339b1e245146102235780635257cd901461023657806361728f39146102565780637363ae1f1461025f57600080fd5b806309c1ba2e146101525780630c340a241461016e57806313cf9054146101995780631fe543e3146101bd57806324f74697146101d2575b600080fd5b61015b60065481565b6040519081526020015b60405180910390f35b600354610181906001600160a01b031681565b6040516001600160a01b039091168152602001610165565b61015b6101a7366004610a4f565b5060085460009081526009602052604090205490565b6101d06101cb366004610a68565b61034d565b005b6007546101e89062010000900463ffffffff1681565b60405163ffffffff9091168152602001610165565b600454610181906001600160a01b031681565b6101d061021e366004610a4f565b6103a2565b6101d0610231366004610a4f565b6103d1565b61015b610244366004610a4f565b60096020526000908152604090205481565b61015b60055481565b6101d061026d366004610a4f565b610400565b6101d061055b565b6000546001600160a01b0316610181565b6101d0610299366004610ae9565b610605565b600254610181906001600160a01b031681565b6101d06102bf366004610ae9565b6106f7565b6007546102d29061ffff1681565b60405161ffff9091168152602001610165565b6101d06102f3366004610ae9565b610743565b6101d0610306366004610b19565b61078f565b6101d0610319366004610ae9565b6107dd565b6101d061032c366004610b3f565b6107f1565b6101d061033f366004610ae9565b610833565b61015b60085481565b6002546001600160a01b031633146103925760025460405163073e64fd60e21b81523360048201526001600160a01b0390911660248201526044015b60405180910390fd5b61039d83838361085d565b505050565b6003546001600160a01b031633146103cc5760405162461bcd60e51b815260040161038990610b63565b600555565b6003546001600160a01b031633146103fb5760405162461bcd60e51b815260040161038990610b63565b600655565b6004546001600160a01b031633146104515760405162461bcd60e51b8152602060048201526014602482015273536f72746974696f6e4d6f64756c65206f6e6c7960601b6044820152606401610389565b6002546040805160c081018252600554815260065460208083019190915260075461ffff81168385015262010000900463ffffffff16606083015260016080830181905283519182019093529182526000926001600160a01b031691639b1c385e919060a08201906104c2906108e6565b8152506040518263ffffffff1660e01b81526004016104e19190610b8a565b6020604051808303816000875af1158015610500573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105249190610c26565b600881905560405190915081907f0cd21a41891ff04ecd9a8754bec97e2fb85d2a4e7694329d4dc364c796f23d0690600090a25050565b6001546001600160a01b031633146105ae5760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b6044820152606401610389565b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b6000546001600160a01b0316331480159061062b57506002546001600160a01b03163314155b1561067c57336106436000546001600160a01b031690565b60025460405163061db9c160e01b81526001600160a01b0393841660048201529183166024830152919091166044820152606401610389565b6001600160a01b0381166106a35760405163d92e233d60e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527fd1a6a14209a385a964d036e404cb5cfb71f4000cdb03c9366292430787261be69060200160405180910390a150565b6003546001600160a01b031633146107215760405162461bcd60e51b815260040161038990610b63565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6003546001600160a01b0316331461076d5760405162461bcd60e51b815260040161038990610b63565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6003546001600160a01b031633146107b95760405162461bcd60e51b815260040161038990610b63565b6007805463ffffffff909216620100000265ffffffff000019909216919091179055565b6107e5610957565b6107ee816109ac565b50565b6003546001600160a01b0316331461081b5760405162461bcd60e51b815260040161038990610b63565b6007805461ffff191661ffff92909216919091179055565b6003546001600160a01b031633146106a35760405162461bcd60e51b815260040161038990610b63565b8181600081811061087057610870610c3f565b905060200201356009600085815260200190815260200160002081905550827f5c69e7026b653d8606b5613bb00fd8c4b0504b1cbe8db600c406faac180924d5838360008181106108c3576108c3610c3f565b905060200201356040516108d991815260200190565b60405180910390a2505050565b60607f92fd13387c7fe7befbc38d303d6468778fb9731bc4583f17d92989c6fcfdeaaa8260405160240161091f91511515815260200190565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915292915050565b6000546001600160a01b031633146109aa5760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b6044820152606401610389565b565b336001600160a01b038216036109fe5760405162461bcd60e51b815260206004820152601760248201527621b0b73737ba103a3930b739b332b9103a379039b2b63360491b6044820152606401610389565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b600060208284031215610a6157600080fd5b5035919050565b600080600060408486031215610a7d57600080fd5b83359250602084013567ffffffffffffffff811115610a9b57600080fd5b8401601f81018613610aac57600080fd5b803567ffffffffffffffff811115610ac357600080fd5b8660208260051b8401011115610ad857600080fd5b939660209190910195509293505050565b600060208284031215610afb57600080fd5b81356001600160a01b0381168114610b1257600080fd5b9392505050565b600060208284031215610b2b57600080fd5b813563ffffffff81168114610b1257600080fd5b600060208284031215610b5157600080fd5b813561ffff81168114610b1257600080fd5b6020808252600d908201526c476f7665726e6f72206f6e6c7960981b604082015260600190565b60208152815160208201526020820151604082015261ffff604083015116606082015263ffffffff606083015116608082015263ffffffff60808301511660a0820152600060a083015160c08084015280518060e085015260005b81811015610c03576020818401810151610100878401015201610be5565b5060006101008286010152610100601f19601f8301168501019250505092915050565b600060208284031215610c3857600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220f4b2ae7146a32f0fc33c7584f1c5b3aabdd589295b6cd609697aa860d6d5e09d64736f6c634300081c0033";
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
            readonly internalType: "address";
            readonly name: "_vrfCoordinator";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_keyHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_subscriptionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16";
            readonly name: "_requestConfirmations";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint32";
            readonly name: "_callbackGasLimit";
            readonly type: "uint32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "have";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "want";
            readonly type: "address";
        }];
        readonly name: "OnlyCoordinatorCanFulfill";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "have";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "coordinator";
            readonly type: "address";
        }];
        readonly name: "OnlyOwnerOrCoordinator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroAddress";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "vrfCoordinator";
            readonly type: "address";
        }];
        readonly name: "CoordinatorSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferRequested";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
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
            readonly name: "randomWord";
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
        readonly name: "acceptOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "callbackGasLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_callbackGasLimit";
            readonly type: "uint32";
        }];
        readonly name: "changeCallbackGasLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "bytes32";
            readonly name: "_keyHash";
            readonly type: "bytes32";
        }];
        readonly name: "changeKeyHash";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_requestConfirmations";
            readonly type: "uint16";
        }];
        readonly name: "changeRequestConfirmations";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_subscriptionId";
            readonly type: "uint256";
        }];
        readonly name: "changeSubscriptionId";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_vrfCoordinator";
            readonly type: "address";
        }];
        readonly name: "changeVrfCoordinator";
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
        readonly name: "keyHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
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
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "requestId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "randomWords";
            readonly type: "uint256[]";
        }];
        readonly name: "rawFulfillRandomWords";
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
        readonly inputs: readonly [];
        readonly name: "requestConfirmations";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
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
        readonly inputs: readonly [];
        readonly name: "s_vrfCoordinator";
        readonly outputs: readonly [{
            readonly internalType: "contract IVRFCoordinatorV2Plus";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_vrfCoordinator";
            readonly type: "address";
        }];
        readonly name: "setCoordinator";
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
    }, {
        readonly inputs: readonly [];
        readonly name: "subscriptionId";
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
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ChainlinkRNGInterface;
    static connect(address: string, runner?: ContractRunner | null): ChainlinkRNG;
}
export {};
