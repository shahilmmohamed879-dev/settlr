import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common.js";
export interface DisputeResolverRulerInterface extends Interface {
    getFunction(nameOrSignature: "arbitrator" | "arbitratorDisputeIDToLocalID" | "changeArbitrator" | "changeGovernor" | "changeTemplateRegistry" | "createDisputeForTemplate" | "createDisputeForTemplateUri" | "disputes" | "governor" | "rule" | "templateRegistry"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "DisputeRequest" | "Ruling"): EventFragment;
    encodeFunctionData(functionFragment: "arbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "arbitratorDisputeIDToLocalID", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeArbitrator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeTemplateRegistry", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "createDisputeForTemplate", values: [BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createDisputeForTemplateUri", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "rule", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "templateRegistry", values?: undefined): string;
    decodeFunctionResult(functionFragment: "arbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitratorDisputeIDToLocalID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeTemplateRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDisputeForTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDisputeForTemplateUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "templateRegistry", data: BytesLike): Result;
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
export interface DisputeResolverRuler extends BaseContract {
    connect(runner?: ContractRunner | null): DisputeResolverRuler;
    waitForDeployment(): Promise<this>;
    interface: DisputeResolverRulerInterface;
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
    arbitratorDisputeIDToLocalID: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        bigint
    ], "view">;
    changeArbitrator: TypedContractMethod<[
        _arbitrator: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeGovernor: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeTemplateRegistry: TypedContractMethod<[
        _templateRegistry: AddressLike
    ], [
        void
    ], "nonpayable">;
    createDisputeForTemplate: TypedContractMethod<[
        _arbitratorExtraData: BytesLike,
        _disputeTemplate: string,
        _disputeTemplateDataMappings: string,
        _numberOfRulingOptions: BigNumberish
    ], [
        bigint
    ], "payable">;
    createDisputeForTemplateUri: TypedContractMethod<[
        _arbitratorExtraData: BytesLike,
        _disputeTemplateUri: string,
        _numberOfRulingOptions: BigNumberish
    ], [
        bigint
    ], "payable">;
    disputes: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            boolean,
            bigint,
            bigint
        ] & {
            arbitratorExtraData: string;
            isRuled: boolean;
            ruling: bigint;
            numberOfRulingOptions: bigint;
        }
    ], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    rule: TypedContractMethod<[
        _arbitratorDisputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    templateRegistry: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "arbitrator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "arbitratorDisputeIDToLocalID"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "changeArbitrator"): TypedContractMethod<[_arbitrator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeTemplateRegistry"): TypedContractMethod<[
        _templateRegistry: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "createDisputeForTemplate"): TypedContractMethod<[
        _arbitratorExtraData: BytesLike,
        _disputeTemplate: string,
        _disputeTemplateDataMappings: string,
        _numberOfRulingOptions: BigNumberish
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "createDisputeForTemplateUri"): TypedContractMethod<[
        _arbitratorExtraData: BytesLike,
        _disputeTemplateUri: string,
        _numberOfRulingOptions: BigNumberish
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "disputes"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            boolean,
            bigint,
            bigint
        ] & {
            arbitratorExtraData: string;
            isRuled: boolean;
            ruling: bigint;
            numberOfRulingOptions: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rule"): TypedContractMethod<[
        _arbitratorDisputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "templateRegistry"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "DisputeRequest"): TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    filters: {
        "DisputeRequest(address,uint256,uint256,uint256,string)": TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        DisputeRequest: TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    };
}
//# sourceMappingURL=DisputeResolverRuler.d.ts.map