import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export interface XKlerosLiquidV2Interface extends Interface {
    getFunction(nameOrSignature: "ALPHA_DIVISOR" | "DEFAULT_NB_OF_JURORS" | "MAX_STAKE_PATHS" | "NON_PAYABLE_AMOUNT" | "RN" | "RNBlock" | "RNGenerator" | "arbitrationCost(bytes,address)" | "arbitrationCost(bytes)" | "changeForeignGateway" | "changeGovernor" | "changeMaxDrawingTime" | "changeMinStakingTime" | "changePinakion" | "changeRNGenerator" | "changeSubcourtAlpha" | "changeSubcourtJurorFee" | "changeSubcourtJurorsForJump" | "changeSubcourtMinStake" | "changeSubcourtTimesPerPeriod" | "courts" | "createDispute(uint256,bytes)" | "createDispute(uint256,bytes,address,uint256)" | "createSubcourt" | "currentRuling" | "delayedSetStakes" | "disputes" | "disputesRuling" | "disputesWithoutJurors" | "executeDelayedSetStakes" | "executeGovernorProposal" | "foreignGateway" | "getDispute" | "getJuror" | "getSubcourt" | "getVote" | "getVoteCounter" | "governor" | "initialize" | "jurors" | "lastDelayedSetStake" | "lastPhaseChange" | "lockInsolventTransfers" | "maxDrawingTime" | "minStakingTime" | "nextDelayedSetStake" | "onApprove" | "onTransfer" | "phase" | "pinakion" | "proxyPayment" | "rule" | "setStake" | "stakeOf" | "totalDisputes"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AcceptedFeeToken" | "DisputeCreation" | "Draw" | "Initialized" | "NewCurrencyRate" | "NewPeriod" | "NewPhase" | "Ruling" | "StakeSet" | "TokenAndETHShift"): EventFragment;
    encodeFunctionData(functionFragment: "ALPHA_DIVISOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_NB_OF_JURORS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_STAKE_PATHS", values?: undefined): string;
    encodeFunctionData(functionFragment: "NON_PAYABLE_AMOUNT", values?: undefined): string;
    encodeFunctionData(functionFragment: "RN", values?: undefined): string;
    encodeFunctionData(functionFragment: "RNBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "RNGenerator", values?: undefined): string;
    encodeFunctionData(functionFragment: "arbitrationCost(bytes,address)", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "arbitrationCost(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "changeForeignGateway", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeMaxDrawingTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeMinStakingTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changePinakion", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeRNGenerator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeSubcourtAlpha", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeSubcourtJurorFee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeSubcourtJurorsForJump", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeSubcourtMinStake", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeSubcourtTimesPerPeriod", values: [
        BigNumberish,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ]): string;
    encodeFunctionData(functionFragment: "courts", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "createDispute(uint256,bytes)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "createDispute(uint256,bytes,address,uint256)", values: [BigNumberish, BytesLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createSubcourt", values: [
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
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "currentRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "delayedSetStakes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputesRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputesWithoutJurors", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeDelayedSetStakes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeGovernorProposal", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "foreignGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDispute", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getJuror", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getSubcourt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getVote", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getVoteCounter", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
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
        BigNumberish,
        AddressLike
    ]): string;
    encodeFunctionData(functionFragment: "jurors", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lastDelayedSetStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastPhaseChange", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockInsolventTransfers", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxDrawingTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "minStakingTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextDelayedSetStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "onApprove", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "onTransfer", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "phase", values?: undefined): string;
    encodeFunctionData(functionFragment: "pinakion", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxyPayment", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "rule", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setStake", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakeOf", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalDisputes", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ALPHA_DIVISOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_NB_OF_JURORS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_STAKE_PATHS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NON_PAYABLE_AMOUNT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RNBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RNGenerator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCost(bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCost(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeForeignGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeMaxDrawingTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeMinStakingTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changePinakion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeRNGenerator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSubcourtAlpha", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSubcourtJurorFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSubcourtJurorsForJump", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSubcourtMinStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSubcourtTimesPerPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "courts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(uint256,bytes,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSubcourt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayedSetStakes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputesRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputesWithoutJurors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeDelayedSetStakes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeGovernorProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "foreignGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getJuror", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubcourt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVoteCounter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jurors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastDelayedSetStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPhaseChange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockInsolventTransfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDrawingTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minStakingTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextDelayedSetStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onApprove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "phase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pinakion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyPayment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDisputes", data: BytesLike): Result;
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
export declare namespace DrawEvent {
    type InputTuple = [
        _address: AddressLike,
        _disputeID: BigNumberish,
        _appeal: BigNumberish,
        _voteID: BigNumberish
    ];
    type OutputTuple = [
        _address: string,
        _disputeID: bigint,
        _appeal: bigint,
        _voteID: bigint
    ];
    interface OutputObject {
        _address: string;
        _disputeID: bigint;
        _appeal: bigint;
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
export declare namespace NewPhaseEvent {
    type InputTuple = [_phase: BigNumberish];
    type OutputTuple = [_phase: bigint];
    interface OutputObject {
        _phase: bigint;
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
export declare namespace StakeSetEvent {
    type InputTuple = [
        _address: AddressLike,
        _subcourtID: BigNumberish,
        _stake: BigNumberish,
        _newTotalStake: BigNumberish
    ];
    type OutputTuple = [
        _address: string,
        _subcourtID: bigint,
        _stake: bigint,
        _newTotalStake: bigint
    ];
    interface OutputObject {
        _address: string;
        _subcourtID: bigint;
        _stake: bigint;
        _newTotalStake: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokenAndETHShiftEvent {
    type InputTuple = [
        _address: AddressLike,
        _disputeID: BigNumberish,
        _tokenAmount: BigNumberish,
        _ETHAmount: BigNumberish
    ];
    type OutputTuple = [
        _address: string,
        _disputeID: bigint,
        _tokenAmount: bigint,
        _ETHAmount: bigint
    ];
    interface OutputObject {
        _address: string;
        _disputeID: bigint;
        _tokenAmount: bigint;
        _ETHAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface XKlerosLiquidV2 extends BaseContract {
    connect(runner?: ContractRunner | null): XKlerosLiquidV2;
    waitForDeployment(): Promise<this>;
    interface: XKlerosLiquidV2Interface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ALPHA_DIVISOR: TypedContractMethod<[], [bigint], "view">;
    DEFAULT_NB_OF_JURORS: TypedContractMethod<[], [bigint], "view">;
    MAX_STAKE_PATHS: TypedContractMethod<[], [bigint], "view">;
    NON_PAYABLE_AMOUNT: TypedContractMethod<[], [bigint], "view">;
    RN: TypedContractMethod<[], [bigint], "view">;
    RNBlock: TypedContractMethod<[], [bigint], "view">;
    RNGenerator: TypedContractMethod<[], [string], "view">;
    "arbitrationCost(bytes,address)": TypedContractMethod<[
        arg0: BytesLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    "arbitrationCost(bytes)": TypedContractMethod<[
        _extraData: BytesLike
    ], [
        bigint
    ], "view">;
    changeForeignGateway: TypedContractMethod<[
        _foreignGateway: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeGovernor: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeMaxDrawingTime: TypedContractMethod<[
        _maxDrawingTime: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeMinStakingTime: TypedContractMethod<[
        _minStakingTime: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changePinakion: TypedContractMethod<[
        _pinakion: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeRNGenerator: TypedContractMethod<[
        _RNGenerator: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeSubcourtAlpha: TypedContractMethod<[
        _subcourtID: BigNumberish,
        _alpha: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeSubcourtJurorFee: TypedContractMethod<[
        _subcourtID: BigNumberish,
        _feeForJuror: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeSubcourtJurorsForJump: TypedContractMethod<[
        _subcourtID: BigNumberish,
        _jurorsForCourtJump: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeSubcourtMinStake: TypedContractMethod<[
        _subcourtID: BigNumberish,
        _minStake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeSubcourtTimesPerPeriod: TypedContractMethod<[
        _subcourtID: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    courts: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            boolean,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            parent: bigint;
            hiddenVotes: boolean;
            minStake: bigint;
            alpha: bigint;
            feeForJuror: bigint;
            jurorsForCourtJump: bigint;
        }
    ], "view">;
    "createDispute(uint256,bytes)": TypedContractMethod<[
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    "createDispute(uint256,bytes,address,uint256)": TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BytesLike,
        arg2: AddressLike,
        arg3: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    createSubcourt: TypedContractMethod<[
        _parent: BigNumberish,
        _hiddenVotes: boolean,
        _minStake: BigNumberish,
        _alpha: BigNumberish,
        _feeForJuror: BigNumberish,
        _jurorsForCourtJump: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        _sortitionSumTreeK: BigNumberish
    ], [
        void
    ], "nonpayable">;
    currentRuling: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [bigint, boolean, boolean] & {
            ruling: bigint;
            tied: boolean;
        }
    ], "view">;
    delayedSetStakes: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            bigint,
            bigint
        ] & {
            account: string;
            subcourtID: bigint;
            stake: bigint;
        }
    ], "view">;
    disputes: TypedContractMethod<[
        disputeId: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            subcourtID: bigint;
            arbitrated: string;
            numberOfChoices: bigint;
            period: bigint;
            lastPeriodChange: bigint;
            drawsInRound: bigint;
            commitsInRound: bigint;
            ruled: boolean;
        }
    ], "view">;
    disputesRuling: TypedContractMethod<[
        disputeId: BigNumberish
    ], [
        bigint
    ], "view">;
    disputesWithoutJurors: TypedContractMethod<[], [bigint], "view">;
    executeDelayedSetStakes: TypedContractMethod<[
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
    foreignGateway: TypedContractMethod<[], [string], "view">;
    getDispute: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [
            bigint[],
            bigint[],
            bigint[],
            bigint[],
            bigint[],
            bigint[]
        ] & {
            votesLengths: bigint[];
            tokensAtStakePerJuror: bigint[];
            totalFeesForJurors: bigint[];
            votesInEachRound: bigint[];
            repartitionsInEachRound: bigint[];
            penaltiesInEachRound: bigint[];
        }
    ], "view">;
    getJuror: TypedContractMethod<[_account: AddressLike], [bigint[]], "view">;
    getSubcourt: TypedContractMethod<[
        _subcourtID: BigNumberish
    ], [
        [
            bigint[],
            [bigint, bigint, bigint, bigint]
        ] & {
            children: bigint[];
            timesPerPeriod: [bigint, bigint, bigint, bigint];
        }
    ], "view">;
    getVote: TypedContractMethod<[
        _disputeID: BigNumberish,
        _appeal: BigNumberish,
        _voteID: BigNumberish
    ], [
        [
            string,
            string,
            bigint,
            boolean
        ] & {
            account: string;
            commit: string;
            choice: bigint;
            voted: boolean;
        }
    ], "view">;
    getVoteCounter: TypedContractMethod<[
        _disputeID: BigNumberish,
        _appeal: BigNumberish
    ], [
        [
            bigint,
            bigint[],
            boolean
        ] & {
            winningChoice: bigint;
            counts: bigint[];
            tied: boolean;
        }
    ], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[
        _governor: AddressLike,
        _pinakion: AddressLike,
        _RNGenerator: AddressLike,
        _minStakingTime: BigNumberish,
        _maxDrawingTime: BigNumberish,
        _hiddenVotes: boolean,
        _courtParameters: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        _sortitionSumTreeK: BigNumberish,
        _foreignGateway: AddressLike
    ], [
        void
    ], "nonpayable">;
    jurors: TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint] & {
            stakedTokens: bigint;
            lockedTokens: bigint;
        }
    ], "view">;
    lastDelayedSetStake: TypedContractMethod<[], [bigint], "view">;
    lastPhaseChange: TypedContractMethod<[], [bigint], "view">;
    lockInsolventTransfers: TypedContractMethod<[], [boolean], "view">;
    maxDrawingTime: TypedContractMethod<[], [bigint], "view">;
    minStakingTime: TypedContractMethod<[], [bigint], "view">;
    nextDelayedSetStake: TypedContractMethod<[], [bigint], "view">;
    onApprove: TypedContractMethod<[
        _owner: AddressLike,
        _spender: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    onTransfer: TypedContractMethod<[
        _from: AddressLike,
        _to: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    phase: TypedContractMethod<[], [bigint], "view">;
    pinakion: TypedContractMethod<[], [string], "view">;
    proxyPayment: TypedContractMethod<[
        _owner: AddressLike
    ], [
        boolean
    ], "payable">;
    rule: TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setStake: TypedContractMethod<[
        _subcourtID: BigNumberish,
        _stake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    stakeOf: TypedContractMethod<[
        _account: AddressLike,
        _subcourtID: BigNumberish
    ], [
        bigint
    ], "view">;
    totalDisputes: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "ALPHA_DIVISOR"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "DEFAULT_NB_OF_JURORS"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "MAX_STAKE_PATHS"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "NON_PAYABLE_AMOUNT"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "RN"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "RNBlock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "RNGenerator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "arbitrationCost(bytes,address)"): TypedContractMethod<[
        arg0: BytesLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "arbitrationCost(bytes)"): TypedContractMethod<[_extraData: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "changeForeignGateway"): TypedContractMethod<[_foreignGateway: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeMaxDrawingTime"): TypedContractMethod<[_maxDrawingTime: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeMinStakingTime"): TypedContractMethod<[_minStakingTime: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "changePinakion"): TypedContractMethod<[_pinakion: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeRNGenerator"): TypedContractMethod<[_RNGenerator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeSubcourtAlpha"): TypedContractMethod<[
        _subcourtID: BigNumberish,
        _alpha: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeSubcourtJurorFee"): TypedContractMethod<[
        _subcourtID: BigNumberish,
        _feeForJuror: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeSubcourtJurorsForJump"): TypedContractMethod<[
        _subcourtID: BigNumberish,
        _jurorsForCourtJump: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeSubcourtMinStake"): TypedContractMethod<[
        _subcourtID: BigNumberish,
        _minStake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeSubcourtTimesPerPeriod"): TypedContractMethod<[
        _subcourtID: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "courts"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            boolean,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            parent: bigint;
            hiddenVotes: boolean;
            minStake: bigint;
            alpha: bigint;
            feeForJuror: bigint;
            jurorsForCourtJump: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "createDispute(uint256,bytes)"): TypedContractMethod<[
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "createDispute(uint256,bytes,address,uint256)"): TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BytesLike,
        arg2: AddressLike,
        arg3: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "createSubcourt"): TypedContractMethod<[
        _parent: BigNumberish,
        _hiddenVotes: boolean,
        _minStake: BigNumberish,
        _alpha: BigNumberish,
        _feeForJuror: BigNumberish,
        _jurorsForCourtJump: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        _sortitionSumTreeK: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "currentRuling"): TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [bigint, boolean, boolean] & {
            ruling: bigint;
            tied: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "delayedSetStakes"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            bigint,
            bigint
        ] & {
            account: string;
            subcourtID: bigint;
            stake: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "disputes"): TypedContractMethod<[
        disputeId: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            subcourtID: bigint;
            arbitrated: string;
            numberOfChoices: bigint;
            period: bigint;
            lastPeriodChange: bigint;
            drawsInRound: bigint;
            commitsInRound: bigint;
            ruled: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "disputesRuling"): TypedContractMethod<[disputeId: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "disputesWithoutJurors"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "executeDelayedSetStakes"): TypedContractMethod<[_iterations: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "executeGovernorProposal"): TypedContractMethod<[
        _destination: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "foreignGateway"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getDispute"): TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [
            bigint[],
            bigint[],
            bigint[],
            bigint[],
            bigint[],
            bigint[]
        ] & {
            votesLengths: bigint[];
            tokensAtStakePerJuror: bigint[];
            totalFeesForJurors: bigint[];
            votesInEachRound: bigint[];
            repartitionsInEachRound: bigint[];
            penaltiesInEachRound: bigint[];
        }
    ], "view">;
    getFunction(nameOrSignature: "getJuror"): TypedContractMethod<[_account: AddressLike], [bigint[]], "view">;
    getFunction(nameOrSignature: "getSubcourt"): TypedContractMethod<[
        _subcourtID: BigNumberish
    ], [
        [
            bigint[],
            [bigint, bigint, bigint, bigint]
        ] & {
            children: bigint[];
            timesPerPeriod: [bigint, bigint, bigint, bigint];
        }
    ], "view">;
    getFunction(nameOrSignature: "getVote"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _appeal: BigNumberish,
        _voteID: BigNumberish
    ], [
        [
            string,
            string,
            bigint,
            boolean
        ] & {
            account: string;
            commit: string;
            choice: bigint;
            voted: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "getVoteCounter"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _appeal: BigNumberish
    ], [
        [
            bigint,
            bigint[],
            boolean
        ] & {
            winningChoice: bigint;
            counts: bigint[];
            tied: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _governor: AddressLike,
        _pinakion: AddressLike,
        _RNGenerator: AddressLike,
        _minStakingTime: BigNumberish,
        _maxDrawingTime: BigNumberish,
        _hiddenVotes: boolean,
        _courtParameters: [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
        _sortitionSumTreeK: BigNumberish,
        _foreignGateway: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "jurors"): TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint] & {
            stakedTokens: bigint;
            lockedTokens: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "lastDelayedSetStake"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "lastPhaseChange"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "lockInsolventTransfers"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "maxDrawingTime"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "minStakingTime"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "nextDelayedSetStake"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "onApprove"): TypedContractMethod<[
        _owner: AddressLike,
        _spender: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "onTransfer"): TypedContractMethod<[
        _from: AddressLike,
        _to: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "phase"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "pinakion"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "proxyPayment"): TypedContractMethod<[_owner: AddressLike], [boolean], "payable">;
    getFunction(nameOrSignature: "rule"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setStake"): TypedContractMethod<[
        _subcourtID: BigNumberish,
        _stake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "stakeOf"): TypedContractMethod<[
        _account: AddressLike,
        _subcourtID: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "totalDisputes"): TypedContractMethod<[], [bigint], "view">;
    getEvent(key: "AcceptedFeeToken"): TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
    getEvent(key: "DisputeCreation"): TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
    getEvent(key: "Draw"): TypedContractEvent<DrawEvent.InputTuple, DrawEvent.OutputTuple, DrawEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "NewCurrencyRate"): TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
    getEvent(key: "NewPeriod"): TypedContractEvent<NewPeriodEvent.InputTuple, NewPeriodEvent.OutputTuple, NewPeriodEvent.OutputObject>;
    getEvent(key: "NewPhase"): TypedContractEvent<NewPhaseEvent.InputTuple, NewPhaseEvent.OutputTuple, NewPhaseEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    getEvent(key: "StakeSet"): TypedContractEvent<StakeSetEvent.InputTuple, StakeSetEvent.OutputTuple, StakeSetEvent.OutputObject>;
    getEvent(key: "TokenAndETHShift"): TypedContractEvent<TokenAndETHShiftEvent.InputTuple, TokenAndETHShiftEvent.OutputTuple, TokenAndETHShiftEvent.OutputObject>;
    filters: {
        "AcceptedFeeToken(address,bool)": TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
        AcceptedFeeToken: TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
        "DisputeCreation(uint256,address)": TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        DisputeCreation: TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        "Draw(address,uint256,uint256,uint256)": TypedContractEvent<DrawEvent.InputTuple, DrawEvent.OutputTuple, DrawEvent.OutputObject>;
        Draw: TypedContractEvent<DrawEvent.InputTuple, DrawEvent.OutputTuple, DrawEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "NewCurrencyRate(address,uint64,uint8)": TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
        NewCurrencyRate: TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
        "NewPeriod(uint256,uint8)": TypedContractEvent<NewPeriodEvent.InputTuple, NewPeriodEvent.OutputTuple, NewPeriodEvent.OutputObject>;
        NewPeriod: TypedContractEvent<NewPeriodEvent.InputTuple, NewPeriodEvent.OutputTuple, NewPeriodEvent.OutputObject>;
        "NewPhase(uint8)": TypedContractEvent<NewPhaseEvent.InputTuple, NewPhaseEvent.OutputTuple, NewPhaseEvent.OutputObject>;
        NewPhase: TypedContractEvent<NewPhaseEvent.InputTuple, NewPhaseEvent.OutputTuple, NewPhaseEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        "StakeSet(address,uint256,uint128,uint256)": TypedContractEvent<StakeSetEvent.InputTuple, StakeSetEvent.OutputTuple, StakeSetEvent.OutputObject>;
        StakeSet: TypedContractEvent<StakeSetEvent.InputTuple, StakeSetEvent.OutputTuple, StakeSetEvent.OutputObject>;
        "TokenAndETHShift(address,uint256,int256,int256)": TypedContractEvent<TokenAndETHShiftEvent.InputTuple, TokenAndETHShiftEvent.OutputTuple, TokenAndETHShiftEvent.OutputObject>;
        TokenAndETHShift: TypedContractEvent<TokenAndETHShiftEvent.InputTuple, TokenAndETHShiftEvent.OutputTuple, TokenAndETHShiftEvent.OutputObject>;
    };
}
