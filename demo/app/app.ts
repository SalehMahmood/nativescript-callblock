import * as application from 'tns-core-modules/application';
declare var com: any;

const CallBlocker = new com.salehmahmood.nativescriptcallblock.CallBlocker();

console.log("Obj", );
console.log("Obj2", new com.salehmahmood.nativescriptcallblock.TestClass());
console.log("Obj3", CallBlocker.theString.toString());

application.start({ moduleName: "main-page" });
