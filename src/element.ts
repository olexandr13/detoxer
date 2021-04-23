import { by, element as detoxElement, expect, waitFor } from 'detox';
import { log } from './logger';
import { helpers } from './helpers';

type SwipeDirection = 'left' | 'right' | 'up' | 'down';

class Element {
  private locator: Detox.NativeMatcher;
  // TODO: fix any
  element: any;

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
    this.element = this.element.atIndex(index) as Detox.NativeElement;
    return this;
  }

  async clear(): Promise<Detox.IndexableNativeElement> {
    const elem = await this.wait();
    await elem.clearText();
    return elem;
  }

  get(): Detox.IndexableNativeElement {
    return this.element;
  }

  async longPress(): Promise<Detox.IndexableNativeElement> {
    const elem = await this.wait();
    await elem.longPress();
    return elem;
  }

  async replaceText(value: string): Promise<Detox.IndexableNativeElement> {
    const elem = await this.wait();
    await elem.replaceText(value);
    return elem;
  }

  async scroll({
    offset = 500,
    direction = 'down',
  }: { offset?: number; direction?: SwipeDirection } = {}): Promise<Detox.IndexableNativeElement> {
    const elem = await this.wait();
    await elem.scroll(offset, direction);

    return elem;
  }

  async scrollWhileElementVisible(
    elementSelectorToWait: string,
    scrollDirection: 'down' | 'up' = 'down',
  ): Promise<Detox.IndexableNativeElement> {
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
  } = {}): Promise<Detox.IndexableNativeElement> {
    const elem = await this.wait();
    await elem.swipe(direction, speed, normalizedOffset, NaN, NaN);

    return this.element;
  }

  async tap(point?: { x: number; y: number }): Promise<Detox.IndexableNativeElement> {
    const elem = await this.wait({visible: false});
    // @ts-ignore
    await elem.tap(point);
    return elem;
  }

  async tapBackspace({
    times = 1,
  }: { times?: number } = {}): Promise<Detox.IndexableNativeElement> {
    const elem = await this.wait();
    for (let i = 1; i <= times; i++) {
      await elem.tapBackspaceKey();
    }
    return elem;
  }

  async type(value: string): Promise<Detox.IndexableNativeElement> {
    log.info(`Type text "${value}" into element with selector "${this.selector}"`);
    const elem = await this.wait();
    await elem.tap();
    await elem.typeText(value);
    return elem;
  }

  async wait({
    timeout = 11000,
    visible = true,
  }: { timeout?: number; visible?: boolean } = {}): Promise<Detox.IndexableNativeElement> {
    log.info(`Wait for element with selector ${helpers.stringify(this.selector)}`);
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

    return this.element;
  }
  // withTimeout(timeout) works as a piece of thit; implement own waiter for this function
  // examples of bad behavior: if more than 1 element is present on page with the same selector - it fails

  should = {
    beVisible: async (timeout?: number): Promise<void> => {
      await this.wait({ timeout });
    },

    exist: async (): Promise<void> => {
      await this.wait({ visible: false });
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
      // await Promise.all(this.elements.map(async (element) => await element.wait()));
      for (let i = 0; i < this.elements.map.length; i++) {
        await this.elements[i].wait();
      }
    },
  };
}

export const $ = (selector: string) => new Element(selector);
export const $$ = (selectorsList: string[]) => new ElementsList(selectorsList);
