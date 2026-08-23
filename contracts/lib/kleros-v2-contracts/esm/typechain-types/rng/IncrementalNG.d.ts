import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common.js";
export interface IncrementalNGInterface extends Interface {
    getFunction(nameOrSignature: "number" | "receiveRandomness" | "requestRandomness"): FunctionFragment;
    encodeFunctionData(functionFragment: "number", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveRandomness", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "requestRandomness", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "number", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveRandomness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestRandomness", data: BytesLike): Result;
}
export interface IncrementalNG extends BaseContract {
    connect(runner?: ContractRunner | null): IncrementalNG;
    waitForDeployment(): Promise<this>;
    interface: IncrementalNGInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    number: TypedContractMethod<[], [bigint], "view">;
    receiveRandomness: TypedContractMethod<[
        _block: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    requestRandomness: TypedContractMethod<[
        _block: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "number"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "receiveRandomness"): TypedContractMethod<[_block: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "requestRandomness"): TypedContractMethod<[_block: BigNumberish], [void], "nonpayable">;
    filters: {};
}
