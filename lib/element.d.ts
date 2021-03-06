export declare type SwipeDirection = 'left' | 'right' | 'up' | 'down';
declare type ClarifyingSelector = {
    and?: string;
    withAncestor?: string;
    withDescendant?: string;
};
declare class Element {
    private selector;
    private params?;
    private locator;
    element: Detox.IndexableNativeElement | Detox.NativeElement;
    clarifiedSelectorToPrint: string;
    constructor(selector: string, params?: ClarifyingSelector | undefined);
    private _getSelectorTypeAndValue;
    atIndex(index: number): Element;
    clear(): Promise<Detox.NativeElement>;
    get(): Detox.IndexableNativeElement | Detox.NativeElement;
    longPress(): Promise<Detox.NativeElement>;
    replaceText(value: string): Promise<Detox.NativeElement>;
    scroll({ offset, direction, }?: {
        offset?: number;
        direction?: SwipeDirection;
    }): Promise<Detox.NativeElement>;
    scrollWhileElementVisible(elementToWait: Detox.NativeElement, scrollDirection?: 'down' | 'up'): Promise<Detox.NativeElement>;
    swipe({ direction, speed, normalizedOffset, }?: {
        direction?: SwipeDirection;
        speed?: 'fast' | 'slow';
        normalizedOffset?: number;
    }): Promise<Detox.NativeElement>;
    tap(point?: {
        x: number;
        y: number;
    }): Promise<Detox.NativeElement>;
    tapBackspace({ times }?: {
        times?: number;
    }): Promise<Detox.NativeElement>;
    type(value: string): Promise<Detox.NativeElement>;
    wait({ timeout, visible, sleepAfter, }?: {
        timeout?: number;
        visible?: boolean;
        sleepAfter?: number;
    }): Promise<Detox.NativeElement>;
    exists({ timeout, visible, }?: {
        timeout?: number;
        visible?: boolean;
    }): Promise<boolean>;
    getText(): Promise<string>;
    should: {
        beVisible: (timeout?: number | undefined) => Promise<void>;
        exist: (timeout?: number | undefined) => Promise<void>;
        not: {
            beVisible: () => Promise<void>;
            exist: () => Promise<void>;
        };
        disappear: (timeout?: number) => Promise<void>;
        have: {
            _: (paramToCheck: 'Text' | 'Label' | 'Id' | 'Value' | 'ToggleValue', value: string | boolean) => Promise<void>;
            text: (value: string) => Promise<void>;
            label: (value: string) => Promise<void>;
            id: (value: string) => Promise<void>;
            value: (value: string) => Promise<void>;
            toggleValue: (value: boolean) => Promise<void>;
        };
    };
}
export declare const $: (selector: string, params?: ClarifyingSelector | undefined) => Element;
export {};
