import { type ContractRunner } from "ethers";
import type { IDisputeKit, IDisputeKitInterface } from "../../../arbitration/interfaces/IDisputeKit.js";
export declare class IDisputeKit__factory {
    static readonly abi: readonly [{
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
            readonly name: "_feePerJuror";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pnkAtStakePerJuror";
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
    }];
    static createInterface(): IDisputeKitInterface;
    static connect(address: string, runner?: ContractRunner | null): IDisputeKit;
}
//# sourceMappingURL=IDisputeKit__factory.d.ts.map