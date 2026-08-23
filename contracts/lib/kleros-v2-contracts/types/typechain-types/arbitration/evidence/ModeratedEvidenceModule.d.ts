import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export interface ModeratedEvidenceModuleInterface extends Interface {
    getFunction(nameOrSignature: "AMOUNT_OF_CHOICES" | "MULTIPLIER_DIVISOR" | "arbitrator" | "arbitratorDataList" | "bondTimeout" | "changeArbitratorExtraData" | "changeBondTimeout" | "changeDisputeTemplate" | "changeGovernor" | "changeInitialDepositMultiplier" | "changeTotalCostMultiplier" | "disputeIDtoEvidenceID" | "getContributions" | "getCurrentArbitratorIndex" | "getModerationInfo" | "getNumberOfModerations" | "governor" | "initialDepositMultiplier" | "moderate" | "resolveModerationMarket" | "rule" | "submitEvidence" | "templateRegistry" | "totalCostMultiplier" | "withdrawFeesAndRewards"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "DisputeRequest" | "ModeratedEvidence" | "ModerationStatusChanged" | "Ruling"): EventFragment;
    encodeFunctionData(functionFragment: "AMOUNT_OF_CHOICES", values?: undefined): string;
    encodeFunctionData(functionFragment: "MULTIPLIER_DIVISOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "arbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "arbitratorDataList", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bondTimeout", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeArbitratorExtraData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "changeBondTimeout", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeDisputeTemplate", values: [string, string]): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeInitialDepositMultiplier", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeTotalCostMultiplier", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disputeIDtoEvidenceID", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getContributions", values: [BytesLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "getCurrentArbitratorIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "getModerationInfo", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNumberOfModerations", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialDepositMultiplier", values?: undefined): string;
    encodeFunctionData(functionFragment: "moderate", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "resolveModerationMarket", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "rule", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "submitEvidence", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "templateRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalCostMultiplier", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFeesAndRewards", values: [AddressLike, BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "AMOUNT_OF_CHOICES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MULTIPLIER_DIVISOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitratorDataList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bondTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeArbitratorExtraData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeBondTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeDisputeTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeInitialDepositMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeTotalCostMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeIDtoEvidenceID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContributions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentArbitratorIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModerationInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfModerations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialDepositMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moderate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveModerationMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitEvidence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "templateRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalCostMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFeesAndRewards", data: BytesLike): Result;
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
export declare namespace ModeratedEvidenceEvent {
    type InputTuple = [
        _arbitrator: AddressLike,
        _externalDisputeID: BigNumberish,
        _party: AddressLike,
        _evidence: string
    ];
    type OutputTuple = [
        _arbitrator: string,
        _externalDisputeID: bigint,
        _party: string,
        _evidence: string
    ];
    interface OutputObject {
        _arbitrator: string;
        _externalDisputeID: bigint;
        _party: string;
        _evidence: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ModerationStatusChangedEvent {
    type InputTuple = [
        _evidenceID: BytesLike,
        _currentWinner: BigNumberish
    ];
    type OutputTuple = [_evidenceID: string, _currentWinner: bigint];
    interface OutputObject {
        _evidenceID: string;
        _currentWinner: bigint;
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
export interface ModeratedEvidenceModule extends BaseContract {
    connect(runner?: ContractRunner | null): ModeratedEvidenceModule;
    waitForDeployment(): Promise<this>;
    interface: ModeratedEvidenceModuleInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    AMOUNT_OF_CHOICES: TypedContractMethod<[], [bigint], "view">;
    MULTIPLIER_DIVISOR: TypedContractMethod<[], [bigint], "view">;
    arbitrator: TypedContractMethod<[], [string], "view">;
    arbitratorDataList: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string
        ] & {
            disputeTemplateId: bigint;
            arbitratorExtraData: string;
        }
    ], "view">;
    bondTimeout: TypedContractMethod<[], [bigint], "view">;
    changeArbitratorExtraData: TypedContractMethod<[
        _arbitratorExtraData: BytesLike
    ], [
        void
    ], "nonpayable">;
    changeBondTimeout: TypedContractMethod<[
        _bondTimeout: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeDisputeTemplate: TypedContractMethod<[
        _templateData: string,
        _templateDataMappings: string
    ], [
        void
    ], "nonpayable">;
    changeGovernor: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeInitialDepositMultiplier: TypedContractMethod<[
        _initialDepositMultiplier: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeTotalCostMultiplier: TypedContractMethod<[
        _totalCostMultiplier: BigNumberish
    ], [
        void
    ], "nonpayable">;
    disputeIDtoEvidenceID: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        string
    ], "view">;
    getContributions: TypedContractMethod<[
        _evidenceID: BytesLike,
        _moderationID: BigNumberish,
        _contributor: AddressLike
    ], [
        [bigint, bigint, bigint]
    ], "view">;
    getCurrentArbitratorIndex: TypedContractMethod<[], [bigint], "view">;
    getModerationInfo: TypedContractMethod<[
        _evidenceID: BytesLike,
        _moderationID: BigNumberish
    ], [
        [
            [bigint, bigint, bigint],
            bigint,
            bigint
        ] & {
            paidFees: [bigint, bigint, bigint];
            currentWinner: bigint;
            feeRewards: bigint;
        }
    ], "view">;
    getNumberOfModerations: TypedContractMethod<[
        _evidenceID: BytesLike
    ], [
        bigint
    ], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    initialDepositMultiplier: TypedContractMethod<[], [bigint], "view">;
    moderate: TypedContractMethod<[
        _evidenceID: BytesLike,
        _side: BigNumberish
    ], [
        void
    ], "payable">;
    resolveModerationMarket: TypedContractMethod<[
        _evidenceID: BytesLike
    ], [
        void
    ], "nonpayable">;
    rule: TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    submitEvidence: TypedContractMethod<[
        _evidenceGroupID: BigNumberish,
        _evidence: string
    ], [
        void
    ], "payable">;
    templateRegistry: TypedContractMethod<[], [string], "view">;
    totalCostMultiplier: TypedContractMethod<[], [bigint], "view">;
    withdrawFeesAndRewards: TypedContractMethod<[
        _beneficiary: AddressLike,
        _evidenceID: BytesLike,
        _moderationID: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "AMOUNT_OF_CHOICES"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "MULTIPLIER_DIVISOR"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "arbitrator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "arbitratorDataList"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string
        ] & {
            disputeTemplateId: bigint;
            arbitratorExtraData: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "bondTimeout"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "changeArbitratorExtraData"): TypedContractMethod<[
        _arbitratorExtraData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeBondTimeout"): TypedContractMethod<[_bondTimeout: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeDisputeTemplate"): TypedContractMethod<[
        _templateData: string,
        _templateDataMappings: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeInitialDepositMultiplier"): TypedContractMethod<[
        _initialDepositMultiplier: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeTotalCostMultiplier"): TypedContractMethod<[
        _totalCostMultiplier: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "disputeIDtoEvidenceID"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "getContributions"): TypedContractMethod<[
        _evidenceID: BytesLike,
        _moderationID: BigNumberish,
        _contributor: AddressLike
    ], [
        [bigint, bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "getCurrentArbitratorIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getModerationInfo"): TypedContractMethod<[
        _evidenceID: BytesLike,
        _moderationID: BigNumberish
    ], [
        [
            [bigint, bigint, bigint],
            bigint,
            bigint
        ] & {
            paidFees: [bigint, bigint, bigint];
            currentWinner: bigint;
            feeRewards: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getNumberOfModerations"): TypedContractMethod<[_evidenceID: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialDepositMultiplier"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "moderate"): TypedContractMethod<[
        _evidenceID: BytesLike,
        _side: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "resolveModerationMarket"): TypedContractMethod<[_evidenceID: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "rule"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "submitEvidence"): TypedContractMethod<[
        _evidenceGroupID: BigNumberish,
        _evidence: string
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "templateRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "totalCostMultiplier"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "withdrawFeesAndRewards"): TypedContractMethod<[
        _beneficiary: AddressLike,
        _evidenceID: BytesLike,
        _moderationID: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getEvent(key: "DisputeRequest"): TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
    getEvent(key: "ModeratedEvidence"): TypedContractEvent<ModeratedEvidenceEvent.InputTuple, ModeratedEvidenceEvent.OutputTuple, ModeratedEvidenceEvent.OutputObject>;
    getEvent(key: "ModerationStatusChanged"): TypedContractEvent<ModerationStatusChangedEvent.InputTuple, ModerationStatusChangedEvent.OutputTuple, ModerationStatusChangedEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    filters: {
        "DisputeRequest(address,uint256,uint256,uint256,string)": TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        DisputeRequest: TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        "ModeratedEvidence(address,uint256,address,string)": TypedContractEvent<ModeratedEvidenceEvent.InputTuple, ModeratedEvidenceEvent.OutputTuple, ModeratedEvidenceEvent.OutputObject>;
        ModeratedEvidence: TypedContractEvent<ModeratedEvidenceEvent.InputTuple, ModeratedEvidenceEvent.OutputTuple, ModeratedEvidenceEvent.OutputObject>;
        "ModerationStatusChanged(bytes32,uint8)": TypedContractEvent<ModerationStatusChangedEvent.InputTuple, ModerationStatusChangedEvent.OutputTuple, ModerationStatusChangedEvent.OutputObject>;
        ModerationStatusChanged: TypedContractEvent<ModerationStatusChangedEvent.InputTuple, ModerationStatusChangedEvent.OutputTuple, ModerationStatusChangedEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    };
}
//# sourceMappingURL=ModeratedEvidenceModule.d.ts.map