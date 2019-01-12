import { Observable } from 'tns-core-modules/data/observable';
import { Callblock } from 'nativescript-callblock';

declare class com {
  public static salehmahmood;
}

declare class CallBlocker {
}
export class HelloWorldModel extends Observable {
  public message: string;
  private callblock: Callblock;

  constructor() {
    super();
    // console.log("Obj", com.salehmahmood.nativescriptcallblock.CallBlocker);
    this.callblock = new Callblock();
    this.message = this.callblock.message;
  }
}
