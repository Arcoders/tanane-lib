export declare const getBaseConfig: ({ plugins, lib }: {
    plugins?: never[] | undefined;
    lib: any;
}) => import("vite").UserConfig & Promise<import("vite").UserConfig> & import("vitest/dist/config").UserConfigFnObject & import("vitest/dist/config").UserConfigExport;
