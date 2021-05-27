"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$$ = exports.$ = void 0;
var detox_1 = require("detox");
var helpers_1 = require("./helpers");
var logger_1 = require("./logger");
function isIndexableDetoxElement(type) {
    return type.atIndex !== undefined;
}
var Element = /** @class */ (function () {
    function Element(selector) {
        var _this = this;
        this.selector = selector;
        this.should = {
            beVisible: function (timeout) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.wait({ timeout: timeout })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            exist: function (timeout) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.wait({ visible: false, timeout: timeout })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            not: {
                beVisible: function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, detox_1.expect(this.element).not.toBeVisible()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                exist: function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, detox_1.expect(this.element).not.toExist()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
            },
            have: {
                text: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.wait()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, detox_1.expect(this.element).toHaveText(value)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                label: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.wait()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, detox_1.expect(this.element).toHaveLabel(value)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                id: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.wait()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, detox_1.expect(this.element).toHaveText(value)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                value: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.wait()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, detox_1.expect(this.element).toHaveText(value)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                toggleValue: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.wait()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, detox_1.expect(this.element).toHaveText(value)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
            },
        };
        var selectorType;
        var selectorValue;
        if (selector[0] === '#') {
            selectorType = 'id';
            selectorValue = selector.slice(1);
        }
        else {
            selectorType = 'text';
            selectorValue = selector;
        }
        this.locator = detox_1.by[selectorType](selectorValue);
        this.element = detox_1.element(this.locator);
    }
    // do not use indexes, cause they differ on iOS and Android (docs and practice say the same)
    Element.prototype.atIndex = function (index) {
        if (!isIndexableDetoxElement(this.element))
            throw new Error("You try to get index from non-indexable element");
        this.element = this.element.atIndex(index);
        return this;
    };
    Element.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        elem = _a.sent();
                        return [4 /*yield*/, elem.clearText()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, elem];
                }
            });
        });
    };
    Element.prototype.get = function () {
        return this.element;
    };
    Element.prototype.longPress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        elem = _a.sent();
                        return [4 /*yield*/, elem.longPress()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, elem];
                }
            });
        });
    };
    Element.prototype.replaceText = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var elem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.log.info("Replace text to \"" + value + "\" into element with selector \"" + this.selector + "\"");
                        return [4 /*yield*/, this.wait()];
                    case 1:
                        elem = _a.sent();
                        return [4 /*yield*/, elem.tap()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, elem.replaceText(value)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, elem];
                }
            });
        });
    };
    Element.prototype.scroll = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.offset, offset = _c === void 0 ? 500 : _c, _d = _b.direction, direction = _d === void 0 ? 'down' : _d;
        return __awaiter(this, void 0, void 0, function () {
            var elem;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        elem = _e.sent();
                        return [4 /*yield*/, elem.scroll(offset, direction)];
                    case 2:
                        _e.sent();
                        return [2 /*return*/, elem];
                }
            });
        });
    };
    Element.prototype.scrollWhileElementVisible = function (elementSelectorToWait, scrollDirection) {
        if (scrollDirection === void 0) { scrollDirection = 'down'; }
        return __awaiter(this, void 0, void 0, function () {
            var elementToWait;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        _a.sent();
                        elementToWait = new Element(elementSelectorToWait).element;
                        return [4 /*yield*/, detox_1.waitFor(elementToWait)
                                .toBeVisible()
                                .whileElement(this.locator)
                                .scroll(400, scrollDirection)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, elementToWait];
                }
            });
        });
    };
    Element.prototype.swipe = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.direction, direction = _c === void 0 ? 'down' : _c, _d = _b.speed, speed = _d === void 0 ? 'fast' : _d, _e = _b.normalizedOffset, normalizedOffset = _e === void 0 ? NaN : _e;
        return __awaiter(this, void 0, void 0, function () {
            var elem;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        elem = _f.sent();
                        return [4 /*yield*/, elem.swipe(direction, speed, normalizedOffset, NaN, NaN)];
                    case 2:
                        _f.sent();
                        return [2 /*return*/, this.element];
                }
            });
        });
    };
    Element.prototype.tap = function (point) {
        return __awaiter(this, void 0, void 0, function () {
            var elem, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait({ visible: false })];
                    case 1:
                        elem = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        // @ts-ignore
                        return [4 /*yield*/, elem.tap(point)];
                    case 3:
                        // @ts-ignore
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        throw new Error("Cannot tap on element with selector \"" + this.selector + "\"\n      " + e_1);
                    case 5: return [2 /*return*/, elem];
                }
            });
        });
    };
    Element.prototype.tapBackspace = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.times, times = _c === void 0 ? 1 : _c;
        return __awaiter(this, void 0, void 0, function () {
            var elem, i;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        elem = _d.sent();
                        i = 1;
                        _d.label = 2;
                    case 2:
                        if (!(i <= times)) return [3 /*break*/, 5];
                        return [4 /*yield*/, elem.tapBackspaceKey()];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, elem];
                }
            });
        });
    };
    Element.prototype.type = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var elem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.log.info("Type text \"" + value + "\" into element with selector \"" + this.selector + "\"");
                        return [4 /*yield*/, this.wait()];
                    case 1:
                        elem = _a.sent();
                        return [4 /*yield*/, elem.tap()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, elem.typeText(value)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, elem];
                }
            });
        });
    };
    Element.prototype.wait = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.timeout, timeout = _c === void 0 ? 5 : _c, _d = _b.visible, visible = _d === void 0 ? true : _d;
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        logger_1.log.info("Wait for element with selector " + helpers_1.helpers.prettyStringify(this.selector));
                        if (timeout > 100)
                            throw new Error("Timeout should be specified in seconds, not milliseconds. The value you passed = \"" + timeout + "\" s");
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, , 7]);
                        if (!(visible === false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, detox_1.waitFor(this.element).toExist().withTimeout(timeout * 1000)];
                    case 2:
                        _e.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, detox_1.waitFor(this.element).toBeVisible().withTimeout(timeout * 1000)];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_2 = _e.sent();
                        throw new Error("Wait for element with locator \"" + helpers_1.helpers.prettyStringify(this.selector) + "\" failed\n      " + e_2);
                    case 7: return [2 /*return*/, this.element];
                }
            });
        });
    };
    return Element;
}());
var ElementsList = /** @class */ (function () {
    function ElementsList(selectorsList) {
        var _this = this;
        this.should = {
            beVisible: function () { return __awaiter(_this, void 0, void 0, function () {
                var i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < this.elements.map.length)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.elements[i].wait()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
        };
        this.elements = selectorsList.map(function (selector) { return new Element(selector); });
    }
    return ElementsList;
}());
var $ = function (selector) { return new Element(selector); };
exports.$ = $;
var $$ = function (selectorsList) { return new ElementsList(selectorsList); };
exports.$$ = $$;
// device.getPlatform() === 'ios'
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFxRTtBQUNyRSxxQ0FBb0M7QUFDcEMsbUNBQStCO0FBTS9CLFNBQVMsdUJBQXVCLENBQUMsSUFBMEM7SUFDekUsT0FBUSxJQUF1QixDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFDeEQsQ0FBQztBQUVEO0lBSUUsaUJBQW1CLFFBQWdCO1FBQW5DLGlCQWNDO1FBZGtCLGFBQVEsR0FBUixRQUFRLENBQVE7UUF3SW5DLFdBQU0sR0FBRztZQUNQLFNBQVMsRUFBRSxVQUFPLE9BQWdCOzs7Z0NBQ2hDLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLEVBQUE7OzRCQUE1QixTQUE0QixDQUFDOzs7O2lCQUM5QjtZQUVELEtBQUssRUFBRSxVQUFPLE9BQWdCOzs7Z0NBQzVCLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFBOzs0QkFBckQsU0FBcUQsQ0FBQzs7OztpQkFDdkQ7WUFFRCxHQUFHLEVBQUU7Z0JBQ0gsU0FBUyxFQUFFOzs7b0NBQ1QscUJBQU0sY0FBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUE7O2dDQUE1QyxTQUE0QyxDQUFDOzs7O3FCQUM5QztnQkFFRCxLQUFLLEVBQUU7OztvQ0FDTCxxQkFBTSxjQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7Z0NBQXhDLFNBQXdDLENBQUM7Ozs7cUJBQzFDO2FBQ0Y7WUFFRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFVBQU8sS0FBYTs7O29DQUN4QixxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dDQUFqQixTQUFpQixDQUFDO2dDQUNsQixxQkFBTSxjQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQTs7Z0NBQTVDLFNBQTRDLENBQUM7Ozs7cUJBQzlDO2dCQUNELEtBQUssRUFBRSxVQUFPLEtBQWE7OztvQ0FDekIscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOztnQ0FBakIsU0FBaUIsQ0FBQztnQ0FDbEIscUJBQU0sY0FBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUE7O2dDQUE3QyxTQUE2QyxDQUFDOzs7O3FCQUMvQztnQkFDRCxFQUFFLEVBQUUsVUFBTyxLQUFhOzs7b0NBQ3RCLHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0NBQWpCLFNBQWlCLENBQUM7Z0NBQ2xCLHFCQUFNLGNBQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFBOztnQ0FBNUMsU0FBNEMsQ0FBQzs7OztxQkFDOUM7Z0JBQ0QsS0FBSyxFQUFFLFVBQU8sS0FBYTs7O29DQUN6QixxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dDQUFqQixTQUFpQixDQUFDO2dDQUNsQixxQkFBTSxjQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQTs7Z0NBQTVDLFNBQTRDLENBQUM7Ozs7cUJBQzlDO2dCQUNELFdBQVcsRUFBRSxVQUFPLEtBQWE7OztvQ0FDL0IscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOztnQ0FBakIsU0FBaUIsQ0FBQztnQ0FDbEIscUJBQU0sY0FBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUE7O2dDQUE1QyxTQUE0QyxDQUFDOzs7O3FCQUM5QzthQUNGO1NBQ0YsQ0FBQztRQWhMQSxJQUFJLFlBQTJCLENBQUM7UUFDaEMsSUFBSSxhQUFxQixDQUFDO1FBRTFCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLGFBQWEsR0FBRyxRQUFRLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDRGQUE0RjtJQUM1Rix5QkFBTyxHQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBd0IsQ0FBQztRQUNsRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFSyx1QkFBSyxHQUFYOzs7Ozs0QkFDZSxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF4QixJQUFJLEdBQUcsU0FBaUI7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXRCLFNBQXNCLENBQUM7d0JBQ3ZCLHNCQUFPLElBQUksRUFBQzs7OztLQUNiO0lBRUQscUJBQUcsR0FBSDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUssMkJBQVMsR0FBZjs7Ozs7NEJBQ2UscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBeEIsSUFBSSxHQUFHLFNBQWlCO3dCQUM5QixxQkFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUF0QixTQUFzQixDQUFDO3dCQUN2QixzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDYjtJQUVLLDZCQUFXLEdBQWpCLFVBQWtCLEtBQWE7Ozs7Ozt3QkFDN0IsWUFBRyxDQUFDLElBQUksQ0FBQyx1QkFBb0IsS0FBSyx3Q0FBaUMsSUFBSSxDQUFDLFFBQVEsT0FBRyxDQUFDLENBQUM7d0JBQ3hFLHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQXhCLElBQUksR0FBRyxTQUFpQjt3QkFDOUIscUJBQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFBOzt3QkFBaEIsU0FBZ0IsQ0FBQzt3QkFDakIscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQTdCLFNBQTZCLENBQUM7d0JBQzlCLHNCQUFPLElBQUksRUFBQzs7OztLQUNiO0lBRUssd0JBQU0sR0FBWixVQUFhLEVBRzBDO1lBSDFDLHFCQUd3QyxFQUFFLEtBQUEsRUFGckQsY0FBWSxFQUFaLE1BQU0sbUJBQUcsR0FBRyxLQUFBLEVBQ1osaUJBQWtCLEVBQWxCLFNBQVMsbUJBQUcsTUFBTSxLQUFBOzs7Ozs0QkFFTCxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF4QixJQUFJLEdBQUcsU0FBaUI7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFBOzt3QkFBcEMsU0FBb0MsQ0FBQzt3QkFFckMsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2I7SUFFSywyQ0FBeUIsR0FBL0IsVUFDRSxxQkFBNkIsRUFDN0IsZUFBdUM7UUFBdkMsZ0NBQUEsRUFBQSx3QkFBdUM7Ozs7OzRCQUV2QyxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUFqQixTQUFpQixDQUFDO3dCQUNaLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQzt3QkFDakUscUJBQU0sZUFBTyxDQUFDLGFBQWEsQ0FBQztpQ0FDekIsV0FBVyxFQUFFO2lDQUNiLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lDQUMxQixNQUFNLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxFQUFBOzt3QkFIL0IsU0FHK0IsQ0FBQzt3QkFFaEMsc0JBQU8sYUFBYSxFQUFDOzs7O0tBQ3RCO0lBRUssdUJBQUssR0FBWCxVQUFZLEVBUU47WUFSTSxxQkFRUixFQUFFLEtBQUEsRUFQSixpQkFBa0IsRUFBbEIsU0FBUyxtQkFBRyxNQUFNLEtBQUEsRUFDbEIsYUFBYyxFQUFkLEtBQUssbUJBQUcsTUFBTSxLQUFBLEVBQ2Qsd0JBQXNCLEVBQXRCLGdCQUFnQixtQkFBRyxHQUFHLEtBQUE7Ozs7OzRCQU1ULHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQXhCLElBQUksR0FBRyxTQUFpQjt3QkFDOUIscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQTs7d0JBQTlELFNBQThELENBQUM7d0JBRS9ELHNCQUFPLElBQUksQ0FBQyxPQUFPLEVBQUM7Ozs7S0FDckI7SUFFSyxxQkFBRyxHQUFULFVBQVUsS0FBZ0M7Ozs7OzRCQUMzQixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUE7O3dCQUExQyxJQUFJLEdBQUcsU0FBbUM7Ozs7d0JBRTlDLGFBQWE7d0JBQ2IscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBRHJCLGFBQWE7d0JBQ2IsU0FBcUIsQ0FBQzs7Ozt3QkFFdEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBd0MsSUFBSSxDQUFDLFFBQVEsa0JBQ25FLEdBQUcsQ0FBQyxDQUFBOzRCQUVSLHNCQUFPLElBQUksRUFBQzs7OztLQUNiO0lBRUssOEJBQVksR0FBbEIsVUFBbUIsRUFFTztZQUZQLHFCQUVLLEVBQUUsS0FBQSxFQUR4QixhQUFTLEVBQVQsS0FBSyxtQkFBRyxDQUFDLEtBQUE7Ozs7OzRCQUVJLHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQXhCLElBQUksR0FBRyxTQUFpQjt3QkFDckIsQ0FBQyxHQUFHLENBQUM7Ozs2QkFBRSxDQUFBLENBQUMsSUFBSSxLQUFLLENBQUE7d0JBQ3hCLHFCQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBQTs7d0JBQTVCLFNBQTRCLENBQUM7Ozt3QkFESCxDQUFDLEVBQUUsQ0FBQTs7NEJBRy9CLHNCQUFPLElBQUksRUFBQzs7OztLQUNiO0lBRUssc0JBQUksR0FBVixVQUFXLEtBQWE7Ozs7Ozt3QkFDdEIsWUFBRyxDQUFDLElBQUksQ0FBQyxpQkFBYyxLQUFLLHdDQUFpQyxJQUFJLENBQUMsUUFBUSxPQUFHLENBQUMsQ0FBQzt3QkFDbEUscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBeEIsSUFBSSxHQUFHLFNBQWlCO3dCQUM5QixxQkFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUE7O3dCQUFoQixTQUFnQixDQUFDO3dCQUNqQixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBMUIsU0FBMEIsQ0FBQzt3QkFDM0Isc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2I7SUFFSyxzQkFBSSxHQUFWLFVBQVcsRUFHb0M7WUFIcEMscUJBR2tDLEVBQUUsS0FBQSxFQUY3QyxlQUFXLEVBQVgsT0FBTyxtQkFBRyxDQUFDLEtBQUEsRUFDWCxlQUFjLEVBQWQsT0FBTyxtQkFBRyxJQUFJLEtBQUE7Ozs7Ozt3QkFFZCxZQUFHLENBQUMsSUFBSSxDQUFDLG9DQUFrQyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFHLENBQUMsQ0FBQzt3QkFDckYsSUFBSSxPQUFPLEdBQUcsR0FBRzs0QkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHdGQUFxRixPQUFPLFNBQUssQ0FBQyxDQUFBOzs7OzZCQUUvSCxDQUFBLE9BQU8sS0FBSyxLQUFLLENBQUEsRUFBakIsd0JBQWlCO3dCQUNuQixxQkFBTSxlQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUE7O3dCQUFqRSxTQUFpRSxDQUFDOzs0QkFFbEUscUJBQU0sZUFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFBOzt3QkFBckUsU0FBcUUsQ0FBQzs7Ozs7d0JBR3hFLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQWtDLGlCQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQ3RGLEdBQUcsQ0FBQyxDQUFDOzRCQUdULHNCQUFPLElBQUksQ0FBQyxPQUFPLEVBQUM7Ozs7S0FDckI7SUE0Q0gsY0FBQztBQUFELENBQUMsQUF0TEQsSUFzTEM7QUFFRDtJQUdFLHNCQUFZLGFBQXVCO1FBQW5DLGlCQUVDO1FBRUQsV0FBTSxHQUFHO1lBQ1AsU0FBUyxFQUFFOzs7Ozs0QkFDQSxDQUFDLEdBQUcsQ0FBQzs7O2lDQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQTs0QkFDMUMscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7NEJBQTdCLFNBQTZCLENBQUM7Ozs0QkFEYyxDQUFDLEVBQUUsQ0FBQTs7Ozs7aUJBR2xEO1NBQ0YsQ0FBQztRQVRBLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDekUsQ0FBQztJQVNILG1CQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFFTSxJQUFNLENBQUMsR0FBRyxVQUFDLFFBQWdCLElBQUssT0FBQSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztBQUFoRCxRQUFBLENBQUMsS0FBK0M7QUFDdEQsSUFBTSxFQUFFLEdBQUcsVUFBQyxhQUF1QixJQUFLLE9BQUEsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQS9CLENBQStCLENBQUM7QUFBbEUsUUFBQSxFQUFFLE1BQWdFO0FBRS9FLGlDQUFpQyJ9