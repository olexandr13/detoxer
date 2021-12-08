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
    Element.prototype.getText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var platform;
            return __generator(this, function (_a) {
                platform = device.getPlatform();
                if (platform !== 'ios')
                    throw new Error("Can get text only for ios platform for now.\n    Your current platform: " + platform);
                return [2 /*return*/, (this.element.getAttributes()).label];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFxRTtBQUNyRSxxQ0FBb0M7QUFDcEMsbUNBQStCO0FBTS9CLFNBQVMsdUJBQXVCLENBQzlCLElBQTBDO0lBRTFDLE9BQVEsSUFBdUIsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFBO0FBQ3ZELENBQUM7QUFFRDtJQUlFLGlCQUFtQixRQUFnQjtRQUFuQyxpQkFjQztRQWRrQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBeUpuQyxXQUFNLEdBQUc7WUFDUCxTQUFTLEVBQUUsVUFBTyxPQUFnQjs7O2dDQUNoQyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxFQUFBOzs0QkFBNUIsU0FBNEIsQ0FBQzs7OztpQkFDOUI7WUFFRCxLQUFLLEVBQUUsVUFBTyxPQUFnQjs7O2dDQUM1QixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQTs7NEJBQXJELFNBQXFELENBQUM7Ozs7aUJBQ3ZEO1lBRUQsR0FBRyxFQUFFO2dCQUNILFNBQVMsRUFBRTs7O29DQUNULHFCQUFNLElBQUEsY0FBTSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUE7O2dDQUE1QyxTQUE0QyxDQUFDOzs7O3FCQUM5QztnQkFFRCxLQUFLLEVBQUU7OztvQ0FDTCxxQkFBTSxJQUFBLGNBQU0sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFBOztnQ0FBeEMsU0FBd0MsQ0FBQzs7OztxQkFDMUM7YUFDRjtZQUVELFNBQVMsRUFBRSxVQUFPLE9BQVc7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