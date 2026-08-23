import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common.js";
export interface KlerosCoreSnapshotProxyInterface extends Interface {
    getFunction(nameOrSignature: "balanceOf" | "changeCore" | "changeGovernor" | "core" | "decimals" | "governor" | "name" | "symbol"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeCore", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "core", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "core", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
}
export interface KlerosCoreSnapshotProxy extends BaseContract {
    connect(runner?: ContractRunner | null): KlerosCoreSnapshotProxy;
    waitForDeployment(): Promise<this>;
    interface: KlerosCoreSnapshotProxyInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    balanceOf: TypedContractMethod<[_account: AddressLike], [bigint], "view">;
    changeCore: TypedContractMethod<[_core: AddressLike], [void], "nonpayable">;
    changeGovernor: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    core: TypedContractMethod<[], [string], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    governor: TypedContractMethod<[], [string], "view">;
    name: TypedContractMethod<[], [string], "view">;
    symbol: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "changeCore"): TypedContractMethod<[_core: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "core"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
