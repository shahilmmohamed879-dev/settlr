import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export declare namespace IHomeGateway {
    type RelayCreateDisputeParamsStruct = {
        foreignBlockHash: BytesLike;
        foreignChainID: BigNumberish;
        foreignArbitrable: AddressLike;
        foreignDisputeID: BigNumberish;
        externalDisputeID: BigNumberish;
        templateId: BigNumberish;
        templateUri: string;
        choices: BigNumberish;
        extraData: BytesLike;
    };
    type RelayCreateDisputeParamsStructOutput = [
        foreignBlockHash: string,
        foreignChainID: bigint,
        foreignArbitrable: string,
        foreignDisputeID: bigint,
        externalDisputeID: bigint,
        templateId: bigint,
        templateUri: string,
        choices: bigint,
        extraData: string
    ] & {
        foreignBlockHash: string;
        foreignChainID: bigint;
        foreignArbitrable: string;
        foreignDisputeID: bigint;
        externalDisputeID: bigint;
        templateId: bigint;
        templateUri: string;
        choices: bigint;
        extraData: string;
    };
}
export interface IHomeGatewayInterface extends Interface {
    getFunction(nameOrSignature: "disputeHashToHomeID" | "feeToken" | "foreignChainID" | "foreignGateway" | "receiverGateway" | "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes),uint256)" | "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes))" | "rule" | "veaInbox"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "CrossChainDisputeIncoming" | "DisputeRequest" | "Ruling"): EventFragment;
    encodeFunctionData(functionFragment: "disputeHashToHomeID", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "feeToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "foreignChainID", values?: undefined): string;
    encodeFunctionData(functionFragment: "foreignGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiverGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes),uint256)", values: [IHomeGateway.RelayCreateDisputeParamsStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes))", values: [IHomeGateway.RelayCreateDisputeParamsStruct]): string;
    encodeFunctionData(functionFragment: "rule", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "veaInbox", values?: undefined): string;
    decodeFunctionResult(functionFragment: "disputeHashToHomeID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "foreignChainID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "foreignGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiverGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes),uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veaInbox", data: BytesLike): Result;
}
export declare namespace CrossChainDisputeIncomingEvent {
    type InputTuple = [
        _arbitrator: AddressLike,
        _arbitrableChainId: BigNumberish,
        _arbitrable: AddressLike,
        _arbitrableDisputeID: BigNumberish,
        _arbitratorDisputeID: BigNumberish,
        _externalDisputeID: BigNumberish,
        _templateId: BigNumberish,
        _templateUri: string
    ];
    type OutputTuple = [
        _arbitrator: string,
        _arbitrableChainId: bigint,
        _arbitrable: string,
        _arbitrableDisputeID: bigint,
        _arbitratorDisputeID: bigint,
        _externalDisputeID: bigint,
        _templateId: bigint,
        _templateUri: string
    ];
    interface OutputObject {
        _arbitrator: string;
        _arbitrableChainId: bigint;
        _arbitrable: string;
        _arbitrableDisputeID: bigint;
        _arbitratorDisputeID: bigint;
        _externalDisputeID: bigint;
        _templateId: bigint;
        _templateUri: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DisputeRequestEvent {
    type InputTuple = [
        _arbitrator: AddressLike,
        _arbitratorDisputeID: BigNumberish,
        _externalDisputeID: BigNumberish,
        _templateId: BigNumberish,
        _templateUri: string
    ];
    type OutputTuple = [
        _arbitrator: string,
        _arbitratorDisputeID: bigint,
        _externalDisputeID: bigint,
        _templateId: bigint,
        _templateUri: string
    ];
    interface OutputObject {
        _arbitrator: string;
        _arbitratorDisputeID: bigint;
        _externalDisputeID: bigint;
        _templateId: bigint;
        _templateUri: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RulingEvent {
    type InputTuple = [
        _arbitrator: AddressLike,
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ];
    type OutputTuple = [
        _arbitrator: string,
        _disputeID: bigint,
        _ruling: bigint
    ];
    interface OutputObject {
        _arbitrator: string;
        _disputeID: bigint;
        _ruling: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IHomeGateway extends BaseContract {
    connect(runner?: ContractRunner | null): IHomeGateway;
    waitForDeployment(): Promise<this>;
    interface: IHomeGatewayInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    disputeHashToHomeID: TypedContractMethod<[
        _disputeHash: BytesLike
    ], [
        bigint
    ], "view">;
    feeToken: TypedContractMethod<[], [string], "view">;
    foreignChainID: TypedContractMethod<[], [bigint], "view">;
    foreignGateway: TypedContractMethod<[], [string], "view">;
    receiverGateway: TypedContractMethod<[], [string], "view">;
    "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes),uint256)": TypedContractMethod<[
        _params: IHomeGateway.RelayCreateDisputeParamsStruct,
        _feeAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes))": TypedContractMethod<[
        _params: IHomeGateway.RelayCreateDisputeParamsStruct
    ], [
        void
    ], "payable">;
    rule: TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    veaInbox: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "disputeHashToHomeID"): TypedContractMethod<[_disputeHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "feeToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "foreignChainID"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "foreignGateway"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "receiverGateway"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes),uint256)"): TypedContractMethod<[
        _params: IHomeGateway.RelayCreateDisputeParamsStruct,
        _feeAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes))"): TypedContractMethod<[
        _params: IHomeGateway.RelayCreateDisputeParamsStruct
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "rule"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "veaInbox"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "CrossChainDisputeIncoming"): TypedContractEvent<CrossChainDisputeIncomingEvent.InputTuple, CrossChainDisputeIncomingEvent.OutputTuple, CrossChainDisputeIncomingEvent.OutputObject>;
    getEvent(key: "DisputeRequest"): TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    filters: {
        "CrossChainDisputeIncoming(address,uint256,address,uint256,uint256,uint256,uint256,string)": TypedContractEvent<CrossChainDisputeIncomingEvent.InputTuple, CrossChainDisputeIncomingEvent.OutputTuple, CrossChainDisputeIncomingEvent.OutputObject>;
        CrossChainDisputeIncoming: TypedContractEvent<CrossChainDisputeIncomingEvent.InputTuple, CrossChainDisputeIncomingEvent.OutputTuple, CrossChainDisputeIncomingEvent.OutputObject>;
        "DisputeRequest(address,uint256,uint256,uint256,string)": TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        DisputeRequest: TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    };
}
