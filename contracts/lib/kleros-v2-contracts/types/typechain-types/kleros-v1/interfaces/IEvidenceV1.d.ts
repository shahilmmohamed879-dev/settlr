import type { BaseContract, BigNumberish, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../common.js";
export interface IEvidenceV1Interface extends Interface {
    getEvent(nameOrSignatureOrTopic: "Dispute" | "Evidence" | "MetaEvidence"): EventFragment;
}
export declare namespace DisputeEvent {
    type InputTuple = [
        _arbitrator: AddressLike,
        _disputeID: BigNumberish,
        _metaEvidenceID: BigNumberish,
        _evidenceGroupID: BigNumberish
    ];
    type OutputTuple = [
        _arbitrator: string,
        _disputeID: bigint,
        _metaEvidenceID: bigint,
        _evidenceGroupID: bigint
    ];
    interface OutputObject {
        _arbitrator: string;
        _disputeID: bigint;
        _metaEvidenceID: bigint;
        _evidenceGroupID: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace EvidenceEvent {
    type InputTuple = [
        _arbitrator: AddressLike,
        _evidenceGroupID: BigNumberish,
        _party: AddressLike,
        _evidence: string
    ];
    type OutputTuple = [
        _arbitrator: string,
        _evidenceGroupID: bigint,
        _party: string,
        _evidence: string
    ];
    interface OutputObject {
        _arbitrator: string;
        _evidenceGroupID: bigint;
        _party: string;
        _evidence: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MetaEvidenceEvent {
    type InputTuple = [_metaEvidenceID: BigNumberish, _evidence: string];
    type OutputTuple = [_metaEvidenceID: bigint, _evidence: string];
    interface OutputObject {
        _metaEvidenceID: bigint;
        _evidence: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IEvidenceV1 extends BaseContract {
    connect(runner?: ContractRunner | null): IEvidenceV1;
    waitForDeployment(): Promise<this>;
    interface: IEvidenceV1Interface;
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
    getEvent(key: "Dispute"): TypedContractEvent<DisputeEvent.InputTuple, DisputeEvent.OutputTuple, DisputeEvent.OutputObject>;
    getEvent(key: "Evidence"): TypedContractEvent<EvidenceEvent.InputTuple, EvidenceEvent.OutputTuple, EvidenceEvent.OutputObject>;
    getEvent(key: "MetaEvidence"): TypedContractEvent<MetaEvidenceEvent.InputTuple, MetaEvidenceEvent.OutputTuple, MetaEvidenceEvent.OutputObject>;
    filters: {
        "Dispute(address,uint256,uint256,uint256)": TypedContractEvent<DisputeEvent.InputTuple, DisputeEvent.OutputTuple, DisputeEvent.OutputObject>;
        Dispute: TypedContractEvent<DisputeEvent.InputTuple, DisputeEvent.OutputTuple, DisputeEvent.OutputObject>;
        "Evidence(address,uint256,address,string)": TypedContractEvent<EvidenceEvent.InputTuple, EvidenceEvent.OutputTuple, EvidenceEvent.OutputObject>;
        Evidence: TypedContractEvent<EvidenceEvent.InputTuple, EvidenceEvent.OutputTuple, EvidenceEvent.OutputObject>;
        "MetaEvidence(uint256,string)": TypedContractEvent<MetaEvidenceEvent.InputTuple, MetaEvidenceEvent.OutputTuple, MetaEvidenceEvent.OutputObject>;
        MetaEvidence: TypedContractEvent<MetaEvidenceEvent.InputTuple, MetaEvidenceEvent.OutputTuple, MetaEvidenceEvent.OutputObject>;
    };
}
//# sourceMappingURL=IEvidenceV1.d.ts.map