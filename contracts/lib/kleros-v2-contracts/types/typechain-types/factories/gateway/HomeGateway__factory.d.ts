import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type { HomeGateway, HomeGatewayInterface } from "../../gateway/HomeGateway.js";
type HomeGatewayConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HomeGateway__factory extends ContractFactory {
    constructor(...args: HomeGatewayConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<HomeGateway & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): HomeGateway__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b5061001d610022565b6100d3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e805468010000000000000000900460ff16156100715760405162dc149f60e41b815260040160405180910390fd5b80546001600160401b03908116146100d05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516119ad6100fc60003960008181610ada01528181610b030152610cfb01526119ad6000f3fe6080604052600436106101405760003560e01c80637608c3e8116100b6578063c5ffcf701161006f578063c5ffcf701461038e578063c95c0951146103ac578063cddbfa14146103d9578063e4c0aaf414610433578063fc4ba3a214610453578063fc548f081461048057600080fd5b80637608c3e8146102d85780638d7c7daa146102f857806396882403146103185780639e72c1531461032e578063ba4bc7631461034e578063c0fab0351461037b57600080fd5b8063376dcc0d11610108578063376dcc0d146102045780634f1ef2861461022457806352d1902d1461023757806354fd4d501461025a578063647846a5146102985780636cc6cde1146102b857600080fd5b806302d3e236146101455780630c340a24146101825780631a440de6146101a2578063311a6c56146101c457806332b5a1b3146101e4575b600080fd5b34801561015157600080fd5b50600254610165906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561018e57600080fd5b50600054610165906001600160a01b031681565b3480156101ae57600080fd5b506101c26101bd36600461132b565b6104a0565b005b3480156101d057600080fd5b506101c26101df36600461134f565b6104f5565b3480156101f057600080fd5b506101c26101ff366004611381565b610636565b34801561021057600080fd5b506101c261021f366004611583565b610763565b6101c26102323660046115c7565b610ac6565b34801561024357600080fd5b5061024c610cee565b604051908152602001610179565b34801561026657600080fd5b5061028b604051806040016040528060058152602001640302e382e360dc1b81525081565b6040516101799190611666565b3480156102a457600080fd5b50600554610165906001600160a01b031681565b3480156102c457600080fd5b50600154610165906001600160a01b031681565b3480156102e457600080fd5b506101c26102f336600461132b565b610d4c565b34801561030457600080fd5b50600454610165906001600160a01b031681565b34801561032457600080fd5b5061024c60035481565b34801561033a57600080fd5b506101c261034936600461132b565b610d98565b34801561035a57600080fd5b5061024c610369366004611679565b60066020526000908152604090205481565b6101c2610389366004611692565b610de4565b34801561039a57600080fd5b506004546001600160a01b0316610165565b3480156103b857600080fd5b5061024c6103c7366004611679565b60076020526000908152604090205481565b3480156103e557600080fd5b506104166103f4366004611679565b600860205260009081526040902080546001909101546001600160a01b031682565b604080519283526001600160a01b03909116602083015201610179565b34801561043f57600080fd5b506101c261044e36600461132b565b611071565b34801561045f57600080fd5b5061024c61046e366004611679565b60009081526007602052604090205490565b34801561048c57600080fd5b506101c261049b36600461132b565b6110bd565b6000546001600160a01b031633146104d35760405162461bcd60e51b81526004016104ca906116ce565b60405180910390fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146105415760405162461bcd60e51b815260206004820152600f60248201526e27b7363c9020b93134ba3930ba37b960891b60448201526064016104ca565b6000828152600660209081526040808320548084526008835281842082518084018452815481526001909101546001600160a01b03168185018190528351948501839052928401869052606084019290925292909163a60a4db560e01b919060800160408051601f1981840301815290829052600254600480546317e1625b60e21b85529294506001600160a01b0391821693635f85896c936105ea9316918791879101611701565b6020604051808303816000875af1158015610609573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062d919061173e565b50505050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e805460019190600160401b900460ff168061067f575080546001600160401b03808416911610155b1561069c5760405162dc149f60e41b815260040160405180910390fd5b8054600160401b6001600160401b03841668ffffffffffffffffff199092168217178255600080546001600160a01b03199081166001600160a01b038c8116919091179092556001805482168b84161790556002805482168a8416179055600388905560048054821688841617905560058054909116918616919091179055815460ff60401b191682556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15050505050505050565b6005546001600160a01b03166107c55760405162461bcd60e51b815260206004820152602160248201527f46656573207061696420696e206e61746976652063757272656e6379206f6e6c6044820152607960f81b60648201526084016104ca565b6003548260200151146107ea5760405162461bcd60e51b81526004016104ca90611767565b8151602080840151604080860151606087015160e0880151610100890151935160009761081b97909695910161179e565b60408051601f1981840301815291815281516020928301206000818152600890935291206001810154919250906001600160a01b03161561086e5760405162461bcd60e51b81526004016104ca90611808565b600554610886906001600160a01b0316333086611109565b6108c45760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b60448201526064016104ca565b6001546005546108e1916001600160a01b039182169116856111e5565b6109295760405162461bcd60e51b8152602060048201526019602482015278105b1b1bddd85b98d9481a5b98dc99585cd94819985a5b1959603a1b60448201526064016104ca565b60015460e0850151610100860151600554604051633d941b6d60e21b81526000946001600160a01b039081169463f6506db4946109729491939092909116908a90600401611839565b6020604051808303816000875af1158015610991573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b5919061186e565b6000818152600660209081526040808320879055868352600790915290819020829055600180850180546001600160a01b0319163317905554608088015160a089015160c08a0151935194955085946001600160a01b0393909316937f8bd32f430ff060e6bd204709b3790c9807987263d3230c580dc80b5f89e2718693610a3f93929190611887565b60405180910390a380856060015186604001516001600160a01b03167f2ecee3c6efdf9fe2284aca27b27774f7fdd967ff823bb1b329090ff881d8c40c600160009054906101000a90046001600160a01b031689602001518a608001518b60a001518c60c00151604051610ab79594939291906118a6565b60405180910390a45050505050565b610acf826112e9565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610b4d57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610b416000805160206119588339815191525490565b6001600160a01b031614155b15610b6b5760405163703e46dd60e11b815260040160405180910390fd5b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610bc5575060408051601f3d908101601f19168201909252610bc29181019061186e565b60015b610bed57604051630c76093760e01b81526001600160a01b03831660048201526024016104ca565b6000805160206119588339815191528114610c1e57604051632a87526960e21b8152600481018290526024016104ca565b6000805160206119588339815191528390556040516001600160a01b038416907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2815115610ce9576000836001600160a01b031683604051610c8591906118d9565b600060405180830381855af49150503d8060008114610cc0576040519150601f19603f3d011682016040523d82523d6000602084013e610cc5565b606091505b5050905080610ce7576040516339b21b5d60e11b815260040160405180910390fd5b505b505050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610d395760405163703e46dd60e11b815260040160405180910390fd5b5060008051602061195883398151915290565b6000546001600160a01b03163314610d765760405162461bcd60e51b81526004016104ca906116ce565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610dc25760405162461bcd60e51b81526004016104ca906116ce565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6005546001600160a01b031615610e375760405162461bcd60e51b815260206004820152601760248201527646656573207061696420696e204552433230206f6e6c7960481b60448201526064016104ca565b600354816020015114610e5c5760405162461bcd60e51b81526004016104ca90611767565b8051602080830151604080850151606086015160e08701516101008801519351600097610e8d97909695910161179e565b60408051601f1981840301815291815281516020928301206000818152600890935291206001810154919250906001600160a01b031615610ee05760405162461bcd60e51b81526004016104ca90611808565b60015460e084015161010085015160405163c13517e160e01b81526000936001600160a01b03169263c13517e1923492610f1e9291906004016118f5565b60206040518083038185885af1158015610f3c573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610f61919061186e565b6000818152600660209081526040808320879055868352600790915290819020829055600180850180546001600160a01b0319163317905554608087015160a088015160c0890151935194955085946001600160a01b0393909316937f8bd32f430ff060e6bd204709b3790c9807987263d3230c580dc80b5f89e2718693610feb93929190611887565b60405180910390a380846060015185604001516001600160a01b03167f2ecee3c6efdf9fe2284aca27b27774f7fdd967ff823bb1b329090ff881d8c40c600160009054906101000a90046001600160a01b0316886020015189608001518a60a001518b60c001516040516110639594939291906118a6565b60405180910390a450505050565b6000546001600160a01b0316331461109b5760405162461bcd60e51b81526004016104ca906116ce565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146110e75760405162461bcd60e51b81526004016104ca906116ce565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6040516001600160a01b038481166024830152838116604483015260648201839052600091829182919088169060840160408051601f198184030181529181526020820180516001600160e01b03166323b872dd60e01b1790525161116e91906118d9565b6000604051808303816000865af19150503d80600081146111ab576040519150601f19603f3d011682016040523d82523d6000602084013e6111b0565b606091505b50915091508180156111da5750805115806111da5750808060200190518101906111da919061190e565b979650505050505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063095ea7b39085908590849063dd62ed3e90604401602060405180830381865afa158015611241573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611265919061186e565b61126f9190611930565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af11580156112ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112de919061190e565b506001949350505050565b6000546001600160a01b031633146113135760405162461bcd60e51b81526004016104ca906116ce565b50565b6001600160a01b038116811461131357600080fd5b60006020828403121561133d57600080fd5b813561134881611316565b9392505050565b6000806040838503121561136257600080fd5b50508035926020909101359150565b803561137c81611316565b919050565b60008060008060008060c0878903121561139a57600080fd5b86356113a581611316565b955060208701356113b581611316565b945060408701356113c581611316565b93506060870135925060808701356113dc81611316565b915060a08701356113ec81611316565b809150509295509295509295565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715611433576114336113fa565b60405290565b600082601f83011261144a57600080fd5b81356001600160401b0380821115611464576114646113fa565b604051601f8301601f19908116603f0116810190828211818310171561148c5761148c6113fa565b816040528381528660208588010111156114a557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600061012082840312156114d857600080fd5b6114e0611410565b905081358152602082013560208201526114fc60408301611371565b6040820152606082013560608201526080820135608082015260a082013560a082015260c08201356001600160401b038082111561153957600080fd5b61154585838601611439565b60c084015260e084013560e08401526101009150818401358181111561156a57600080fd5b61157686828701611439565b8385015250505092915050565b6000806040838503121561159657600080fd5b82356001600160401b038111156115ac57600080fd5b6115b8858286016114c5565b95602094909401359450505050565b600080604083850312156115da57600080fd5b82356115e581611316565b915060208301356001600160401b0381111561160057600080fd5b61160c85828601611439565b9150509250929050565b60005b83811015611631578181015183820152602001611619565b50506000910152565b60008151808452611652816020860160208601611616565b601f01601f19169290920160200192915050565b602081526000611348602083018461163a565b60006020828403121561168b57600080fd5b5035919050565b6000602082840312156116a457600080fd5b81356001600160401b038111156116ba57600080fd5b6116c6848285016114c5565b949350505050565b6020808252601990820152784e6f20616c6c6f7765643a20676f7665726e6f72206f6e6c7960381b604082015260600190565b6001600160a01b03841681526001600160e01b0319831660208201526060604082018190526000906117359083018461163a565b95945050505050565b60006020828403121561175057600080fd5b81516001600160401b038116811461134857600080fd5b6020808252601e908201527f466f726569676e20636861696e204944206e6f7420737570706f727465640000604082015260600190565b6c6372656174654469737075746560981b815286600d82015285602d8201526bffffffffffffffffffffffff198560601b16604d820152836061820152826081820152600082516117f68160a1850160208701611616565b9190910160a101979650505050505050565b602080825260179082015276111a5cdc1d5d1948185b1c9958591e481c995b185e5959604a1b604082015260600190565b848152608060208201526000611852608083018661163a565b6001600160a01b03949094166040830152506060015292915050565b60006020828403121561188057600080fd5b5051919050565b838152826020820152606060408201526000611735606083018461163a565b60018060a01b038616815284602082015283604082015282606082015260a0608082015260006111da60a083018461163a565b600082516118eb818460208701611616565b9190910192915050565b8281526040602082015260006116c6604083018461163a565b60006020828403121561192057600080fd5b8151801515811461134857600080fd5b8082018082111561195157634e487b7160e01b600052601160045260246000fd5b9291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220e10024947ba2fd848d681ea7accea7578e791e802fc45670c6e73aab228afe2464736f6c63430008180033";
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
            readonly internalType: "contract IArbitratorV2";
            readonly name: "_arbitrator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_arbitrableChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_arbitrable";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_arbitrableDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_arbitratorDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_externalDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_templateId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_templateUri";
            readonly type: "string";
        }];
        readonly name: "CrossChainDisputeIncoming";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IArbitratorV2";
            readonly name: "_arbitrator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_arbitratorDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_externalDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_templateId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_templateUri";
            readonly type: "string";
        }];
        readonly name: "DisputeRequest";
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
            readonly internalType: "contract IArbitratorV2";
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
            readonly name: "_ruling";
            readonly type: "uint256";
        }];
        readonly name: "Ruling";
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
        readonly name: "arbitrator";
        readonly outputs: readonly [{
            readonly internalType: "contract IArbitratorV2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IArbitratorV2";
            readonly name: "_arbitrator";
            readonly type: "address";
        }];
        readonly name: "changeArbitrator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_feeToken";
            readonly type: "address";
        }];
        readonly name: "changeFeeToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_foreignGateway";
            readonly type: "address";
        }];
        readonly name: "changeForeignGateway";
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
            readonly internalType: "contract IVeaInbox";
            readonly name: "_veaInbox";
            readonly type: "address";
        }];
        readonly name: "changeVea";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_disputeHash";
            readonly type: "bytes32";
        }];
        readonly name: "disputeHashToHomeID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "disputeHashtoID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "disputeHashtoRelayedData";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "arbitrationCost";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "disputeIDtoHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "feeToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "foreignChainID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "foreignGateway";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
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
        }, {
            readonly internalType: "contract IArbitratorV2";
            readonly name: "_arbitrator";
            readonly type: "address";
        }, {
            readonly internalType: "contract IVeaInbox";
            readonly name: "_veaInbox";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_foreignChainID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_foreignGateway";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_feeToken";
            readonly type: "address";
        }];
        readonly name: "initialize";
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
        readonly inputs: readonly [];
        readonly name: "receiverGateway";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "foreignBlockHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "foreignChainID";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "foreignArbitrable";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "foreignDisputeID";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "externalDisputeID";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "templateId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "templateUri";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "choices";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IHomeGateway.RelayCreateDisputeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_feeAmount";
            readonly type: "uint256";
        }];
        readonly name: "relayCreateDispute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "foreignBlockHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "foreignChainID";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "foreignArbitrable";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "foreignDisputeID";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "externalDisputeID";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "templateId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "templateUri";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "choices";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IHomeGateway.RelayCreateDisputeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }];
        readonly name: "relayCreateDispute";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_ruling";
            readonly type: "uint256";
        }];
        readonly name: "rule";
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
        readonly name: "veaInbox";
        readonly outputs: readonly [{
            readonly internalType: "contract IVeaInbox";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
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
    static createInterface(): HomeGatewayInterface;
    static connect(address: string, runner?: ContractRunner | null): HomeGateway;
}
export {};
//# sourceMappingURL=HomeGateway__factory.d.ts.map