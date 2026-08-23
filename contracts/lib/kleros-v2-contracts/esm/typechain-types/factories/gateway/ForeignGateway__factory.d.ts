import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type { ForeignGateway, ForeignGatewayInterface } from "../../gateway/ForeignGateway.js";
type ForeignGatewayConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ForeignGateway__factory extends ContractFactory {
    constructor(...args: ForeignGatewayConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ForeignGateway & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ForeignGateway__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b5061001d610022565b6100d3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e805468010000000000000000900460ff16156100715760405162dc149f60e41b815260040160405180910390fd5b80546001600160401b03908116146100d05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516116876100fc600039600081816106360152818161065f015261085701526116876000f3fe6080604052600436106101565760003560e01c806367c51947116100c1578063d3c617ff1161007a578063d3c617ff146103eb578063d98493f61461048d578063dea580b9146104ad578063e4c0aaf4146104cd578063ebb71194146104ed578063f6506db41461050d578063f7434ea91461052857600080fd5b806367c519471461033a578063936260841461035a578063a60a4db51461037a578063be2030941461039a578063c13517e1146103ba578063ce0aaf95146103cd57600080fd5b806345c904411161011357806345c9044114610267578063492d85d4146102945780634d53c2a5146102b45780634f1ef286146102d457806352d1902d146102e757806354fd4d50146102fc57600080fd5b80630c340a241461015b5780631c3db16d146101985780631debaba6146101d55780631fc6b556146101f75780632e1db8901461021b57806336e41d3d14610251575b600080fd5b34801561016757600080fd5b5060025461017b906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101a457600080fd5b506101b86101b3366004611038565b610548565b60408051938452911515602084015215159082015260600161018f565b3480156101e157600080fd5b506101f56101f0366004611066565b61056e565b005b34801561020357600080fd5b5061020d60045481565b60405190815260200161018f565b34801561022757600080fd5b5061020d610236366004611038565b6000908152600860205260409020546001600160f81b031690565b34801561025d57600080fd5b5061020d60075481565b34801561027357600080fd5b5061020d6102823660046110ae565b60016020526000908152604090205481565b3480156102a057600080fd5b506101f56102af3660046110d0565b6105d6565b3480156102c057600080fd5b5060055461017b906001600160a01b031681565b6101f56102e2366004611103565b610622565b3480156102f357600080fd5b5061020d61084a565b34801561030857600080fd5b5061032d604051806040016040528060058152602001640302e382e360dc1b81525081565b60405161018f91906111ea565b34801561034657600080fd5b506101f561035536600461121d565b6108a8565b34801561036657600080fd5b5060065461017b906001600160a01b031681565b34801561038657600080fd5b506101f5610395366004611239565b61092b565b3480156103a657600080fd5b506101f56103b5366004611283565b610b48565b61020d6103c8366004611313565b610c5e565b3480156103d957600080fd5b506005546001600160a01b031661017b565b3480156103f757600080fd5b5061044f610406366004611038565b60086020526000908152604090208054600182015460028301546003909301546001600160f81b03831693600160f81b90930460ff16926001600160a01b039283169290911685565b604080516001600160f81b03909616865293151560208601526001600160a01b0392831693850193909352606084015216608082015260a00161018f565b34801561049957600080fd5b5061020d6104a836600461135e565b610dfa565b3480156104b957600080fd5b5060035461017b906001600160a01b031681565b3480156104d957600080fd5b506101f56104e83660046110d0565b610e14565b3480156104f957600080fd5b506101f5610508366004611038565b610e60565b34801561051957600080fd5b5061020d6104a83660046113b4565b34801561053457600080fd5b5061020d61054336600461141a565b610f2c565b600080600060405162461bcd60e51b81526004016105659061145b565b60405180910390fd5b6002546001600160a01b031633146105985760405162461bcd60e51b815260040161056590611482565b6105a281426114da565b6007555060038054600680546001600160a01b038084166001600160a01b0319928316179092559091169216919091179055565b6002546001600160a01b031633146106005760405162461bcd60e51b815260040161056590611482565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b61062b82610fa2565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806106a957507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661069d6000805160206116328339815191525490565b6001600160a01b031614155b156106c75760405163703e46dd60e11b815260040160405180910390fd5b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610721575060408051601f3d908101601f1916820190925261071e918101906114f3565b60015b61074957604051630c76093760e01b81526001600160a01b0383166004820152602401610565565b600080516020611632833981519152811461077a57604051632a87526960e21b815260048101829052602401610565565b6000805160206116328339815191528390556040516001600160a01b038416907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2815115610845576000836001600160a01b0316836040516107e1919061150c565b600060405180830381855af49150503d806000811461081c576040519150601f19603f3d011682016040523d82523d6000602084013e610821565b606091505b5050905080610843576040516339b21b5d60e11b815260040160405180910390fd5b505b505050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108955760405163703e46dd60e11b815260040160405180910390fd5b5060008051602061163283398151915290565b6002546001600160a01b031633146108d25760405162461bcd60e51b815260040161056590611482565b6001600160601b03821660008181526001602052604090819020839055517f20a6ef9c48f3a1ae927e70bc34e82d974c53d3c98c8fd9e731c4bacd5842c5969061091f9084815260200190565b60405180910390a25050565b60035484906001600160a01b031633148061095c57506007544210801561095c57506006546001600160a01b031633145b6109b45760405162461bcd60e51b8152602060048201526024808201527f416363657373206e6f7420616c6c6f7765643a20566561204f7574626f78206f60448201526337363c9760e11b6064820152608401610565565b6005546001600160a01b03828116911614610a1f5760405162461bcd60e51b815260206004820152602560248201527f416363657373206e6f7420616c6c6f7765643a20486f6d65476174657761792060448201526437b7363c9760d91b6064820152608401610565565b6000848152600860205260408120805490916001600160f81b039091169003610a5a5760405162461bcd60e51b815260040161056590611528565b8054600160f81b900460ff1615610aa75760405162461bcd60e51b815260206004820152601160248201527043616e6e6f742072756c6520747769636560781b6044820152606401610565565b80546001600160f81b0316600160f81b811782556003820180546001600160a01b038681166001600160a01b031990921691909117909155600183015460405163188d362b60e11b81526004810193909352602483018790521690819063311a6c5690604401600060405180830381600087803b158015610b2757600080fd5b505af1158015610b3b573d6000803e3d6000fd5b5050505050505050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e805460019190600160401b900460ff1680610b91575080546001600160401b03808416911610155b15610bae5760405162dc149f60e41b815260040160405180910390fd5b805468ffffffffffffffffff19166001600160401b038316908117600160401b178255600280546001600160a01b038981166001600160a01b03199283161790925560038054898416908316179055600487905560058054928716929091169190911790556001600055815460ff60401b191682556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b6000610c6a8383610f2c565b341015610cb95760405162461bcd60e51b815260206004820152601f60248201527f4e6f74207061696420656e6f75676820666f72206172626974726174696f6e006044820152606401610565565b600080549080610cc883611558565b909155509050466000610cdc600143611571565b40823385898989604051602001610cf99796959493929190611584565b60408051601f19818403018152828252805160209182012060a0840183526001600160f81b0380881685526000858401818152338787018181523460608a0190815260808a01858152878652600890985297909320975191511515600160f81b029190931617865551600186810180546001600160a01b039384166001600160a01b031991821617909155955160028801559351600390960180549690911695909416949094179092559092508491907f03e54fa10baada663d819e5d7e4533535bfb6d4407abe51045be84e6c8de020390610dd59043611571565b40898989604051610de994939291906115dd565b60405180910390a350509392505050565b600060405162461bcd60e51b81526004016105659061145b565b6002546001600160a01b03163314610e3e5760405162461bcd60e51b815260040161056590611482565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000818152600860205260408120805490916001600160f81b039091169003610e9b5760405162461bcd60e51b815260040161056590611528565b8054600160f81b900460ff16610ee35760405162461bcd60e51b815260206004820152600d60248201526c139bdd081c9d5b1959081e595d609a1b6044820152606401610565565b600281018054600091829055600383015460405191926001600160a01b039091169183156108fc0291849190818181858888f19350505050158015610843573d6000803e3d6000fd5b6000806000610f7085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610fcf92505050565b6001600160601b0382166000908152600160205260409020549193509150610f9990829061161a565b95945050505050565b6002546001600160a01b03163314610fcc5760405162461bcd60e51b815260040161056590611482565b50565b600080604083511061102c57602083015191506040830151905060016000836001600160601b03166001600160601b031681526020019081526020016000205460000361101b57600091505b80600003611027575060035b915091565b50600090506003915091565b60006020828403121561104a57600080fd5b5035919050565b6001600160a01b0381168114610fcc57600080fd5b6000806040838503121561107957600080fd5b823561108481611051565b946020939093013593505050565b80356001600160601b03811681146110a957600080fd5b919050565b6000602082840312156110c057600080fd5b6110c982611092565b9392505050565b6000602082840312156110e257600080fd5b81356110c981611051565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561111657600080fd5b823561112181611051565b915060208301356001600160401b038082111561113d57600080fd5b818501915085601f83011261115157600080fd5b813581811115611163576111636110ed565b604051601f8201601f19908116603f0116810190838211818310171561118b5761118b6110ed565b816040528281528860208487010111156111a457600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b838110156111e15781810151838201526020016111c9565b50506000910152565b60208152600082518060208401526112098160408501602087016111c6565b601f01601f19169190910160400192915050565b6000806040838503121561123057600080fd5b61108483611092565b6000806000806080858703121561124f57600080fd5b843561125a81611051565b93506020850135925060408501359150606085013561127881611051565b939692955090935050565b6000806000806080858703121561129957600080fd5b84356112a481611051565b935060208501356112b481611051565b925060408501359150606085013561127881611051565b60008083601f8401126112dd57600080fd5b5081356001600160401b038111156112f457600080fd5b60208301915083602082850101111561130c57600080fd5b9250929050565b60008060006040848603121561132857600080fd5b8335925060208401356001600160401b0381111561134557600080fd5b611351868287016112cb565b9497909650939450505050565b60008060006040848603121561137357600080fd5b83356001600160401b0381111561138957600080fd5b611395868287016112cb565b90945092505060208401356113a981611051565b809150509250925092565b6000806000806000608086880312156113cc57600080fd5b8535945060208601356001600160401b038111156113e957600080fd5b6113f5888289016112cb565b909550935050604086013561140981611051565b949793965091946060013592915050565b6000806020838503121561142d57600080fd5b82356001600160401b0381111561144357600080fd5b61144f858286016112cb565b90969095509350505050565b6020808252600d908201526c139bdd081cdd5c1c1bdc9d1959609a1b604082015260600190565b60208082526022908201527f416363657373206e6f7420616c6c6f7765643a20476f7665726e6f72206f6e6c6040820152613c9760f11b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b808201808211156114ed576114ed6114c4565b92915050565b60006020828403121561150557600080fd5b5051919050565b6000825161151e8184602087016111c6565b9190910192915050565b602080825260169082015275111a5cdc1d5d1948191bd95cc81b9bdd08195e1a5cdd60521b604082015260600190565b60006001820161156a5761156a6114c4565b5060010190565b818103818111156114ed576114ed6114c4565b6c6372656174654469737075746560981b815287600d82015286602d8201526001600160601b03198660601b16604d820152846061820152836081820152818360a18301376000910160a1019081529695505050505050565b84815283602082015260606040820152816060820152818360808301376000818301608090810191909152601f909201601f191601019392505050565b80820281158282048414176114ed576114ed6114c456fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca26469706673582212203466652804e43bc944ddfd655a48a9d55b52c014d434f023f687f8d1c6085c4c64736f6c63430008180033";
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
            readonly internalType: "contract IERC20";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bool";
            readonly name: "_accepted";
            readonly type: "bool";
        }];
        readonly name: "AcceptedFeeToken";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_feeForJuror";
            readonly type: "uint256";
        }];
        readonly name: "ArbitrationCostModified";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_foreignBlockHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_foreignArbitrable";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_foreignDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_choices";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "CrossChainDisputeOutgoing";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "contract IArbitrableV2";
            readonly name: "_arbitrable";
            readonly type: "address";
        }];
        readonly name: "DisputeCreation";
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
            readonly internalType: "contract IERC20";
            readonly name: "_feeToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "_rateInEth";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "_rateDecimals";
            readonly type: "uint8";
        }];
        readonly name: "NewCurrencyRate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IArbitrableV2";
            readonly name: "_arbitrable";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "arbitrationCost";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "cost";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint256";
            readonly name: "_feeForJuror";
            readonly type: "uint256";
        }];
        readonly name: "changeCourtJurorFee";
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
            readonly internalType: "address";
            readonly name: "_homeGateway";
            readonly type: "address";
        }];
        readonly name: "changeHomeGateway";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_veaOutbox";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gracePeriod";
            readonly type: "uint256";
        }];
        readonly name: "changeVea";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_choices";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "disputeID";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deprecatedVeaOutbox";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deprecatedVeaOutboxExpiration";
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
            readonly name: "_disputeHash";
            readonly type: "bytes32";
        }];
        readonly name: "disputeHashToForeignID";
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
            readonly name: "disputeHash";
            readonly type: "bytes32";
        }];
        readonly name: "disputeHashtoDisputeData";
        readonly outputs: readonly [{
            readonly internalType: "uint248";
            readonly name: "id";
            readonly type: "uint248";
        }, {
            readonly internalType: "bool";
            readonly name: "ruled";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "arbitrable";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "paid";
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
            readonly internalType: "uint96";
            readonly name: "courtId";
            readonly type: "uint96";
        }];
        readonly name: "feeForJuror";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
        readonly inputs: readonly [];
        readonly name: "homeChainID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "homeGateway";
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
            readonly internalType: "address";
            readonly name: "_veaOutbox";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_homeChainID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_homeGateway";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_messageSender";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_disputeHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_ruling";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_relayer";
            readonly type: "address";
        }];
        readonly name: "relayRule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "senderGateway";
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
        readonly name: "veaOutbox";
        readonly outputs: readonly [{
            readonly internalType: "address";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_disputeHash";
            readonly type: "bytes32";
        }];
        readonly name: "withdrawFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ForeignGatewayInterface;
    static connect(address: string, runner?: ContractRunner | null): ForeignGateway;
}
export {};
