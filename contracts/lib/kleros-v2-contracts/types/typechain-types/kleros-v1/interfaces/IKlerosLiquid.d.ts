import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export declare namespace IKlerosLiquid {
    type DisputeStruct = {
        subcourtID: BigNumberish;
        arbitrated: AddressLike;
        numberOfChoices: BigNumberish;
        period: BigNumberish;
        lastPeriodChange: BigNumberish;
        drawsInRound: BigNumberish;
        commitsInRound: BigNumberish;
        ruled: boolean;
    };
    type DisputeStructOutput = [
        subcourtID: bigint,
        arbitrated: string,
        numberOfChoices: bigint,
        period: bigint,
        lastPeriodChange: bigint,
        drawsInRound: bigint,
        commitsInRound: bigint,
        ruled: boolean
    ] & {
        subcourtID: bigint;
        arbitrated: string;
        numberOfChoices: bigint;
        period: bigint;
        lastPeriodChange: bigint;
        drawsInRound: bigint;
        commitsInRound: bigint;
        ruled: boolean;
    };
    type JurorStruct = {
        stakedTokens: BigNumberish;
        lockedTokens: BigNumberish;
    };
    type JurorStructOutput = [
        stakedTokens: bigint,
        lockedTokens: bigint
    ] & {
        stakedTokens: bigint;
        lockedTokens: bigint;
    };
}
export interface IKlerosLiquidInterface extends Interface {
    getFunction(nameOrSignature: "appeal" | "appealCost" | "appealPeriod" | "arbitrationCost" | "changeSubcourtTimesPerPeriod" | "courts" | "createDispute" | "currentRuling" | "disputeStatus" | "disputes" | "executeGovernorProposal" | "getDispute" | "getSubcourt" | "getVote" | "jurors" | "lockInsolventTransfers" | "minStakingTime" | "phase" | "pinakion"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AppealDecision" | "AppealPossible" | "DisputeCreation"): EventFragment;
    encodeFunctionData(functionFragment: "appeal", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "appealCost", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "appealPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "arbitrationCost", values: [BytesLike]): string;
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
    encodeFunctionData(functionFragment: "createDispute", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "currentRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputeStatus", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeGovernorProposal", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getDispute", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSubcourt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getVote", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "jurors", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lockInsolventTransfers", values?: undefined): string;
    encodeFunctionData(functionFragment: "minStakingTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "phase", values?: undefined): string;
    encodeFunctionData(functionFragment: "pinakion", values?: undefined): string;
    decodeFunctionResult(functionFragment: "appeal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appealCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appealPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSubcourtTimesPerPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "courts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeGovernorProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubcourt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jurors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockInsolventTransfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minStakingTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "phase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pinakion", data: BytesLike): Result;
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
export interface IKlerosLiquid extends BaseContract {
    connect(runner?: ContractRunner | null): IKlerosLiquid;
    waitForDeployment(): Promise<this>;
    interface: IKlerosLiquidInterface;
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
        _extraData: BytesLike
    ], [
        void
    ], "payable">;
    appealCost: TypedContractMethod<[
        _disputeID: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "view">;
    appealPeriod: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [bigint, bigint] & {
            start: bigint;
            end: bigint;
        }
    ], "view">;
    arbitrationCost: TypedContractMethod<[
        _extraData: BytesLike
    ], [
        bigint
    ], "view">;
    changeSubcourtTimesPerPeriod: TypedContractMethod<[
        _subcourtID: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    courts: TypedContractMethod<[
        _index: BigNumberish
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
    createDispute: TypedContractMethod<[
        _choices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    currentRuling: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        bigint
    ], "view">;
    disputeStatus: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        bigint
    ], "view">;
    disputes: TypedContractMethod<[
        _index: BigNumberish
    ], [
        IKlerosLiquid.DisputeStructOutput
    ], "view">;
    executeGovernorProposal: TypedContractMethod<[
        _destination: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
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
    jurors: TypedContractMethod<[
        _account: AddressLike
    ], [
        IKlerosLiquid.JurorStructOutput
    ], "view">;
    lockInsolventTransfers: TypedContractMethod<[], [boolean], "view">;
    minStakingTime: TypedContractMethod<[], [bigint], "view">;
    phase: TypedContractMethod<[], [bigint], "view">;
    pinakion: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "appeal"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _extraData: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "appealCost"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "appealPeriod"): TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [bigint, bigint] & {
            start: bigint;
            end: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "arbitrationCost"): TypedContractMethod<[_extraData: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "changeSubcourtTimesPerPeriod"): TypedContractMethod<[
        _subcourtID: BigNumberish,
        _timesPerPeriod: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "courts"): TypedContractMethod<[
        _index: BigNumberish
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
    getFunction(nameOrSignature: "createDispute"): TypedContractMethod<[
        _choices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "currentRuling"): TypedContractMethod<[_disputeID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "disputeStatus"): TypedContractMethod<[_disputeID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "disputes"): TypedContractMethod<[
        _index: BigNumberish
    ], [
        IKlerosLiquid.DisputeStructOutput
    ], "view">;
    getFunction(nameOrSignature: "executeGovernorProposal"): TypedContractMethod<[
        _destination: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
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
    getFunction(nameOrSignature: "jurors"): TypedContractMethod<[
        _account: AddressLike
    ], [
        IKlerosLiquid.JurorStructOutput
    ], "view">;
    getFunction(nameOrSignature: "lockInsolventTransfers"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "minStakingTime"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "phase"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "pinakion"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "AppealDecision"): TypedContractEvent<AppealDecisionEvent.InputTuple, AppealDecisionEvent.OutputTuple, AppealDecisionEvent.OutputObject>;
    getEvent(key: "AppealPossible"): TypedContractEvent<AppealPossibleEvent.InputTuple, AppealPossibleEvent.OutputTuple, AppealPossibleEvent.OutputObject>;
    getEvent(key: "DisputeCreation"): TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
    filters: {
        "AppealDecision(uint256,address)": TypedContractEvent<AppealDecisionEvent.InputTuple, AppealDecisionEvent.OutputTuple, AppealDecisionEvent.OutputObject>;
        AppealDecision: TypedContractEvent<AppealDecisionEvent.InputTuple, AppealDecisionEvent.OutputTuple, AppealDecisionEvent.OutputObject>;
        "AppealPossible(uint256,address)": TypedContractEvent<AppealPossibleEvent.InputTuple, AppealPossibleEvent.OutputTuple, AppealPossibleEvent.OutputObject>;
        AppealPossible: TypedContractEvent<AppealPossibleEvent.InputTuple, AppealPossibleEvent.OutputTuple, AppealPossibleEvent.OutputObject>;
        "DisputeCreation(uint256,address)": TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        DisputeCreation: TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
    };
}
//# sourceMappingURL=IKlerosLiquid.d.ts.map