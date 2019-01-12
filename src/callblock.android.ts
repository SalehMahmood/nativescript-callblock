import { Common } from './callblock.common';

declare class com {
    public static salehmahmood;
}

export class Callblock extends Common {
    public getCallBlockerObject() {
        return com.salehmahmood.nativescriptcallblock.CallBlocker.shared;
    }
}