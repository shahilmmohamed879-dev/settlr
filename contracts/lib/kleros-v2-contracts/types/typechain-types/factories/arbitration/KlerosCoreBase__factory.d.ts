import { type ContractRunner } from "ethers";
import type { KlerosCoreBase, KlerosCoreBaseInterface } from "../../arbitration/KlerosCoreBase.js";
export declare class KlerosCoreBase__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AppealFeesNotEnough";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AppealPeriodNotPassed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ArbitrationFeesNotEnough";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotDisableClassicDK";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CommitPeriodNotPassed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DisputeKitNotSupportedByCourt";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DisputeKitOnly";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DisputeNotAppealable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DisputePeriodIsFinal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DisputeStillDrawing";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EvidenceNotPassedAndNotAppeal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedDelegateCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "GovernorOnly";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "GuardianOrGovernorOnly";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDisputKitParent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidForkingCourtAsParent";
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
        readonly name: "MinStakeLowerThanParentCourt";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MustSupportDisputeKitClassic";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotEvidencePeriod";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotExecutionPeriod";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RulingAlreadyExecuted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SortitionModuleOnly";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StakingInTooManyCourts";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StakingLessThanCourtMinStake";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StakingNotPossibleInThisCourt";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StakingTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StakingZeroWhenNoStake";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenNotAccepted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
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
        readonly inputs: readonly [];
        readonly name: "UnstakingTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsuccessfulCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsupportedDisputeKit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotePeriodNotPassed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WhenNotPausedOnly";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WhenPausedOnly";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongDisputeKitIndex";
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
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "contract IArbitrableV2";
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
            readonly internalType: "contract IArbitrableV2";
            readonly name: "_arbitrable";
            readonly type: "address";
        }];
        readonly name: "AppealPossible";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }, {
            readonly indexed: true;
            readonly internalType: "uint96";
            readonly name: "_parent";
            readonly type: "uint96";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "_hiddenVotes";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_minStake";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_alpha";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_feeForJuror";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_jurorsForCourtJump";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[4]";
            readonly name: "_timesPerPeriod";
            readonly type: "uint256[4]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "_supportedDisputeKits";
            readonly type: "uint256[]";
        }];
        readonly name: "CourtCreated";
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
            readonly internalType: "uint256";
            readonly name: "_roundID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint96";
            readonly name: "_fromCourtID";
            readonly type: "uint96";
        }, {
            readonly indexed: false;
            readonly internalType: "uint96";
            readonly name: "_toCourtID";
            readonly type: "uint96";
        }];
        readonly name: "CourtJump";
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
            readonly internalType: "bool";
            readonly name: "_hiddenVotes";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_minStake";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_alpha";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_feeForJuror";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_jurorsForCourtJump";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[4]";
            readonly name: "_timesPerPeriod";
            readonly type: "uint256[4]";
        }];
        readonly name: "CourtModified";
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
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_disputeKitID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "contract IDisputeKit";
            readonly name: "_disputeKitAddress";
            readonly type: "address";
        }];
        readonly name: "DisputeKitCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_disputeKitID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "bool";
            readonly name: "_enable";
            readonly type: "bool";
        }];
        readonly name: "DisputeKitEnabled";
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
            readonly internalType: "uint256";
            readonly name: "_roundID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_fromDisputeKitID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_toDisputeKitID";
            readonly type: "uint256";
        }];
        readonly name: "DisputeKitJump";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_roundID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_voteID";
            readonly type: "uint256";
        }];
        readonly name: "Draw";
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
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_roundID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_pnkAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_feeAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "contract IERC20";
            readonly name: "_feeToken";
            readonly type: "address";
        }];
        readonly name: "LeftoverRewardSent";
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
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum KlerosCoreBase.Period";
            readonly name: "_period";
            readonly type: "uint8";
        }];
        readonly name: "NewPeriod";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "Paused";
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
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "_roundID";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_degreeOfCoherency";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "_pnkAmount";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "_feeAmount";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "contract IERC20";
            readonly name: "_feeToken";
            readonly type: "address";
        }];
        readonly name: "TokenAndETHShift";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "Unpaused";
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
            readonly internalType: "contract IDisputeKit";
            readonly name: "_disputeKitAddress";
            readonly type: "address";
        }];
        readonly name: "addNewDisputeKit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_numberOfChoices";
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
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_feeToken";
            readonly type: "address";
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
            readonly internalType: "contract IERC20";
            readonly name: "_feeToken";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "_accepted";
            readonly type: "bool";
        }];
        readonly name: "changeAcceptedFeeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }, {
            readonly internalType: "bool";
            readonly name: "_hiddenVotes";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minStake";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_alpha";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_feeForJuror";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_jurorsForCourtJump";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[4]";
            readonly name: "_timesPerPeriod";
            readonly type: "uint256[4]";
        }];
        readonly name: "changeCourtParameters";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_feeToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_rateInEth";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint8";
            readonly name: "_rateDecimals";
            readonly type: "uint8";
        }];
        readonly name: "changeCurrencyRates";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_guardian";
            readonly type: "address";
        }];
        readonly name: "changeGuardian";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_jurorProsecutionModule";
            readonly type: "address";
        }];
        readonly name: "changeJurorProsecutionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_pinakion";
            readonly type: "address";
        }];
        readonly name: "changePinakion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISortitionModule";
            readonly name: "_sortitionModule";
            readonly type: "address";
        }];
        readonly name: "changeSortitionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_toToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountInEth";
            readonly type: "uint256";
        }];
        readonly name: "convertEthToTokenAmount";
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
            readonly name: "";
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
        }, {
            readonly internalType: "bool";
            readonly name: "disabled";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "_parent";
            readonly type: "uint96";
        }, {
            readonly internalType: "bool";
            readonly name: "_hiddenVotes";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minStake";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_alpha";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_feeForJuror";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_jurorsForCourtJump";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[4]";
            readonly name: "_timesPerPeriod";
            readonly type: "uint256[4]";
        }, {
            readonly internalType: "bytes";
            readonly name: "_sortitionExtraData";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_supportedDisputeKits";
            readonly type: "uint256[]";
        }];
        readonly name: "createCourt";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_numberOfChoices";
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
            readonly name: "_numberOfChoices";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_feeToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_feeAmount";
            readonly type: "uint256";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "disputeID";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "currencyRates";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "feePaymentAccepted";
            readonly type: "bool";
        }, {
            readonly internalType: "uint64";
            readonly name: "rateInEth";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint8";
            readonly name: "rateDecimals";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
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
        readonly name: "disputeKits";
        readonly outputs: readonly [{
            readonly internalType: "contract IDisputeKit";
            readonly name: "";
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
        readonly name: "disputes";
        readonly outputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "courtID";
            readonly type: "uint96";
        }, {
            readonly internalType: "contract IArbitrableV2";
            readonly name: "arbitrated";
            readonly type: "address";
        }, {
            readonly internalType: "enum KlerosCoreBase.Period";
            readonly name: "period";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "ruled";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastPeriodChange";
            readonly type: "uint256";
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
            readonly name: "_iterations";
            readonly type: "uint256";
        }];
        readonly name: "draw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nbDrawnJurors";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_disputeKitIDs";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bool";
            readonly name: "_enable";
            readonly type: "bool";
        }];
        readonly name: "enableDisputeKits";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_round";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_iterations";
            readonly type: "uint256";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
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
            readonly name: "_disputeID";
            readonly type: "uint256";
        }];
        readonly name: "executeRuling";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDisputeKitsLength";
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
            readonly name: "_disputeID";
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
            readonly name: "_disputeID";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfVotes";
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
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_round";
            readonly type: "uint256";
        }];
        readonly name: "getPnkAtStakePerJuror";
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
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_round";
            readonly type: "uint256";
        }];
        readonly name: "getRoundInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "disputeKitID";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pnkAtStakePerJuror";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalFeesForJurors";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "nbVotes";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "repartitions";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pnkPenalties";
                readonly type: "uint256";
            }, {
                readonly internalType: "address[]";
                readonly name: "drawnJurors";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "sumFeeRewardPaid";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sumPnkRewardPaid";
                readonly type: "uint256";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "feeToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "drawIterations";
                readonly type: "uint256";
            }];
            readonly internalType: "struct KlerosCoreBase.Round";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }];
        readonly name: "getTimesPerPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint256[4]";
            readonly name: "timesPerPeriod";
            readonly type: "uint256[4]";
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
        readonly name: "guardian";
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
            readonly name: "_disputeID";
            readonly type: "uint256";
        }];
        readonly name: "isDisputeKitJumping";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
            readonly name: "_disputeKitID";
            readonly type: "uint256";
        }];
        readonly name: "isSupported";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "jurorProsecutionModule";
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
            readonly name: "_disputeID";
            readonly type: "uint256";
        }];
        readonly name: "passPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pinakion";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
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
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint256";
            readonly name: "_newStake";
            readonly type: "uint256";
        }];
        readonly name: "setStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint256";
            readonly name: "_newStake";
            readonly type: "uint256";
        }];
        readonly name: "setStakeBySortitionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sortitionModule";
        readonly outputs: readonly [{
            readonly internalType: "contract ISortitionModule";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "transferBySortitionModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unpause";
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
    static createInterface(): KlerosCoreBaseInterface;
    static connect(address: string, runner?: ContractRunner | null): KlerosCoreBase;
}
//# sourceMappingURL=KlerosCoreBase__factory.d.ts.map