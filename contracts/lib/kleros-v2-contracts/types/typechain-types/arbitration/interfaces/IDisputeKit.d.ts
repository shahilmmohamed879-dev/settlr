import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common.js";
export interface IDisputeKitInterface extends Interface {
    getFunction(nameOrSignature: "areCommitsAllCast" | "areVotesAllCast" | "createDispute" | "currentRuling" | "draw" | "getCoherentCount" | "getDegreeOfCoherence" | "getRoundInfo" | "getVoteInfo" | "isAppealFunded" | "isVoteActive"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    encodeFunctionData(functionFragment: "areCommitsAllCast", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "areVotesAllCast", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "createDispute", values: [BigNumberish, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentRuling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "draw", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCoherentCount", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDegreeOfCoherence", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getRoundInfo", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getVoteInfo", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isAppealFunded", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isVoteActive", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "areCommitsAllCast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "areVotesAllCast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "draw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCoherentCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDegreeOfCoherence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoundInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVoteInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAppealFunded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isVoteActive", data: BytesLike): Result;
}
export declare namespace VoteCastEvent {
    type InputTuple = [
        _coreDisputeID: BigNumberish,
        _juror: AddressLike,
        _voteIDs: BigNumberish[],
        _choice: BigNumberish,
        _justification: string
    ];
    type OutputTuple = [
        _coreDisputeID: bigint,
        _juror: string,
        _voteIDs: bigint[],
        _choice: bigint,
        _justification: string
    ];
    interface OutputObject {
        _coreDisputeID: bigint;
        _juror: string;
        _voteIDs: bigint[];
        _choice: bigint;
        _justification: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IDisputeKit extends BaseContract {
    connect(runner?: ContractRunner | null): IDisputeKit;
    waitForDeployment(): Promise<this>;
    interface: IDisputeKitInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    areCommitsAllCast: TypedContractMethod<[
        _coreDisputeID: BigNumberish
    ], [
        boolean
    ], "view">;
    areVotesAllCast: TypedContractMethod<[
        _coreDisputeID: BigNumberish
    ], [
        boolean
    ], "view">;
    createDispute: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike,
        _nbVotes: BigNumberish
    ], [
        void
    ], "nonpayable">;
    currentRuling: TypedContractMethod<[
        _coreDisputeID: BigNumberish
    ], [
        [
            bigint,
            boolean,
            boolean
        ] & {
            ruling: bigint;
            tied: boolean;
            overridden: boolean;
        }
    ], "view">;
    draw: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _nonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getCoherentCount: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish
    ], [
        bigint
    ], "view">;
    getDegreeOfCoherence: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _voteID: BigNumberish,
        _feePerJuror: BigNumberish,
        _pnkAtStakePerJuror: BigNumberish
    ], [
        bigint
    ], "view">;
    getRoundInfo: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _choice: BigNumberish
    ], [
        [
            bigint,
            boolean,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            winningChoice: bigint;
            tied: boolean;
            totalVoted: bigint;
            totalCommited: bigint;
            nbVoters: bigint;
            choiceCount: bigint;
        }
    ], "view">;
    getVoteInfo: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _voteID: BigNumberish
    ], [
        [
            string,
            string,
            bigint,
            boolean
        ] & {
            account: string;
            commit: string;
            choice: bigint;
            voted: boolean;
        }
    ], "view">;
    isAppealFunded: TypedContractMethod<[
        _coreDisputeID: BigNumberish
    ], [
        boolean
    ], "view">;
    isVoteActive: TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _voteID: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "areCommitsAllCast"): TypedContractMethod<[_coreDisputeID: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "areVotesAllCast"): TypedContractMethod<[_coreDisputeID: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "createDispute"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _numberOfChoices: BigNumberish,
        _extraData: BytesLike,
        _nbVotes: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "currentRuling"): TypedContractMethod<[
        _coreDisputeID: BigNumberish
    ], [
        [
            bigint,
            boolean,
            boolean
        ] & {
            ruling: bigint;
            tied: boolean;
            overridden: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "draw"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _nonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "getCoherentCount"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getDegreeOfCoherence"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _voteID: BigNumberish,
        _feePerJuror: BigNumberish,
        _pnkAtStakePerJuror: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getRoundInfo"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _choice: BigNumberish
    ], [
        [
            bigint,
            boolean,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            winningChoice: bigint;
            tied: boolean;
            totalVoted: bigint;
            totalCommited: bigint;
            nbVoters: bigint;
            choiceCount: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getVoteInfo"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _voteID: BigNumberish
    ], [
        [
            string,
            string,
            bigint,
            boolean
        ] & {
            account: string;
            commit: string;
            choice: bigint;
            voted: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "isAppealFunded"): TypedContractMethod<[_coreDisputeID: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "isVoteActive"): TypedContractMethod<[
        _coreDisputeID: BigNumberish,
        _coreRoundID: BigNumberish,
        _voteID: BigNumberish
    ], [
        boolean
    ], "view">;
    getEvent(key: "VoteCast"): TypedContractEvent<VoteCastEvent.InputTuple, VoteCastEvent.OutputTuple, VoteCastEvent.OutputObject>;
    filters: {
        "VoteCast(uint256,address,uint256[],uint256,string)": TypedContractEvent<VoteCastEvent.InputTuple, VoteCastEvent.OutputTuple, VoteCastEvent.OutputObject>;
        VoteCast: TypedContractEvent<VoteCastEvent.InputTuple, VoteCastEvent.OutputTuple, VoteCastEvent.OutputObject>;
    };
}
//# sourceMappingURL=IDisputeKit.d.ts.map