define([
    'require',
    'main'
], function(require, main) {
    'use strict';
    require(["./module1"],function(module1){
        console.log(module1);
        console.log(module1.foo())
    })
    console.log("同步？")
});