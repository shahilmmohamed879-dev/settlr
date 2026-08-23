import { type ContractRunner } from "ethers";
import type { ITokenBridge, ITokenBridgeInterface } from "../../../../kleros-v1/kleros-liquid-xdai/interfaces/ITokenBridge.js";
export declare class ITokenBridge__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IERC677";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ITokenBridgeInterface;
    static connect(address: string, runner?: ContractRunner | null): ITokenBridge;
}
//# sourceMappingURL=ITokenBridge__factory.d.ts.map