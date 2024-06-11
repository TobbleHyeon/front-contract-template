import Caver, { AbiItem } from "caver-js";
import { abis } from "../abis";

// KlaytnService 클래스 정의
class KaikasService {
    private static instance: KaikasService;
    private caver: any;
    private account: string = "";
    private contractAddress: string;
    private tokenABI: AbiItem[];

    private constructor() {
        this.contractAddress = "0xf6A82f88072D4df287497f70705bd6f8BDaA1967";
        this.tokenABI = abis;

        if (window.klaytn) {
            this.caver = new Caver(window.klaytn);
        } else {
            console.error("클레이튼 객체를 찾을 수 없습니다.");
        }
    }

    public static getInstance(): KaikasService {
        if (!KaikasService.instance) {
            KaikasService.instance = new KaikasService();
        }
        return KaikasService.instance;
    }

    public async connectKaikas(): Promise<string> {
        if (window.klaytn) {
            try {
                const accounts = await window.klaytn.enable();
                this.account = accounts[0];
                return this.account;
            } catch (error) {
                console.log(error);
                throw new Error("Failed to connect to Kaikas.");
            }
        } else {
            throw new Error("Kaikas is not installed.");
        }
    }

    public async testCall(): Promise<void> {
        if (!this.account) {
            throw new Error("No account connected.");
        }

        const myContract = new this.caver.klay.Contract(this.tokenABI, this.contractAddress);

        if (myContract) {
            await myContract.methods.transfer(this.account, this.caver.utils.convertToPeb(1, "KLAY")).send({
                from: this.account,
                gas: 300000,
            });
        }
    }

    public getAccount(): string {
        return this.account;
    }
}

// 싱글턴 인스턴스 생성
const Blockchain = KaikasService.getInstance();

export default Blockchain;
