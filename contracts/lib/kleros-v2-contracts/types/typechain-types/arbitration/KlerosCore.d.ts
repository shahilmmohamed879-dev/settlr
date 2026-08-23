import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common.js";
export declare namespace KlerosCoreBase {
    type RoundStruct = {
        disputeKitID: BigNumberish;
        pnkAtStakePerJuror: BigNumberish;
        totalFeesForJurors: BigNumberish;
        nbVotes: BigNumberish;
        repartitions: BigNumberish;
        pnkPenalties: BigNumberish;
        drawnJurors: AddressLike[];
        sumFeeRewardPaid: BigNumberish;
        sumPnkRewardPaid: BigNumberish;
        feeToken: AddressLike;
        drawIterations: BigNumberish;
    };
    type RoundStructOutput = [
        disputeKitID: bigint,
        pnkAtStakePerJuror: bigint,
        totalFeesForJurors: bigint,
        nbVotes: bigint,
        repartitions: bigint,
        pnkPenalties: bigint,
        drawnJurors: string[],
        sumFeeRewardPaid: bigint,
        sumPnkRewardPaid: bigint,
        feeToken: string,
        drawIterations: bigint
    ] & {
        disputeKitID: bigint;
        pnkAtStakePerJuror: bigint;
        totalFeesForJurors: bigint;
        nbVotes: bigint;
        repartitions: bigint;
        pnkPenalties: bigint;
        drawnJurors: string[];
        sumFeeRewardPaid: bigint;
        sumPnkRewardPaid: bigint;
        feeToken: string;
        drawIterations: bigint;
    };
}
export interface KlerosCoreInterface extends Interface {
    getFunction(nameOrSignature: "addNewDisputeKit" | "appeal" | "appealCost" | "appealPeriod" | "arbitrationCost(bytes,address)" | "arbitrationCost(bytes)" | "changeAcceptedFeeTokens" | "changeCourtParameters" | "changeCurrencyRates" | "changeGovernor" | "changeGuardian" | "changeJurorProsecutionModule" | "changePinakion" | "changeSortitionModule" | "convertEthToTokenAmount" | "courts" | "createCourt" | "createDispute(uint256,bytes)" | "createDispute(uint256,bytes,address,uint256)" | "currencyRates" | "currentRuling" | "disputeKits" | "disputes" | "draw" | "enableDisputeKits" | "execute" | "executeGovernorProposal" | "executeRuling" | "getDisputeKitsLength" | "getNumberOfRounds" | "getNumberOfVotes" | "getPnkAtStakePerJuror" | "getRoundInfo" | "getTimesPerPeriod" | "governor" | "guardian" | "initialize" | "initialize5" | "isDisputeKitJumping" | "isSupported" | "jurorProsecutionModule" | "passPeriod" | "pause" | "paused" | "pinakion" | "proxiableUUID" | "setStake" | "setStakeBySortitionModule" | "sortitionModule" | "transferBySortitionModule" | "unpause" | "upgradeToAndCall" | "version"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AcceptedFeeToken" | "AppealDecision" | "AppealPossible" | "CourtCreated" | "CourtJump" | "CourtModified" | "DisputeCreation" | "DisputeKitCreated" | "DisputeKitEnabled" | "DisputeKitJump" | "Draw" | "Initialized" | "LeftoverRewardSent" | "NewCurrencyRate" | "NewPeriod" | "Paused" | "Ruling" | "TokenAndETHShift" | "Unpaused" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "addNewDisputeKit", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "appeal", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "appealCost", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "appealPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "arbitrationCost(bytes,address)", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "arbitrationCost(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "changeAcceptedFeeTokens", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "changeCourtParameters", values: [
        BigNumberish,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ]): string;
    encodeFunctionData(functionFragment: "changeCurrencyRates", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeGuardian", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeJurorProsecutionModule", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changePinakion", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeSortitionModule", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "convertEthToTokenAmount", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "courts", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "createCourt", values: [
        BigNumberish,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        BytesLike,
        BigNumberish[]
    ]): string;
    encodeFunctionData(functionFragment: "createDispute(uint256,bytes)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "createDispute(uint256,bytes,address,uint256)", values: [BigNumberish, BytesLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currencyRates", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "currentRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputeKits", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "draw", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "enableDisputeKits", values: [BigNumberish, BigNumberish[], boolean]): string;
    encodeFunctionData(functionFragment: "execute", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeGovernorProposal", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDisputeKitsLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNumberOfRounds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNumberOfVotes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPnkAtStakePerJuror", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoundInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTimesPerPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        AddressLike,
        AddressLike,
        boolean,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        BytesLike,
        AddressLike
    ]): string;
    encodeFunctionData(functionFragment: "initialize5", values?: undefined): string;
    encodeFunctionData(functionFragment: "isDisputeKitJumping", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isSupported", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "jurorProsecutionModule", values?: undefined): string;
    encodeFunctionData(functionFragment: "passPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pinakion", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "setStake", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setStakeBySortitionModule", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sortitionModule", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferBySortitionModule", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addNewDisputeKit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appeal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appealCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appealPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCost(bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCost(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeAcceptedFeeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCourtParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCurrencyRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeJurorProsecutionModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changePinakion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSortitionModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertEthToTokenAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "courts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createCourt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(uint256,bytes,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currencyRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeKits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "draw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableDisputeKits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeGovernorProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDisputeKitsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfRounds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPnkAtStakePerJuror", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoundInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimesPerPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize5", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDisputeKitJumping", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSupported", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jurorProsecutionModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "passPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pinakion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStakeBySortitionModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sortitionModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferBySortitionModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}
export declare namespace AcceptedFeeTokenEvent {
    type InputTuple = [_token: AddressLike, _accepted: boolean];
    type OutputTuple = [_token: string, _accepted: boolean];
    interface OutputObject {
        _token: string;
        _accepted: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AppealDecisionEvent {
    type InputTuple = [_disputeID: BigNumberish, _arbitrable: AddressLike];
    type OutputTuple = [_disputeID: bigint, _arbitrable: string];
    interface OutputObject {
        _disputeID: bigint;
        _arbitrable: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AppealPossibleEvent {
    type InputTuple = [_disputeID: BigNumberish, _arbitrable: AddressLike];
    type OutputTuple = [_disputeID: bigint, _arbitrable: string];
    interface OutputObject {
        _disputeID: bigint;
        _arbitrable: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CourtCreatedEvent {
    type InputTuple = [
        _courtID: BigNumberish,
        _parent: BigNumberish,
        _hiddenVotes: boolean,
        _minStake: BigNumberish,
        _alpha: BigNumberish,
        _feeForJuror: BigNumberish,
        _jurorsForCourtJump: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        _supportedDisputeKits: BigNumberish[]
    ];
    type OutputTuple = [
        _courtID: bigint,
        _parent: bigint,
        _hiddenVotes: boolean,
        _minStake: bigint,
        _alpha: bigint,
        _feeForJuror: bigint,
        _jurorsForCourtJump: bigint,
        _timesPerPeriod: [bigint, bigint, bigint, bigint],
        _supportedDisputeKits: bigint[]
    ];
    interface OutputObject {
        _courtID: bigint;
        _parent: bigint;
        _hiddenVotes: boolean;
        _minStake: bigint;
        _alpha: bigint;
        _feeForJuror: bigint;
        _jurorsForCourtJump: bigint;
        _timesPerPeriod: [bigint, bigint, bigint, bigint];
        _supportedDisputeKits: bigint[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CourtJumpEvent {
    type InputTuple = [
        _disputeID: BigNumberish,
        _roundID: BigNumberish,
        _fromCourtID: BigNumberish,
        _toCourtID: BigNumberish
    ];
    type OutputTuple = [
        _disputeID: bigint,
        _roundID: bigint,
        _fromCourtID: bigint,
        _toCourtID: bigint
    ];
    interface OutputObject {
        _disputeID: bigint;
        _roundID: bigint;
        _fromCourtID: bigint;
        _toCourtID: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CourtModifiedEvent {
    type InputTuple = [
        _courtID: BigNumberish,
        _hiddenVotes: boolean,
        _minStake: BigNumberish,
        _alpha: BigNumberish,
        _feeForJuror: BigNumberish,
        _jurorsForCourtJump: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ];
    type OutputTuple = [
        _courtID: bigint,
        _hiddenVotes: boolean,
        _minStake: bigint,
        _alpha: bigint,
        _feeForJuror: bigint,
        _jurorsForCourtJump: bigint,
        _timesPerPeriod: [bigint, bigint, bigint, bigint]
    ];
    interface OutputObject {
        _courtID: bigint;
        _hiddenVotes: boolean;
        _minStake: bigint;
        _alpha: bigint;
        _feeForJuror: bigint;
        _jurorsForCourtJump: bigint;
        _timesPerPeriod: [bigint, bigint, bigint, bigint];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DisputeCreationEvent {
    type InputTuple = [_disputeID: BigNumberish, _arbitrable: AddressLike];
    type OutputTuple = [_disputeID: bigint, _arbitrable: string];
    interface OutputObject {
        _disputeID: bigint;
        _arbitrable: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DisputeKitCreatedEvent {
    type InputTuple = [
        _disputeKitID: BigNumberish,
        _disputeKitAddress: AddressLike
    ];
    type OutputTuple = [_disputeKitID: bigint, _disputeKitAddress: string];
    interface OutputObject {
        _disputeKitID: bigint;
        _disputeKitAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DisputeKitEnabledEvent {
    type InputTuple = [
        _courtID: BigNumberish,
        _disputeKitID: BigNumberish,
        _enable: boolean
    ];
    type OutputTuple = [
        _courtID: bigint,
        _disputeKitID: bigint,
        _enable: boolean
    ];
    interface OutputObject {
        _courtID: bigint;
        _disputeKitID: bigint;
        _enable: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DisputeKitJumpEvent {
    type InputTuple = [
        _disputeID: BigNumberish,
        _roundID: BigNumberish,
        _fromDisputeKitID: BigNumberish,
        _toDisputeKitID: BigNumberish
    ];
    type OutputTuple = [
        _disputeID: bigint,
        _roundID: bigint,
        _fromDisputeKitID: bigint,
        _toDisputeKitID: bigint
    ];
    interface OutputObject {
        _disputeID: bigint;
        _roundID: bigint;
        _fromDisputeKitID: bigint;
        _toDisputeKitID: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DrawEvent {
    type InputTuple = [
        _address: AddressLike,
        _disputeID: BigNumberish,
        _roundID: BigNumberish,
        _voteID: BigNumberish
    ];
    type OutputTuple = [
        _address: string,
        _disputeID: bigint,
        _roundID: bigint,
        _voteID: bigint
    ];
    interface OutputObject {
        _address: string;
        _disputeID: bigint;
        _roundID: bigint;
        _voteID: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace InitializedEvent {
    type InputTuple = [version: BigNumberish];
    type OutputTuple = [version: bigint];
    interface OutputObject {
        version: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LeftoverRewardSentEvent {
    type InputTuple = [
        _disputeID: BigNumberish,
        _roundID: BigNumberish,
        _pnkAmount: BigNumberish,
        _feeAmount: BigNumberish,
        _feeToken: AddressLike
    ];
    type OutputTuple = [
        _disputeID: bigint,
        _roundID: bigint,
        _pnkAmount: bigint,
        _feeAmount: bigint,
        _feeToken: string
    ];
    interface OutputObject {
        _disputeID: bigint;
        _roundID: bigint;
        _pnkAmount: bigint;
        _feeAmount: bigint;
        _feeToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewCurrencyRateEvent {
    type InputTuple = [
        _feeToken: AddressLike,
        _rateInEth: BigNumberish,
        _rateDecimals: BigNumberish
    ];
    type OutputTuple = [
        _feeToken: string,
        _rateInEth: bigint,
        _rateDecimals: bigint
    ];
    interface OutputObject {
        _feeToken: string;
        _rateInEth: bigint;
        _rateDecimals: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewPeriodEvent {
    type InputTuple = [_disputeID: BigNumberish, _period: BigNumberish];
    type OutputTuple = [_disputeID: bigint, _period: bigint];
    interface OutputObject {
        _disputeID: bigint;
        _period: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PausedEvent {
    type InputTuple = [];
    type OutputTuple = [];
    interface OutputObject {
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RulingEvent {
    type InputTuple = [
        _arbitrable: AddressLike,
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ];
    type OutputTuple = [
        _arbitrable: string,
        _disputeID: bigint,
        _ruling: bigint
    ];
    interface OutputObject {
        _arbitrable: string;
        _disputeID: bigint;
        _ruling: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokenAndETHShiftEvent {
    type InputTuple = [
        _account: AddressLike,
        _disputeID: BigNumberish,
        _roundID: BigNumberish,
        _degreeOfCoherency: BigNumberish,
        _pnkAmount: BigNumberish,
        _feeAmount: BigNumberish,
        _feeToken: AddressLike
    ];
    type OutputTuple = [
        _account: string,
        _disputeID: bigint,
        _roundID: bigint,
        _degreeOfCoherency: bigint,
        _pnkAmount: bigint,
        _feeAmount: bigint,
        _feeToken: string
    ];
    interface OutputObject {
        _account: string;
        _disputeID: bigint;
        _roundID: bigint;
        _degreeOfCoherency: bigint;
        _pnkAmount: bigint;
        _feeAmount: bigint;
        _feeToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnpausedEvent {
    type InputTuple = [];
    type OutputTuple = [];
    interface OutputObject {
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpgradedEvent {
    type InputTuple = [newImplementation: AddressLike];
    type OutputTuple = [newImplementation: string];
    interface OutputObject {
        newImplementation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface KlerosCore extends BaseContract {
    connect(runner?: ContractRunner | null): KlerosCore;
    waitForDeployment(): Promise<this>;
    interface: KlerosCoreInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addNewDisputeKit: TypedContractMethod<[
        _disputeKitAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    appeal: TypedContractMethod<[
        _disputeID: BigNumberish,
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike
    ], [
        void
    ], "payable">;
    appealCost: TypedContractMethod<[_disputeID: BigNumberish], [bigint], "view">;
    appealPeriod: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [bigint, bigint] & {
            start: bigint;
            end: bigint;
        }
    ], "view">;
    "arbitrationCost(bytes,address)": TypedContractMethod<[
        _extraData: BytesLike,
        _feeToken: AddressLike
    ], [
        bigint
    ], "view">;
    "arbitrationCost(bytes)": TypedContractMethod<[
        _extraData: BytesLike
    ], [
        bigint
    ], "view">;
    changeAcceptedFeeTokens: TypedContractMethod<[
        _feeToken: AddressLike,
        _accepted: boolean
    ], [
        void
    ], "nonpayable">;
    changeCourtParameters: TypedContractMethod<[
        _courtID: BigNumberish,
        _hiddenVotes: boolean,
        _minStake: BigNumberish,
        _alpha: BigNumberish,
        _feeForJuror: BigNumberish,
        _jurorsForCourtJump: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    changeCurrencyRates: TypedContractMethod<[
        _feeToken: AddressLike,
        _rateInEth: BigNumberish,
        _rateDecimals: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeGovernor: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeGuardian: TypedContractMethod<[
        _guardian: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeJurorProsecutionModule: TypedContractMethod<[
        _jurorProsecutionModule: AddressLike
    ], [
        void
    ], "nonpayable">;
    changePinakion: TypedContractMethod<[
        _pinakion: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeSortitionModule: TypedContractMethod<[
        _sortitionModule: AddressLike
    ], [
        void
    ], "nonpayable">;
    convertEthToTokenAmount: TypedContractMethod<[
        _toToken: AddressLike,
        _amountInEth: BigNumberish
    ], [
        bigint
    ], "view">;
    courts: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            boolean,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            parent: bigint;
            hiddenVotes: boolean;
            minStake: bigint;
            alpha: bigint;
            feeForJuror: bigint;
            jurorsForCourtJump: bigint;
            disabled: boolean;
        }
    ], "view">;
    createCourt: TypedContractMethod<[
        _parent: BigNumberish,
        _hiddenVotes: boolean,
        _minStake: BigNumberish,
        _alpha: BigNumberish,
        _feeForJuror: BigNumberish,
        _jurorsForCourtJump: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        _sortitionExtraData: BytesLike,
        _supportedDisputeKits: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    "createDispute(uint256,bytes)": TypedContractMethod<[
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    "createDispute(uint256,bytes,address,uint256)": TypedContractMethod<[
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike,
        _feeToken: AddressLike,
        _feeAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    currencyRates: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [
            boolean,
            bigint,
            bigint
        ] & {
            feePaymentAccepted: boolean;
            rateInEth: bigint;
            rateDecimals: bigint;
        }
    ], "view">;
    currentRuling: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [
            bigint,
            boolean,
            boolean
        ] & {
            ruling: bigint;
            tied: boolean;
            overridden: boolean;
        }
    ], "view">;
    disputeKits: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    disputes: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint,
            boolean,
            bigint
        ] & {
            courtID: bigint;
            arbitrated: string;
            period: bigint;
            ruled: boolean;
            lastPeriodChange: bigint;
        }
    ], "view">;
    draw: TypedContractMethod<[
        _disputeID: BigNumberish,
        _iterations: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    enableDisputeKits: TypedContractMethod<[
        _courtID: BigNumberish,
        _disputeKitIDs: BigNumberish[],
        _enable: boolean
    ], [
        void
    ], "nonpayable">;
    execute: TypedContractMethod<[
        _disputeID: BigNumberish,
        _round: BigNumberish,
        _iterations: BigNumberish
    ], [
        void
    ], "nonpayable">;
    executeGovernorProposal: TypedContractMethod<[
        _destination: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
    executeRuling: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getDisputeKitsLength: TypedContractMethod<[], [bigint], "view">;
    getNumberOfRounds: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        bigint
    ], "view">;
    getNumberOfVotes: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        bigint
    ], "view">;
    getPnkAtStakePerJuror: TypedContractMethod<[
        _disputeID: BigNumberish,
        _round: BigNumberish
    ], [
        bigint
    ], "view">;
    getRoundInfo: TypedContractMethod<[
        _disputeID: BigNumberish,
        _round: BigNumberish
    ], [
        KlerosCoreBase.RoundStructOutput
    ], "view">;
    getTimesPerPeriod: TypedContractMethod<[
        _courtID: BigNumberish
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    guardian: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[
        _governor: AddressLike,
        _guardian: AddressLike,
        _pinakion: AddressLike,
        _jurorProsecutionModule: AddressLike,
        _disputeKit: AddressLike,
        _hiddenVotes: boolean,
        _courtParameters: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        _sortitionExtraData: BytesLike,
        _sortitionModuleAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    initialize5: TypedContractMethod<[], [void], "nonpayable">;
    isDisputeKitJumping: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        boolean
    ], "view">;
    isSupported: TypedContractMethod<[
        _courtID: BigNumberish,
        _disputeKitID: BigNumberish
    ], [
        boolean
    ], "view">;
    jurorProsecutionModule: TypedContractMethod<[], [string], "view">;
    passPeriod: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        void
    ], "nonpayable">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    pinakion: TypedContractMethod<[], [string], "view">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    setStake: TypedContractMethod<[
        _courtID: BigNumberish,
        _newStake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setStakeBySortitionModule: TypedContractMethod<[
        _account: AddressLike,
        _courtID: BigNumberish,
        _newStake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    sortitionModule: TypedContractMethod<[], [string], "view">;
    transferBySortitionModule: TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    version: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addNewDisputeKit"): TypedContractMethod<[
        _disputeKitAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "appeal"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "appealCost"): TypedContractMethod<[_disputeID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "appealPeriod"): TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [bigint, bigint] & {
            start: bigint;
            end: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "arbitrationCost(bytes,address)"): TypedContractMethod<[
        _extraData: BytesLike,
        _feeToken: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "arbitrationCost(bytes)"): TypedContractMethod<[_extraData: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "changeAcceptedFeeTokens"): TypedContractMethod<[
        _feeToken: AddressLike,
        _accepted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeCourtParameters"): TypedContractMethod<[
        _courtID: BigNumberish,
        _hiddenVotes: boolean,
        _minStake: BigNumberish,
        _alpha: BigNumberish,
        _feeForJuror: BigNumberish,
        _jurorsForCourtJump: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeCurrencyRates"): TypedContractMethod<[
        _feeToken: AddressLike,
        _rateInEth: BigNumberish,
        _rateDecimals: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeGuardian"): TypedContractMethod<[_guardian: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeJurorProsecutionModule"): TypedContractMethod<[
        _jurorProsecutionModule: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changePinakion"): TypedContractMethod<[_pinakion: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeSortitionModule"): TypedContractMethod<[_sortitionModule: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "convertEthToTokenAmount"): TypedContractMethod<[
        _toToken: AddressLike,
        _amountInEth: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "courts"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            boolean,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            parent: bigint;
            hiddenVotes: boolean;
            minStake: bigint;
            alpha: bigint;
            feeForJuror: bigint;
            jurorsForCourtJump: bigint;
            disabled: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "createCourt"): TypedContractMethod<[
        _parent: BigNumberish,
        _hiddenVotes: boolean,
        _minStake: BigNumberish,
        _alpha: BigNumberish,
        _feeForJuror: BigNumberish,
        _jurorsForCourtJump: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        _sortitionExtraData: BytesLike,
        _supportedDisputeKits: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "createDispute(uint256,bytes)"): TypedContractMethod<[
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "createDispute(uint256,bytes,address,uint256)"): TypedContractMethod<[
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike,
        _feeToken: AddressLike,
        _feeAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "currencyRates"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [
            boolean,
            bigint,
            bigint
        ] & {
            feePaymentAccepted: boolean;
            rateInEth: bigint;
            rateDecimals: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "currentRuling"): TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [
            bigint,
            boolean,
            boolean
        ] & {
            ruling: bigint;
            tied: boolean;
            overridden: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "disputeKits"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "disputes"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint,
            boolean,
            bigint
        ] & {
            courtID: bigint;
            arbitrated: string;
            period: bigint;
            ruled: boolean;
            lastPeriodChange: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "draw"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _iterations: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "enableDisputeKits"): TypedContractMethod<[
        _courtID: BigNumberish,
        _disputeKitIDs: BigNumberish[],
        _enable: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "execute"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _round: BigNumberish,
        _iterations: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "executeGovernorProposal"): TypedContractMethod<[
        _destination: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "executeRuling"): TypedContractMethod<[_disputeID: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "getDisputeKitsLength"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getNumberOfRounds"): TypedContractMethod<[_disputeID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getNumberOfVotes"): TypedContractMethod<[_disputeID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getPnkAtStakePerJuror"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _round: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getRoundInfo"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _round: BigNumberish
    ], [
        KlerosCoreBase.RoundStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTimesPerPeriod"): TypedContractMethod<[
        _courtID: BigNumberish
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "guardian"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _governor: AddressLike,
        _guardian: AddressLike,
        _pinakion: AddressLike,
        _jurorProsecutionModule: AddressLike,
        _disputeKit: AddressLike,
        _hiddenVotes: boolean,
        _courtParameters: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        _sortitionExtraData: BytesLike,
        _sortitionModuleAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initialize5"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "isDisputeKitJumping"): TypedContractMethod<[_disputeID: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "isSupported"): TypedContractMethod<[
        _courtID: BigNumberish,
        _disputeKitID: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "jurorProsecutionModule"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "passPeriod"): TypedContractMethod<[_disputeID: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "pinakion"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setStake"): TypedContractMethod<[
        _courtID: BigNumberish,
        _newStake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setStakeBySortitionModule"): TypedContractMethod<[
        _account: AddressLike,
        _courtID: BigNumberish,
        _newStake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "sortitionModule"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "transferBySortitionModule"): TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "version"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "AcceptedFeeToken"): TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
    getEvent(key: "AppealDecision"): TypedContractEvent<AppealDecisionEvent.InputTuple, AppealDecisionEvent.OutputTuple, AppealDecisionEvent.OutputObject>;
    getEvent(key: "AppealPossible"): TypedContractEvent<AppealPossibleEvent.InputTuple, AppealPossibleEvent.OutputTuple, AppealPossibleEvent.OutputObject>;
    getEvent(key: "CourtCreated"): TypedContractEvent<CourtCreatedEvent.InputTuple, CourtCreatedEvent.OutputTuple, CourtCreatedEvent.OutputObject>;
    getEvent(key: "CourtJump"): TypedContractEvent<CourtJumpEvent.InputTuple, CourtJumpEvent.OutputTuple, CourtJumpEvent.OutputObject>;
    getEvent(key: "CourtModified"): TypedContractEvent<CourtModifiedEvent.InputTuple, CourtModifiedEvent.OutputTuple, CourtModifiedEvent.OutputObject>;
    getEvent(key: "DisputeCreation"): TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
    getEvent(key: "DisputeKitCreated"): TypedContractEvent<DisputeKitCreatedEvent.InputTuple, DisputeKitCreatedEvent.OutputTuple, DisputeKitCreatedEvent.OutputObject>;
    getEvent(key: "DisputeKitEnabled"): TypedContractEvent<DisputeKitEnabledEvent.InputTuple, DisputeKitEnabledEvent.OutputTuple, DisputeKitEnabledEvent.OutputObject>;
    getEvent(key: "DisputeKitJump"): TypedContractEvent<DisputeKitJumpEvent.InputTuple, DisputeKitJumpEvent.OutputTuple, DisputeKitJumpEvent.OutputObject>;
    getEvent(key: "Draw"): TypedContractEvent<DrawEvent.InputTuple, DrawEvent.OutputTuple, DrawEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "LeftoverRewardSent"): TypedContractEvent<LeftoverRewardSentEvent.InputTuple, LeftoverRewardSentEvent.OutputTuple, LeftoverRewardSentEvent.OutputObject>;
    getEvent(key: "NewCurrencyRate"): TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
    getEvent(key: "NewPeriod"): TypedContractEvent<NewPeriodEvent.InputTuple, NewPeriodEvent.OutputTuple, NewPeriodEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    getEvent(key: "TokenAndETHShift"): TypedContractEvent<TokenAndETHShiftEvent.InputTuple, TokenAndETHShiftEvent.OutputTuple, TokenAndETHShiftEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "AcceptedFeeToken(address,bool)": TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
        AcceptedFeeToken: TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
        "AppealDecision(uint256,address)": TypedContractEvent<AppealDecisionEvent.InputTuple, AppealDecisionEvent.OutputTuple, AppealDecisionEvent.OutputObject>;
        AppealDecision: TypedContractEvent<AppealDecisionEvent.InputTuple, AppealDecisionEvent.OutputTuple, AppealDecisionEvent.OutputObject>;
        "AppealPossible(uint256,address)": TypedContractEvent<AppealPossibleEvent.InputTuple, AppealPossibleEvent.OutputTuple, AppealPossibleEvent.OutputObject>;
        AppealPossible: TypedContractEvent<AppealPossibleEvent.InputTuple, AppealPossibleEvent.OutputTuple, AppealPossibleEvent.OutputObject>;
        "CourtCreated(uint96,uint96,bool,uint256,uint256,uint256,uint256,uint256[4],uint256[])": TypedContractEvent<CourtCreatedEvent.InputTuple, CourtCreatedEvent.OutputTuple, CourtCreatedEvent.OutputObject>;
        CourtCreated: TypedContractEvent<CourtCreatedEvent.InputTuple, CourtCreatedEvent.OutputTuple, CourtCreatedEvent.OutputObject>;
        "CourtJump(uint256,uint256,uint96,uint96)": TypedContractEvent<CourtJumpEvent.InputTuple, CourtJumpEvent.OutputTuple, CourtJumpEvent.OutputObject>;
        CourtJump: TypedContractEvent<CourtJumpEvent.InputTuple, CourtJumpEvent.OutputTuple, CourtJumpEvent.OutputObject>;
        "CourtModified(uint96,bool,uint256,uint256,uint256,uint256,uint256[4])": TypedContractEvent<CourtModifiedEvent.InputTuple, CourtModifiedEvent.OutputTuple, CourtModifiedEvent.OutputObject>;
        CourtModified: TypedContractEvent<CourtModifiedEvent.InputTuple, CourtModifiedEvent.OutputTuple, CourtModifiedEvent.OutputObject>;
        "DisputeCreation(uint256,address)": TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        DisputeCreation: TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        "DisputeKitCreated(uint256,address)": TypedContractEvent<DisputeKitCreatedEvent.InputTuple, DisputeKitCreatedEvent.OutputTuple, DisputeKitCreatedEvent.OutputObject>;
        DisputeKitCreated: TypedContractEvent<DisputeKitCreatedEvent.InputTuple, DisputeKitCreatedEvent.OutputTuple, DisputeKitCreatedEvent.OutputObject>;
        "DisputeKitEnabled(uint96,uint256,bool)": TypedContractEvent<DisputeKitEnabledEvent.InputTuple, DisputeKitEnabledEvent.OutputTuple, DisputeKitEnabledEvent.OutputObject>;
        DisputeKitEnabled: TypedContractEvent<DisputeKitEnabledEvent.InputTuple, DisputeKitEnabledEvent.OutputTuple, DisputeKitEnabledEvent.OutputObject>;
        "DisputeKitJump(uint256,uint256,uint256,uint256)": TypedContractEvent<DisputeKitJumpEvent.InputTuple, DisputeKitJumpEvent.OutputTuple, DisputeKitJumpEvent.OutputObject>;
        DisputeKitJump: TypedContractEvent<DisputeKitJumpEvent.InputTuple, DisputeKitJumpEvent.OutputTuple, DisputeKitJumpEvent.OutputObject>;
        "Draw(address,uint256,uint256,uint256)": TypedContractEvent<DrawEvent.InputTuple, DrawEvent.OutputTuple, DrawEvent.OutputObject>;
        Draw: TypedContractEvent<DrawEvent.InputTuple, DrawEvent.OutputTuple, DrawEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "LeftoverRewardSent(uint256,uint256,uint256,uint256,address)": TypedContractEvent<LeftoverRewardSentEvent.InputTuple, LeftoverRewardSentEvent.OutputTuple, LeftoverRewardSentEvent.OutputObject>;
        LeftoverRewardSent: TypedContractEvent<LeftoverRewardSentEvent.InputTuple, LeftoverRewardSentEvent.OutputTuple, LeftoverRewardSentEvent.OutputObject>;
        "NewCurrencyRate(address,uint64,uint8)": TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
        NewCurrencyRate: TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
        "NewPeriod(uint256,uint8)": TypedContractEvent<NewPeriodEvent.InputTuple, NewPeriodEvent.OutputTuple, NewPeriodEvent.OutputObject>;
        NewPeriod: TypedContractEvent<NewPeriodEvent.InputTuple, NewPeriodEvent.OutputTuple, NewPeriodEvent.OutputObject>;
        "Paused()": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        "TokenAndETHShift(address,uint256,uint256,uint256,int256,int256,address)": TypedContractEvent<TokenAndETHShiftEvent.InputTuple, TokenAndETHShiftEvent.OutputTuple, TokenAndETHShiftEvent.OutputObject>;
        TokenAndETHShift: TypedContractEvent<TokenAndETHShiftEvent.InputTuple, TokenAndETHShiftEvent.OutputTuple, TokenAndETHShiftEvent.OutputObject>;
        "Unpaused()": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
//# sourceMappingURL=KlerosCore.d.ts.map