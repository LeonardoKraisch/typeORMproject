"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("./data-source");
data_source_1.default
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err.message);
});
