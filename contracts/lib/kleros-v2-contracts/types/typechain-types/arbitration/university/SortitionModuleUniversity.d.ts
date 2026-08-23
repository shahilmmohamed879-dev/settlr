import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export interface SortitionModuleUniversityInterface extends Interface {
    getFunction(nameOrSignature: "core" | "createDisputeHook" | "createTree" | "disputesWithoutJurors" | "draw" | "getJurorBalance" | "getJurorCourtIDs" | "getJurorLeftoverPNK" | "governor" | "initialize" | "isJurorStaked" | "jurors" | "lockStake" | "notifyRandomNumber" | "penalizeStake" | "postDrawHook" | "proxiableUUID" | "setJurorInactive" | "setStake" | "setTransientJuror" | "unlockStake" | "upgradeToAndCall" | "validateStake" | "version" | "withdrawLeftoverPNK"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "LeftoverPNK" | "LeftoverPNKWithdrawn" | "NewPhase" | "StakeLocked" | "StakeSet" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "core", values?: undefined): string;
    encodeFunctionData(functionFragment: "createDisputeHook", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createTree", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "disputesWithoutJurors", values?: undefined): string;
    encodeFunctionData(functionFragment: "draw", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getJurorBalance", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getJurorCourtIDs", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getJurorLeftoverPNK", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isJurorStaked", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "jurors", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lockStake", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "notifyRandomNumber", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "penalizeStake", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "postDrawHook", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "setJurorInactive", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setStake", values: [
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "setTransientJuror", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "unlockStake", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "validateStake", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawLeftoverPNK", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "core", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDisputeHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createTree", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputesWithoutJurors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "draw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getJurorBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getJurorCourtIDs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getJurorLeftoverPNK", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isJurorStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jurors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notifyRandomNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "penalizeStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postDrawHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setJurorInactive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTransientJuror", data: BytesLike): Result;
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
export interface SortitionModuleUniversity extends BaseContract {
    connect(runner?: ContractRunner | null): SortitionModuleUniversity;
    waitForDeployment(): Promise<this>;
    interface: SortitionModuleUniversityInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
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
    disputesWithoutJurors: TypedContractMethod<[], [bigint], "view">;
    draw: TypedContractMethod<[
        arg0: BytesLike,
        arg1: BigNumberish,
        arg2: BigNumberish
    ], [
        string
    ], "view">;
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
        _core: AddressLike
    ], [
        void
    ], "nonpayable">;
    isJurorStaked: TypedContractMethod<[_juror: AddressLike], [boolean], "view">;
    jurors: TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint] & {
            stakedPnk: bigint;
            lockedPnk: bigint;
        }
    ], "view">;
    lockStake: TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    notifyRandomNumber: TypedContractMethod<[
        _randomNumber: BigNumberish
    ], [
        void
    ], "nonpayable">;
    penalizeStake: TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        [bigint, bigint] & {
            pnkBalance: bigint;
            availablePenalty: bigint;
        }
    ], "nonpayable">;
    postDrawHook: TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BigNumberish
    ], [
        void
    ], "nonpayable">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
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
    setTransientJuror: TypedContractMethod<[
        _juror: AddressLike
    ], [
        void
    ], "nonpayable">;
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
    ], "view">;
    version: TypedContractMethod<[], [string], "view">;
    withdrawLeftoverPNK: TypedContractMethod<[
        _account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
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
    getFunction(nameOrSignature: "disputesWithoutJurors"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "draw"): TypedContractMethod<[
        arg0: BytesLike,
        arg1: BigNumberish,
        arg2: BigNumberish
    ], [
        string
    ], "view">;
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
        _core: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "isJurorStaked"): TypedContractMethod<[_juror: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "jurors"): TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint] & {
            stakedPnk: bigint;
            lockedPnk: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "lockStake"): TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "notifyRandomNumber"): TypedContractMethod<[_randomNumber: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "penalizeStake"): TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        [bigint, bigint] & {
            pnkBalance: bigint;
            availablePenalty: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "postDrawHook"): TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
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
    getFunction(nameOrSignature: "setTransientJuror"): TypedContractMethod<[_juror: AddressLike], [void], "nonpayable">;
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
    ], "view">;
    getFunction(nameOrSignature: "version"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdrawLeftoverPNK"): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "LeftoverPNK"): TypedContractEvent<LeftoverPNKEvent.InputTuple, LeftoverPNKEvent.OutputTuple, LeftoverPNKEvent.OutputObject>;
    getEvent(key: "LeftoverPNKWithdrawn"): TypedContractEvent<LeftoverPNKWithdrawnEvent.InputTuple, LeftoverPNKWithdrawnEvent.OutputTuple, LeftoverPNKWithdrawnEvent.OutputObject>;
    getEvent(key: "NewPhase"): TypedContractEvent<NewPhaseEvent.InputTuple, NewPhaseEvent.OutputTuple, NewPhaseEvent.OutputObject>;
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
        "StakeLocked(address,uint256,bool)": TypedContractEvent<StakeLockedEvent.InputTuple, StakeLockedEvent.OutputTuple, StakeLockedEvent.OutputObject>;
        StakeLocked: TypedContractEvent<StakeLockedEvent.InputTuple, StakeLockedEvent.OutputTuple, StakeLockedEvent.OutputObject>;
        "StakeSet(address,uint256,uint256,uint256)": TypedContractEvent<StakeSetEvent.InputTuple, StakeSetEvent.OutputTuple, StakeSetEvent.OutputObject>;
        StakeSet: TypedContractEvent<StakeSetEvent.InputTuple, StakeSetEvent.OutputTuple, StakeSetEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
//# sourceMappingURL=SortitionModuleUniversity.d.ts.map