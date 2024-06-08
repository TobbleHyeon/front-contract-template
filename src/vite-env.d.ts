/// <reference types="vite/client" />

import Caver from "caver-js";

declare global {
    interface Window {
        caver?: any;
        klaytn?: any;
    }
}

window.caver = new Caver(window.klaytn);
