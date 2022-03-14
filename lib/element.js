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
    // selector refers just to strin which is parsed to define matcher type and value
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
        this.element = (0, detox_1.element)(this.locator);
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
    Element.prototype.and = function (andSelector) {
        var _a = this._getSelectorTypeAndValue(andSelector), selectorType = _a.selectorType, selectorValue = _a.selectorValue;
        this.locator = this.locator.and(detox_1.by[selectorType](selectorValue));
        this.element = (0, detox_1.element)(this.locator);
        return this.element;
    };
    Element.prototype.withAncestor = function (ancestorSelector) {
        var _a = this._getSelectorTypeAndValue(ancestorSelector), selectorType = _a.selectorType, selectorValue = _a.selectorValue;
        var ancestorLocator = detox_1.by[selectorType](selectorValue);
        this.locator = this.locator.withAncestor(ancestorLocator);
        this.element = (0, detox_1.element)(this.locator);
        return this.element;
    };
    Element.prototype.withParent = function (parentSelector) {
        return this.withAncestor(parentSelector);
    };
    Element.prototype.withDescendant = function (descendantSelector) {
        var _a = this._getSelectorTypeAndValue(descendantSelector), selectorType = _a.selectorType, selectorValue = _a.selectorValue;
        var descendantLocator = detox_1.by[selectorType](selectorValue);
        this.locator = this.locator.withDescendant(descendantLocator);
        this.element = (0, detox_1.element)(this.locator);
        return this.element;
    };
    Element.prototype.withChild = function (childSelector) {
        return this.withDescendant(childSelector);
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
        var _b = _a === void 0 ? {} : _a, _c = _b.timeout, timeout = _c === void 0 ? 11000 : _c, _d = _b.visible, visible = _d === void 0 ? true : _d, _e = _b.sleepAfter, sleepAfter = _e === void 0 ? 800 : _e;
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
var $ = function (selector) { return new Element(selector); };
exports.$ = $;
var $$ = function (selectorsList) { return new ElementsList(selectorsList); };
exports.$$ = $$;
// TODO: implement scrollToIndex()
(0, exports.$)('#some-id').and('#someText');
(0, exports.$)('#id').withAncestor('ansector-selector');
(0, exports.$)('#id').withDescendant('descendant-selector');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFxRTtBQUNyRSxxQ0FBb0M7QUFDcEMsbUNBQStCO0FBUS9CLFNBQVMsdUJBQXVCLENBQzlCLElBQTBDO0lBRTFDLE9BQVEsSUFBdUIsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFBO0FBQ3ZELENBQUM7QUFFRDtJQUtFLGlGQUFpRjtJQUNqRixpQkFBbUIsUUFBZ0I7UUFBbkMsaUJBS0M7UUFMa0IsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQXdObkMsV0FBTSxHQUFHO1lBQ1AsU0FBUyxFQUFFLFVBQU8sT0FBZ0I7OztnQ0FDaEMscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsRUFBQTs7NEJBQTVCLFNBQTRCLENBQUM7Ozs7aUJBQzlCO1lBRUQsS0FBSyxFQUFFLFVBQU8sT0FBZ0I7OztnQ0FDNUIscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUE7OzRCQUFyRCxTQUFxRCxDQUFDOzs7O2lCQUN2RDtZQUVELEdBQUcsRUFBRTtnQkFDSCxTQUFTLEVBQUU7OztvQ0FDVCxxQkFBTSxJQUFBLGNBQU0sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFBOztnQ0FBNUMsU0FBNEMsQ0FBQzs7OztxQkFDOUM7Z0JBRUQsS0FBSyxFQUFFOzs7b0NBQ0wscUJBQU0sSUFBQSxjQUFNLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7Z0NBQXhDLFNBQXdDLENBQUM7Ozs7cUJBQzFDO2FBQ0Y7WUFFRCxTQUFTLEVB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