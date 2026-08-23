import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export interface ArbitrableExampleInterface extends Interface {
    getFunction(nameOrSignature: "arbitrator" | "arbitratorExtraData" | "changeArbitrator" | "changeArbitratorExtraData" | "changeDisputeTemplate" | "changeTemplateRegistry" | "createDispute(string,uint256)" | "createDispute(string)" | "disputes" | "externalIDtoLocalID" | "governor" | "rule" | "templateId" | "templateRegistry" | "weth"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Action" | "DisputeRequest" | "Ruling"): EventFragment;
    encodeFunctionData(functionFragment: "arbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "arbitratorExtraData", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeArbitrator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeArbitratorExtraData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "changeDisputeTemplate", values: [string, string]): string;
    encodeFunctionData(functionFragment: "changeTemplateRegistry", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "createDispute(string,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createDispute(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "disputes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "externalIDtoLocalID", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "rule", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "templateId", values?: undefined): string;
    encodeFunctionData(functionFragment: "templateRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "arbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitratorExtraData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeArbitratorExtraData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeDisputeTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeTemplateRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "externalIDtoLocalID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "templateId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "templateRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
}
export declare namespace ActionEvent {
    type InputTuple = [_action: string];
    type OutputTuple = [_action: string];
    interface OutputObject {
        _action: string;
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
export interface ArbitrableExample extends BaseContract {
    connect(runner?: ContractRunner | null): ArbitrableExample;
    waitForDeployment(): Promise<this>;
    interface: ArbitrableExampleInterface;
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
    arbitratorExtraData: TypedContractMethod<[], [string], "view">;
    changeArbitrator: TypedContractMethod<[
        _arbitrator: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeArbitratorExtraData: TypedContractMethod<[
        _arbitratorExtraData: BytesLike
    ], [
        void
    ], "nonpayable">;
    changeDisputeTemplate: TypedContractMethod<[
        _templateData: string,
        _templateDataMappings: string
    ], [
        void
    ], "nonpayable">;
    changeTemplateRegistry: TypedContractMethod<[
        _templateRegistry: AddressLike
    ], [
        void
    ], "nonpayable">;
    "createDispute(string,uint256)": TypedContractMethod<[
        _action: string,
        _feeInWeth: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    "createDispute(string)": TypedContractMethod<[
        _action: string
    ], [
        bigint
    ], "payable">;
    disputes: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            boolean,
            bigint,
            bigint
        ] & {
            isRuled: boolean;
            ruling: bigint;
            numberOfRulingOptions: bigint;
        }
    ], "view">;
    externalIDtoLocalID: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        bigint
    ], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    rule: TypedContractMethod<[
        _arbitratorDisputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    templateId: TypedContractMethod<[], [bigint], "view">;
    templateRegistry: TypedContractMethod<[], [string], "view">;
    weth: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "arbitrator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "arbitratorExtraData"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "changeArbitrator"): TypedContractMethod<[_arbitrator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeArbitratorExtraData"): TypedContractMethod<[
        _arbitratorExtraData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeDisputeTemplate"): TypedContractMethod<[
        _templateData: string,
        _templateDataMappings: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeTemplateRegistry"): TypedContractMethod<[
        _templateRegistry: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "createDispute(string,uint256)"): TypedContractMethod<[
        _action: string,
        _feeInWeth: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "createDispute(string)"): TypedContractMethod<[_action: string], [bigint], "payable">;
    getFunction(nameOrSignature: "disputes"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            boolean,
            bigint,
            bigint
        ] & {
            isRuled: boolean;
            ruling: bigint;
            numberOfRulingOptions: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "externalIDtoLocalID"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rule"): TypedContractMethod<[
        _arbitratorDisputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "templateId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "templateRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "weth"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "Action"): TypedContractEvent<ActionEvent.InputTuple, ActionEvent.OutputTuple, ActionEvent.OutputObject>;
    getEvent(key: "DisputeRequest"): TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    filters: {
        "Action(string)": TypedContractEvent<ActionEvent.InputTuple, ActionEvent.OutputTuple, ActionEvent.OutputObject>;
        Action: TypedContractEvent<ActionEvent.InputTuple, ActionEvent.OutputTuple, ActionEvent.OutputObject>;
        "DisputeRequest(address,uint256,uint256,uint256,string)": TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        DisputeRequest: TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    };
}
