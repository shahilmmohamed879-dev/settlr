import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common.js";
export interface KlerosGovernorInterface extends Interface {
    getFunction(nameOrSignature: "arbitrator" | "arbitratorExtraData" | "changeArbitrator" | "changeDisputeTemplate" | "changeExecutionTimeout" | "changeSubmissionDeposit" | "changeSubmissionTimeout" | "changeWithdrawTimeout" | "executeSubmissions" | "executeTransactionList" | "executionTimeout" | "getCurrentSessionNumber" | "getExpendableFunds" | "getNumberOfCreatedLists" | "getNumberOfTransactions" | "getSubmittedLists" | "getTransactionInfo" | "lastApprovalTime" | "reservedETH" | "rule" | "sessions" | "submissionBaseDeposit" | "submissionTimeout" | "submissions" | "submitList" | "templateId" | "templateRegistry" | "withdrawTimeout" | "withdrawTransactionList"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "DisputeRequest" | "ListSubmitted" | "Ruling"): EventFragment;
    encodeFunctionData(functionFragment: "arbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "arbitratorExtraData", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeArbitrator", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "changeDisputeTemplate", values: [string, string]): string;
    encodeFunctionData(functionFragment: "changeExecutionTimeout", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeSubmissionDeposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeSubmissionTimeout", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeWithdrawTimeout", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeSubmissions", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeTransactionList", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "executionTimeout", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentSessionNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "getExpendableFunds", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNumberOfCreatedLists", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNumberOfTransactions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSubmittedLists", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTransactionInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lastApprovalTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "reservedETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "rule", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sessions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "submissionBaseDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "submissionTimeout", values?: undefined): string;
    encodeFunctionData(functionFragment: "submissions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "submitList", values: [AddressLike[], BigNumberish[], BytesLike, BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "templateId", values?: undefined): string;
    encodeFunctionData(functionFragment: "templateRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTimeout", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTransactionList", values: [BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "arbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitratorExtraData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeDisputeTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeExecutionTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSubmissionDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSubmissionTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeWithdrawTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeSubmissions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransactionList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executionTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentSessionNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExpendableFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfCreatedLists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubmittedLists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastApprovalTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reservedETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sessions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submissionBaseDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submissionTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submissions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "templateId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "templateRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTransactionList", data: BytesLike): Result;
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
export declare namespace ListSubmittedEvent {
    type InputTuple = [
        _listID: BigNumberish,
        _submitter: AddressLike,
        _session: BigNumberish,
        _description: string
    ];
    type OutputTuple = [
        _listID: bigint,
        _submitter: string,
        _session: bigint,
        _description: string
    ];
    interface OutputObject {
        _listID: bigint;
        _submitter: string;
        _session: bigint;
        _description: string;
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
export interface KlerosGovernor extends BaseContract {
    connect(runner?: ContractRunner | null): KlerosGovernor;
    waitForDeployment(): Promise<this>;
    interface: KlerosGovernorInterface;
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
        _arbitrator: AddressLike,
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
    changeExecutionTimeout: TypedContractMethod<[
        _executionTimeout: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeSubmissionDeposit: TypedContractMethod<[
        _submissionBaseDeposit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeSubmissionTimeout: TypedContractMethod<[
        _submissionTimeout: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeWithdrawTimeout: TypedContractMethod<[
        _withdrawTimeout: BigNumberish
    ], [
        void
    ], "nonpayable">;
    executeSubmissions: TypedContractMethod<[], [void], "nonpayable">;
    executeTransactionList: TypedContractMethod<[
        _listID: BigNumberish,
        _cursor: BigNumberish,
        _count: BigNumberish
    ], [
        void
    ], "nonpayable">;
    executionTimeout: TypedContractMethod<[], [bigint], "view">;
    getCurrentSessionNumber: TypedContractMethod<[], [bigint], "view">;
    getExpendableFunds: TypedContractMethod<[], [bigint], "view">;
    getNumberOfCreatedLists: TypedContractMethod<[], [bigint], "view">;
    getNumberOfTransactions: TypedContractMethod<[
        _listID: BigNumberish
    ], [
        bigint
    ], "view">;
    getSubmittedLists: TypedContractMethod<[
        _session: BigNumberish
    ], [
        bigint[]
    ], "view">;
    getTransactionInfo: TypedContractMethod<[
        _listID: BigNumberish,
        _transactionIndex: BigNumberish
    ], [
        [
            string,
            bigint,
            string,
            boolean
        ] & {
            target: string;
            value: bigint;
            data: string;
            executed: boolean;
        }
    ], "view">;
    lastApprovalTime: TypedContractMethod<[], [bigint], "view">;
    reservedETH: TypedContractMethod<[], [bigint], "view">;
    rule: TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    sessions: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            ruling: bigint;
            disputeID: bigint;
            sumDeposit: bigint;
            status: bigint;
            durationOffset: bigint;
        }
    ], "view">;
    submissionBaseDeposit: TypedContractMethod<[], [bigint], "view">;
    submissionTimeout: TypedContractMethod<[], [bigint], "view">;
    submissions: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            bigint,
            string,
            bigint,
            boolean,
            bigint
        ] & {
            submitter: string;
            deposit: bigint;
            listHash: string;
            submissionTime: bigint;
            approved: boolean;
            approvalTime: bigint;
        }
    ], "view">;
    submitList: TypedContractMethod<[
        _target: AddressLike[],
        _value: BigNumberish[],
        _data: BytesLike,
        _dataSize: BigNumberish[],
        _description: string
    ], [
        void
    ], "payable">;
    templateId: TypedContractMethod<[], [bigint], "view">;
    templateRegistry: TypedContractMethod<[], [string], "view">;
    withdrawTimeout: TypedContractMethod<[], [bigint], "view">;
    withdrawTransactionList: TypedContractMethod<[
        _submissionID: BigNumberish,
        _listHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "arbitrator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "arbitratorExtraData"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "changeArbitrator"): TypedContractMethod<[
        _arbitrator: AddressLike,
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
    getFunction(nameOrSignature: "changeExecutionTimeout"): TypedContractMethod<[
        _executionTimeout: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeSubmissionDeposit"): TypedContractMethod<[
        _submissionBaseDeposit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeSubmissionTimeout"): TypedContractMethod<[
        _submissionTimeout: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeWithdrawTimeout"): TypedContractMethod<[
        _withdrawTimeout: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "executeSubmissions"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "executeTransactionList"): TypedContractMethod<[
        _listID: BigNumberish,
        _cursor: BigNumberish,
        _count: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "executionTimeout"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getCurrentSessionNumber"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getExpendableFunds"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getNumberOfCreatedLists"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getNumberOfTransactions"): TypedContractMethod<[_listID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getSubmittedLists"): TypedContractMethod<[_session: BigNumberish], [bigint[]], "view">;
    getFunction(nameOrSignature: "getTransactionInfo"): TypedContractMethod<[
        _listID: BigNumberish,
        _transactionIndex: BigNumberish
    ], [
        [
            string,
            bigint,
            string,
            boolean
        ] & {
            target: string;
            value: bigint;
            data: string;
            executed: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "lastApprovalTime"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "reservedETH"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "rule"): TypedContractMethod<[
        _disputeID: BigNumberish,
        _ruling: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "sessions"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            ruling: bigint;
            disputeID: bigint;
            sumDeposit: bigint;
            status: bigint;
            durationOffset: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "submissionBaseDeposit"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "submissionTimeout"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "submissions"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            bigint,
            string,
            bigint,
            boolean,
            bigint
        ] & {
            submitter: string;
            deposit: bigint;
            listHash: string;
            submissionTime: bigint;
            approved: boolean;
            approvalTime: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "submitList"): TypedContractMethod<[
        _target: AddressLike[],
        _value: BigNumberish[],
        _data: BytesLike,
        _dataSize: BigNumberish[],
        _description: string
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "templateId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "templateRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdrawTimeout"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "withdrawTransactionList"): TypedContractMethod<[
        _submissionID: BigNumberish,
        _listHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "DisputeRequest"): TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
    getEvent(key: "ListSubmitted"): TypedContractEvent<ListSubmittedEvent.InputTuple, ListSubmittedEvent.OutputTuple, ListSubmittedEvent.OutputObject>;
    getEvent(key: "Ruling"): TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    filters: {
        "DisputeRequest(address,uint256,uint256,uint256,string)": TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        DisputeRequest: TypedContractEvent<DisputeRequestEvent.InputTuple, DisputeRequestEvent.OutputTuple, DisputeRequestEvent.OutputObject>;
        "ListSubmitted(uint256,address,uint256,string)": TypedContractEvent<ListSubmittedEvent.InputTuple, ListSubmittedEvent.OutputTuple, ListSubmittedEvent.OutputObject>;
        ListSubmitted: TypedContractEvent<ListSubmittedEvent.InputTuple, ListSubmittedEvent.OutputTuple, ListSubmittedEvent.OutputObject>;
        "Ruling(address,uint256,uint256)": TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
        Ruling: TypedContractEvent<RulingEvent.InputTuple, RulingEvent.OutputTuple, RulingEvent.OutputObject>;
    };
}
