/// <reference types="vite/client" />

import Caver from "caver-js";

declare global {
    interface Window {
        caver: Caver;
        klaytn?: any;
        Wepin: any;
    }
}

window.caver = new Caver(window.klaytn);
