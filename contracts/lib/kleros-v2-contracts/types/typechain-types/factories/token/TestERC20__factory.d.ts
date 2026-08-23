import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type { TestERC20, TestERC20Interface } from "../../token/TestERC20.js";
type TestERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestERC20__factory extends ContractFactory {
    constructor(...args: TestERC20ConstructorParams);
    getDeployTransaction(_name: string, _symbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_name: string, _symbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TestERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TestERC20__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610b88380380610b8883398101604081905261002f91610290565b8181600361003d8382610382565b50600461004a8282610382565b5050506100673369d3c21bcecceda100000061006e60201b60201c565b5050610467565b6001600160a01b03821661009d5760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b6100a9600083836100ad565b5050565b6001600160a01b0383166100d85780600260008282546100cd9190610440565b9091555061014a9050565b6001600160a01b0383166000908152602081905260409020548181101561012b5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610094565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661016657600280548290039055610185565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516101ca91815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126101fe57600080fd5b81516001600160401b03811115610217576102176101d7565b604051601f8201601f19908116603f011681016001600160401b0381118282101715610245576102456101d7565b60405281815283820160200185101561025d57600080fd5b60005b8281101561027c57602081860181015183830182015201610260565b506000918101602001919091529392505050565b600080604083850312156102a357600080fd5b82516001600160401b038111156102b957600080fd5b6102c5858286016101ed565b602085015190935090506001600160401b038111156102e357600080fd5b6102ef858286016101ed565b9150509250929050565b600181811c9082168061030d57607f821691505b60208210810361032d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561037d57806000526020600020601f840160051c8101602085101561035a5750805b601f840160051c820191505b8181101561037a5760008155600101610366565b50505b505050565b81516001600160401b0381111561039b5761039b6101d7565b6103af816103a984546102f9565b84610333565b6020601f8211600181146103e357600083156103cb5750848201515b600019600385901b1c1916600184901b17845561037a565b600084815260208120601f198516915b8281101561041357878501518255602094850194600190920191016103f3565b50848210156104315786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b8082018082111561046157634e487b7160e01b600052601160045260246000fd5b92915050565b610712806104766000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806306fdde0314610088578063095ea7b3146100a657806318160ddd146100c957806323b872dd146100db578063313ce567146100ee57806370a08231146100fd57806395d89b4114610126578063a9059cbb1461012e578063dd62ed3e14610141575b600080fd5b610090610154565b60405161009d9190610526565b60405180910390f35b6100b96100b4366004610590565b6101e6565b604051901515815260200161009d565b6002545b60405190815260200161009d565b6100b96100e93660046105ba565b610200565b6040516012815260200161009d565b6100cd61010b3660046105f7565b6001600160a01b031660009081526020819052604090205490565b610090610224565b6100b961013c366004610590565b610233565b6100cd61014f366004610619565b610241565b6060600380546101639061064c565b80601f016020809104026020016040519081016040528092919081815260200182805461018f9061064c565b80156101dc5780601f106101b1576101008083540402835291602001916101dc565b820191906000526020600020905b8154815290600101906020018083116101bf57829003601f168201915b5050505050905090565b6000336101f481858561026c565b60019150505b92915050565b60003361020e85828561027e565b6102198585856102db565b506001949350505050565b6060600480546101639061064c565b6000336101f48185856102db565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610279838383600161033a565b505050565b600061028a8484610241565b90506000198110156102d557818110156102c657828183604051637dc7a0d960e11b81526004016102bd93929190610686565b60405180910390fd5b6102d58484848403600061033a565b50505050565b6001600160a01b038316610305576000604051634b637e8f60e11b81526004016102bd91906106a7565b6001600160a01b03821661032f57600060405163ec442f0560e01b81526004016102bd91906106a7565b61027983838361040f565b6001600160a01b03841661036457600060405163e602df0560e01b81526004016102bd91906106a7565b6001600160a01b03831661038e576000604051634a1406b160e11b81526004016102bd91906106a7565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156102d557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161040191815260200190565b60405180910390a350505050565b6001600160a01b03831661043a57806002600082825461042f91906106bb565b909155506104999050565b6001600160a01b0383166000908152602081905260409020548181101561047a5783818360405163391434e360e21b81526004016102bd93929190610686565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166104b5576002805482900390556104d4565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161051991815260200190565b60405180910390a3505050565b602081526000825180602084015260005b818110156105545760208186018101516040868401015201610537565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b038116811461058b57600080fd5b919050565b600080604083850312156105a357600080fd5b6105ac83610574565b946020939093013593505050565b6000806000606084860312156105cf57600080fd5b6105d884610574565b92506105e660208501610574565b929592945050506040919091013590565b60006020828403121561060957600080fd5b61061282610574565b9392505050565b6000806040838503121561062c57600080fd5b61063583610574565b915061064360208401610574565b90509250929050565b600181811c9082168061066057607f821691505b60208210810361068057634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b039390931683526020830191909152604082015260600190565b6001600160a01b0391909116815260200190565b808201808211156101fa57634e487b7160e01b600052601160045260246000fdfea26469706673582212204f10d5da7f38d9d07ac9314b7490cc865341df1cd5b0f7faaadb24663c24a7f164736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "allowance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidApprover";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSpender";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
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
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TestERC20Interface;
    static connect(address: string, runner?: ContractRunner | null): TestERC20;
}
export {};
//# sourceMappingURL=TestERC20__factory.d.ts.map