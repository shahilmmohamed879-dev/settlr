import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common.js";
export interface ForeignGatewayInterface extends Interface {
    getFunction(nameOrSignature: "arbitrationCost(bytes,address)" | "arbitrationCost(bytes)" | "changeCourtJurorFee" | "changeGovernor" | "changeHomeGateway" | "changeVea" | "createDispute(uint256,bytes)" | "createDispute(uint256,bytes,address,uint256)" | "currentRuling" | "deprecatedVeaOutbox" | "deprecatedVeaOutboxExpiration" | "disputeHashToForeignID" | "disputeHashtoDisputeData" | "feeForJuror" | "governor" | "homeChainID" | "homeGateway" | "initialize" | "proxiableUUID" | "relayRule" | "senderGateway" | "upgradeToAndCall" | "veaOutbox" | "version" | "withdrawFees"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AcceptedFeeToken" | "ArbitrationCostModified" | "CrossChainDisputeOutgoing" | "DisputeCreation" | "Initialized" | "NewCurrencyRate" | "Ruling" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "arbitrationCost(bytes,address)", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "arbitrationCost(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "changeCourtJurorFee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeHomeGateway", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeVea", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createDispute(uint256,bytes)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "createDispute(uint256,bytes,address,uint256)", values: [BigNumberish, BytesLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deprecatedVeaOutbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "deprecatedVeaOutboxExpiration", values?: undefined): string;
    encodeFunctionData(functionFragment: "disputeHashToForeignID", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "disputeHashtoDisputeData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "feeForJuror", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "homeChainID", values?: undefined): string;
    encodeFunctionData(functionFragment: "homeGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayRule", values: [AddressLike, BytesLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "senderGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "veaOutbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFees", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "arbitrationCost(bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCost(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCourtJurorFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeHomeGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeVea", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(uint256,bytes,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deprecatedVeaOutbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deprecatedVeaOutboxExpiration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeHashToForeignID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeHashtoDisputeData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeForJuror", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "homeChainID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "homeGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayRule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "senderGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veaOutbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFees", data: BytesLike): Result;
}
export declare namespace AcceptedFeeTokenEvent {
    type InputTuple = [_token: AddressLike, _accepted: boolean];
    type OutputTuple = [_token: string, _accepted: boolean];
    interface OutputObject {
        _token: string;
        _accepted: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ArbitrationCostModifiedEvent {
    type InputTuple = [_courtID: BigNumberish, _feeForJuror: BigNumberish];
    type OutputTuple = [_courtID: bigint, _feeForJuror: bigint];
    interface OutputObject {
        _courtID: bigint;
        _feeForJuror: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CrossChainDisputeOutgoingEvent {
    type InputTuple = [
        _foreignBlockHash: BytesLike,
        _foreignArbitrable: AddressLike,
        _foreignDisputeID: BigNumberish,
        _choices: BigNumberish,
        _extraData: BytesLike
    ];
    type OutputTuple = [
        _foreignBlockHash: string,
        _foreignArbitrable: string,
        _foreignDisputeID: bigint,
        _choices: bigint,
        _extraData: string
    ];
    interface OutputObject {
        _foreignBlockHash: string;
        _foreignArbitrable: string;
        _foreignDisputeID: bigint;
        _choices: bigint;
        _extraData: string;
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
export declare namespace NewCurrencyRateEvent {
    type InputTuple = [
        _feeToken: AddressLike,
        _rateInEth: BigNumberish,
        _rateDecimals: BigNumberish
    ];
    type OutputTuple = [
        _feeToken: string,
        _rateInEth: bigint,
        _rateDecimals: bigint
    ];
    interface OutputObject {
        _feeToken: string;
        _rateInEth: bigint;
        _rateDecimals: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RulingEvent {
    type InputTuple = [
        _arbitrable: AddressLike,
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ];
    type OutputTuple = [
        _arbitrable: string,
        _disputeID: bigint,
        _ruling: bigint
    ];
    interface OutputObject {
        _arbitrable: string;
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
export interface ForeignGateway extends BaseContract {
    connect(runner?: ContractRunner | null): ForeignGateway;
    waitForDeployment(): Promise<this>;
    interface: ForeignGatewayInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    "arbitrationCost(bytes,address)": TypedContractMethod<[
        arg0: BytesLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    "arbitrationCost(bytes)": TypedContractMethod<[
        _extraData: BytesLike
    ], [
        bigint
    ], "view">;
    changeCourtJurorFee: TypedContractMethod<[
        _courtID: BigNumberish,
        _feeForJuror: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeGovernor: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeHomeGateway: TypedContractMethod<[
        _homeGateway: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeVea: TypedContractMethod<[
        _veaOutbox: AddressLike,
        _gracePeriod: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "createDispute(uint256,bytes)": TypedContractMethod<[
        _choices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    "createDispute(uint256,bytes,address,uint256)": TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BytesLike,
        arg2: AddressLike,
        arg3: BigNumberish
    ], [
        bigint
    ], "view">;
    currentRuling: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [bigint, boolean, boolean]
    ], "view">;
    deprecatedVeaOutbox: TypedContractMethod<[], [string], "view">;
    deprecatedVeaOutboxExpiration: TypedContractMethod<[], [bigint], "view">;
    disputeHashToForeignID: TypedContractMethod<[
        _disputeHash: BytesLike
    ], [
        bigint
    ], "view">;
    disputeHashtoDisputeData: TypedContractMethod<[
        disputeHash: BytesLike
    ], [
        [
            bigint,
            boolean,
            string,
            bigint,
            string
        ] & {
            id: bigint;
            ruled: boolean;
            arbitrable: string;
            paid: bigint;
            relayer: string;
        }
    ], "view">;
    feeForJuror: TypedContractMethod<[courtId: BigNumberish], [bigint], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    homeChainID: TypedContractMethod<[], [bigint], "view">;
    homeGateway: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[
        _governor: AddressLike,
        _veaOutbox: AddressLike,
        _homeChainID: BigNumberish,
        _homeGateway: AddressLike
    ], [
        void
    ], "nonpayable">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    relayRule: TypedContractMethod<[
        _messageSender: AddressLike,
        _disputeHash: BytesLike,
        _ruling: BigNumberish,
        _relayer: AddressLike
    ], [
        void
    ], "nonpayable">;
    senderGateway: TypedContractMethod<[], [string], "view">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    veaOutbox: TypedContractMethod<[], [string], "view">;
    version: TypedContractMethod<[], [string], "view">;
    withdrawFees: TypedContractMethod<[
        _disputeHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "arbitrationCost(bytes,address)"): TypedContractMethod<[
        arg0: BytesLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "arbitrationCost(bytes)"): TypedContractMethod<[_extraData: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "changeCourtJurorFee"): TypedContractMethod<[
        _courtID: BigNumberish,
        _feeForJuror: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeHomeGateway"): TypedContractMethod<[_homeGateway: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeVea"): TypedContractMethod<[
        _veaOutbox: AddressLike,
        _gracePeriod: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "createDispute(uint256,bytes)"): TypedContractMethod<[
        _choices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "createDispute(uint256,bytes,address,uint256)"): TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BytesLike,
        arg2: AddressLike,
        arg3: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "currentRuling"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [bigint, boolean, boolean]
    ], "view">;
    getFunction(nameOrSignature: "deprecatedVeaOutbox"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "deprecatedVeaOutboxExpiration"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "disputeHashToForeignID"): TypedContractMethod<[_disputeHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "disputeHashtoDisputeData"): TypedContractMethod<[
        disputeHash: BytesLike
    ], [
        [
            bigint,
            boolean,
            string,
            bigint,
            string
        ] & {
            id: bigint;
            ruled: boolean;
            arbitrable: string;
            paid: bigint;
            relayer: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "feeForJuror"): TypedContractMethod<[courtId: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "homeChainID"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "homeGateway"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _governor: AddressLike,
        _veaOutbox: AddressLike,
        _homeChainID: BigNumberish,
        _homeGateway: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "relayRule"): TypedContractMethod<[
        _messageSender: AddressLike,
        _disputeHash: BytesLike,
        _ruling: BigNumberish,
        _relayer: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "senderGateway"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "veaOutbox"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "version"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdrawFees"): TypedContractMethod<[_disputeHash: BytesLike], [void], "nonpayable">;
    getEvent(key: "AcceptedFeeToken"): TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
    getEvent(key: "ArbitrationCostModified"): TypedContractEvent<ArbitrationCostModifiedEvent.InputTuple, ArbitrationCostModifiedEvent.OutputTuple, ArbitrationCostModifiedEvent.OutputObject>;
    getEvent(key: "CrossChainDisputeOutgoing"): TypedContractEvent<CrossChainDisputeOutgoingEvent.InputTuple, CrossChainDisputeOutgoingEvent.OutputTuple, CrossChainDisputeOutgoingEvent.OutputObject>;
    getEvent(key: "DisputeCreation"): TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "NewCurrencyRate"): TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "AcceptedFeeToken(address,bool)": TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
        AcceptedFeeToken: TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
        "ArbitrationCostModified(uint96,uint256)": TypedContractEvent<ArbitrationCostModifiedEvent.InputTuple, ArbitrationCostModifiedEvent.OutputTuple, ArbitrationCostModifiedEvent.OutputObject>;
        ArbitrationCostModified: TypedContractEvent<ArbitrationCostModifiedEvent.InputTuple, ArbitrationCostModifiedEvent.OutputTuple, ArbitrationCostModifiedEvent.OutputObject>;
        "CrossChainDisputeOutgoing(bytes32,address,uint256,uint256,bytes)": TypedContractEvent<CrossChainDisputeOutgoingEvent.InputTuple, CrossChainDisputeOutgoingEvent.OutputTuple, CrossChainDisputeOutgoingEvent.OutputObject>;
        CrossChainDisputeOutgoing: TypedContractEvent<CrossChainDisputeOutgoingEvent.InputTuple, CrossChainDisputeOutgoingEvent.OutputTuple, CrossChainDisputeOutgoingEvent.OutputObject>;
        "DisputeCreation(uint256,address)": TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        DisputeCreation: TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "NewCurrencyRate(address,uint64,uint8)": TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
        NewCurrencyRate: TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
//# sourceMappingURL=ForeignGateway.d.ts.map