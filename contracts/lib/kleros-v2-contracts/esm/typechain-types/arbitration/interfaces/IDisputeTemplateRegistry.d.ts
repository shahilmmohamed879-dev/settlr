import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export interface IDisputeTemplateRegistryInterface extends Interface {
    getFunction(nameOrSignature: "setDisputeTemplate"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "DisputeTemplate"): EventFragment;
    encodeFunctionData(functionFragment: "setDisputeTemplate", values: [string, string, string]): string;
    decodeFunctionResult(functionFragment: "setDisputeTemplate", data: BytesLike): Result;
}
export declare namespace DisputeTemplateEvent {
    type InputTuple = [
        _templateId: BigNumberish,
        _templateTag: string,
        _templateData: string,
        _templateDataMappings: string
    ];
    type OutputTuple = [
        _templateId: bigint,
        _templateTag: string,
        _templateData: string,
        _templateDataMappings: string
    ];
    interface OutputObject {
        _templateId: bigint;
        _templateTag: string;
        _templateData: string;
        _templateDataMappings: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IDisputeTemplateRegistry extends BaseContract {
    connect(runner?: ContractRunner | null): IDisputeTemplateRegistry;
    waitForDeployment(): Promise<this>;
    interface: IDisputeTemplateRegistryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    setDisputeTemplate: TypedContractMethod<[
        _templateTag: string,
        _templateData: string,
        _templateDataMappings: string
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "setDisputeTemplate"): TypedContractMethod<[
        _templateTag: string,
        _templateData: string,
        _templateDataMappings: string
    ], [
        bigint
    ], "nonpayable">;
    getEvent(key: "DisputeTemplate"): TypedContractEvent<DisputeTemplateEvent.InputTuple, DisputeTemplateEvent.OutputTuple, DisputeTemplateEvent.OutputObject>;
    filters: {
        "DisputeTemplate(uint256,string,string,string)": TypedContractEvent<DisputeTemplateEvent.InputTuple, DisputeTemplateEvent.OutputTuple, DisputeTemplateEvent.OutputObject>;
        DisputeTemplate: TypedContractEvent<DisputeTemplateEvent.InputTuple, DisputeTemplateEvent.OutputTuple, DisputeTemplateEvent.OutputObject>;
    };
}
