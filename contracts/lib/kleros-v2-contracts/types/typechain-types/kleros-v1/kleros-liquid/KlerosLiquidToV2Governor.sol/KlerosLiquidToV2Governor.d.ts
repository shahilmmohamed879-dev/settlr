import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common.js";
export interface KlerosLiquidToV2GovernorInterface extends Interface {
    getFunction(nameOrSignature: "changeGovernor" | "disputes" | "executeGovernorProposal" | "foreignGateway" | "frozenTokens" | "governor" | "isDisputeNotified" | "klerosLiquid" | "klerosLiquidDisputeIDtoGatewayDisputeID" | "notifyFrozenTokens" | "onApprove" | "onTransfer" | "proxyPayment" | "relayDispute" | "rule"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "DisputeRequest" | "Ruling"): EventFragment;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "disputes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeGovernorProposal", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "foreignGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "frozenTokens", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "isDisputeNotified", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "klerosLiquid", values?: undefined): string;
    encodeFunctionData(functionFragment: "klerosLiquidDisputeIDtoGatewayDisputeID", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "notifyFrozenTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "onApprove", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "onTransfer", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxyPayment", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "relayDispute", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rule", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeGovernorProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "foreignGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "frozenTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDisputeNotified", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "klerosLiquid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "klerosLiquidDisputeIDtoGatewayDisputeID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notifyFrozenTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onApprove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyPayment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rule", data: BytesLike): Result;
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
export interface KlerosLiquidToV2Governor extends BaseContract {
    connect(runner?: ContractRunner | null): KlerosLiquidToV2Governor;
    waitForDeployment(): Promise<this>;
    interface: KlerosLiquidToV2GovernorInterface;
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
    disputes: TypedContractMethod<[
        gatewayDisputeId: BigNumberish
    ], [
        [bigint, boolean] & {
            klerosLiquidDisputeID: bigint;
            ruled: boolean;
        }
    ], "view">;
    executeGovernorProposal: TypedContractMethod<[
        _destination: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
    foreignGateway: TypedContractMethod<[], [string], "view">;
    frozenTokens: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    isDisputeNotified: TypedContractMethod<[
        disputeId: BigNumberish,
        roundId: BigNumberish
    ], [
        boolean
    ], "view">;
    klerosLiquid: TypedContractMethod<[], [string], "view">;
    klerosLiquidDisputeIDtoGatewayDisputeID: TypedContractMethod<[
        disputeId: BigNumberish
    ], [
        bigint
    ], "view">;
    notifyFrozenTokens: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        void
    ], "nonpayable">;
    onApprove: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish
    ], [
        boolean
    ], "view">;
    onTransfer: TypedContractMethod<[
        _from: AddressLike,
        arg1: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "view">;
    proxyPayment: TypedContractMethod<[arg0: AddressLike], [boolean], "payable">;
    relayDispute: TypedContractMethod<[
        _disputeID: BigNumberish
    ], [
        void
    ], "nonpayable">;
    rule: TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "disputes"): TypedContractMethod<[
        gatewayDisputeId: BigNumberish
    ], [
        [bigint, boolean] & {
            klerosLiquidDisputeID: bigint;
            ruled: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "executeGovernorProposal"): TypedContractMethod<[
        _destination: AddressLike,
        _amount: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "foreignGateway"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "frozenTokens"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "isDisputeNotified"): TypedContractMethod<[
        disputeId: BigNumberish,
        roundId: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "klerosLiquid"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "klerosLiquidDisputeIDtoGatewayDisputeID"): TypedContractMethod<[disputeId: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "notifyFrozenTokens"): TypedContractMethod<[_disputeID: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "onApprove"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "onTransfer"): TypedContractMethod<[
        _from: AddressLike,
        arg1: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "proxyPayment"): TypedContractMethod<[arg0: AddressLike], [boolean], "payable">;
    getFunction(nameOrSignature: "relayDispute"): TypedContractMethod<[_disputeID: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "rule"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "DisputeRequest"): TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    filters: {
        "DisputeRequest(address,uint256,uint256,uint256,string)": TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        DisputeRequest: TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    };
}
//# sourceMappingURL=KlerosLiquidToV2Governor.d.ts.map