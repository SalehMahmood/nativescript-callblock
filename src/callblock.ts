declare var com;

export class CallBlock {
    constructor() {}

    public static shared = new CallBlock();

    public blockCall(context, intent) {
        const callBlocker = new com.salehmahmood.nativescriptcallblock.CallBlocker();

        callBlocker.blockCall(context, intent, "", "");
    }
}