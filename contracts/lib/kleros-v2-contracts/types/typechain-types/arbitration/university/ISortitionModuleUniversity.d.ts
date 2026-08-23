import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export interface ISortitionModuleUniversityInterface extends Interface {
    getFunction(nameOrSignature: "createDisputeHook" | "createTree" | "draw" | "getJurorBalance" | "getJurorCourtIDs" | "getJurorLeftoverPNK" | "isJurorStaked" | "lockStake" | "notifyRandomNumber" | "penalizeStake" | "postDrawHook" | "setJurorInactive" | "setStake" | "setTransientJuror" | "unlockStake" | "validateStake" | "withdrawLeftoverPNK"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "NewPhase"): EventFragment;
    encodeFunctionData(functionFragment: "createDisputeHook", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createTree", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "draw", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getJurorBalance", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getJurorCourtIDs", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getJurorLeftoverPNK", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isJurorStaked", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lockStake", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "notifyRandomNumber", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "penalizeStake", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "postDrawHook", values: [BigNumberish, BigNumberish]): string;
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
    encodeFunctionData(functionFragment: "validateStake", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawLeftoverPNK", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "createDisputeHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createTree", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "draw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getJurorBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getJurorCourtIDs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getJurorLeftoverPNK", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isJurorStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notifyRandomNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "penalizeStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postDrawHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setJurorInactive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTransientJuror", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawLeftoverPNK", data: BytesLike): Result;
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
export interface ISortitionModuleUniversity extends BaseContract {
    connect(runner?: ContractRunner | null): ISortitionModuleUniversity;
    waitForDeployment(): Promise<this>;
    interface: ISortitionModuleUniversityInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    createDisputeHook: TypedContractMethod<[
        _disputeID: BigNumberish,
        _roundID: BigNumberish
    ], [
        void
    ], "nonpayable">;
    createTree: TypedContractMethod<[
        _key: BytesLike,
        _extraData: BytesLike
    ], [
        void
    ], "nonpayable">;
    draw: TypedContractMethod<[
        _court: BytesLike,
        _coreDisputeID: BigNumberish,
        _nonce: BigNumberish
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
    isJurorStaked: TypedContractMethod<[_juror: AddressLike], [boolean], "view">;
    lockStake: TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    notifyRandomNumber: TypedContractMethod<[
        _drawnNumber: BigNumberish
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
        _disputeID: BigNumberish,
        _roundID: BigNumberish
    ], [
        void
    ], "nonpayable">;
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
    withdrawLeftoverPNK: TypedContractMethod<[
        _account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "createDisputeHook"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _roundID: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "createTree"): TypedContractMethod<[
        _key: BytesLike,
        _extraData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "draw"): TypedContractMethod<[
        _court: BytesLike,
        _coreDisputeID: BigNumberish,
        _nonce: BigNumberish
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
    getFunction(nameOrSignature: "isJurorStaked"): TypedContractMethod<[_juror: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "lockStake"): TypedContractMethod<[
        _account: AddressLike,
        _relativeAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "notifyRandomNumber"): TypedContractMethod<[_drawnNumber: BigNumberish], [void], "nonpayable">;
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
        _disputeID: BigNumberish,
        _roundID: BigNumberish
    ], [
        void
    ], "nonpayable">;
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
    getFunction(nameOrSignature: "withdrawLeftoverPNK"): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
    getEvent(key: "NewPhase"): TypedContractEvent<NewPhaseEvent.InputTuple, NewPhaseEvent.OutputTuple, NewPhaseEvent.OutputObject>;
    filters: {
        "NewPhase(uint8)": TypedContractEvent<NewPhaseEvent.InputTuple, NewPhaseEvent.OutputTuple, NewPhaseEvent.OutputObject>;
        NewPhase: TypedContractEvent<NewPhaseEvent.InputTuple, NewPhaseEvent.OutputTuple, NewPhaseEvent.OutputObject>;
    };
}
//# sourceMappingURL=ISortitionModuleUniversity.d.ts.map