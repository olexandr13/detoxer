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
        var _a = this._getSelectorTypeAndValue(selector), selectorType = _a.selectorType, selectorValue = _a.selectorValue;
        this.locator = detox_1.by[selectorType](selectorValue);
        logger_1.log.warn(' - - - - - - - - - - - - - - - - - - - - - - - - - - ');
        logger_1.log.warn('LOCATOR:', this.locator);
        logger_1.log.warn(' - - - - - - - - - - - - - - - - - - - - - - - - - - ');
        this.element = (0, detox_1.element)(this.locator);
        if ((params === null || params === void 0 ? void 0 : params.and) && params.withAncestor || (params === null || params === void 0 ? void 0 : params.and) && params.withDescendant || (params === null || params === void 0 ? void 0 : params.withAncestor) && params.withDescendant) {
            throw new Error("Only one param could be passed amoung of " + helpers_1.helpers.stringify(params));
        }
        if (params === null || params === void 0 ? void 0 : params.and) {
            var _b = this._getSelectorTypeAndValue(params.and), selectorType_1 = _b.selectorType, selectorValue_1 = _b.selectorValue;
            this.locator = this.locator.and(detox_1.by[selectorType_1](selectorValue_1));
            this.element = (0, detox_1.element)(this.locator);
        }
        if (params === null || params === void 0 ? void 0 : params.withAncestor) {
            throw new Error('WITH ANCESTOR PASSED');
            var _c = this._getSelectorTypeAndValue(params.withAncestor), selectorType_2 = _c.selectorType, selectorValue_2 = _c.selectorValue;
            this.locator = this.locator.withAncestor(detox_1.by[selectorType_2](selectorValue_2));
            logger_1.log.warn(' - - - - - NEW LOCATOR - - - - - ', this.locator);
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
            var elem, e_3;
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
                        e_3 = _a.sent();
                        throw new Error("Cannot tap on element with selector \"" + this.selector + "\"\n      " + e_3);
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
        var _b = _a === void 0 ? {} : _a, _c = _b.timeout, timeout = _c === void 0 ? 11000 : _c, _d = _b.visible, visible = _d === void 0 ? false : _d, _e = _b.sleepAfter, sleepAfter = _e === void 0 ? 800 : _e;
        return __awaiter(this, void 0, void 0, function () {
            var e_4;
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
                        e_4 = _f.sent();
                        throw new Error("Wait for element with locator \"" + helpers_1.helpers.stringify(this.selector) + "\" failed\n      " + e_4);
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
                        logger_1.log.info("Getting text for element \"" + this.selector + "\"");
                        platform = device.getPlatform();
                        if (platform !== 'ios')
                            throw new Error("Can get text only for ios platform for now.\n    Your current platform: " + platform);
                        return [4 /*yield*/, this.element.getAttributes()];
                    case 2:
                        text = (_a.sent()).label;
                        if (!text)
                            throw new Error("There is no text for element with selector \"" + this.selector + "\"");
                        return [2 /*return*/, text];
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
var $ = function (selector, params) { return new Element(selector); };
exports.$ = $;
var $$ = function (selectorsList) { return new ElementsList(selectorsList); };
exports.$$ = $$;
// TODO: implement scrollToIndex()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFxRTtBQUNyRSxxQ0FBb0M7QUFDcEMsbUNBQStCO0FBTS9CO0lBS0UsaUZBQWlGO0lBQ2pGLGlCQUFtQixRQUFnQixFQUFVLE1BSTVDO1FBSkQsaUJBb0NDO1FBcENrQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FJbEQ7UUErTUQsV0FBTSxHQUFHO1lBQ1AsU0FBUyxFQUFFLFVBQU8sT0FBZ0I7OztnQ0FDaEMscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsRUFBQTs7NEJBQTVCLFNBQTRCLENBQUM7Ozs7aUJBQzlCO1lBRUQsS0FBSyxFQUFFLFVBQU8sT0FBZ0I7OztnQ0FDNUIscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUE7OzRCQUFyRCxTQUFxRCxDQUFDOzs7O2lCQUN2RDtZQUVELEdBQUcsRUFBRTtnQkFDSCxTQUFTLEVBQUU7OztvQ0FDVCxxQkFBTSxJQUFBLGNBQU0sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFBOztnQ0FBNUMsU0FBNEMsQ0FBQzs7OztxQkFDOUM7Z0JBRUQsS0FBSyxFQUFFOzs7b0NBQ0wscUJBQU0sSUFBQSxjQUFNLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7Z0NBQXhDLFNBQXdDLENBQUM7Ozs7cUJBQzFDO2FBQ0Y7WUFFRCxTQUFTLEVBQUUsVUFBTyxPQUFXO2dCQUFYLHdCQUFBLEVBQUEsV0FBVzs7Ozs7O2dDQUN2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