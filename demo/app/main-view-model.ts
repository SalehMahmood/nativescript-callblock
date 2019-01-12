import { Observable } from 'tns-core-modules/data/observable';
import { Callblock } from 'nativescript-callblock';

export class HelloWorldModel extends Observable {
  public message: string;
  private callblock: Callblock;

  constructor() {
    super();

    this.callblock = new Callblock();
    this.message = this.callblock.message;
  }
}
