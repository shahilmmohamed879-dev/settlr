import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common.js";
export interface IRandomAuRaInterface extends Interface {
    getFunction(nameOrSignature: "collectRoundLength" | "currentSeed" | "isCommitPhase" | "nextCommitPhaseStartBlock"): FunctionFragment;
    encodeFunctionData(functionFragment: "collectRoundLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentSeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "isCommitPhase", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextCommitPhaseStartBlock", values?: undefined): string;
    decodeFunctionResult(functionFragment: "collectRoundLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentSeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCommitPhase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextCommitPhaseStartBlock", data: BytesLike): Result;
}
export interface IRandomAuRa extends BaseContract {
    connect(runner?: ContractRunner | null): IRandomAuRa;
    waitForDeployment(): Promise<this>;
    interface: IRandomAuRaInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    collectRoundLength: TypedContractMethod<[], [bigint], "view">;
    currentSeed: TypedContractMethod<[], [bigint], "view">;
    isCommitPhase: TypedContractMethod<[], [boolean], "view">;
    nextCommitPhaseStartBlock: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "collectRoundLength"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "currentSeed"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "isCommitPhase"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "nextCommitPhaseStartBlock"): TypedContractMethod<[], [bigint], "view">;
    filters: {};
}
//# sourceMappingURL=IRandomAuRa.d.ts.map