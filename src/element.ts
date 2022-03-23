import { by, element as detoxElement, expect, waitFor } from 'detox';
import { helpers } from './helpers';
import { log } from './logger';

export type SwipeDirection = 'left' | 'right' | 'up' | 'down';

type SelectorType = 'id' | 'text' | 'label';

type ClarifyingSelector = {
  and?: string,
  withAncestor?: string,
  withDescendant?: string,
} | undefined;

class Element {
  // locator refers to detox matcher
  private locator: Detox.NativeMatcher;
  element: Detox.IndexableNativeElement | Detox.NativeElement;

  // selector refers just to strin which is parsed to define matcher type and value
  constructor(private selector: string, private params: ClarifyingSelector) {
    const { selectorType, selectorValue } = this._getSelectorTypeAndValue(this.selector);
    this.locator = by[selectorType](selectorValue);
    this.element = detoxElement(this.locator);

    if(params) log.debug(`Element locator has clarifier: ${helpers.prettyStringify(params)}`);

    if (params?.and && params.withAncestor || params?.and && params.withDescendant || params?.withAncestor && params.withDescendant) {
      throw new Error(`Only one param could be passed amoung of ${helpers.stringify(Object.keys(params))}`);
    }

    if (params?.and) {
      const { selectorType, selectorValue } = this._getSelectorTypeAndValue(params.and);
      this.locator = this.locator.and(by[selectorType](selectorValue));
      this.element = detoxElement(this.locator);
    }

    if (params?.withAncestor) {
      const { selectorType, selectorValue } = this._getSelectorTypeAndValue(params.withAncestor);
      this.locator = this.locator.withAncestor(by[selectorType](selectorValue));
      this.element = detoxElement(this.locator);
    }

    if (params?.withDescendant) {
      const { selectorType, selectorValue } = this._getSelectorTypeAndValue(params.withDescendant);
      this.locator = this.locator.withDescendant(by[selectorType](selectorValue));
      this.element = detoxElement(this.locator);
    }
  }

  private _getSelectorTypeAndValue(selector: string): { selectorType: SelectorType, selectorValue: string } {
    let selectorType: SelectorType;
    let selectorValue: string;

    if (selector[0] === '#') {
      selectorType = 'id';
      selectorValue = selector.slice(1);
    } else if (selector[0] === '~') {
      selectorType = 'label';
      selectorValue = selector.slice(1);
    } else {
      selectorType = 'text';
      selectorValue = selector;
    }

    return { selectorType, selectorValue };
  }

  // do not use indexes, cause they differ on iOS and Android (docs and practice say the same)
  atIndex(index: number): Element {
    // @ts-expect-error the issue occurs because of element could be either IndexableNativeElement or NativeElement 
    this.element = this.element.atIndex(index) as Detox.NativeElement;
    return this;
  }

  async clear(): Promise<Detox.NativeElement> {
    const elem = await this.wait();
    await elem.clearText();
    return elem;
  }

  get(): Detox.IndexableNativeElement | Detox.NativeElement {
    log.warn('* * * * * * * * * * ');
    log.warn('SELECTOR:', this.selector);
    log.warn('* * * * * * * * * * ');

    log.warn('= = = = = = = = = = = =');
    log.warn('PARAMS:', this.params);
    log.warn('= = = = = = = = = = = =');

    log.warn(' - - - - - - - - - - - - - - - - - - - - - - - - - - ');
    log.warn('LOCATOR:', this.locator);
    log.warn(' - - - - - - - - - - - - - - - - - - - - - - - - - - ');
    return this.element;
  }

  async longPress(): Promise<Detox.NativeElement> {
    const elem = await this.wait();
    await elem.longPress();
    return elem;
  }

  async replaceText(value: string): Promise<Detox.NativeElement> {
    log.info(`Replace text to "${value}" into element with selector "${this.selector}"`);
    const elem = await this.wait();
    await elem.tap();
    await elem.replaceText(value);
    return elem;
  }

  async scroll({
    offset = 500,
    direction = 'down',
  }: { offset?: number; direction?: SwipeDirection } = {}): Promise<Detox.NativeElement> {
    const elem = await this.wait();
    await elem.scroll(offset, direction);

    return elem;
  }

  async scrollWhileElementVisible(
    elementToWait: Detox.NativeElement,
    scrollDirection: 'down' | 'up' = 'down',
  ): Promise<Detox.NativeElement> {
    await this.wait();
    await waitFor(elementToWait)
      .toBeVisible()
      .whileElement(this.locator)
      .scroll(400, scrollDirection);
    return elementToWait;
  }

  async swipe({
    direction = 'down',
    speed = 'fast',
    normalizedOffset = NaN,
  }: {
    direction?: SwipeDirection;
    speed?: 'fast' | 'slow';
    normalizedOffset?: number;
  } = {}): Promise<Detox.NativeElement> {
    const elem = await this.wait();
    await elem.swipe(direction, speed, normalizedOffset, NaN, NaN);

    return this.element;
  }

