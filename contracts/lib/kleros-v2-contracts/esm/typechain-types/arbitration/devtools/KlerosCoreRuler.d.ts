import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export declare namespace KlerosCoreRuler {
    type RulerSettingsStruct = {
        rulingMode: BigNumberish;
        presetRuling: BigNumberish;
        presetTied: boolean;
        presetOverridden: boolean;
    };
    type RulerSettingsStructOutput = [
        rulingMode: bigint,
        presetRuling: bigint,
        presetTied: boolean,
        presetOverridden: boolean
    ] & {
        rulingMode: bigint;
        presetRuling: bigint;
        presetTied: boolean;
        presetOverridden: boolean;
    };
    type RoundStruct = {
        totalFeesForJurors: BigNumberish;
        sumFeeRewardPaid: BigNumberish;
        feeToken: AddressLike;
    };
    type RoundStructOutput = [
        totalFeesForJurors: bigint,
        sumFeeRewardPaid: bigint,
        feeToken: string
    ] & {
        totalFeesForJurors: bigint;
        sumFeeRewardPaid: bigint;
        feeToken: string;
    };
}
export interface KlerosCoreRulerInterface extends Interface {
    getFunction(nameOrSignature: "appeal" | "appealCost" | "arbitrationCost(bytes,address)" | "arbitrationCost(bytes)" | "changeAcceptedFeeTokens" | "changeCourtParameters" | "changeCurrencyRates" | "changeGovernor" | "changePinakion" | "changeRuler" | "changeRulingModeToAutomaticPreset" | "changeRulingModeToAutomaticRandom" | "changeRulingModeToManual" | "convertEthToTokenAmount" | "courts" | "createCourt" | "createDispute(uint256,bytes)" | "createDispute(uint256,bytes,address,uint256)" | "currencyRates" | "currentRuling" | "disputes" | "execute" | "executeGovernorProposal" | "executeRuling" | "getNextDisputeID" | "getNumberOfRounds" | "getNumberOfVotes" | "getRoundInfo" | "getTimesPerPeriod" | "governor" | "initialize" | "initialize2" | "pinakion" | "proxiableUUID" | "rulers" | "rulingResults" | "settings" | "upgradeToAndCall" | "version"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AcceptedFeeToken" | "AppealDecision" | "AppealPossible" | "AutoRuled" | "CourtCreated" | "CourtJump" | "CourtModified" | "DisputeCreation" | "Initialized" | "LeftoverRewardSent" | "NewCurrencyRate" | "NewPeriod" | "RulerChanged" | "RulerSettingsChanged" | "Ruling" | "TokenAndETHShift" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "appeal", values: [BigNumberish, BigNumberish, BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "appealCost", values: [BigNumberish, boolean]): string;
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
    encodeFunctionData(functionFragment: "changePinakion", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeRuler", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "changeRulingModeToAutomaticPreset", values: [AddressLike, BigNumberish, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "changeRulingModeToAutomaticRandom", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeRulingModeToManual", values: [AddressLike]): string;
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
        ]
    ]): string;
    encodeFunctionData(functionFragment: "createDispute(uint256,bytes)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "createDispute(uint256,bytes,address,uint256)", values: [BigNumberish, BytesLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currencyRates", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "currentRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "execute", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeGovernorProposal", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeRuling", values: [BigNumberish, BigNumberish, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "getNextDisputeID", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNumberOfRounds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNumberOfVotes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoundInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTimesPerPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        AddressLike,
        AddressLike,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ]): string;
    encodeFunctionData(functionFragment: "initialize2", values?: undefined): string;
    encodeFunctionData(functionFragment: "pinakion", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "rulers", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "rulingResults", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "settings", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "appeal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appealCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCost(bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCost(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeAcceptedFeeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCourtParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCurrencyRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changePinakion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeRuler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeRulingModeToAutomaticPreset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeRulingModeToAutomaticRandom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeRulingModeToManual", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertEthToTokenAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "courts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createCourt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(uint256,bytes,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currencyRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeGovernorProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextDisputeID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfRounds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoundInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimesPerPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pinakion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rulers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rulingResults", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settings", data: BytesLike): Result;
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
export declare namespace AutoRuledEvent {
    type InputTuple = [
        _arbitrable: AddressLike,
        mode: BigNumberish,
        _disputeID: BigNumberish,
        _ruling: BigNumberish,
        tied: boolean,
        overridden: boolean
    ];
    type OutputTuple = [
        _arbitrable: string,
        mode: bigint,
        _disputeID: bigint,
        _ruling: bigint,
        tied: boolean,
        overridden: boolean
    ];
    interface OutputObject {
        _arbitrable: string;
        mode: bigint;
        _disputeID: bigint;
        _ruling: bigint;
        tied: boolean;
        overridden: boolean;
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
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ];
    type OutputTuple = [
        _courtID: bigint,
        _parent: bigint,
        _hiddenVotes: boolean,
        _minStake: bigint,
        _alpha: bigint,
        _feeForJuror: bigint,
        _jurorsForCourtJump: bigint,
        _timesPerPeriod: [bigint, bigint, bigint, bigint]
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
export declare namespace RulerChangedEvent {
    type InputTuple = [
        _arbitrable: AddressLike,
        _oldRuler: AddressLike,
        _newRuler: AddressLike
    ];
    type OutputTuple = [
        _arbitrable: string,
        _oldRuler: string,
        _newRuler: string
    ];
    interface OutputObject {
        _arbitrable: string;
        _oldRuler: string;
        _newRuler: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RulerSettingsChangedEvent {
    type InputTuple = [
        _arbitrable: AddressLike,
        _settings: KlerosCoreRuler.RulerSettingsStruct
    ];
    type OutputTuple = [
        _arbitrable: string,
        _settings: KlerosCoreRuler.RulerSettingsStructOutput
    ];
    interface OutputObject {
        _arbitrable: string;
        _settings: KlerosCoreRuler.RulerSettingsStructOutput;
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
export interface KlerosCoreRuler extends BaseContract {
    connect(runner?: ContractRunner | null): KlerosCoreRuler;
    waitForDeployment(): Promise<this>;
    interface: KlerosCoreRulerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    appeal: TypedContractMethod<[
        _disputeID: BigNumberish,
        _numberOfChoices: BigNumberish,
        arg2: BytesLike,
        _jump: boolean
    ], [
        void
    ], "payable">;
    appealCost: TypedContractMethod<[
        _disputeID: BigNumberish,
        _jump: boolean
    ], [
        bigint
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
    changePinakion: TypedContractMethod<[
        _pinakion: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeRuler: TypedContractMethod<[
        _arbitrable: AddressLike,
        _newRuler: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeRulingModeToAutomaticPreset: TypedContractMethod<[
        _arbitrable: AddressLike,
        _presetRuling: BigNumberish,
        _presetTied: boolean,
        _presetOverridden: boolean
    ], [
        void
    ], "nonpayable">;
    changeRulingModeToAutomaticRandom: TypedContractMethod<[
        _arbitrable: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeRulingModeToManual: TypedContractMethod<[
        _arbitrable: AddressLike
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
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
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
    disputes: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint,
            boolean
        ] & {
            courtID: bigint;
            arbitrated: string;
            period: bigint;
            ruled: boolean;
        }
    ], "view">;
    execute: TypedContractMethod<[
        _disputeID: BigNumberish,
        _round: BigNumberish
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
        _disputeID: BigNumberish,
        _ruling: BigNumberish,
        tied: boolean,
        overridden: boolean
    ], [
        void
    ], "nonpayable">;
    getNextDisputeID: TypedContractMethod<[], [bigint], "view">;
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
    getRoundInfo: TypedContractMethod<[
        _disputeID: BigNumberish,
        _round: BigNumberish
    ], [
        KlerosCoreRuler.RoundStructOutput
    ], "view">;
    getTimesPerPeriod: TypedContractMethod<[
        _courtID: BigNumberish
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[
        _governor: AddressLike,
        _pinakion: AddressLike,
        _courtParameters: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    initialize2: TypedContractMethod<[], [void], "nonpayable">;
    pinakion: TypedContractMethod<[], [string], "view">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    rulers: TypedContractMethod<[arbitrable: AddressLike], [string], "view">;
    rulingResults: TypedContractMethod<[
        disputeID: BigNumberish
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
    settings: TypedContractMethod<[
        arbitrable: AddressLike
    ], [
        [
            bigint,
            bigint,
            boolean,
            boolean
        ] & {
            rulingMode: bigint;
            presetRuling: bigint;
            presetTied: boolean;
            presetOverridden: boolean;
        }
    ], "view">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    version: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "appeal"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _numberOfChoices: BigNumberish,
        arg2: BytesLike,
        _jump: boolean
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "appealCost"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _jump: boolean
    ], [
        bigint
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
    getFunction(nameOrSignature: "changePinakion"): TypedContractMethod<[_pinakion: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeRuler"): TypedContractMethod<[
        _arbitrable: AddressLike,
        _newRuler: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeRulingModeToAutomaticPreset"): TypedContractMethod<[
        _arbitrable: AddressLike,
        _presetRuling: BigNumberish,
        _presetTied: boolean,
        _presetOverridden: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeRulingModeToAutomaticRandom"): TypedContractMethod<[_arbitrable: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeRulingModeToManual"): TypedContractMethod<[_arbitrable: AddressLike], [void], "nonpayable">;
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
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
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
    getFunction(nameOrSignature: "disputes"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint,
            boolean
        ] & {
            courtID: bigint;
            arbitrated: string;
            period: bigint;
            ruled: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "execute"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _round: BigNumberish
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
    getFunction(nameOrSignature: "executeRuling"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish,
        tied: boolean,
        overridden: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getNextDisputeID"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getNumberOfRounds"): TypedContractMethod<[_disputeID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getNumberOfVotes"): TypedContractMethod<[_disputeID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getRoundInfo"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _round: BigNumberish
    ], [
        KlerosCoreRuler.RoundStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTimesPerPeriod"): TypedContractMethod<[
        _courtID: BigNumberish
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _governor: AddressLike,
        _pinakion: AddressLike,
        _courtParameters: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initialize2"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "pinakion"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rulers"): TypedContractMethod<[arbitrable: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "rulingResults"): TypedContractMethod<[
        disputeID: BigNumberish
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
    getFunction(nameOrSignature: "settings"): TypedContractMethod<[
        arbitrable: AddressLike
    ], [
        [
            bigint,
            bigint,
            boolean,
            boolean
        ] & {
            rulingMode: bigint;
            presetRuling: bigint;
            presetTied: boolean;
            presetOverridden: boolean;
        }
    ], "view">;
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
    getEvent(key: "AutoRuled"): TypedContractEvent<AutoRuledEvent.InputTuple, AutoRuledEvent.OutputTuple, AutoRuledEvent.OutputObject>;
    getEvent(key: "CourtCreated"): TypedContractEvent<CourtCreatedEvent.InputTuple, CourtCreatedEvent.OutputTuple, CourtCreatedEvent.OutputObject>;
    getEvent(key: "CourtJump"): TypedContractEvent<CourtJumpEvent.InputTuple, CourtJumpEvent.OutputTuple, CourtJumpEvent.OutputObject>;
    getEvent(key: "CourtModified"): TypedContractEvent<CourtModifiedEvent.InputTuple, CourtModifiedEvent.OutputTuple, CourtModifiedEvent.OutputObject>;
    getEvent(key: "DisputeCreation"): TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "LeftoverRewardSent"): TypedContractEvent<LeftoverRewardSentEvent.InputTuple, LeftoverRewardSentEvent.OutputTuple, LeftoverRewardSentEvent.OutputObject>;
    getEvent(key: "NewCurrencyRate"): TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
    getEvent(key: "NewPeriod"): TypedContractEvent<NewPeriodEvent.InputTuple, NewPeriodEvent.OutputTuple, NewPeriodEvent.OutputObject>;
    getEvent(key: "RulerChanged"): TypedContractEvent<RulerChangedEvent.InputTuple, RulerChangedEvent.OutputTuple, RulerChangedEvent.OutputObject>;
    getEvent(key: "RulerSettingsChanged"): TypedContractEvent<RulerSettingsChangedEvent.InputTuple, RulerSettingsChangedEvent.OutputTuple, RulerSettingsChangedEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    getEvent(key: "TokenAndETHShift"): TypedContractEvent<TokenAndETHShiftEvent.InputTuple, TokenAndETHShiftEvent.OutputTuple, TokenAndETHShiftEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "AcceptedFeeToken(address,bool)": TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
        AcceptedFeeToken: TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
        "AppealDecision(uint256,address)": TypedContractEvent<AppealDecisionEvent.InputTuple, AppealDecisionEvent.OutputTuple, AppealDecisionEvent.OutputObject>;
        AppealDecision: TypedContractEvent<AppealDecisionEvent.InputTuple, AppealDecisionEvent.OutputTuple, AppealDecisionEvent.OutputObject>;
        "AppealPossible(uint256,address)": TypedContractEvent<AppealPossibleEvent.InputTuple, AppealPossibleEvent.OutputTuple, AppealPossibleEvent.OutputObject>;
        AppealPossible: TypedContractEvent<AppealPossibleEvent.InputTuple, AppealPossibleEvent.OutputTuple, AppealPossibleEvent.OutputObject>;
        "AutoRuled(address,uint8,uint256,uint256,bool,bool)": TypedContractEvent<AutoRuledEvent.InputTuple, AutoRuledEvent.OutputTuple, AutoRuledEvent.OutputObject>;
        AutoRuled: TypedContractEvent<AutoRuledEvent.InputTuple, AutoRuledEvent.OutputTuple, AutoRuledEvent.OutputObject>;
        "CourtCreated(uint256,uint96,bool,uint256,uint256,uint256,uint256,uint256[4])": TypedContractEvent<CourtCreatedEvent.InputTuple, CourtCreatedEvent.OutputTuple, CourtCreatedEvent.OutputObject>;
        CourtCreated: TypedContractEvent<CourtCreatedEvent.InputTuple, CourtCreatedEvent.OutputTuple, CourtCreatedEvent.OutputObject>;
        "CourtJump(uint256,uint256,uint96,uint96)": TypedContractEvent<CourtJumpEvent.InputTuple, CourtJumpEvent.OutputTuple, CourtJumpEvent.OutputObject>;
        CourtJump: TypedContractEvent<CourtJumpEvent.InputTuple, CourtJumpEvent.OutputTuple, CourtJumpEvent.OutputObject>;
        "CourtModified(uint96,bool,uint256,uint256,uint256,uint256,uint256[4])": TypedContractEvent<CourtModifiedEvent.InputTuple, CourtModifiedEvent.OutputTuple, CourtModifiedEvent.OutputObject>;
        CourtModified: TypedContractEvent<CourtModifiedEvent.InputTuple, CourtModifiedEvent.OutputTuple, CourtModifiedEvent.OutputObject>;
        "DisputeCreation(uint256,address)": TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        DisputeCreation: TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "LeftoverRewardSent(uint256,uint256,uint256,uint256,address)": TypedContractEvent<LeftoverRewardSentEvent.InputTuple, LeftoverRewardSentEvent.OutputTuple, LeftoverRewardSentEvent.OutputObject>;
        LeftoverRewardSent: TypedContractEvent<LeftoverRewardSentEvent.InputTuple, LeftoverRewardSentEvent.OutputTuple, LeftoverRewardSentEvent.OutputObject>;
        "NewCurrencyRate(address,uint64,uint8)": TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
        NewCurrencyRate: TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
        "NewPeriod(uint256,uint8)": TypedContractEvent<NewPeriodEvent.InputTuple, NewPeriodEvent.OutputTuple, NewPeriodEvent.OutputObject>;
        NewPeriod: TypedContractEvent<NewPeriodEvent.InputTuple, NewPeriodEvent.OutputTuple, NewPeriodEvent.OutputObject>;
        "RulerChanged(address,address,address)": TypedContractEvent<RulerChangedEvent.InputTuple, RulerChangedEvent.OutputTuple, RulerChangedEvent.OutputObject>;
        RulerChanged: TypedContractEvent<RulerChangedEvent.InputTuple, RulerChangedEvent.OutputTuple, RulerChangedEvent.OutputObject>;
        "RulerSettingsChanged(address,tuple)": TypedContractEvent<RulerSettingsChangedEvent.InputTuple, RulerSettingsChangedEvent.OutputTuple, RulerSettingsChangedEvent.OutputObject>;
        RulerSettingsChanged: TypedContractEvent<RulerSettingsChangedEvent.InputTuple, RulerSettingsChangedEvent.OutputTuple, RulerSettingsChangedEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        "TokenAndETHShift(address,uint256,uint256,uint256,int256,int256,address)": TypedContractEvent<TokenAndETHShiftEvent.InputTuple, TokenAndETHShiftEvent.OutputTuple, TokenAndETHShiftEvent.OutputObject>;
        TokenAndETHShift: TypedContractEvent<TokenAndETHShiftEvent.InputTuple, TokenAndETHShiftEvent.OutputTuple, TokenAndETHShiftEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
