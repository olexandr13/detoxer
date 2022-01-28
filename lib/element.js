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
                            case 0: return [4 /*yield*/, (0, detox_1.expect)(this.element).not.toBeVisible()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                exist: function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (0, detox_1.expect)(this.element).not.toExist()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
            },
            disappear: function (timeout) {
                if (timeout === void 0) { timeout = 5; }
                return __awaiter(_this, void 0, void 0, function () {
                    var isElementVisible, waitTimeCounter, e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                isElementVisible = true;
                                waitTimeCounter = 0;
                                _a.label = 1;
                            case 1:
                                if (!(isElementVisible && waitTimeCounter < timeout)) return [3 /*break*/, 7];
                                return [4 /*yield*/, helpers_1.helpers.sleep(0.1)];
                            case 2:
                                _a.sent();
                                waitTimeCounter += 0.1;
                                _a.label = 3;
                            case 3:
                                _a.trys.push([3, 5, , 6]);
                                return [4 /*yield*/, (0, detox_1.expect)(this.element).not.toBeVisible()];
                            case 4:
                                _a.sent();
                                isElementVisible = false;
                                logger_1.log.info("Element \"" + this.selector + "\" disappeared after " + waitTimeCounter + " seconds.");
                                return [3 /*break*/, 6];
                            case 5:
                                e_1 = _a.sent();
                                logger_1.log.debug("Next error is expected. Please ignore > " + e_1);
                                isElementVisible = true;
                                return [3 /*break*/, 6];
                            case 6: return [3 /*break*/, 1];
                            case 7:
                                if (isElementVisible)
                                    throw new Error("Expect element \"" + this.selector + "\" to disappear within " + timeout + " seconds.\n      But it's visible.");
                                return [2 /*return*/];
                        }
                    });
                });
            },
            have: {
                text: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.wait()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, (0, detox_1.expect)(this.element).toHaveText(value)];
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
                                return [4 /*yield*/, (0, detox_1.expect)(this.element).toHaveLabel(value)];
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
                                return [4 /*yield*/, (0, detox_1.expect)(this.element).toHaveId(value)];
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
                                return [4 /*yield*/, (0, detox_1.expect)(this.element).toHaveValue(value)];
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
                                return [4 /*yield*/, (0, detox_1.expect)(this.element).toHaveToggleValue(value)];
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
        else if (selector[0] === '~') {
            selectorType = 'label';
            selectorValue = selector.slice(1);
        }
        else {
            selectorType = 'text';
            selectorValue = selector;
        }
        this.locator = detox_1.by[selectorType](selectorValue);
        this.element = (0, detox_1.element)(this.locator);
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
    Element.prototype.scrollWhileElementVisible = function (elementToWait, scrollDirection) {
        if (scrollDirection === void 0) { scrollDirection = 'down'; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, (0, detox_1.waitFor)(elementToWait)
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
            var elem, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        elem = _a.sent();
                        logger_1.log.info("Tap on element with selector \"" + this.selector + "\" at " + (helpers_1.helpers.stringify(point) || 'default') + " point");
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, elem.tap(point)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        throw new Error("Cannot tap on element with selector \"" + this.selector + "\"\n      " + e_2);
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
        var _b = _a === void 0 ? {} : _a, _c = _b.timeout, timeout = _c === void 0 ? 11000 : _c, _d = _b.visible, visible = _d === void 0 ? true : _d, _e = _b.sleepAfter, sleepAfter = _e === void 0 ? 800 : _e;
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        logger_1.log.info("Wait for element with selector " + this.selector + " with visibility set to " + visible.toString());
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 6, , 7]);
                        if (!(visible === false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, detox_1.waitFor)(this.element).toExist().withTimeout(timeout)];
                    case 2:
                        _f.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, (0, detox_1.waitFor)(this.element).toBeVisible().withTimeout(timeout)];
                    case 4:
                        _f.sent();
                        _f.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_3 = _f.sent();
                        throw new Error("Wait for element with locator \"" + helpers_1.helpers.stringify(this.selector) + "\" failed\n      " + e_3);
                    case 7: return [4 /*yield*/, helpers_1.helpers.sleep(sleepAfter)];
                    case 8:
                        _f.sent();
                        return [2 /*return*/, this.element];
                }
            });
        });
    };
    Element.prototype.exists = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.timeout, timeout = _c === void 0 ? 1000 : _c, _d = _b.visible, visible = _d === void 0 ? true : _d;
        return __awaiter(this, void 0, void 0, function () {
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.wait({ timeout: timeout, visible: visible })];
                    case 1:
                        _f.sent();
                        return [2 /*return*/, true];
                    case 2:
                        _e = _f.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Element.prototype.getText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var platform;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        _a.sent();
                        logger_1.log.info("Getting text for element \"" + this.selector + "\"");
                        platform = device.getPlatform();
                        if (platform !== 'ios')
                            throw new Error("Can get text only for ios platform for now.\n    Your current platform: " + platform);
                        return [4 /*yield*/, this.element.getAttributes()];
                    case 2: return [2 /*return*/, (_a.sent()).label];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFxRTtBQUNyRSxxQ0FBb0M7QUFDcEMsbUNBQStCO0FBTS9CLFNBQVMsdUJBQXVCLENBQzlCLElBQTBDO0lBRTFDLE9BQVEsSUFBdUIsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFBO0FBQ3ZELENBQUM7QUFFRDtJQUlFLGlCQUFtQixRQUFnQjtRQUFuQyxpQkFpQkM7UUFqQmtCLGFBQVEsR0FBUixRQUFRLENBQVE7UUE4S25DLFdBQU0sR0FBRztZQUNQLFNBQVMsRUFBRSxVQUFPLE9BQWdCOzs7Z0NBQ2hDLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLEVBQUE7OzRCQUE1QixTQUE0QixDQUFDOzs7O2lCQUM5QjtZQUVELEtBQUssRUFBRSxVQUFPLE9BQWdCOzs7Z0NBQzVCLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFBOzs0QkFBckQsU0FBcUQsQ0FBQzs7OztpQkFDdkQ7WUFFRCxHQUFHLEVBQUU7Z0JBQ0gsU0FBUyxFQUFFOzs7b0NBQ1QscUJBQU0sSUFBQSxjQUFNLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7Z0NBQTVDLFNBQTRDLENBQUM7Ozs7cUJBQzlDO2dCQUVELEtBQUssRUFBRTs7O29DQUNMLHFCQUFNLElBQUEsY0FBTSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUE7O2dDQUF4QyxTQUF3QyxDQUFDOzs7O3FCQUMxQzthQUNGO1lBRUQsU0FBUyxFQUFFLFVBQU8sT0FB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