import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common.js";
export interface PolicyRegistryInterface extends Interface {
    getFunction(nameOrSignature: "changeGovernor" | "governor" | "initialize" | "initialize2" | "policies" | "proxiableUUID" | "setPolicy" | "upgradeToAndCall" | "version"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "PolicyUpdate" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize2", values?: undefined): string;
    encodeFunctionData(functionFragment: "policies", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPolicy", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "policies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPolicy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
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
export declare namespace PolicyUpdateEvent {
    type InputTuple = [
        _courtID: BigNumberish,
        _courtName: string,
        _policy: string
    ];
    type OutputTuple = [
        _courtID: bigint,
        _courtName: string,
        _policy: string
    ];
    interface OutputObject {
        _courtID: bigint;
        _courtName: string;
        _policy: string;
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
export interface PolicyRegistry extends BaseContract {
    connect(runner?: ContractRunner | null): PolicyRegistry;
    waitForDeployment(): Promise<this>;
    interface: PolicyRegistryInterface;
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
    governor: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    initialize2: TypedContractMethod<[], [void], "nonpayable">;
    policies: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    setPolicy: TypedContractMethod<[
        _courtID: BigNumberish,
        _courtName: string,
        _policy: string
    ], [
        void
    ], "nonpayable">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    version: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "initialize2"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "policies"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setPolicy"): TypedContractMethod<[
        _courtID: BigNumberish,
        _courtName: string,
        _policy: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "version"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "PolicyUpdate"): TypedContractEvent<PolicyUpdateEvent.InputTuple, PolicyUpdateEvent.OutputTuple, PolicyUpdateEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "PolicyUpdate(uint256,string,string)": TypedContractEvent<PolicyUpdateEvent.InputTuple, PolicyUpdateEvent.OutputTuple, PolicyUpdateEvent.OutputObject>;
        PolicyUpdate: TypedContractEvent<PolicyUpdateEvent.InputTuple, PolicyUpdateEvent.OutputTuple, PolicyUpdateEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
//# sourceMappingURL=PolicyRegistry.d.ts.map