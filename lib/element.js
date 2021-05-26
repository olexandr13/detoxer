import { by, element as detoxElement, expect, waitFor } from 'detox';
import { helpers } from './helpers';
import { log } from './logger';
function isIndexableDetoxElement(type) {
    return type.atIndex !== undefined;
}
class Element {
    constructor(selector) {
        this.selector = selector;
        this.should = {
            beVisible: async (timeout) => {
                await this.wait({ timeout });
            },
            exist: async (timeout) => {
                await this.wait({ visible: false, timeout: timeout });
            },
            not: {
                beVisible: async () => {
                    await expect(this.element).not.toBeVisible();
                },
                exist: async () => {
                    await expect(this.element).not.toExist();
                },
            },
            have: {
                text: async (value) => {
                    await this.wait();
                    await expect(this.element).toHaveText(value);
                },
                label: async (value) => {
                    await this.wait();
                    await expect(this.element).toHaveLabel(value);
                },
                id: async (value) => {
                    await this.wait();
                    await expect(this.element).toHaveText(value);
                },
                value: async (value) => {
                    await this.wait();
                    await expect(this.element).toHaveText(value);
                },
                toggleValue: async (value) => {
                    await this.wait();
                    await expect(this.element).toHaveText(value);
                },
            },
        };
        let selectorType;
        let selectorValue;
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
    atIndex(index) {
        if (!isIndexableDetoxElement(this.element))
            throw new Error(`You try to get index from non-indexable element`);
        this.element = this.element.atIndex(index);
        return this;
    }
    async clear() {
        const elem = await this.wait();
        await elem.clearText();
        return elem;
    }
    get() {
        return this.element;
    }
    async longPress() {
        const elem = await this.wait();
        await elem.longPress();
        return elem;
    }
    async replaceText(value) {
        log.info(`Replace text to "${value}" into element with selector "${this.selector}"`);
        const elem = await this.wait();
        await elem.tap();
        await elem.replaceText(value);
        return elem;
    }
    async scroll({ offset = 500, direction = 'down', } = {}) {
        const elem = await this.wait();
        await elem.scroll(offset, direction);
        return elem;
    }
    async scrollWhileElementVisible(elementSelectorToWait, scrollDirection = 'down') {
        await this.wait();
        const elementToWait = new Element(elementSelectorToWait).element;
        await waitFor(elementToWait)
            .toBeVisible()
            .whileElement(this.locator)
            .scroll(400, scrollDirection);
        return elementToWait;
    }
    async swipe({ direction = 'down', speed = 'fast', normalizedOffset = NaN, } = {}) {
        const elem = await this.wait();
        await elem.swipe(direction, speed, normalizedOffset, NaN, NaN);
        return this.element;
    }
    async tap(point) {
        const elem = await this.wait({ visible: false });
        try {
            // @ts-ignore
            await elem.tap(point);
        }
        catch (e) {
            throw new Error(`Cannot tap on element with selector "${this.selector}"
      ${e}`);
        }
        return elem;
    }
    async tapBackspace({ times = 1, } = {}) {
        const elem = await this.wait();
        for (let i = 1; i <= times; i++) {
            await elem.tapBackspaceKey();
        }
        return elem;
    }
    async type(value) {
        log.info(`Type text "${value}" into element with selector "${this.selector}"`);
        const elem = await this.wait();
        await elem.tap();
        await elem.typeText(value);
        return elem;
    }
    async wait({ timeout = 5, visible = true, } = {}) {
        log.info(`Wait for element with selector ${helpers.prettyStringify(this.selector)}`);
        if (timeout > 100)
            throw new Error(`Timeout should be specified in seconds, not milliseconds. The value you passed = "${timeout}" s`);
        try {
            if (visible === false) {
                await waitFor(this.element).toExist().withTimeout(timeout * 1000);
            }
            else {
                await waitFor(this.element).toBeVisible().withTimeout(timeout * 1000);
            }
        }
        catch (e) {
            throw new Error(`Wait for element with locator "${helpers.prettyStringify(this.selector)}" failed
      ${e}`);
        }
        return this.element;
    }
}
class ElementsList {
    constructor(selectorsList) {
        this.should = {
            beVisible: async () => {
                for (let i = 0; i < this.elements.map.length; i++) {
                    await this.elements[i].wait();
                }
            },
        };
        this.elements = selectorsList.map((selector) => new Element(selector));
    }
}
export const $ = (selector) => new Element(selector);
export const $$ = (selectorsList) => new ElementsList(selectorsList);
// device.getPlatform() === 'ios'
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQU0vQixTQUFTLHVCQUF1QixDQUFDLElBQTBDO0lBQ3pFLE9BQVEsSUFBdUIsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQ3hELENBQUM7QUFFRCxNQUFNLE9BQU87SUFJWCxZQUFtQixRQUFnQjtRQUFoQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBd0luQyxXQUFNLEdBQUc7WUFDUCxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQWdCLEVBQWlCLEVBQUU7Z0JBQ25ELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUVELEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBZ0IsRUFBaUIsRUFBRTtnQkFDL0MsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBRUQsR0FBRyxFQUFFO2dCQUNILFNBQVMsRUFBRSxLQUFLLElBQW1CLEVBQUU7b0JBQ25DLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQy9DLENBQUM7Z0JBRUQsS0FBSyxFQUFFLEtBQUssSUFBbUIsRUFBRTtvQkFDL0IsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVB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