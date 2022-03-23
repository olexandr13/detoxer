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
exports.$ = void 0;
var detox_1 = require("detox");
var helpers_1 = require("./helpers");
var logger_1 = require("./logger");
var Element = /** @class */ (function () {
    // selector refers just to strin which is parsed to define matcher type and value
    function Element(selector, params) {
        var _this = this;
        this.selector = selector;
        this.params = params;
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
                                logger_1.log.info("Element " + this.clarifiedSelectorToPrint + " disappeared after " + waitTimeCounter + " seconds.");
                                return [3 /*break*/, 6];
                            case 5:
                                e_1 = _a.sent();
                                logger_1.log.debug("Next error is expected. Please ignore > " + e_1);
                                isElementVisible = true;
                                return [3 /*break*/, 6];
                            case 6: return [3 /*break*/, 1];
                            case 7:
                                if (isElementVisible)
                                    throw new Error("Expect element " + this.clarifiedSelectorToPrint + " to disappear within " + timeout + " seconds.\n      But it's visible.");
                                return [2 /*return*/];
                        }
                    });
                });
            },
            have: {
                _: function (paramToCheck, value) { return __awaiter(_this, void 0, void 0, function () {
                    var expectedCondition, i, e_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (typeof value === 'boolean' && paramToCheck !== 'ToggleValue')
                                    throw new Error("Boolean value could not be passed for \"" + paramToCheck + "\" check");
                                expectedCondition = 'toHave' + paramToCheck;
                                return [4 /*yield*/, this.wait()];
                            case 1:
                                _a.sent();
                                i = 0;
                                _a.label = 2;
                            case 2:
                                if (!(i < 10)) return [3 /*break*/, 8];
                                _a.label = 3;
                            case 3:
                                _a.trys.push([3, 5, , 7]);
                                return [4 /*yield*/, (0, detox_1.expect)(this.element)[expectedCondition](value)];
                            case 4:
                                _a.sent();
                                return [3 /*break*/, 8];
                            case 5:
                                e_2 = _a.sent();
                                logger_1.log.debug("You expected element with locator \"" + this.locator + "\" to have text " + paramToCheck + ". But it does not. Waiting...");
                                return [4 /*yield*/, helpers_1.helpers.sleep(500)];
                            case 6:
                                _a.sent();
                                return [3 /*break*/, 7];
                            case 7:
                                i++;
                                return [3 /*break*/, 2];
                            case 8: return [2 /*return*/];
                        }
                    });
                }); },
                text: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.should.have._('Text', value)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                label: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.should.have._('Label', value)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                id: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.should.have._('Id', value)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                value: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.should.have._('Value', value)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                toggleValue: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.should.have._('ToggleValue', value)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
            },
        };
        var _a = this._getSelectorTypeAndValue(this.selector), selectorType = _a.selectorType, selectorValue = _a.selectorValue;
        this.locator = detox_1.by[selectorType](selectorValue);
        this.element = (0, detox_1.element)(this.locator);
        this.clarifiedSelectorToPrint = "\"" + this.selector + "\"" + (JSON.stringify(params) ? ", " + JSON.stringify(params) : '');
        if ((params === null || params === void 0 ? void 0 : params.and) && params.withAncestor || (params === null || params === void 0 ? void 0 : params.and) && params.withDescendant || (params === null || params === void 0 ? void 0 : params.withAncestor) && params.withDescendant) {
            throw new Error("Only one param could be passed amoung of " + helpers_1.helpers.prettyStringify(Object.keys(params)));
        }
        if (params === null || params === void 0 ? void 0 : params.and) {
            var _b = this._getSelectorTypeAndValue(params.and), selectorType_1 = _b.selectorType, selectorValue_1 = _b.selectorValue;
            this.locator = this.locator.and(detox_1.by[selectorType_1](selectorValue_1));
            this.element = (0, detox_1.element)(this.locator);
        }
        if (params === null || params === void 0 ? void 0 : params.withAncestor) {
            var _c = this._getSelectorTypeAndValue(params.withAncestor), selectorType_2 = _c.selectorType, selectorValue_2 = _c.selectorValue;
            this.locator = this.locator.withAncestor(detox_1.by[selectorType_2](selectorValue_2));
            this.element = (0, detox_1.element)(this.locator);
        }
        if (params === null || params === void 0 ? void 0 : params.withDescendant) {
            var _d = this._getSelectorTypeAndValue(params.withDescendant), selectorType_3 = _d.selectorType, selectorValue_3 = _d.selectorValue;
            this.locator = this.locator.withDescendant(detox_1.by[selectorType_3](selectorValue_3));
            this.element = (0, detox_1.element)(this.locator);
        }
    }
    Element.prototype._getSelectorTypeAndValue = function (selector) {
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
        return { selectorType: selectorType, selectorValue: selectorValue };
    };
    // do not use indexes, cause they differ on iOS and Android (docs and practice say the same)
    Element.prototype.atIndex = function (index) {
        // @ts-expect-error the issue occurs because of element could be either IndexableNativeElement or NativeElement 
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
                        logger_1.log.info("Replace text to \"" + value + "\" into element with selector " + this.clarifiedSelectorToPrint);
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
            var elem, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        elem = _a.sent();
                        logger_1.log.info("Tap on element with selector " + this.clarifiedSelectorToPrint + " at " + (helpers_1.helpers.prettyStringify(point) || 'default') + " point");
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, elem.tap(point)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        throw new Error("Cannot tap on element with selector " + this.clarifiedSelectorToPrint + "\n      " + e_3);
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
                        logger_1.log.info("Type text \"" + value + "\" into element with selector " + this.clarifiedSelectorToPrint);
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
        var _b = _a === void 0 ? {} : _a, _c = _b.timeout, timeout = _c === void 0 ? 11000 : _c, _d = _b.visible, visible = _d === void 0 ? false : _d, _e = _b.sleepAfter, sleepAfter = _e === void 0 ? 800 : _e;
        return __awaiter(this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        logger_1.log.info("Wait for element with selector " + this.clarifiedSelectorToPrint + " with visibility set to " + visible.toString());
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
                        e_4 = _f.sent();
                        throw new Error("Wait for element with locator " + this.clarifiedSelectorToPrint + " failed\n      " + e_4);
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
            var platform, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait()];
                    case 1:
                        _a.sent();
                        logger_1.log.info("Getting text for element " + this.clarifiedSelectorToPrint);
                        platform = device.getPlatform();
                        if (platform !== 'ios')
                            throw new Error("Can get text only for ios platform for now.\n    Your current platform: " + platform);
                        return [4 /*yield*/, this.element.getAttributes()];
                    case 2:
                        text = (_a.sent()).label;
                        if (!text)
                            throw new Error("There is no text for element with selector " + this.clarifiedSelectorToPrint);
                        return [2 /*return*/, text];
                }
            });
        });
    };
    return Element;
}());
var $ = function (selector, params) { return new Element(selector, params); };
exports.$ = $;
// TODO: implement scrollToIndex()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFxRTtBQUNyRSxxQ0FBb0M7QUFDcEMsbUNBQStCO0FBWS9CO0lBTUUsaUZBQWlGO0lBQ2pGLGlCQUFvQixRQUFnQixFQUFVLE1BQTJCO1FBQXpFLGlCQTRCQztRQTVCbUIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBME16RSxXQUFNLEdBQUc7WUFDUCxTQUFTLEVBQUUsVUFBTyxPQUFnQjs7O2dDQUNoQyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxFQUFBOzs0QkFBNUIsU0FBNEIsQ0FBQzs7OztpQkFDOUI7WUFFRCxLQUFLLEVBQUUsVUFBTyxPQUFnQjs7O2dDQUM1QixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQTs7NEJBQXJELFNBQXFELENBQUM7Ozs7aUJBQ3ZEO1lBRUQsR0FBRyxFQUFFO2dCQUNILFNBQVMsRUFBRTs7O29DQUNULHFCQUFNLElBQUEsY0FBTSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUE7O2dDQUE1QyxTQUE0QyxDQUFDOzs7O3FCQUM5QztnQkFFRCxLQUFLLEVBQUU7OztvQ0FDTCxxQkFBTSxJQUFBLGNBQU0sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFBOztnQ0FBeEMsU0FBd0MsQ0FBQzs7OztxQkFDMUM7YUFDRjtZQUVELFNBQVMsRUFBRSxVQUFPLE9BQVc7Z0JBQVgsd0JBQUEsRUFBQSxXQUFXOzs7Ozs7Z0NB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