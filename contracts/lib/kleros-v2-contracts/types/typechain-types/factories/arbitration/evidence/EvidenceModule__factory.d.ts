import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common.js";
import type { EvidenceModule, EvidenceModuleInterface } from "../../../arbitration/evidence/EvidenceModule.js";
type EvidenceModuleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EvidenceModule__factory extends ContractFactory {
    constructor(...args: EvidenceModuleConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EvidenceModule & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EvidenceModule__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b5061001d610022565b6100d3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e805468010000000000000000900460ff16156100715760405162dc149f60e41b815260040160405180910390fd5b80546001600160401b03908116146100d05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516109006100fc6000396000818161024801528181610271015261046e01526109006000f3fe6080604052600436106100605760003560e01c80630c340a2414610065578063472abf68146100a25780634f1ef286146100b957806352d1902d146100cc57806354fd4d50146100ef578063a6a7f0eb1461012d578063c4d66de81461014d575b600080fd5b34801561007157600080fd5b50600054610085906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100ae57600080fd5b506100b761016d565b005b6100b76100c736600461068a565b610234565b3480156100d857600080fd5b506100e1610461565b604051908152602001610099565b3480156100fb57600080fd5b50610120604051806040016040528060058152602001640302e382e360dc1b81525081565b6040516100999190610775565b34801561013957600080fd5b506100b76101483660046107a8565b6104bf565b34801561015957600080fd5b506100b7610168366004610824565b610508565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e805460029190600160401b900460ff16806101b6575080546001600160401b03808416911610155b156101d35760405162dc149f60e41b815260040160405180910390fd5b805468ffffffffffffffffff19166001600160401b038316908117600160401b1760ff60401b191682556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15050565b61023d826105f0565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806102bb57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166102af6000805160206108ab8339815191525490565b6001600160a01b031614155b156102d95760405163703e46dd60e11b815260040160405180910390fd5b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610333575060408051601f3d908101601f1916820190925261033091810190610846565b60015b61036057604051630c76093760e01b81526001600160a01b03831660048201526024015b60405180910390fd5b6000805160206108ab833981519152811461039157604051632a87526960e21b815260048101829052602401610357565b6000805160206108ab8339815191528390556040516001600160a01b038416907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a281511561045c576000836001600160a01b0316836040516103f8919061085f565b600060405180830381855af49150503d8060008114610433576040519150601f19603f3d011682016040523d82523d6000602084013e610438565b606091505b505090508061045a576040516339b21b5d60e11b815260040160405180910390fd5b505b505050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104ac5760405163703e46dd60e11b815260040160405180910390fd5b506000805160206108ab83398151915290565b336001600160a01b0316837f39935cf45244bc296a03d6aef1cf17779033ee27090ce9c68d432367ce10699684846040516104fb92919061087b565b60405180910390a3505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e805460019190600160401b900460ff1680610551575080546001600160401b03808416911610155b1561056e5760405162dc149f60e41b815260040160405180910390fd5b8054600160401b6001600160401b03841668ffffffffffffffffff199092168217178255600080546001600160a01b0319166001600160a01b038616179055815460ff60401b191682556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050565b6000546001600160a01b031633146106555760405162461bcd60e51b815260206004820152602260248201527f416363657373206e6f7420616c6c6f7765643a20476f7665726e6f72206f6e6c6044820152613c9760f11b6064820152608401610357565b50565b80356001600160a01b038116811461066f57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561069d57600080fd5b6106a683610658565b915060208301356001600160401b038111156106c157600080fd5b8301601f810185136106d257600080fd5b80356001600160401b038111156106eb576106eb610674565b604051601f8201601f19908116603f011681016001600160401b038111828210171561071957610719610674565b60405281815282820160200187101561073157600080fd5b816020840160208301376000602083830101528093505050509250929050565b60005b8381101561076c578181015183820152602001610754565b50506000910152565b6020815260008251806020840152610794816040850160208701610751565b601f01601f19169190910160400192915050565b6000806000604084860312156107bd57600080fd5b8335925060208401356001600160401b038111156107da57600080fd5b8401601f810186136107eb57600080fd5b80356001600160401b0381111561080157600080fd5b86602082840101111561081357600080fd5b939660209190910195509293505050565b60006020828403121561083657600080fd5b61083f82610658565b9392505050565b60006020828403121561085857600080fd5b5051919050565b60008251610871818460208701610751565b9190910192915050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f1916010191905056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220628145de46593bc4870fe957425a4010d1b9984623ab37ad87d6400f11f2884264736f6c634300081c0033";
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
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
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
            readonly name: "_externalDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "_evidence";
            readonly type: "string";
        }];
        readonly name: "submitEvidence";
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
    static createInterface(): EvidenceModuleInterface;
    static connect(address: string, runner?: ContractRunner | null): EvidenceModule;
}
export {};
//# sourceMappingURL=EvidenceModule__factory.d.ts.map