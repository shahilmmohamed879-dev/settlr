export declare const deployments: {
    readonly devnet: {
        readonly chainId: 421614;
    };
    readonly university: {
        readonly chainId: 421614;
    };
    readonly testnet: {
        readonly chainId: 421614;
    };
    readonly mainnetNeo: {
        readonly chainId: 42161;
    };
};
export type DeploymentName = keyof typeof deployments;
export type ContractConfig = {
    address: Record<number, `0x${string}`>;
    abi: readonly any[];
};
export declare function getAddress(config: ContractConfig, chainId: number): `0x${string}`;