  async tap(point?: { x: number; y: number }): Promise<Detox.NativeElement> {
    const elem = await this.wait();
    log.info(
      `Tap on element with selector "${this.selector}" at ${helpers.stringify(point) || 'default'
      } point`,
    );
    try {
      await elem.tap(point);
    } catch (e) {
      throw new Error(`Cannot tap on element with selector "${this.selector}"
      ${e}`)
    }
    return elem;
  }

  async tapBackspace({ times = 1 }: { times?: number } = {}): Promise<Detox.NativeElement> {
    const elem = await this.wait();
    for (let i = 1; i <= times; i++) {
      await elem.tapBackspaceKey();
    }
    return elem;
  }

  async type(value: string): Promise<Detox.NativeElement> {
    log.info(`Type text "${value}" into element with selector "${this.selector}"`);
    const elem = await this.wait();
    await elem.tap();
    await elem.typeText(value);
    return elem;
  }

  async wait({
    timeout = 11000,
    visible = false,
    sleepAfter = 800,
  }: {
    timeout?: number;
    visible?: boolean;
    sleepAfter?: number;
  } = {}): Promise<Detox.NativeElement> {
    log.info(
      `Wait for element with selector ${this.selector
      } with visibility set to ${visible.toString()}`,
    );
    try {
      if (visible === false) {
        await waitFor(this.element).toExist().withTimeout(timeout);
      } else {
        await waitFor(this.element).toBeVisible().withTimeout(timeout);
      }
    } catch (e) {
      throw new Error(`Wait for element with locator "${helpers.stringify(this.selector)}" failed
      ${e}`);
    }

    await helpers.sleep(sleepAfter);

    return this.element;
  }

  async exists({
    timeout = 1000,
    visible = true,
  }: {
    timeout?: number;
    visible?: boolean;
  } = {}): Promise<boolean> {
    try {
      await this.wait({ timeout, visible });
      return true;
    } catch {
      return false;
    }
  }

  async getText(): Promise<string> {
    await this.wait();
    log.info(`Getting text for element "${this.selector}"`);
    const platform = device.getPlatform();
    if (platform !== 'ios') throw new Error(`Can get text only for ios platform for now.
    Your current platform: ${platform}`);

    const text = (await (this.element as any).getAttributes()).label;
    if (!text) throw new Error(`There is no text for element with selector "${this.selector}"`)
    return text;
  }

  should = {
    beVisible: async (timeout?: number): Promise<void> => {
      await this.wait({ timeout });
    },

    exist: async (timeout?: number): Promise<void> => {
      await this.wait({ visible: false, timeout: timeout });
    },

    not: {
      beVisible: async (): Promise<void> => {
        await expect(this.element).not.toBeVisible();
      },

      exist: async (): Promise<void> => {
        await expect(this.element).not.toExist();
      },
    },

    disappear: async (timeout = 5): Promise<void> => {
      let isElementVisible = true;
      let waitTimeCounter = 0;
      while (isElementVisible && waitTimeCounter < timeout) {
        await helpers.sleep(0.1);
        waitTimeCounter += 0.1;

        try {
          await expect(this.element).not.toBeVisible();
          isElementVisible = false;
          log.info(`Element "${this.selector}" disappeared after ${waitTimeCounter} seconds.`);
        } catch (e) {
          log.debug(`Next error is expected. Please ignore > ${e}`);
          isElementVisible = true;
        }
      }

      if (isElementVisible) throw new Error(`Expect element "${this.selector}" to disappear within ${timeout} seconds.
      But it's visible.`);
    },

    have: {
      _: async (paramToCheck: 'Text' | 'Label' | 'Id' | 'Value' | 'ToggleValue', value: string | boolean): Promise<void> => {
        if (typeof value === 'boolean' && paramToCheck !== 'ToggleValue') throw new Error(`Boolean value could not be passed for "${paramToCheck}" check`);

        type ExpectedCondition = 'toHaveText' | 'toHaveLabel' | 'toHaveId' | 'toHaveValue' | 'toHaveToggleValue';
        const expectedCondition = 'toHave' + paramToCheck as ExpectedCondition;
        await this.wait();
        for (let i = 0; i < 10; i++) {
          try {
            await expect(this.element)[expectedCondition](value);
            break;
          } catch (e) {
            log.debug(`You expected element with locator "${this.locator}" to have text ${paramToCheck}. But it does not. Waiting...`);
            await helpers.sleep(500);
          }
        }
      },

      text: async (value: string): Promise<void> => {
        await this.should.have._('Text', value);
      },
      label: async (value: string): Promise<void> => {
        await this.should.have._('Label', value);
      },
      id: async (value: string): Promise<void> => {
        await this.should.have._('Id', value);
      },
      value: async (value: string): Promise<void> => {
        await this.should.have._('Value', value);
      },
      toggleValue: async (value: boolean): Promise<void> => {
        await this.should.have._('ToggleValue', value);
      },
    },
  }
}

export const $ = (selector: string, params: ClarifyingSelector) => new Element(selector, params);

// TODO: implement scrollToIndex()
