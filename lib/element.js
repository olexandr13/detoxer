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
import { by, element as detoxElement, expect, waitFor } from 'detox';
import { helpers } from './helpers';
import { log } from './logger';
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
                            case 0: return [4 /*yield*/, expect(this.element).not.toBeVisible()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                exist: function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, expect(this.element).not.toExist()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }
            },
            have: {
                text: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.wait()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, expect(this.element).toHaveText(value)];
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
                                return [4 /*yield*/, expect(this.element).toHaveLabel(value)];
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
                                return [4 /*yield*/, expect(this.element).toHaveText(value)];
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
                                return [4 /*yield*/, expect(this.element).toHaveText(value)];
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
                                return [4 /*yield*/, expect(this.element).toHaveText(value)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }
            }
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
        this.locator = by[selectorType](selectorValue);
        this.element = detoxElement(this.locator);
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
                        log.info("Replace text to \"" + value + "\" into element with selector \"" + this.selector + "\"");
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
                        return [4 /*yield*/, waitFor(elementToWait)
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
                        log.info("Type text \"" + value + "\" into element with selector \"" + this.selector + "\"");
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
                        log.info("Wait for element with selector " + helpers.prettyStringify(this.selector));
                        if (timeout > 100)
                            throw new Error("Timeout should be specified in seconds, not milliseconds. The value you passed = \"" + timeout + "\" s");
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, , 7]);
                        if (!(visible === false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, waitFor(this.element).toExist().withTimeout(timeout * 1000)];
                    case 2:
                        _e.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, waitFor(this.element).toBeVisible().withTimeout(timeout * 1000)];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_2 = _e.sent();
                        throw new Error("Wait for element with locator \"" + helpers.prettyStringify(this.selector) + "\" failed\n      " + e_2);
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
            }); }
        };
        this.elements = selectorsList.map(function (selector) { return new Element(selector); });
    }
    return ElementsList;
}());
export var $ = function (selector) { return new Element(selector); };
export var $$ = function (selectorsList) { return new ElementsList(selectorsList); };
// device.getPlatform() === 'ios'
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQU0vQixTQUFTLHVCQUF1QixDQUFDLElBQTBDO0lBQ3pFLE9BQVEsSUFBdUIsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQ3hELENBQUM7QUFFRDtJQUlFLGlCQUFtQixRQUFnQjtRQUFuQyxpQkFjQztRQWRrQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBd0luQyxXQUFNLEdBQUc7WUFDUCxTQUFTLEVBQUUsVUFBTyxPQUFnQjs7O2dDQUNoQyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxFQUFBOzs0QkFBNUIsU0FBNEIsQ0FBQzs7OztpQkFDOUI7WUFFRCxLQUFLLEVBQUUsVUFBTyxPQUFnQjs7O2dDQUM1QixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQTs7NEJBQXJELFNBQXFELENBQUM7Ozs7aUJBQ3ZEO1lBRUQsR0FBRyxFQUFFO2dCQUNILFNBQVMsRUFBRTs7O29DQUNULHFCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFBOztnQ0FBNUMsU0FBNEMsQ0FBQzs7OztxQkFDOUM7Z0JBRUQsS0FBSyxFQUFFOzs7b0NBQ0wscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUE7O2dDQUF4QyxTQUF3QyxDQUFDOzs7O3FCQUMxQzthQUNGO1lBRUQsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxVQUFPLEtBQWE7OztvQ0FDeEIscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOztnQ0FBakIsU0FBaUIsQ0FBQztnQ0FDbEIscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUE7O2dDQUE1QyxTQUE0QyxDQUFDOzs7O3FCQUM5QztnQkFDRCxLQUFLLEVBQUUsVUFBTyxLQUFhOzs7b0NBQ3pCLHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0NBQWpCLFNBQWlCLENBQUM7Z0NBQ2xCLHFCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFBOztnQ0FBN0MsU0FBNkMsQ0FBQzs7OztxQkFDL0M7Z0JBQ0QsRUFBRSxFQUFFLFVBQU8sS0FBYTs7O29DQUN0QixxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dDQUFqQixTQUFpQixDQUFDO2dDQUNsQixxQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQTs7Z0NBQTVDLFNBQTRDLENBQUM7Ozs7cUJBQzlDO2dCQUNELEtBQUssRUFBRSxVQUFPLEtBQWE7OztvQ0FDekIscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOztnQ0FBakIsU0FBaUIsQ0FBQztnQ0FDbEIscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUE7O2dDQUE1QyxTQUE0QyxDQUFDOzs7O3FCQUM5QztnQkFDRCxXQUFXLEVBQUUsVUFBTyxLQUFhOzs7b0NBQy9CLHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0NBQWpCLFNBQWlCLENBQUM7Z0NBQ2xCLHFCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFBOztnQ0FBNUMsU0FBNEMsQ0FBQzs7OztxQkFDOUM7YUFDRjtTQUNGLENBQUM7UUFoTEEsSUFBSSxZQUEyQixDQUFDO1FBQ2hDLElBQUksYUFBcUIsQ0FBQztRQUUxQixJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsWUFBWSxHQUFHLE1BQU0sQ0FBQztZQUN0QixhQUFhLEdBQUcsUUFBUSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw0RkFBNEY7SUFDNUYseUJBQU8sR0FBUCxVQUFRLEtBQWE7UUFDbkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFDL0csSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQXdCLENBQUM7UUFDbEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUssdUJBQUssR0FBWDs7Ozs7NEJBQ2UscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBeEIsSUFBSSxHQUFHLFNBQWlCO3dCQUM5QixxQkFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUF0QixTQUFzQixDQUFDO3dCQUN2QixzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDYjtJQUVELHFCQUFHLEdBQUg7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVLLDJCQUFTLEdBQWY7Ozs7OzRCQUNlLHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQXhCLElBQUksR0FBRyxTQUFpQjt3QkFDOUIscUJBQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBdEIsU0FBc0IsQ0FBQzt3QkFDdkIsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2I7SUFFSyw2QkFBVyxHQUFqQixVQUFrQixLQUFhOzs7Ozs7d0JBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQW9CLEtBQUssd0NBQWlDLElBQUksQ0FBQyxRQUFRLE9BQUcsQ0FBQyxDQUFDO3dCQUN4RSxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF4QixJQUFJLEdBQUcsU0FBaUI7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQTs7d0JBQWhCLFNBQWdCLENBQUM7d0JBQ2pCLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDYjtJQUVLLHdCQUFNLEdBQVosVUFBYSxFQUcwQztZQUgxQyxxQkFHd0MsRUFBRSxLQUFBLEVBRnJELGNBQVksRUFBWixNQUFNLG1CQUFHLEdBQUcsS0FBQSxFQUNaLGlCQUFrQixFQUFsQixTQUFTLG1CQUFHLE1BQU0sS0FBQTs7Ozs7NEJBRUwscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBeEIsSUFBSSxHQUFHLFNBQWlCO3dCQUM5QixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBQTs7d0JBQXBDLFNBQW9DLENBQUM7d0JBRXJDLHNCQUFPLElBQUksRUFBQzs7OztLQUNiO0lBRUssMkNBQXlCLEdBQS9CLFVBQ0UscUJBQTZCLEVBQzdCLGVBQXVDO1FBQXZDLGdDQUFBLEVBQUEsd0JBQXVDOzs7Ozs0QkFFdkMscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBakIsU0FBaUIsQ0FBQzt3QkFDWixhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUM7d0JBQ2pFLHFCQUFNLE9BQU8sQ0FBQyxhQUFhLENBQUM7aUNBQ3pCLFdBQVcsRUFBRTtpQ0FDYixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQ0FDMUIsTUFBTSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsRUFBQTs7d0JBSC9CLFNBRytCLENBQUM7d0JBRWhDLHNCQUFPLGFBQWEsRUFBQzs7OztLQUN0QjtJQUVLLHVCQUFLLEdBQVgsVUFBWSxFQVFOO1lBUk0scUJBUVIsRUFBRSxLQUFBLEVBUEosaUJBQWtCLEVBQWxCLFNBQVMsbUJBQUcsTUFBTSxLQUFBLEVBQ2xCLGFBQWMsRUFBZCxLQUFLLG1CQUFHLE1BQU0sS0FBQSxFQUNkLHdCQUFzQixFQUF0QixnQkFBZ0IsbUJBQUcsR0FBRyxLQUFBOzs7Ozs0QkFNVCxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF4QixJQUFJLEdBQUcsU0FBaUI7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUE7O3dCQUE5RCxTQUE4RCxDQUFDO3dCQUUvRCxzQkFBTyxJQUFJLENBQUMsT0FBTyxFQUFDOzs7O0tBQ3JCO0lBRUsscUJBQUcsR0FBVCxVQUFVLEtBQWdDOzs7Ozs0QkFDM0IscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFBOzt3QkFBMUMsSUFBSSxHQUFHLFNBQW1DOzs7O3dCQUU5QyxhQUFhO3dCQUNiLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQURyQixhQUFhO3dCQUNiLFNBQXFCLENBQUM7Ozs7d0JBRXRCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQXdDLElBQUksQ0FBQyxRQUFRLGtCQUNuRSxHQUFHLENBQUMsQ0FBQTs0QkFFUixzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDYjtJQUVLLDhCQUFZLEdBQWxCLFVBQW1CLEVBRU87WUFGUCxxQkFFSyxFQUFFLEtBQUEsRUFEeEIsYUFBUyxFQUFULEtBQUssbUJBQUcsQ0FBQyxLQUFBOzs7Ozs0QkFFSSxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF4QixJQUFJLEdBQUcsU0FBaUI7d0JBQ3JCLENBQUMsR0FBRyxDQUFDOzs7NkJBQUUsQ0FBQSxDQUFDLElBQUksS0FBSyxDQUFBO3dCQUN4QixxQkFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUE7O3dCQUE1QixTQUE0QixDQUFDOzs7d0JBREgsQ0FBQyxFQUFFLENBQUE7OzRCQUcvQixzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDYjtJQUVLLHNCQUFJLEdBQVYsVUFBVyxLQUFhOzs7Ozs7d0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWMsS0FBSyx3Q0FBaUMsSUFBSSxDQUFDLFFBQVEsT0FBRyxDQUFDLENBQUM7d0JBQ2xFLHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQXhCLElBQUksR0FBRyxTQUFpQjt3QkFDOUIscUJBQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFBOzt3QkFBaEIsU0FBZ0IsQ0FBQzt3QkFDakIscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQTFCLFNBQTBCLENBQUM7d0JBQzNCLHNCQUFPLElBQUksRUFBQzs7OztLQUNiO0lBRUssc0JBQUksR0FBVixVQUFXLEVBR29DO1lBSHBDLHFCQUdrQyxFQUFFLEtBQUEsRUFGN0MsZUFBVyxFQUFYLE9BQU8sbUJBQUcsQ0FBQyxLQUFBLEVBQ1gsZUFBYyxFQUFkLE9BQU8sbUJBQUcsSUFBSSxLQUFBOzs7Ozs7d0JBRWQsR0FBRyxDQUFDLElBQUksQ0FBQyxvQ0FBa0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFHLENBQUMsQ0FBQzt3QkFDckYsSUFBSSxPQUFPLEdBQUcsR0FBRzs0QkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHdGQUFxRixPQUFPLFNBQUssQ0FBQyxDQUFBOzs7OzZCQUUvSCxDQUFBLE9BQU8sS0FBSyxLQUFLLENBQUEsRUFBakIsd0JBQWlCO3dCQUNuQixxQkFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUE7O3dCQUFqRSxTQUFpRSxDQUFDOzs0QkFFbEUscUJBQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFBOzt3QkFBckUsU0FBcUUsQ0FBQzs7Ozs7d0JBR3hFLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQWtDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFDdEYsR0FBRyxDQUFDLENBQUM7NEJBR1Qsc0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBQzs7OztLQUNyQjtJQTRDSCxjQUFDO0FBQUQsQ0FBQyxBQXRMRCxJQXNMQztBQUVEO0lBR0Usc0JBQVksYUFBdUI7UUFBbkMsaUJBRUM7UUFFRCxXQUFNLEdBQUc7WUFDUCxTQUFTLEVBQUU7Ozs7OzRCQUNBLENBQUMsR0FBRyxDQUFDOzs7aUNBQUUsQ0FBQSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFBOzRCQUMxQyxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFBOzs0QkFBN0IsU0FBNkIsQ0FBQzs7OzRCQURjLENBQUMsRUFBRSxDQUFBOzs7OztpQkFHbEQ7U0FDRixDQUFDO1FBVEEsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBU0gsbUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQUVELE1BQU0sQ0FBQyxJQUFNLENBQUMsR0FBRyxVQUFDLFFBQWdCLElBQUssT0FBQSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztBQUM3RCxNQUFNLENBQUMsSUFBTSxFQUFFLEdBQUcsVUFBQyxhQUF1QixJQUFLLE9BQUEsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQS9CLENBQStCLENBQUM7QUFFL0UsaUNBQWlDIn0=