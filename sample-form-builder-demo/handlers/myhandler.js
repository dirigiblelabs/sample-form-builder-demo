// This handler script can be optionally added to the form definition

define([], function () {

    var module = function () {
        this.myHandlerFunction = function () {
            alert('Hello from MyHandlerFunction!');
        }
    };

    return module; 
});