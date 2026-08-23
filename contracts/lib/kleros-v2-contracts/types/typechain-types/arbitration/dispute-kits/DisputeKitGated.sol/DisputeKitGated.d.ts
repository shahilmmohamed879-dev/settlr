import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common.js";
export interface DisputeKitGatedInterface extends Interface {
    getFunction(nameOrSignature: "LOSER_APPEAL_PERIOD_MULTIPLIER" | "LOSER_STAKE_MULTIPLIER" | "ONE_BASIS_POINT" | "WINNER_STAKE_MULTIPLIER" | "alreadyDrawn" | "areCommitsAllCast" | "areVotesAllCast" | "castCommit" | "castVote" | "changeCore" | "changeGovernor" | "core" | "coreDisputeIDToActive" | "coreDisputeIDToLocal" | "createDispute" | "currentRuling" | "disputes" | "draw" | "executeGovernorProposal" | "extraDataToTokenInfo" | "fundAppeal" | "getCoherentCount" | "getDegreeOfCoherence" | "getFundedChoices" | "getLocalDisputeRoundID" | "getNumberOfRounds" | "getRoundInfo" | "getVoteInfo" | "governor" | "hashVote" | "initialize" | "initialize7" | "isAppealFunded" | "isVoteActive" | "proxiableUUID" | "singleDrawPerJuror" | "upgradeToAndCall" | "version" | "withdrawFeesAndRewards"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ChoiceFunded" | "CommitCast" | "Contribution" | "DisputeCreation" | "Initialized" | "Upgraded" | "VoteCast" | "Withdrawal"): EventFragment;
    encodeFunctionData(functionFragment: "LOSER_APPEAL_PERIOD_MULTIPLIER", values?: undefined): string;
    encodeFunctionData(functionFragment: "LOSER_STAKE_MULTIPLIER", values?: undefined): string;
    encodeFunctionData(functionFragment: "ONE_BASIS_POINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "WINNER_STAKE_MULTIPLIER", values?: undefined): string;
    encodeFunctionData(functionFragment: "alreadyDrawn", values: [BigNumberish, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "areCommitsAllCast", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "areVotesAllCast", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "castCommit", values: [BigNumberish, BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "castVote", values: [BigNumberish, BigNumberish[], BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "changeCore", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "core", values?: undefined): string;
    encodeFunctionData(functionFragment: "coreDisputeIDToActive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "coreDisputeIDToLocal", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "createDispute", values: [BigNumberish, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "draw", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeGovernorProposal", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "extraDataToTokenInfo", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "fundAppeal", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCoherentCount", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDegreeOfCoherence", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getFundedChoices", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLocalDisputeRoundID", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNumberOfRounds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoundInfo", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getVoteInfo", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hashVote", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize7", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAppealFunded", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isVoteActive", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "singleDrawPerJuror", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFeesAndRewards", values: [BigNumberish, AddressLike, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "LOSER_APPEAL_PERIOD_MULTIPLIER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LOSER_STAKE_MULTIPLIER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ONE_BASIS_POINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WINNER_STAKE_MULTIPLIER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "alreadyDrawn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "areCommitsAllCast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "areVotesAllCast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castCommit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "core", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coreDisputeIDToActive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coreDisputeIDToLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "draw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeGovernorProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraDataToTokenInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundAppeal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCoherentCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDegreeOfCoherence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFundedChoices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocalDisputeRoundID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfRounds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoundInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVoteInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize7", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAppealFunded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isVoteActive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "singleDrawPerJuror", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFeesAndRewards", data: BytesLike): Result;
}
export declare namespace ChoiceFundedEvent {
    type InputTuple = [
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _choice: BigNumberish
    ];
    type OutputTuple = [
        _coreDisputeID: bigint,
        _coreRoundID: bigint,
        _choice: bigint
    ];
    interface OutputObject {
        _coreDisputeID: bigint;
        _coreRoundID: bigint;
        _choice: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CommitCastEvent {
    type InputTuple = [
        _coreDisputeID: BigNumberish,
        _juror: AddressLike,
        _voteIDs: BigNumberish[],
        _commit: BytesLike
    ];
    type OutputTuple = [
        _coreDisputeID: bigint,
        _juror: string,
        _voteIDs: bigint[],
        _commit: string
    ];
    interface OutputObject {
        _coreDisputeID: bigint;
        _juror: string;
        _voteIDs: bigint[];
        _commit: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ContributionEvent {
    type InputTuple = [
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _choice: BigNumberish,
        _contributor: AddressLike,
        _amount: BigNumberish
    ];
    type OutputTuple = [
        _coreDisputeID: bigint,
        _coreRoundID: bigint,
        _choice: bigint,
        _contributor: string,
        _amount: bigint
    ];
    interface OutputObject {
        _coreDisputeID: bigint;
        _coreRoundID: bigint;
        _choice: bigint;
        _contributor: string;
        _amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DisputeCreationEvent {
    type InputTuple = [
        _coreDisputeID: BigNumberish,
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike
    ];
    type OutputTuple = [
        _coreDisputeID: bigint,
        _numberOfChoices: bigint,
        _extraData: string
    ];
    interface OutputObject {
        _coreDisputeID: bigint;
        _numberOfChoices: bigint;
        _extraData: string;
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
export declare namespace VoteCastEvent {
    type InputTuple = [
        _coreDisputeID: BigNumberish,
        _juror: AddressLike,
        _voteIDs: BigNumberish[],
        _choice: BigNumberish,
        _justification: string
    ];
    type OutputTuple = [
        _coreDisputeID: bigint,
        _juror: string,
        _voteIDs: bigint[],
        _choice: bigint,
        _justification: string
    ];
    interface OutputObject {
        _coreDisputeID: bigint;
        _juror: string;
        _voteIDs: bigint[];
        _choice: bigint;
        _justification: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace WithdrawalEvent {
    type InputTuple = [
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _choice: BigNumberish,
        _contributor: AddressLike,
        _amount: BigNumberish
    ];
    type OutputTuple = [
        _coreDisputeID: bigint,
        _coreRoundID: bigint,
        _choice: bigint,
        _contributor: string,
        _amount: bigint
    ];
    interface OutputObject {
        _coreDisputeID: bigint;
        _coreRoundID: bigint;
        _choice: bigint;
        _contributor: string;
        _amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface DisputeKitGated extends BaseContract {
    connect(runner?: ContractRunner | null): DisputeKitGated;
    waitForDeployment(): Promise<this>;
    interface: DisputeKitGatedInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    LOSER_APPEAL_PERIOD_MULTIPLIER: TypedContractMethod<[], [bigint], "view">;
    LOSER_STAKE_MULTIPLIER: TypedContractMethod<[], [bigint], "view">;
    ONE_BASIS_POINT: TypedContractMethod<[], [bigint], "view">;
    WINNER_STAKE_MULTIPLIER: TypedContractMethod<[], [bigint], "view">;
    alreadyDrawn: TypedContractMethod<[
        localDisputeID: BigNumberish,
        localRoundID: BigNumberish,
        drawnAddress: AddressLike
    ], [
        boolean
    ], "view">;
    areCommitsAllCast: TypedContractMethod<[
        _coreDisputeID: BigNumberish
    ], [
        boolean
    ], "view">;
    areVotesAllCast: TypedContractMethod<[
        _coreDisputeID: BigNumberish
    ], [
        boolean
    ], "view">;
    castCommit: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _voteIDs: BigNumberish[],
        _commit: BytesLike
    ], [
        void
    ], "nonpayable">;
    castVote: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _voteIDs: BigNumberish[],
        _choice: BigNumberish,
        _salt: BigNumberish,
        _justification: string
    ], [
        void
    ], "nonpayable">;
    changeCore: TypedContractMethod<[_core: AddressLike], [void], "nonpayable">;
    changeGovernor: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    core: TypedContractMethod<[], [string], "view">;
    coreDisputeIDToActive: TypedContractMethod<[
        coreDisputeID: BigNumberish
    ], [
        boolean
    ], "view">;
    coreDisputeIDToLocal: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        bigint
    ], "view">;
    createDispute: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike,
        _nbVotes: BigNumberish
    ], [
        void
    ], "nonpayable">;
    currentRuling: TypedContractMethod<[
        _coreDisputeID: BigNumberish
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
            boolean,
            string
        ] & {
            numberOfChoices: bigint;
            jumped: boolean;
            extraData: string;
        }
    ], "view">;
    draw: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _nonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    executeGovernorProposal: TypedContractMethod<[
        _destination: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
    extraDataToTokenInfo: TypedContractMethod<[
        _extraData: BytesLike
    ], [
        [
            string,
            boolean,
            bigint
        ] & {
            tokenGate: string;
            isERC1155: boolean;
            tokenId: bigint;
        }
    ], "view">;
    fundAppeal: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _choice: BigNumberish
    ], [
        void
    ], "payable">;
    getCoherentCount: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish
    ], [
        bigint
    ], "view">;
    getDegreeOfCoherence: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _voteID: BigNumberish,
        arg3: BigNumberish,
        arg4: BigNumberish
    ], [
        bigint
    ], "view">;
    getFundedChoices: TypedContractMethod<[
        _coreDisputeID: BigNumberish
    ], [
        bigint[]
    ], "view">;
    getLocalDisputeRoundID: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish
    ], [
        [bigint, bigint] & {
            localDisputeID: bigint;
            localRoundID: bigint;
        }
    ], "view">;
    getNumberOfRounds: TypedContractMethod<[
        _localDisputeID: BigNumberish
    ], [
        bigint
    ], "view">;
    getRoundInfo: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _choice: BigNumberish
    ], [
        [
            bigint,
            boolean,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            winningChoice: bigint;
            tied: boolean;
            totalVoted: bigint;
            totalCommited: bigint;
            nbVoters: bigint;
            choiceCount: bigint;
        }
    ], "view">;
    getVoteInfo: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
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
    governor: TypedContractMethod<[], [string], "view">;
    hashVote: TypedContractMethod<[
        _choice: BigNumberish,
        _salt: BigNumberish,
        _justification: string
    ], [
        string
    ], "view">;
    initialize: TypedContractMethod<[
        _governor: AddressLike,
        _core: AddressLike
    ], [
        void
    ], "nonpayable">;
    initialize7: TypedContractMethod<[], [void], "nonpayable">;
    isAppealFunded: TypedContractMethod<[
        _coreDisputeID: BigNumberish
    ], [
        boolean
    ], "view">;
    isVoteActive: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _voteID: BigNumberish
    ], [
        boolean
    ], "view">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    singleDrawPerJuror: TypedContractMethod<[], [boolean], "view">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    version: TypedContractMethod<[], [string], "view">;
    withdrawFeesAndRewards: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _beneficiary: AddressLike,
        _coreRoundID: BigNumberish,
        _choice: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "LOSER_APPEAL_PERIOD_MULTIPLIER"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "LOSER_STAKE_MULTIPLIER"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "ONE_BASIS_POINT"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "WINNER_STAKE_MULTIPLIER"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "alreadyDrawn"): TypedContractMethod<[
        localDisputeID: BigNumberish,
        localRoundID: BigNumberish,
        drawnAddress: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "areCommitsAllCast"): TypedContractMethod<[_coreDisputeID: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "areVotesAllCast"): TypedContractMethod<[_coreDisputeID: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "castCommit"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _voteIDs: BigNumberish[],
        _commit: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "castVote"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _voteIDs: BigNumberish[],
        _choice: BigNumberish,
        _salt: BigNumberish,
        _justification: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeCore"): TypedContractMethod<[_core: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "core"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "coreDisputeIDToActive"): TypedContractMethod<[coreDisputeID: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "coreDisputeIDToLocal"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "createDispute"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike,
        _nbVotes: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "currentRuling"): TypedContractMethod<[
        _coreDisputeID: BigNumberish
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
            boolean,
            string
        ] & {
            numberOfChoices: bigint;
            jumped: boolean;
            extraData: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "draw"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _nonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "executeGovernorProposal"): TypedContractMethod<[
        _destination: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "extraDataToTokenInfo"): TypedContractMethod<[
        _extraData: BytesLike
    ], [
        [
            string,
            boolean,
            bigint
        ] & {
            tokenGate: string;
            isERC1155: boolean;
            tokenId: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "fundAppeal"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _choice: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "getCoherentCount"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getDegreeOfCoherence"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _voteID: BigNumberish,
        arg3: BigNumberish,
        arg4: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getFundedChoices"): TypedContractMethod<[_coreDisputeID: BigNumberish], [bigint[]], "view">;
    getFunction(nameOrSignature: "getLocalDisputeRoundID"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish
    ], [
        [bigint, bigint] & {
            localDisputeID: bigint;
            localRoundID: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getNumberOfRounds"): TypedContractMethod<[_localDisputeID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getRoundInfo"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _choice: BigNumberish
    ], [
        [
            bigint,
            boolean,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            winningChoice: bigint;
            tied: boolean;
            totalVoted: bigint;
            totalCommited: bigint;
            nbVoters: bigint;
            choiceCount: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getVoteInfo"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
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
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "hashVote"): TypedContractMethod<[
        _choice: BigNumberish,
        _salt: BigNumberish,
        _justification: string
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _governor: AddressLike,
        _core: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initialize7"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "isAppealFunded"): TypedContractMethod<[_coreDisputeID: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "isVoteActive"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _voteID: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "singleDrawPerJuror"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "version"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdrawFeesAndRewards"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _beneficiary: AddressLike,
        _coreRoundID: BigNumberish,
        _choice: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getEvent(key: "ChoiceFunded"): TypedContractEvent<ChoiceFundedEvent.InputTuple, ChoiceFundedEvent.OutputTuple, ChoiceFundedEvent.OutputObject>;
    getEvent(key: "CommitCast"): TypedContractEvent<CommitCastEvent.InputTuple, CommitCastEvent.OutputTuple, CommitCastEvent.OutputObject>;
    getEvent(key: "Contribution"): TypedContractEvent<ContributionEvent.InputTuple, ContributionEvent.OutputTuple, ContributionEvent.OutputObject>;
    getEvent(key: "DisputeCreation"): TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    getEvent(key: "VoteCast"): TypedContractEvent<VoteCastEvent.InputTuple, VoteCastEvent.OutputTuple, VoteCastEvent.OutputObject>;
    getEvent(key: "Withdrawal"): TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
    filters: {
        "ChoiceFunded(uint256,uint256,uint256)": TypedContractEvent<ChoiceFundedEvent.InputTuple, ChoiceFundedEvent.OutputTuple, ChoiceFundedEvent.OutputObject>;
        ChoiceFunded: TypedContractEvent<ChoiceFundedEvent.InputTuple, ChoiceFundedEvent.OutputTuple, ChoiceFundedEvent.OutputObject>;
        "CommitCast(uint256,address,uint256[],bytes32)": TypedContractEvent<CommitCastEvent.InputTuple, CommitCastEvent.OutputTuple, CommitCastEvent.OutputObject>;
        CommitCast: TypedContractEvent<CommitCastEvent.InputTuple, CommitCastEvent.OutputTuple, CommitCastEvent.OutputObject>;
        "Contribution(uint256,uint256,uint256,address,uint256)": TypedContractEvent<ContributionEvent.InputTuple, ContributionEvent.OutputTuple, ContributionEvent.OutputObject>;
        Contribution: TypedContractEvent<ContributionEvent.InputTuple, ContributionEvent.OutputTuple, ContributionEvent.OutputObject>;
        "DisputeCreation(uint256,uint256,bytes)": TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        DisputeCreation: TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        "VoteCast(uint256,address,uint256[],uint256,string)": TypedContractEvent<VoteCastEvent.InputTuple, VoteCastEvent.OutputTuple, VoteCastEvent.OutputObject>;
        VoteCast: TypedContractEvent<VoteCastEvent.InputTuple, VoteCastEvent.OutputTuple, VoteCastEvent.OutputObject>;
        "Withdrawal(uint256,uint256,uint256,address,uint256)": TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
        Withdrawal: TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
    };
}
//# sourceMappingURL=DisputeKitGated.d.ts.map