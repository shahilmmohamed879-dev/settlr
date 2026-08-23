import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common.js";
export interface ITokenControllerInterface extends Interface {
    getFunction(nameOrSignature: "onApprove" | "onTransfer" | "proxyPayment"): FunctionFragment;
    encodeFunctionData(functionFragment: "onApprove", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "onTransfer", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxyPayment", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "onApprove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyPayment", data: BytesLike): Result;
}
export interface ITokenController extends BaseContract {
    connect(runner?: ContractRunner | null): ITokenController;
    waitForDeployment(): Promise<this>;
    interface: ITokenControllerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    onApprove: TypedContractMethod<[
        _owner: AddressLike,
        _spender: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    onTransfer: TypedContractMethod<[
        _from: AddressLike,
        _to: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    proxyPayment: TypedContractMethod<[
        _owner: AddressLike
    ], [
        boolean
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "onApprove"): TypedContractMethod<[
        _owner: AddressLike,
        _spender: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "onTransfer"): TypedContractMethod<[
        _from: AddressLike,
        _to: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "proxyPayment"): TypedContractMethod<[_owner: AddressLike], [boolean], "payable">;
    filters: {};
}
