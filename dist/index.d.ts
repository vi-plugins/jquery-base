/// <reference types="jquery" />
export declare abstract class JQueryModuleBase {
    /**
     * Place initialization logic here
     */
    abstract init(): void;
    /**
     * Place destruction logic here
     */
    abstract destroy(): void;
}
export declare abstract class JQueryPluginBase extends JQueryModuleBase {
    /**
     * The element the plugin is attached to
     */
    element: Element;
    /**
     * A handy jQuery object of the given element
     */
    $element: JQuery;
    /**
     * The plugins default options extended by given options
     */
    options: any;
    /**
     * A clone of the given element for automated destroy function
     */
    private _$clone;
    /**
     * JQueryPluginBase constructor
     *
     * @param name - The plugins name
     * @param element - The element the plugin is attached to
     * @param defaults - The plugins default options
     * @param options - The plugins custom options, default options are extended by these options
     */
    constructor(name: string, element: Element, defaults: any, options: any, $?: JQueryStatic);
    /**
     * Automated destruction of the given element
     */
    destroy(): void;
}
