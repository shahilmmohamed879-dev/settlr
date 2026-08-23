import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type { PolicyRegistry, PolicyRegistryInterface } from "../../arbitration/PolicyRegistry.js";
type PolicyRegistryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolicyRegistry__factory extends ContractFactory {
    constructor(...args: PolicyRegistryConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<PolicyRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): PolicyRegistry__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b5061001d610022565b6100d3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e805468010000000000000000900460ff16156100715760405162dc149f60e41b815260040160405180910390fd5b80546001600160401b03908116146100d05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b608051610cbc6100fc6000396000818161029e015281816102c701526104c40152610cbc6000f3fe6080604052600436106100765760003560e01c80630c340a241461007b578063472abf68146100b85780634f1ef286146100cf57806352d1902d146100e257806354fd4d5014610105578063bdf7378014610143578063c4d66de814610163578063d3e8948314610183578063e4c0aaf4146101a3575b600080fd5b34801561008757600080fd5b5060005461009b906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100c457600080fd5b506100cd6101c3565b005b6100cd6100dd3660046107db565b61028a565b3480156100ee57600080fd5b506100f76104b7565b6040519081526020016100af565b34801561011157600080fd5b50610136604051806040016040528060058152602001640302e382e360dc1b81525081565b6040516100af91906108c6565b34801561014f57600080fd5b506100cd61015e366004610941565b610515565b34801561016f57600080fd5b506100cd61017e3660046109be565b6105ae565b34801561018f57600080fd5b5061013661019e3660046109e0565b610696565b3480156101af57600080fd5b506100cd6101be3660046109be565b610730565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e805460029190600160401b900460ff168061020c575080546001600160401b03808416911610155b156102295760405162dc149f60e41b815260040160405180910390fd5b805468ffffffffffffffffff19166001600160401b038316908117600160401b1760ff60401b191682556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15050565b6102938261077c565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148061031157507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610305600080516020610c678339815191525490565b6001600160a01b031614155b1561032f5760405163703e46dd60e11b815260040160405180910390fd5b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610389575060408051601f3d908101601f19168201909252610386918101906109f9565b60015b6103b657604051630c76093760e01b81526001600160a01b03831660048201526024015b60405180910390fd5b600080516020610c6783398151915281146103e757604051632a87526960e21b8152600481018290526024016103ad565b600080516020610c678339815191528390556040516001600160a01b038416907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a28151156104b2576000836001600160a01b03168360405161044e9190610a12565b600060405180830381855af49150503d8060008114610489576040519150601f19603f3d011682016040523d82523d6000602084013e61048e565b606091505b50509050806104b0576040516339b21b5d60e11b815260040160405180910390fd5b505b505050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105025760405163703e46dd60e11b815260040160405180910390fd5b50600080516020610c6783398151915290565b6000546001600160a01b0316331461053f5760405162461bcd60e51b81526004016103ad90610a2e565b6000858152600160205260409020610558828483610ae9565b50847f61f7110245e82eddd3b134d1e1607420d4a4dcdab30f5abdbbc9c3485b5dd2a48585600160008a815260200190815260200160002060405161059f93929190610ba8565b60405180910390a25050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e805460019190600160401b900460ff16806105f7575080546001600160401b03808416911610155b156106145760405162dc149f60e41b815260040160405180910390fd5b8054600160401b6001600160401b03841668ffffffffffffffffff199092168217178255600080546001600160a01b0319166001600160a01b038616179055815460ff60401b191682556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050565b600160205260009081526040902080546106af90610a61565b80601f01602080910402602001604051908101604052809291908181526020018280546106db90610a61565b80156107285780601f106106fd57610100808354040283529160200191610728565b820191906000526020600020905b81548152906001019060200180831161070b57829003601f168201915b505050505081565b6000546001600160a01b0316331461075a5760405162461bcd60e51b81526004016103ad90610a2e565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146107a65760405162461bcd60e51b81526004016103ad90610a2e565b50565b80356001600160a01b03811681146107c057600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156107ee57600080fd5b6107f7836107a9565b915060208301356001600160401b0381111561081257600080fd5b8301601f8101851361082357600080fd5b80356001600160401b0381111561083c5761083c6107c5565b604051601f8201601f19908116603f011681016001600160401b038111828210171561086a5761086a6107c5565b60405281815282820160200187101561088257600080fd5b816020840160208301376000602083830101528093505050509250929050565b60005b838110156108bd5781810151838201526020016108a5565b50506000910152565b60208152600082518060208401526108e58160408501602087016108a2565b601f01601f19169190910160400192915050565b60008083601f84011261090b57600080fd5b5081356001600160401b0381111561092257600080fd5b60208301915083602082850101111561093a57600080fd5b9250929050565b60008060008060006060868803121561095957600080fd5b8535945060208601356001600160401b0381111561097657600080fd5b610982888289016108f9565b90955093505060408601356001600160401b038111156109a157600080fd5b6109ad888289016108f9565b969995985093965092949392505050565b6000602082840312156109d057600080fd5b6109d9826107a9565b9392505050565b6000602082840312156109f257600080fd5b5035919050565b600060208284031215610a0b57600080fd5b5051919050565b60008251610a248184602087016108a2565b9190910192915050565b6020808252601990820152784e6f20616c6c6f7765643a20676f7665726e6f72206f6e6c7960381b604082015260600190565b600181811c90821680610a7557607f821691505b602082108103610a9557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156104b257806000526020600020601f840160051c81016020851015610ac25750805b601f840160051c820191505b81811015610ae25760008155600101610ace565b5050505050565b6001600160401b03831115610b0057610b006107c5565b610b1483610b0e8354610a61565b83610a9b565b6000601f841160018114610b485760008515610b305750838201355b600019600387901b1c1916600186901b178355610ae2565b600083815260209020601f19861690835b82811015610b795786850135825560209485019460019092019101610b59565b5086821015610b965760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b60408152826040820152828460608301376000606084830101526000601f19601f8501168201606083820301602084015260008454610be681610a61565b8060608501526001821660008114610c055760018114610c2457610c58565b60ff19831660808601526020606083151560051b870101019350610c58565b87600052602060002060005b83811015610c4f57815460808883010152600190910190602001610c30565b86016080019450505b50919897505050505050505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220684075982165516118648b659dcb0926b6b6a10f8691c384b0cd4c665fe90b6164736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "InvalidImplementation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "slot";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_courtID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_courtName";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_policy";
            readonly type: "string";
        }];
        readonly name: "PolicyUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_governor";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "initialize2";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "policies";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_courtID";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "_courtName";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_policy";
            readonly type: "string";
        }];
        readonly name: "setPolicy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): PolicyRegistryInterface;
    static connect(address: string, runner?: ContractRunner | null): PolicyRegistry;
}
export {};
