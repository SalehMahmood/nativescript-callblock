var Callblock = require("nativescript-callblock").Callblock;
var callblock = new Callblock();

describe("greet function", function() {
    it("exists", function() {
        expect(callblock.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(callblock.greet()).toEqual("Hello, NS");
    });
});