import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common.js";
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
export interface HomeGatewayInterface extends Interface {
    getFunction(nameOrSignature: "arbitrator" | "changeArbitrator" | "changeFeeToken" | "changeForeignGateway" | "changeGovernor" | "changeVea" | "disputeHashToHomeID" | "disputeHashtoID" | "disputeHashtoRelayedData" | "disputeIDtoHash" | "feeToken" | "foreignChainID" | "foreignGateway" | "governor" | "initialize" | "proxiableUUID" | "receiverGateway" | "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes),uint256)" | "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes))" | "rule" | "upgradeToAndCall" | "veaInbox" | "version"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "CrossChainDisputeIncoming" | "DisputeRequest" | "Initialized" | "Ruling" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "arbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeArbitrator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeFeeToken", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeForeignGateway", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeVea", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "disputeHashToHomeID", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "disputeHashtoID", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "disputeHashtoRelayedData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "disputeIDtoHash", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "feeToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "foreignChainID", values?: undefined): string;
    encodeFunctionData(functionFragment: "foreignGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        AddressLike,
        AddressLike
    ]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiverGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes),uint256)", values: [IHomeGateway.RelayCreateDisputeParamsStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes))", values: [IHomeGateway.RelayCreateDisputeParamsStruct]): string;
    encodeFunctionData(functionFragment: "rule", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "veaInbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "arbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeFeeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeForeignGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeVea", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeHashToHomeID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeHashtoID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeHashtoRelayedData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeIDtoHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "foreignChainID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "foreignGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiverGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes),uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayCreateDispute((bytes32,uint256,address,uint256,uint256,uint256,string,uint256,bytes))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veaInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
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
export interface HomeGateway extends BaseContract {
    connect(runner?: ContractRunner | null): HomeGateway;
    waitForDeployment(): Promise<this>;
    interface: HomeGatewayInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    arbitrator: TypedContractMethod<[], [string], "view">;
    changeArbitrator: TypedContractMethod<[
        _arbitrator: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeFeeToken: TypedContractMethod<[
        _feeToken: AddressLike
    ], [
        void
    ], "nonpayable">;
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
    changeVea: TypedContractMethod<[
        _veaInbox: AddressLike
    ], [
        void
    ], "nonpayable">;
    disputeHashToHomeID: TypedContractMethod<[
        _disputeHash: BytesLike
    ], [
        bigint
    ], "view">;
    disputeHashtoID: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
    disputeHashtoRelayedData: TypedContractMethod<[
        arg0: BytesLike
    ], [
        [bigint, string] & {
            arbitrationCost: bigint;
            relayer: string;
        }
    ], "view">;
    disputeIDtoHash: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    feeToken: TypedContractMethod<[], [string], "view">;
    foreignChainID: TypedContractMethod<[], [bigint], "view">;
    foreignGateway: TypedContractMethod<[], [string], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[
        _governor: AddressLike,
        _arbitrator: AddressLike,
        _veaInbox: AddressLike,
        _foreignChainID: BigNumberish,
        _foreignGateway: AddressLike,
        _feeToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
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
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    veaInbox: TypedContractMethod<[], [string], "view">;
    version: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "arbitrator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "changeArbitrator"): TypedContractMethod<[_arbitrator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeFeeToken"): TypedContractMethod<[_feeToken: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeForeignGateway"): TypedContractMethod<[_foreignGateway: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeVea"): TypedContractMethod<[_veaInbox: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "disputeHashToHomeID"): TypedContractMethod<[_disputeHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "disputeHashtoID"): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "disputeHashtoRelayedData"): TypedContractMethod<[
        arg0: BytesLike
    ], [
        [bigint, string] & {
            arbitrationCost: bigint;
            relayer: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "disputeIDtoHash"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "feeToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "foreignChainID"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "foreignGateway"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _governor: AddressLike,
        _arbitrator: AddressLike,
        _veaInbox: AddressLike,
        _foreignChainID: BigNumberish,
        _foreignGateway: AddressLike,
        _feeToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
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
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "veaInbox"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "version"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "CrossChainDisputeIncoming"): TypedContractEvent<CrossChainDisputeIncomingEvent.InputTuple, CrossChainDisputeIncomingEvent.OutputTuple, CrossChainDisputeIncomingEvent.OutputObject>;
    getEvent(key: "DisputeRequest"): TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "CrossChainDisputeIncoming(address,uint256,address,uint256,uint256,uint256,uint256,string)": TypedContractEvent<CrossChainDisputeIncomingEvent.InputTuple, CrossChainDisputeIncomingEvent.OutputTuple, CrossChainDisputeIncomingEvent.OutputObject>;
        CrossChainDisputeIncoming: TypedContractEvent<CrossChainDisputeIncomingEvent.InputTuple, CrossChainDisputeIncomingEvent.OutputTuple, CrossChainDisputeIncomingEvent.OutputObject>;
        "DisputeRequest(address,uint256,uint256,uint256,string)": TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        DisputeRequest: TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
//# sourceMappingURL=HomeGateway.d.ts.map