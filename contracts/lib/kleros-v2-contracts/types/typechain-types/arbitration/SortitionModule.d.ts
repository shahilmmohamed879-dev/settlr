import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common.js";
export interface SortitionModuleInterface extends Interface {
    getFunction(nameOrSignature: "changeGovernor" | "changeMaxDrawingTime" | "changeMinStakingTime" | "changeRandomNumberGenerator" | "core" | "createDisputeHook" | "createTree" | "delayedStakeReadIndex" | "delayedStakeWriteIndex" | "delayedStakes" | "disputesWithoutJurors" | "draw" | "executeDelayedStakes" | "getJurorBalance" | "getJurorCourtIDs" | "getJurorLeftoverPNK" | "governor" | "initialize" | "initialize4" | "isJurorStaked" | "jurors" | "lastPhaseChange" | "latestDelayedStakeIndex" | "lockStake" | "maxDrawingTime" | "minStakingTime" | "notifyRandomNumber" | "passPhase" | "penalizeStake" | "phase" | "postDrawHook" | "proxiableUUID" | "randomNumber" | "randomNumberRequestBlock" | "rng" | "rngLookahead" | "setJurorInactive" | "setStake" | "stakeOf(bytes32,bytes32)" | "stakeOf(address,uint96)" | "unlockStake" | "upgradeToAndCall" | "validateStake" | "version" | "withdrawLeftoverPNK"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "LeftoverPNK" | "LeftoverPNKWithdrawn" | "NewPhase" | "StakeDelayed" | "StakeLocked" | "StakeSet" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeMaxDrawingTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeMinStakingTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeRandomNumberGenerator", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "core", values?: undefined): string;
    encodeFunctionData(functionFragment: "createDisputeHook", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createTree", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "delayedStakeReadIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "delayedStakeWriteIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "delayedStakes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputesWithoutJurors", values?: undefined): string;
    encodeFunctionData(functionFragment: "draw", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeDelayedStakes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getJurorBalance", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getJurorCourtIDs", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getJurorLeftoverPNK", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        AddressLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "initialize4", values?: undefined): string;
    encodeFunctionData(functionFragment: "isJurorStaked", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "jurors", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lastPhaseChange", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestDelayedStakeIndex", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockStake", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "maxDrawingTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "minStakingTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "notifyRandomNumber", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "passPhase", values?: undefined): string;
    encodeFunctionData(functionFragment: "penalizeStake", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "phase", values?: undefined): string;
    encodeFunctionData(functionFragment: "postDrawHook", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomNumberRequestBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "rng", values?: undefined): string;
    encodeFunctionData(functionFragment: "rngLookahead", values?: undefined): string;
    encodeFunctionData(functionFragment: "setJurorInactive", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setStake", values: [
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "stakeOf(bytes32,bytes32)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "stakeOf(address,uint96)", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unlockStake", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "validateStake", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawLeftoverPNK", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeMaxDrawingTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeMinStakingTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeRandomNumberGenerator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "core", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDisputeHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createTree", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayedStakeReadIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayedStakeWriteIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayedStakes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputesWithoutJurors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "draw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeDelayedStakes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getJurorBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getJurorCourtIDs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getJurorLeftoverPNK", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isJurorStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jurors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPhaseChange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestDelayedStakeIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDrawingTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minStakingTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notifyRandomNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "passPhase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "penalizeStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "phase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postDrawHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomNumberRequestBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rng", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rngLookahead", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setJurorInactive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeOf(bytes32,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeOf(address,uint96)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawLeftoverPNK", data: BytesLike): Result;
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
export declare namespace LeftoverPNKEvent {
    type InputTuple = [_account: AddressLike, _amount: BigNumberish];
    type OutputTuple = [_account: string, _amount: bigint];
    interface OutputObject {
        _account: string;
        _amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LeftoverPNKWithdrawnEvent {
    type InputTuple = [_account: AddressLike, _amount: BigNumberish];
    type OutputTuple = [_account: string, _amount: bigint];
    interface OutputObject {
        _account: string;
        _amount: bigint;
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
export declare namespace StakeDelayedEvent {
    type InputTuple = [
        _address: AddressLike,
        _courtID: BigNumberish,
        _amount: BigNumberish
    ];
    type OutputTuple = [
        _address: string,
        _courtID: bigint,
        _amount: bigint
    ];
    interface OutputObject {
        _address: string;
        _courtID: bigint;
        _amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace StakeLockedEvent {
    type InputTuple = [
        _address: AddressLike,
        _relativeAmount: BigNumberish,
        _unlock: boolean
    ];
    type OutputTuple = [
        _address: string,
        _relativeAmount: bigint,
        _unlock: boolean
    ];
    interface OutputObject {
        _address: string;
        _relativeAmount: bigint;
        _unlock: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace StakeSetEvent {
    type InputTuple = [
        _address: AddressLike,
        _courtID: BigNumberish,
        _amount: BigNumberish,
        _amountAllCourts: BigNumberish
    ];
    type OutputTuple = [
        _address: string,
        _courtID: bigint,
        _amount: bigint,
        _amountAllCourts: bigint
    ];
    interface OutputObject {
        _address: string;
        _courtID: bigint;
        _amount: bigint;
        _amountAllCourts: bigint;
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
export interface SortitionModule extends BaseContract {
    connect(runner?: ContractRunner | null): SortitionModule;
    waitForDeployment(): Promise<this>;
    interface: SortitionModuleInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
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
    changeRandomNumberGenerator: TypedContractMethod<[
        _rng: AddressLike,
        _rngLookahead: BigNumberish
    ], [
        void
    ], "nonpayable">;
    core: TypedContractMethod<[], [string], "view">;
    createDisputeHook: TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BigNumberish
    ], [
        void
    ], "nonpayable">;
    createTree: TypedContractMethod<[
        _key: BytesLike,
        _extraData: BytesLike
    ], [
        void
    ], "nonpayable">;
    delayedStakeReadIndex: TypedContractMethod<[], [bigint], "view">;
    delayedStakeWriteIndex: TypedContractMethod<[], [bigint], "view">;
    delayedStakes: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            bigint,
            bigint,
            boolean
        ] & {
            account: string;
            courtID: bigint;
            stake: bigint;
            alreadyTransferred: boolean;
        }
    ], "view">;
    disputesWithoutJurors: TypedContractMethod<[], [bigint], "view">;
    draw: TypedContractMethod<[
        _key: BytesLike,
        _coreDisputeID: BigNumberish,
        _nonce: BigNumberish
    ], [
        string
    ], "view">;
    executeDelayedStakes: TypedContractMethod<[
        _iterations: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getJurorBalance: TypedContractMethod<[
        _juror: AddressLike,
        _courtID: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            totalStaked: bigint;
            totalLocked: bigint;
            stakedInCourt: bigint;
            nbCourts: bigint;
        }
    ], "view">;
    getJurorCourtIDs: TypedContractMethod<[
        _juror: AddressLike
    ], [
        bigint[]
    ], "view">;
    getJurorLeftoverPNK: TypedContractMethod<[
        _juror: AddressLike
    ], [
        bigint
    ], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[
        _governor: AddressLike,
        _core: AddressLike,
        _minStakingTime: BigNumberish,
        _maxDrawingTime: BigNumberish,
        _rng: AddressLike,
        _rngLookahead: BigNumberish
    ], [
        void
    ], "nonpayable">;
    initialize4: TypedContractMethod<[], [void], "nonpayable">;
    isJurorStaked: TypedContractMethod<[_juror: AddressLike], [boolean], "view">;
    jurors: TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint] & {
            stakedPnk: bigint;
            lockedPnk: bigint;
        }
    ], "view">;
    lastPhaseChange: TypedContractMethod<[], [bigint], "view">;
    latestDelayedStakeIndex: TypedContractMethod<[
        jurorAccount: AddressLike,
        courtId: BigNumberish
    ], [
        bigint
    ], "view">;
    lockStake: TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    maxDrawingTime: TypedContractMethod<[], [bigint], "view">;
    minStakingTime: TypedContractMethod<[], [bigint], "view">;
    notifyRandomNumber: TypedContractMethod<[
        _randomNumber: BigNumberish
    ], [
        void
    ], "nonpayable">;
    passPhase: TypedContractMethod<[], [void], "nonpayable">;
    penalizeStake: TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        [bigint, bigint] & {
            pnkBalance: bigint;
            availablePenalty: bigint;
        }
    ], "nonpayable">;
    phase: TypedContractMethod<[], [bigint], "view">;
    postDrawHook: TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BigNumberish
    ], [
        void
    ], "nonpayable">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    randomNumber: TypedContractMethod<[], [bigint], "view">;
    randomNumberRequestBlock: TypedContractMethod<[], [bigint], "view">;
    rng: TypedContractMethod<[], [string], "view">;
    rngLookahead: TypedContractMethod<[], [bigint], "view">;
    setJurorInactive: TypedContractMethod<[
        _account: AddressLike
    ], [
        void
    ], "nonpayable">;
    setStake: TypedContractMethod<[
        _account: AddressLike,
        _courtID: BigNumberish,
        _pnkDeposit: BigNumberish,
        _pnkWithdrawal: BigNumberish,
        _newStake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "stakeOf(bytes32,bytes32)": TypedContractMethod<[
        _key: BytesLike,
        _ID: BytesLike
    ], [
        bigint
    ], "view">;
    "stakeOf(address,uint96)": TypedContractMethod<[
        _juror: AddressLike,
        _courtID: BigNumberish
    ], [
        bigint
    ], "view">;
    unlockStake: TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    validateStake: TypedContractMethod<[
        _account: AddressLike,
        _courtID: BigNumberish,
        _newStake: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            pnkDeposit: bigint;
            pnkWithdrawal: bigint;
            stakingResult: bigint;
        }
    ], "nonpayable">;
    version: TypedContractMethod<[], [string], "view">;
    withdrawLeftoverPNK: TypedContractMethod<[
        _account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeMaxDrawingTime"): TypedContractMethod<[_maxDrawingTime: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeMinStakingTime"): TypedContractMethod<[_minStakingTime: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeRandomNumberGenerator"): TypedContractMethod<[
        _rng: AddressLike,
        _rngLookahead: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "core"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "createDisputeHook"): TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "createTree"): TypedContractMethod<[
        _key: BytesLike,
        _extraData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "delayedStakeReadIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "delayedStakeWriteIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "delayedStakes"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            bigint,
            bigint,
            boolean
        ] & {
            account: string;
            courtID: bigint;
            stake: bigint;
            alreadyTransferred: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "disputesWithoutJurors"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "draw"): TypedContractMethod<[
        _key: BytesLike,
        _coreDisputeID: BigNumberish,
        _nonce: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "executeDelayedStakes"): TypedContractMethod<[_iterations: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "getJurorBalance"): TypedContractMethod<[
        _juror: AddressLike,
        _courtID: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            totalStaked: bigint;
            totalLocked: bigint;
            stakedInCourt: bigint;
            nbCourts: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getJurorCourtIDs"): TypedContractMethod<[_juror: AddressLike], [bigint[]], "view">;
    getFunction(nameOrSignature: "getJurorLeftoverPNK"): TypedContractMethod<[_juror: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _governor: AddressLike,
        _core: AddressLike,
        _minStakingTime: BigNumberish,
        _maxDrawingTime: BigNumberish,
        _rng: AddressLike,
        _rngLookahead: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initialize4"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "isJurorStaked"): TypedContractMethod<[_juror: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "jurors"): TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint] & {
            stakedPnk: bigint;
            lockedPnk: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "lastPhaseChange"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "latestDelayedStakeIndex"): TypedContractMethod<[
        jurorAccount: AddressLike,
        courtId: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "lockStake"): TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "maxDrawingTime"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "minStakingTime"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "notifyRandomNumber"): TypedContractMethod<[_randomNumber: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "passPhase"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "penalizeStake"): TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        [bigint, bigint] & {
            pnkBalance: bigint;
            availablePenalty: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "phase"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "postDrawHook"): TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "randomNumber"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "randomNumberRequestBlock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "rng"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rngLookahead"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "setJurorInactive"): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setStake"): TypedContractMethod<[
        _account: AddressLike,
        _courtID: BigNumberish,
        _pnkDeposit: BigNumberish,
        _pnkWithdrawal: BigNumberish,
        _newStake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "stakeOf(bytes32,bytes32)"): TypedContractMethod<[_key: BytesLike, _ID: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "stakeOf(address,uint96)"): TypedContractMethod<[
        _juror: AddressLike,
        _courtID: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "unlockStake"): TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "validateStake"): TypedContractMethod<[
        _account: AddressLike,
        _courtID: BigNumberish,
        _newStake: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            pnkDeposit: bigint;
            pnkWithdrawal: bigint;
            stakingResult: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "version"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdrawLeftoverPNK"): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "LeftoverPNK"): TypedContractEvent<LeftoverPNKEvent.InputTuple, LeftoverPNKEvent.OutputTuple, LeftoverPNKEvent.OutputObject>;
    getEvent(key: "LeftoverPNKWithdrawn"): TypedContractEvent<LeftoverPNKWithdrawnEvent.InputTuple, LeftoverPNKWithdrawnEvent.OutputTuple, LeftoverPNKWithdrawnEvent.OutputObject>;
    getEvent(key: "NewPhase"): TypedContractEvent<NewPhaseEvent.InputTuple, NewPhaseEvent.OutputTuple, NewPhaseEvent.OutputObject>;
    getEvent(key: "StakeDelayed"): TypedContractEvent<StakeDelayedEvent.InputTuple, StakeDelayedEvent.OutputTuple, StakeDelayedEvent.OutputObject>;
    getEvent(key: "StakeLocked"): TypedContractEvent<StakeLockedEvent.InputTuple, StakeLockedEvent.OutputTuple, StakeLockedEvent.OutputObject>;
    getEvent(key: "StakeSet"): TypedContractEvent<StakeSetEvent.InputTuple, StakeSetEvent.OutputTuple, StakeSetEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "LeftoverPNK(address,uint256)": TypedContractEvent<LeftoverPNKEvent.InputTuple, LeftoverPNKEvent.OutputTuple, LeftoverPNKEvent.OutputObject>;
        LeftoverPNK: TypedContractEvent<LeftoverPNKEvent.InputTuple, LeftoverPNKEvent.OutputTuple, LeftoverPNKEvent.OutputObject>;
        "LeftoverPNKWithdrawn(address,uint256)": TypedContractEvent<LeftoverPNKWithdrawnEvent.InputTuple, LeftoverPNKWithdrawnEvent.OutputTuple, LeftoverPNKWithdrawnEvent.OutputObject>;
        LeftoverPNKWithdrawn: TypedContractEvent<LeftoverPNKWithdrawnEvent.InputTuple, LeftoverPNKWithdrawnEvent.OutputTuple, LeftoverPNKWithdrawnEvent.OutputObject>;
        "NewPhase(uint8)": TypedContractEvent<NewPhaseEvent.InputTuple, NewPhaseEvent.OutputTuple, NewPhaseEvent.OutputObject>;
        NewPhase: TypedContractEvent<NewPhaseEvent.InputTuple, NewPhaseEvent.OutputTuple, NewPhaseEvent.OutputObject>;
        "StakeDelayed(address,uint96,uint256)": TypedContractEvent<StakeDelayedEvent.InputTuple, StakeDelayedEvent.OutputTuple, StakeDelayedEvent.OutputObject>;
        StakeDelayed: TypedContractEvent<StakeDelayedEvent.InputTuple, StakeDelayedEvent.OutputTuple, StakeDelayedEvent.OutputObject>;
        "StakeLocked(address,uint256,bool)": TypedContractEvent<StakeLockedEvent.InputTuple, StakeLockedEvent.OutputTuple, StakeLockedEvent.OutputObject>;
        StakeLocked: TypedContractEvent<StakeLockedEvent.InputTuple, StakeLockedEvent.OutputTuple, StakeLockedEvent.OutputObject>;
        "StakeSet(address,uint256,uint256,uint256)": TypedContractEvent<StakeSetEvent.InputTuple, StakeSetEvent.OutputTuple, StakeSetEvent.OutputObject>;
        StakeSet: TypedContractEvent<StakeSetEvent.InputTuple, StakeSetEvent.OutputTuple, StakeSetEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
//# sourceMappingURL=SortitionModule.d.ts.map