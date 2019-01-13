import * as application from 'tns-core-modules/application';
import { CallBlock } from 'nativescript-callblock';

application.start({ moduleName: "main-page" });

console.log("--- CallBLocker ---")
// console.dir(new CallBlock());