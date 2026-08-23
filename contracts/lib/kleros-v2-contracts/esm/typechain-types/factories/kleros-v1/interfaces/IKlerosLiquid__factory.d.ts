import { type ContractRunner } from "ethers";
import type { IKlerosLiquid, IKlerosLiquidInterface } from "../../../kleros-v1/interfaces/IKlerosLiquid.js";
export declare class IKlerosLiquid__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "contract IArbitrableV1";
            readonly name: "_arbitrable";
            readonly type: "address";
        }];
        readonly name: "AppealDecision";
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
            readonly internalType: "contract IArbitrableV1";
            readonly name: "_arbitrable";
            readonly type: "address";
        }];
        readonly name: "AppealPossible";
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
            readonly internalType: "contract IArbitrableV1";
            readonly name: "_arbitrable";
            readonly type: "address";
        }];
        readonly name: "DisputeCreation";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "appeal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "appealCost";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "cost";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }];
        readonly name: "appealPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "start";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "end";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
            readonly name: "_subcourtID";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint256[4]";
            readonly name: "_timesPerPeriod";
            readonly type: "uint256[4]";
        }];
        readonly name: "changeSubcourtTimesPerPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "courts";
        readonly outputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "parent";
            readonly type: "uint96";
        }, {
            readonly internalType: "bool";
            readonly name: "hiddenVotes";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "minStake";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "alpha";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeForJuror";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "jurorsForCourtJump";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
            readonly name: "_disputeID";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ruling";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }];
        readonly name: "disputeStatus";
        readonly outputs: readonly [{
            readonly internalType: "enum IArbitratorV1.DisputeStatus";
            readonly name: "status";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint96";
                readonly name: "subcourtID";
                readonly type: "uint96";
            }, {
                readonly internalType: "address";
                readonly name: "arbitrated";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "numberOfChoices";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum IKlerosLiquid.Period";
                readonly name: "period";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastPeriodChange";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "drawsInRound";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "commitsInRound";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "ruled";
                readonly type: "bool";
            }];
            readonly internalType: "struct IKlerosLiquid.Dispute";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_destination";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "executeGovernorProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }];
        readonly name: "getDispute";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "votesLengths";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "tokensAtStakePerJuror";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "totalFeesForJurors";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "votesInEachRound";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "repartitionsInEachRound";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "penaltiesInEachRound";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "_subcourtID";
            readonly type: "uint96";
        }];
        readonly name: "getSubcourt";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "children";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[4]";
            readonly name: "timesPerPeriod";
            readonly type: "uint256[4]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_appeal";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_voteID";
            readonly type: "uint256";
        }];
        readonly name: "getVote";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "commit";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "choice";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "voted";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }];
        readonly name: "jurors";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "stakedTokens";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lockedTokens";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IKlerosLiquid.Juror";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lockInsolventTransfers";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minStakingTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "phase";
        readonly outputs: readonly [{
            readonly internalType: "enum IKlerosLiquid.Phase";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pinakion";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IKlerosLiquidInterface;
    static connect(address: string, runner?: ContractRunner | null): IKlerosLiquid;
}
