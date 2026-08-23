import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common.js";
export interface RNGInterface extends Interface {
    getFunction(nameOrSignature: "receiveRandomness" | "requestRandomness"): FunctionFragment;
    encodeFunctionData(functionFragment: "receiveRandomness", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "requestRandomness", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "receiveRandomness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestRandomness", data: BytesLike): Result;
}
export interface RNG extends BaseContract {
    connect(runner?: ContractRunner | null): RNG;
    waitForDeployment(): Promise<this>;
    interface: RNGInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
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
    getFunction(nameOrSignature: "receiveRandomness"): TypedContractMethod<[_block: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "requestRandomness"): TypedContractMethod<[_block: BigNumberish], [void], "nonpayable">;
    filters: {};
}
//# sourceMappingURL=RNG.d.ts.map