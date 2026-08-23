import { type PublicClient, type WalletClient } from "viem";
import { type DeploymentName } from "./utils";
type ContractInstance = {
    address: `0x${string}`;
    abi: readonly any[];
};
type ContractInstances = {
    klerosCore: ContractInstance;
    sortition: ContractInstance;
    disputeKitClassic: ContractInstance;
    disputeKitShutter?: ContractInstance;
    disputeKitGated?: ContractInstance;
    disputeKitGatedShutter?: ContractInstance;
    disputeResolver: ContractInstance;
    disputeTemplateRegistry: ContractInstance;
    evidence: ContractInstance;
    policyRegistry: ContractInstance;
    transactionBatcher: ContractInstance;
    chainlinkRng?: ContractInstance;
    randomizerRng?: ContractInstance;
    blockHashRng: ContractInstance;
    pnk: ContractInstance;
    klerosCoreSnapshotProxy: ContractInstance;
};
export declare const getConfigs: ({ deployment }: {
    deployment: DeploymentName;
}) => ContractInstances;
export declare const getContracts: ({ publicClient, walletClient, deployment, }: {
    publicClient: PublicClient;
    walletClient?: WalletClient;
    deployment: DeploymentName;
}) => {
    klerosCore: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
    sortition: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
    disputeKitClassic: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
    disputeKitShutter: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    } | undefined;
    disputeKitGated: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    } | undefined;
    disputeKitGatedShutter: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    } | undefined;
    disputeResolver: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
    disputeTemplateRegistry: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
    evidence: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
    policyRegistry: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
    transactionBatcher: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
    chainlinkRng: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    } | undefined;
    randomizerRng: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    } | undefined;
    blockHashRng: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
    pnk: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
    klerosCoreSnapshotProxy: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly any[], string, any[]>, "args" | "address" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly any[], string, any[], import("viem").Chain | undefined>, "args" | "address" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<readonly any[], string, any[], import("viem").Chain | undefined, chainOverride, accountOverride>, "args" | "address" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                blockHash?: import("viem").Hash | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<readonly any[], string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined;
                pollingInterval?: number | undefined;
                strict?: boolean | undefined;
                fromBlock?: import("viem").BlockNumber<bigint> | undefined;
                onError?: ((error: Error) => void) | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly any[], string, undefined>;
                poll?: true | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        address: `0x${string}`;
        abi: readonly any[];
    };
};
export {};
