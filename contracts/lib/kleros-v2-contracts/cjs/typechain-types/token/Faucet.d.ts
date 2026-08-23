import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common.js";
export interface FaucetInterface extends Interface {
    getFunction(nameOrSignature: "amount" | "balance" | "changeAmount" | "changeGovernor" | "governor" | "request" | "token" | "withdraw" | "withdrewAlready"): FunctionFragment;
    encodeFunctionData(functionFragment: "amount", values?: undefined): string;
    encodeFunctionData(functionFragment: "balance", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeAmount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeGovernor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "request", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrewAlready", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "request", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrewAlready", data: BytesLike): Result;
}
export interface Faucet extends BaseContract {
    connect(runner?: ContractRunner | null): Faucet;
    waitForDeployment(): Promise<this>;
    interface: FaucetInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    amount: TypedContractMethod<[], [bigint], "view">;
    balance: TypedContractMethod<[], [bigint], "view">;
    changeAmount: TypedContractMethod<[
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeGovernor: TypedContractMethod<[
        _governor: AddressLike
    ], [
        void
    ], "nonpayable">;
    governor: TypedContractMethod<[], [string], "view">;
    request: TypedContractMethod<[], [void], "nonpayable">;
    token: TypedContractMethod<[], [string], "view">;
    withdraw: TypedContractMethod<[], [void], "nonpayable">;
    withdrewAlready: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "amount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "balance"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "changeAmount"): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeGovernor"): TypedContractMethod<[_governor: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "governor"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "request"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "token"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdrewAlready"): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    filters: {};
}
