import { type ContractRunner } from "ethers";
import type { ISortitionModule, ISortitionModuleInterface } from "../../../arbitration/interfaces/ISortitionModule.js";
export declare class ISortitionModule__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "enum ISortitionModule.Phase";
            readonly name: "_phase";
            readonly type: "uint8";
        }];
        readonly name: "NewPhase";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_roundID";
            readonly type: "uint256";
        }];
        readonly name: "createDisputeHook";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "createTree";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_court";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_coreDisputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "draw";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_juror";
            readonly type: "address";
        }, {
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }];
        readonly name: "getJurorBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalStaked";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalLocked";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "stakedInCourt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nbCourts";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_juror";
            readonly type: "address";
        }];
        readonly name: "getJurorCourtIDs";
        readonly outputs: readonly [{
            readonly internalType: "uint96[]";
            readonly name: "";
            readonly type: "uint96[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_juror";
            readonly type: "address";
        }];
        readonly name: "getJurorLeftoverPNK";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_juror";
            readonly type: "address";
        }];
        readonly name: "isJurorStaked";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_relativeAmount";
            readonly type: "uint256";
        }];
        readonly name: "lockStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_drawnNumber";
            readonly type: "uint256";
        }];
        readonly name: "notifyRandomNumber";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_relativeAmount";
            readonly type: "uint256";
        }];
        readonly name: "penalizeStake";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pnkBalance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "availablePenalty";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_disputeID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_roundID";
            readonly type: "uint256";
        }];
        readonly name: "postDrawHook";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }];
        readonly name: "setJurorInactive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pnkDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pnkWithdrawal";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_newStake";
            readonly type: "uint256";
        }];
        readonly name: "setStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_relativeAmount";
            readonly type: "uint256";
        }];
        readonly name: "unlockStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "uint96";
            readonly name: "_courtID";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint256";
            readonly name: "_newStake";
            readonly type: "uint256";
        }];
        readonly name: "validateStake";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pnkDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pnkWithdrawal";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum StakingResult";
            readonly name: "stakingResult";
            readonly type: "uint8";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }];
        readonly name: "withdrawLeftoverPNK";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ISortitionModuleInterface;
    static connect(address: string, runner?: ContractRunner | null): ISortitionModule;
}
//# sourceMappingURL=ISortitionModule__factory.d.ts.map