import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export interface IForeignGatewayInterface extends Interface {
    getFunction(nameOrSignature: "arbitrationCost(bytes,address)" | "arbitrationCost(bytes)" | "createDispute(uint256,bytes)" | "createDispute(uint256,bytes,address,uint256)" | "currentRuling" | "disputeHashToForeignID" | "homeChainID" | "homeGateway" | "relayRule" | "senderGateway" | "veaOutbox" | "withdrawFees"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AcceptedFeeToken" | "CrossChainDisputeOutgoing" | "DisputeCreation" | "NewCurrencyRate" | "Ruling"): EventFragment;
    encodeFunctionData(functionFragment: "arbitrationCost(bytes,address)", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "arbitrationCost(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "createDispute(uint256,bytes)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "createDispute(uint256,bytes,address,uint256)", values: [BigNumberish, BytesLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputeHashToForeignID", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "homeChainID", values?: undefined): string;
    encodeFunctionData(functionFragment: "homeGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayRule", values: [AddressLike, BytesLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "senderGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "veaOutbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFees", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "arbitrationCost(bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrationCost(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(uint256,bytes,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeHashToForeignID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "homeChainID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "homeGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayRule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "senderGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veaOutbox", data: BytesLike): Result;
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
export interface IForeignGateway extends BaseContract {
    connect(runner?: ContractRunner | null): IForeignGateway;
    waitForDeployment(): Promise<this>;
    interface: IForeignGatewayInterface;
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
        _extraData: BytesLike,
        _feeToken: AddressLike
    ], [
        bigint
    ], "view">;
    "arbitrationCost(bytes)": TypedContractMethod<[
        _extraData: BytesLike
    ], [
        bigint
    ], "view">;
    "createDispute(uint256,bytes)": TypedContractMethod<[
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    "createDispute(uint256,bytes,address,uint256)": TypedContractMethod<[
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike,
        _feeToken: AddressLike,
        _feeAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    currentRuling: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [
            bigint,
            boolean,
            boolean
        ] & {
            ruling: bigint;
            tied: boolean;
            overridden: boolean;
        }
    ], "view">;
    disputeHashToForeignID: TypedContractMethod<[
        _disputeHash: BytesLike
    ], [
        bigint
    ], "view">;
    homeChainID: TypedContractMethod<[], [bigint], "view">;
    homeGateway: TypedContractMethod<[], [string], "view">;
    relayRule: TypedContractMethod<[
        _messageSender: AddressLike,
        _disputeHash: BytesLike,
        _ruling: BigNumberish,
        _forwarder: AddressLike
    ], [
        void
    ], "nonpayable">;
    senderGateway: TypedContractMethod<[], [string], "view">;
    veaOutbox: TypedContractMethod<[], [string], "view">;
    withdrawFees: TypedContractMethod<[
        _disputeHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "arbitrationCost(bytes,address)"): TypedContractMethod<[
        _extraData: BytesLike,
        _feeToken: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "arbitrationCost(bytes)"): TypedContractMethod<[_extraData: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "createDispute(uint256,bytes)"): TypedContractMethod<[
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "createDispute(uint256,bytes,address,uint256)"): TypedContractMethod<[
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike,
        _feeToken: AddressLike,
        _feeAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "currentRuling"): TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        [
            bigint,
            boolean,
            boolean
        ] & {
            ruling: bigint;
            tied: boolean;
            overridden: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "disputeHashToForeignID"): TypedContractMethod<[_disputeHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "homeChainID"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "homeGateway"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "relayRule"): TypedContractMethod<[
        _messageSender: AddressLike,
        _disputeHash: BytesLike,
        _ruling: BigNumberish,
        _forwarder: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "senderGateway"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "veaOutbox"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdrawFees"): TypedContractMethod<[_disputeHash: BytesLike], [void], "nonpayable">;
    getEvent(key: "AcceptedFeeToken"): TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
    getEvent(key: "CrossChainDisputeOutgoing"): TypedContractEvent<CrossChainDisputeOutgoingEvent.InputTuple, CrossChainDisputeOutgoingEvent.OutputTuple, CrossChainDisputeOutgoingEvent.OutputObject>;
    getEvent(key: "DisputeCreation"): TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
    getEvent(key: "NewCurrencyRate"): TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    filters: {
        "AcceptedFeeToken(address,bool)": TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
        AcceptedFeeToken: TypedContractEvent<AcceptedFeeTokenEvent.InputTuple, AcceptedFeeTokenEvent.OutputTuple, AcceptedFeeTokenEvent.OutputObject>;
        "CrossChainDisputeOutgoing(bytes32,address,uint256,uint256,bytes)": TypedContractEvent<CrossChainDisputeOutgoingEvent.InputTuple, CrossChainDisputeOutgoingEvent.OutputTuple, CrossChainDisputeOutgoingEvent.OutputObject>;
        CrossChainDisputeOutgoing: TypedContractEvent<CrossChainDisputeOutgoingEvent.InputTuple, CrossChainDisputeOutgoingEvent.OutputTuple, CrossChainDisputeOutgoingEvent.OutputObject>;
        "DisputeCreation(uint256,address)": TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        DisputeCreation: TypedContractEvent<DisputeCreationEvent.InputTuple, DisputeCreationEvent.OutputTuple, DisputeCreationEvent.OutputObject>;
        "NewCurrencyRate(address,uint64,uint8)": TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
        NewCurrencyRate: TypedContractEvent<NewCurrencyRateEvent.InputTuple, NewCurrencyRateEvent.OutputTuple, NewCurrencyRateEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    };
}
