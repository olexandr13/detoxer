import { by, element as detoxElement, expect, waitFor } from 'detox';
import { helpers } from './helpers';
import { log } from './logger';

type DetoxElement = Detox.NativeElement | Detox.IndexableNativeElement;
type DetoxIndexable = { atIndex: () => {} };
export type SwipeDirection = 'left' | 'right' | 'up' | 'down';

function isIndexableDetoxElement(type: DetoxIndexable | Detox.NativeElement): type is DetoxIndexable {
  return (type as DetoxIndexable).atIndex !== undefined;
}

class Element {
  private locator: Detox.NativeMatcher;
  element: DetoxElement;

  constructor(public selector: string) {
    let selectorType: 'id' | 'text';
    let selectorValue: string;

    if (selector[0] === '#') {
      selectorType = 'id';
      selectorValue = selector.slice(1);
    } else {
      selectorType = 'text';
      selectorValue = selector;
    }

    this.locator = by[selectorType](selectorValue);
    this.element = detoxElement(this.locator);
  }

  // do not use indexes, cause they differ on iOS and Android (docs and practice say the same)
  atIndex(index: number): Element {
    if (!isIndexableDetoxElement(this.element)) throw new Error(`You try to get index from non-indexable element`);
    this.element = this.element.atIndex(index) as Detox.NativeElement;
    return this;
  }

  async clear(): Promise<DetoxElement> {
    const elem = await this.wait();
    await elem.clearText();
    return elem;
  }

  get(): Detox.IndexableNativeElement | Detox.NativeElement {
    return this.element;
  }

  async longPress(): Promise<DetoxElement> {
    const elem = await this.wait();
    await elem.longPress();
    return elem;
  }

  async replaceText(value: string): Promise<DetoxElement> {
    log.info(`Replace text to "${value}" into element with selector "${this.selector}"`);
    const elem = await this.wait();
    await elem.tap();
    await elem.replaceText(value);
    return elem;
  }

  async scroll({
    offset = 500,
    direction = 'down',
  }: { offset?: number; direction?: SwipeDirection } = {}): Promise<DetoxElement> {
    const elem = await this.wait();
    await elem.scroll(offset, direction);

    return elem;
  }

  async scrollWhileElementVisible(
    elementSelectorToWait: string,
    scrollDirection: 'down' | 'up' = 'down',
  ): Promise<DetoxElement> {
    await this.wait();
    const elementToWait = new Element(elementSelectorToWait).element;
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
  } = {}): Promise<DetoxElement> {
    const elem = await this.wait();
    await elem.swipe(direction, speed, normalizedOffset, NaN, NaN);

    return this.element;
  }

  async tap(point?: { x: number; y: number }): Promise<DetoxElement> {
    const elem = await this.wait({ visible: false });
    try {
      // @ts-ignore
      await elem.tap(point);
    } catch (e) {
      throw new Error(`Cannot tap on element with selector "${this.selector}"
      ${e}`)
    }
    return elem;
  }

  async tapBackspace({
    times = 1,
  }: { times?: number } = {}): Promise<DetoxElement> {
    const elem = await this.wait();
    for (let i = 1; i <= times; i++) {
      await elem.tapBackspaceKey();
    }
    return elem;
  }

  async type(value: string): Promise<DetoxElement> {
    log.info(`Type text "${value}" into element with selector "${this.selector}"`);
    const elem = await this.wait();
    await elem.tap();
    await elem.typeText(value);
    return elem;
  }

  async wait({
    timeout = 5,
    visible = true,
  }: { timeout?: number; visible?: boolean } = {}): Promise<DetoxElement> {
    log.info(`Wait for element with selector ${helpers.prettyStringify(this.selector)}`);
    if (timeout > 100) throw new Error(`Timeout should be specified in seconds, not milliseconds. The value you passed = "${timeout}" s`)
    try {
      if (visible === false) {
        await waitFor(this.element).toExist().withTimeout(timeout * 1000);
      } else {
        await waitFor(this.element).toBeVisible().withTimeout(timeout * 1000);
      }
    } catch (e) {
      throw new Error(`Wait for element with locator "${helpers.prettyStringify(this.selector)}" failed
      ${e}`);
    }

    return this.element;
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

    have: {
      text: async (value: string): Promise<void> => {
        await this.wait();
        await expect(this.element).toHaveText(value);
      },
      label: async (value: string): Promise<void> => {
        await this.wait();
        await expect(this.element).toHaveLabel(value);
      },
      id: async (value: string): Promise<void> => {
        await this.wait();
        await expect(this.element).toHaveText(value);
      },
      value: async (value: string): Promise<void> => {
        await this.wait();
        await expect(this.element).toHaveText(value);
      },
      toggleValue: async (value: string): Promise<void> => {
        await this.wait();
        await expect(this.element).toHaveText(value);
      },
    },
  };
}

class ElementsList {
  elements: Element[];

  constructor(selectorsList: string[]) {
    this.elements = selectorsList.map((selector) => new Element(selector));
  }

  should = {
    beVisible: async (): Promise<void> => {
      for (let i = 0; i < this.elements.map.length; i++) {
        await this.elements[i].wait();
      }
    },
  };
}

export const $ = (selector: string) => new Element(selector);
export const $$ = (selectorsList: string[]) => new ElementsList(selectorsList);

// device.getPlatform() === 'ios'
