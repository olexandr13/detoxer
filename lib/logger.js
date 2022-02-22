"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
var tslog_1 = require("tslog");
var logLevel = process.env.LOG_LEVEL || 'debug';
exports.log = new tslog_1.Logger({ minLevel: logLevel, colorizePrettyLogs: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBOEM7QUFFOUMsSUFBTSxRQUFRLEdBQWtCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBMEIsSUFBSSxPQUFPLENBQUM7QUFFckUsUUFBQSxHQUFHLEdBQVcsSUFBSSxjQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMifQ==