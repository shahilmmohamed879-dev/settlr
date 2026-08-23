import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common.js";
export interface TransactionBatcherInterface extends Interface {
    getFunction(nameOrSignature: "batchSend" | "batchSendUnchecked"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchSend", values: [AddressLike[], BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "batchSendUnchecked", values: [AddressLike[], BigNumberish[], BytesLike[]]): string;
    decodeFunctionResult(functionFragment: "batchSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchSendUnchecked", data: BytesLike): Result;
}
export interface TransactionBatcher extends BaseContract {
    connect(runner?: ContractRunner | null): TransactionBatcher;
    waitForDeployment(): Promise<this>;
    interface: TransactionBatcherInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    batchSend: TypedContractMethod<[
        targets: AddressLike[],
        values: BigNumberish[],
        datas: BytesLike[]
    ], [
        void
    ], "payable">;
    batchSendUnchecked: TypedContractMethod<[
        targets: AddressLike[],
        values: BigNumberish[],
        datas: BytesLike[]
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "batchSend"): TypedContractMethod<[
        targets: AddressLike[],
        values: BigNumberish[],
        datas: BytesLike[]
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "batchSendUnchecked"): TypedContractMethod<[
        targets: AddressLike[],
        values: BigNumberish[],
        datas: BytesLike[]
    ], [
        void
    ], "payable">;
    filters: {};
}
