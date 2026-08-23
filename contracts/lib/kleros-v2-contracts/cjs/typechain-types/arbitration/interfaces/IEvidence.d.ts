import type { BaseContract, BigNumberish, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../common.js";
export interface IEvidenceInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "Evidence"): EventFragment;
}
export declare namespace EvidenceEvent {
    type InputTuple = [
        _externalDisputeID: BigNumberish,
        _party: AddressLike,
        _evidence: string
    ];
    type OutputTuple = [
        _externalDisputeID: bigint,
        _party: string,
        _evidence: string
    ];
    interface OutputObject {
        _externalDisputeID: bigint;
        _party: string;
        _evidence: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IEvidence extends BaseContract {
    connect(runner?: ContractRunner | null): IEvidence;
    waitForDeployment(): Promise<this>;
    interface: IEvidenceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getEvent(key: "Evidence"): TypedContractEvent<EvidenceEvent.InputTuple, EvidenceEvent.OutputTuple, EvidenceEvent.OutputObject>;
    filters: {
        "Evidence(uint256,address,string)": TypedContractEvent<EvidenceEvent.InputTuple, EvidenceEvent.OutputTuple, EvidenceEvent.OutputObject>;
        Evidence: TypedContractEvent<EvidenceEvent.InputTuple, EvidenceEvent.OutputTuple, EvidenceEvent.OutputObject>;
    };
}
