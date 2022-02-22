"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detox = exports.log = exports.helpers = exports.$$ = exports.$ = exports.assert = exports.app = exports.device = void 0;
var detox_1 = require("detox");
Object.defineProperty(exports, "device", { enumerable: true, get: function () { return detox_1.device; } });
var app_1 = require("./app");
Object.defineProperty(exports, "app", { enumerable: true, get: function () { return app_1.app; } });
var assertions_1 = require("./assertions");
Object.defineProperty(exports, "assert", { enumerable: true, get: function () { return assertions_1.assert; } });
var element_1 = require("./element");
Object.defineProperty(exports, "$", { enumerable: true, get: function () { return element_1.$; } });
Object.defineProperty(exports, "$$", { enumerable: true, get: function () { return element_1.$$; } });
var helpers_1 = require("./helpers");
Object.defineProperty(exports, "helpers", { enumerable: true, get: function () { return helpers_1.helpers; } });
var logger_1 = require("./logger");
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return logger_1.log; } });
var detox = require("detox");
exports.detox = detox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQStCO0FBQXRCLCtGQUFBLE1BQU0sT0FBQTtBQUNmLDZCQUE0QjtBQUFuQiwwRkFBQSxHQUFHLE9BQUE7QUFDWiwyQ0FBc0M7QUFBN0Isb0dBQUEsTUFBTSxPQUFBO0FBQ2YscUNBQWtDO0FBQXpCLDRGQUFBLENBQUMsT0FBQTtBQUFFLDZGQUFBLEVBQUUsT0FBQTtBQUNkLHFDQUFvQztBQUEzQixrR0FBQSxPQUFPLE9BQUE7QUFDaEIsbUNBQStCO0FBQXRCLDZGQUFBLEdBQUcsT0FBQTtBQUVaLDZCQUErQjtBQUR0QixzQkFBSyJ9