import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export interface IArbitratorV1Interface extends Interface {
    getFunction(nameOrSignature: "appeal" | "appealCost" | "appealPeriod" | "arbitrationCost" | "createDispute" | "currentRuling" | "disputeStatus"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AppealDecision" | "AppealPossible" | "DisputeCreation"): EventFragment;
    encodeFunctionData(functionFragment: "appeal", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "appealCost", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "appealPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "arbitrationCost", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "createDispute", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "currentRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputeStatus", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "appeal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appealCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appealPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeStatus", data: BytesLike): Result;
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
export interface IArbitratorV1 extends BaseContract {
    connect(runner?: ContractRunner | null): IArbitratorV1;
    waitForDeployment(): Promise<this>;
    interface: IArbitratorV1Interface;
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
    getFunction(nameOrSignature: "createDispute"): TypedContractMethod<[
        _choices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "currentRuling"): TypedContractMethod<[_disputeID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "disputeStatus"): TypedContractMethod<[_disputeID: BigNumberish], [bigint], "view">;
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
//# sourceMappingURL=IArbitratorV1.d.ts.map