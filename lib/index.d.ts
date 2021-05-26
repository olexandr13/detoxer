export declare const app1: {
    clearApp(): Promise<void>;
    launchAppWithPermissions(): Promise<void>;
};
export declare const assert1: {
    should: {
        be: {
            truthy: (anything: any, errorMessage?: string | undefined) => void;
        };
        equal: (value1: any, value2: any) => void;
    };
};
export declare const helpers1: {
    sleep(seconds: number): Promise<void>;
    prettyStringify(json: any): string;
};
