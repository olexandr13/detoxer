declare type DetoxElement = Detox.NativeElement | Detox.IndexableNativeElement;
export declare type SwipeDirection = 'left' | 'right' | 'up' | 'down';
declare class Element {
    selector: string;
    private locator;
    element: DetoxElement;
    constructor(selector: string);
    atIndex(index: number): Element;
    clear(): Promise<DetoxElement>;
    get(): Detox.IndexableNativeElement | Detox.NativeElement;
    longPress(): Promise<DetoxElement>;
    replaceText(value: string): Promise<DetoxElement>;
    scroll({ offset, direction, }?: {
        offset?: number;
        direction?: SwipeDirection;
    }): Promise<DetoxElement>;
    scrollWhileElementVisible(elementSelectorToWait: string, scrollDirection?: 'down' | 'up'): Promise<DetoxElement>;
    swipe({ direction, speed, normalizedOffset, }?: {
        direction?: SwipeDirection;
        speed?: 'fast' | 'slow';
        normalizedOffset?: number;
    }): Promise<DetoxElement>;
    tap(point?: {
        x: number;
        y: number;
    }): Promise<DetoxElement>;
    tapBackspace({ times, }?: {
        times?: number;
    }): Promise<DetoxElement>;
    type(value: string): Promise<DetoxElement>;
    wait({ timeout, visible, }?: {
        timeout?: number;
        visible?: boolean;
    }): Promise<DetoxElement>;
    should: {
        beVisible: (timeout?: number | undefined) => Promise<void>;
        exist: (timeout?: number | undefined) => Promise<void>;
        not: {
            beVisible: () => Promise<void>;
            exist: () => Promise<void>;
        };
        have: {
            text: (value: string) => Promise<void>;
            label: (value: string) => Promise<void>;
            id: (value: string) => Promise<void>;
            value: (value: string) => Promise<void>;
            toggleValue: (value: string) => Promise<void>;
        };
    };
}
declare class ElementsList {
    elements: Element[];
    constructor(selectorsList: string[]);
    should: {
        beVisible: () => Promise<void>;
    };
}
export declare const $: (selector: string) => Element;
export declare const $$: (selectorsList: string[]) => ElementsList;
export {};
