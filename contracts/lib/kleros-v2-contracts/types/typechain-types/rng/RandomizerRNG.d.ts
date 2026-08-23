import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common.js";
export interface RandomizerRNGInterface extends Interface {
    getFunction(nameOrSignature: "callbackGasLimit" | "changeGovernor" | "changeSortitionModule" | "governor" | "lastRequestId" | "randomNumbers" | "randomizer" | "randomizerCallback" | "randomizerWithdraw" | "receiveRandomness" | "requestRandomness" | "setCallbackGasLimit" | "setRandomizer" | "sortitionModule"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "RequestFulfilled" | "RequestSent"): EventFragment;
    encodeFunctionData(functionFragment: "callbackGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeSortitionModule", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastRequestId", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomNumbers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "randomizer", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomizerCallback", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "randomizerWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "receiveRandomness", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "requestRandomness", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setCallbackGasLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRandomizer", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "sortitionModule", values?: undefined): string;
    decodeFunctionResult(functionFragment: "callbackGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSortitionModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastRequestId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomNumbers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomizer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomizerCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomizerWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveRandomness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestRandomness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCallbackGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRandomizer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sortitionModule", data: BytesLike): Result;
}
export declare namespace RequestFulfilledEvent {
    type InputTuple = [requestId: BigNumberish, randomWords: BigNumberish];
    type OutputTuple = [requestId: bigint, randomWords: bigint];
    interface OutputObject {
        requestId: bigint;
        randomWords: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RequestSentEvent {
    type InputTuple = [requestId: BigNumberish];
    type OutputTuple = [requestId: bigint];
    interface OutputObject {
        requestId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface RandomizerRNG extends BaseContract {
    connect(runner?: ContractRunner | null): RandomizerRNG;
    waitForDeployment(): Promise<this>;
    interface: RandomizerRNGInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    callbackGasLimit: TypedContractMethod<[], [bigint], "view">;
    changeGovernor: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeSortitionModule: TypedContractMethod<[
        _sortitionModule: AddressLike
    ], [
        void
    ], "nonpayable">;
    governor: TypedContractMethod<[], [string], "view">;
    lastRequestId: TypedContractMethod<[], [bigint], "view">;
    randomNumbers: TypedContractMethod<[
        requestId: BigNumberish
    ], [
        bigint
    ], "view">;
    randomizer: TypedContractMethod<[], [string], "view">;
    randomizerCallback: TypedContractMethod<[
        _id: BigNumberish,
        _value: BytesLike
    ], [
        void
    ], "nonpayable">;
    randomizerWithdraw: TypedContractMethod<[
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    receiveRandomness: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        bigint
    ], "view">;
    requestRandomness: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setCallbackGasLimit: TypedContractMethod<[
        _callbackGasLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setRandomizer: TypedContractMethod<[
        _randomizer: AddressLike
    ], [
        void
    ], "nonpayable">;
    sortitionModule: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "callbackGasLimit"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeSortitionModule"): TypedContractMethod<[_sortitionModule: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "lastRequestId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "randomNumbers"): TypedContractMethod<[requestId: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "randomizer"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "randomizerCallback"): TypedContractMethod<[
        _id: BigNumberish,
        _value: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "randomizerWithdraw"): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "receiveRandomness"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "requestRandomness"): TypedContractMethod<[arg0: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setCallbackGasLimit"): TypedContractMethod<[
        _callbackGasLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setRandomizer"): TypedContractMethod<[_randomizer: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "sortitionModule"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "RequestFulfilled"): TypedContractEvent<RequestFulfilledEvent.InputTuple, RequestFulfilledEvent.OutputTuple, RequestFulfilledEvent.OutputObject>;
    getEvent(key: "RequestSent"): TypedContractEvent<RequestSentEvent.InputTuple, RequestSentEvent.OutputTuple, RequestSentEvent.OutputObject>;
    filters: {
        "RequestFulfilled(uint256,uint256)": TypedContractEvent<RequestFulfilledEvent.InputTuple, RequestFulfilledEvent.OutputTuple, RequestFulfilledEvent.OutputObject>;
        RequestFulfilled: TypedContractEvent<RequestFulfilledEvent.InputTuple, RequestFulfilledEvent.OutputTuple, RequestFulfilledEvent.OutputObject>;
        "RequestSent(uint256)": TypedContractEvent<RequestSentEvent.InputTuple, RequestSentEvent.OutputTuple, RequestSentEvent.OutputObject>;
        RequestSent: TypedContractEvent<RequestSentEvent.InputTuple, RequestSentEvent.OutputTuple, RequestSentEvent.OutputObject>;
    };
}
//# sourceMappingURL=RandomizerRNG.d.ts.map