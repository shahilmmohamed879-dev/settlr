import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common.js";
export interface ChainlinkRNGInterface extends Interface {
    getFunction(nameOrSignature: "acceptOwnership" | "callbackGasLimit" | "changeCallbackGasLimit" | "changeGovernor" | "changeKeyHash" | "changeRequestConfirmations" | "changeSortitionModule" | "changeSubscriptionId" | "changeVrfCoordinator" | "governor" | "keyHash" | "lastRequestId" | "owner" | "randomNumbers" | "rawFulfillRandomWords" | "receiveRandomness" | "requestConfirmations" | "requestRandomness" | "s_vrfCoordinator" | "setCoordinator" | "sortitionModule" | "subscriptionId" | "transferOwnership"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "CoordinatorSet" | "OwnershipTransferRequested" | "OwnershipTransferred" | "RequestFulfilled" | "RequestSent"): EventFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "callbackGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeCallbackGasLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeKeyHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "changeRequestConfirmations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeSortitionModule", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeSubscriptionId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeVrfCoordinator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "keyHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastRequestId", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomNumbers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rawFulfillRandomWords", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "receiveRandomness", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "requestConfirmations", values?: undefined): string;
    encodeFunctionData(functionFragment: "requestRandomness", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "s_vrfCoordinator", values?: undefined): string;
    encodeFunctionData(functionFragment: "setCoordinator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "sortitionModule", values?: undefined): string;
    encodeFunctionData(functionFragment: "subscriptionId", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callbackGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCallbackGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeKeyHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeRequestConfirmations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSortitionModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSubscriptionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeVrfCoordinator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "keyHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastRequestId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomNumbers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rawFulfillRandomWords", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveRandomness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestConfirmations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestRandomness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "s_vrfCoordinator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCoordinator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sortitionModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subscriptionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
export declare namespace CoordinatorSetEvent {
    type InputTuple = [vrfCoordinator: AddressLike];
    type OutputTuple = [vrfCoordinator: string];
    interface OutputObject {
        vrfCoordinator: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferRequestedEvent {
    type InputTuple = [from: AddressLike, to: AddressLike];
    type OutputTuple = [from: string, to: string];
    interface OutputObject {
        from: string;
        to: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferredEvent {
    type InputTuple = [from: AddressLike, to: AddressLike];
    type OutputTuple = [from: string, to: string];
    interface OutputObject {
        from: string;
        to: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RequestFulfilledEvent {
    type InputTuple = [requestId: BigNumberish, randomWord: BigNumberish];
    type OutputTuple = [requestId: bigint, randomWord: bigint];
    interface OutputObject {
        requestId: bigint;
        randomWord: bigint;
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
export interface ChainlinkRNG extends BaseContract {
    connect(runner?: ContractRunner | null): ChainlinkRNG;
    waitForDeployment(): Promise<this>;
    interface: ChainlinkRNGInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;
    callbackGasLimit: TypedContractMethod<[], [bigint], "view">;
    changeCallbackGasLimit: TypedContractMethod<[
        _callbackGasLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeGovernor: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeKeyHash: TypedContractMethod<[
        _keyHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    changeRequestConfirmations: TypedContractMethod<[
        _requestConfirmations: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeSortitionModule: TypedContractMethod<[
        _sortitionModule: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeSubscriptionId: TypedContractMethod<[
        _subscriptionId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeVrfCoordinator: TypedContractMethod<[
        _vrfCoordinator: AddressLike
    ], [
        void
    ], "nonpayable">;
    governor: TypedContractMethod<[], [string], "view">;
    keyHash: TypedContractMethod<[], [string], "view">;
    lastRequestId: TypedContractMethod<[], [bigint], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    randomNumbers: TypedContractMethod<[
        requestId: BigNumberish
    ], [
        bigint
    ], "view">;
    rawFulfillRandomWords: TypedContractMethod<[
        requestId: BigNumberish,
        randomWords: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    receiveRandomness: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        bigint
    ], "view">;
    requestConfirmations: TypedContractMethod<[], [bigint], "view">;
    requestRandomness: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        void
    ], "nonpayable">;
    s_vrfCoordinator: TypedContractMethod<[], [string], "view">;
    setCoordinator: TypedContractMethod<[
        _vrfCoordinator: AddressLike
    ], [
        void
    ], "nonpayable">;
    sortitionModule: TypedContractMethod<[], [string], "view">;
    subscriptionId: TypedContractMethod<[], [bigint], "view">;
    transferOwnership: TypedContractMethod<[
        to: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "callbackGasLimit"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "changeCallbackGasLimit"): TypedContractMethod<[
        _callbackGasLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeKeyHash"): TypedContractMethod<[_keyHash: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeRequestConfirmations"): TypedContractMethod<[
        _requestConfirmations: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeSortitionModule"): TypedContractMethod<[_sortitionModule: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeSubscriptionId"): TypedContractMethod<[_subscriptionId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeVrfCoordinator"): TypedContractMethod<[_vrfCoordinator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "keyHash"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "lastRequestId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "randomNumbers"): TypedContractMethod<[requestId: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "rawFulfillRandomWords"): TypedContractMethod<[
        requestId: BigNumberish,
        randomWords: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "receiveRandomness"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "requestConfirmations"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "requestRandomness"): TypedContractMethod<[arg0: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "s_vrfCoordinator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setCoordinator"): TypedContractMethod<[_vrfCoordinator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "sortitionModule"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "subscriptionId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
    getEvent(key: "CoordinatorSet"): TypedContractEvent<CoordinatorSetEvent.InputTuple, CoordinatorSetEvent.OutputTuple, CoordinatorSetEvent.OutputObject>;
    getEvent(key: "OwnershipTransferRequested"): TypedContractEvent<OwnershipTransferRequestedEvent.InputTuple, OwnershipTransferRequestedEvent.OutputTuple, OwnershipTransferRequestedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    getEvent(key: "RequestFulfilled"): TypedContractEvent<RequestFulfilledEvent.InputTuple, RequestFulfilledEvent.OutputTuple, RequestFulfilledEvent.OutputObject>;
    getEvent(key: "RequestSent"): TypedContractEvent<RequestSentEvent.InputTuple, RequestSentEvent.OutputTuple, RequestSentEvent.OutputObject>;
    filters: {
        "CoordinatorSet(address)": TypedContractEvent<CoordinatorSetEvent.InputTuple, CoordinatorSetEvent.OutputTuple, CoordinatorSetEvent.OutputObject>;
        CoordinatorSet: TypedContractEvent<CoordinatorSetEvent.InputTuple, CoordinatorSetEvent.OutputTuple, CoordinatorSetEvent.OutputObject>;
        "OwnershipTransferRequested(address,address)": TypedContractEvent<OwnershipTransferRequestedEvent.InputTuple, OwnershipTransferRequestedEvent.OutputTuple, OwnershipTransferRequestedEvent.OutputObject>;
        OwnershipTransferRequested: TypedContractEvent<OwnershipTransferRequestedEvent.InputTuple, OwnershipTransferRequestedEvent.OutputTuple, OwnershipTransferRequestedEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        "RequestFulfilled(uint256,uint256)": TypedContractEvent<RequestFulfilledEvent.InputTuple, RequestFulfilledEvent.OutputTuple, RequestFulfilledEvent.OutputObject>;
        RequestFulfilled: TypedContractEvent<RequestFulfilledEvent.InputTuple, RequestFulfilledEvent.OutputTuple, RequestFulfilledEvent.OutputObject>;
        "RequestSent(uint256)": TypedContractEvent<RequestSentEvent.InputTuple, RequestSentEvent.OutputTuple, RequestSentEvent.OutputObject>;
        RequestSent: TypedContractEvent<RequestSentEvent.InputTuple, RequestSentEvent.OutputTuple, RequestSentEvent.OutputObject>;
    };
}
//# sourceMappingURL=ChainlinkRNG.d.ts.map