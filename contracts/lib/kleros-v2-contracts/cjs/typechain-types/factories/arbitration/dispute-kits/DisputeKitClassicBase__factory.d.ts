import { type ContractRunner } from "ethers";
import type { DisputeKitClassicBase, DisputeKitClassicBaseInterface } from "../../../arbitration/dispute-kits/DisputeKitClassicBase.js";
export declare class DisputeKitClassicBase__factory {
    static readonly abi: readonly [{
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
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_coreRoundID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_choice";
            readonly type: "uint256";
        }];
        readonly name: "ChoiceFunded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_juror";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "_voteIDs";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_commit";
            readonly type: "bytes32";
        }];
        readonly name: "CommitCast";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_coreRoundID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_choice";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_contributor";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "Contribution";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_numberOfChoices";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
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
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_juror";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "_voteIDs";
            readonly type: "uint256[]";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_choice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_justification";
            readonly type: "string";
        }];
        readonly name: "VoteCast";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_coreRoundID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_choice";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_contributor";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "Withdrawal";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "LOSER_APPEAL_PERIOD_MULTIPLIER";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "LOSER_STAKE_MULTIPLIER";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ONE_BASIS_POINT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "WINNER_STAKE_MULTIPLIER";
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
            readonly name: "localDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "localRoundID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "drawnAddress";
            readonly type: "address";
        }];
        readonly name: "alreadyDrawn";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }];
        readonly name: "areCommitsAllCast";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }];
        readonly name: "areVotesAllCast";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_voteIDs";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_commit";
            readonly type: "bytes32";
        }];
        readonly name: "castCommit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_voteIDs";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_choice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "_justification";
            readonly type: "string";
        }];
        readonly name: "castVote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_core";
            readonly type: "address";
        }];
        readonly name: "changeCore";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "_governor";
            readonly type: "address";
        }];
        readonly name: "changeGovernor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "core";
        readonly outputs: readonly [{
            readonly internalType: "contract KlerosCore";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "coreDisputeID";
            readonly type: "uint256";
        }];
        readonly name: "coreDisputeIDToActive";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "coreDisputeIDToLocal";
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
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_numberOfChoices";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nbVotes";
            readonly type: "uint256";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }];
        readonly name: "currentRuling";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ruling";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "tied";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "overridden";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "numberOfChoices";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "jumped";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "draw";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "drawnAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_choice";
            readonly type: "uint256";
        }];
        readonly name: "fundAppeal";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_coreRoundID";
            readonly type: "uint256";
        }];
        readonly name: "getCoherentCount";
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
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_coreRoundID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_voteID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "getDegreeOfCoherence";
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
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }];
        readonly name: "getFundedChoices";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "fundedChoices";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_coreRoundID";
            readonly type: "uint256";
        }];
        readonly name: "getLocalDisputeRoundID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "localDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "localRoundID";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_localDisputeID";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfRounds";
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
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_coreRoundID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_choice";
            readonly type: "uint256";
        }];
        readonly name: "getRoundInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "winningChoice";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "tied";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalVoted";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalCommited";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nbVoters";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "choiceCount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_coreRoundID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_voteID";
            readonly type: "uint256";
        }];
        readonly name: "getVoteInfo";
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
            readonly internalType: "uint256";
            readonly name: "_choice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "_justification";
            readonly type: "string";
        }];
        readonly name: "hashVote";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }];
        readonly name: "isAppealFunded";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_coreRoundID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_voteID";
            readonly type: "uint256";
        }];
        readonly name: "isVoteActive";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
        readonly inputs: readonly [];
        readonly name: "singleDrawPerJuror";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_beneficiary";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_coreRoundID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_choice";
            readonly type: "uint256";
        }];
        readonly name: "withdrawFeesAndRewards";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DisputeKitClassicBaseInterface;
    static connect(address: string, runner?: ContractRunner | null): DisputeKitClassicBase;
}
