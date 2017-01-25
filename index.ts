///<reference types="jquery"/>

export abstract class JQueryPluginBase {

	/**
	 * The element the plugin is attached to
	 */
	public element: Element;

	/**
	 * A handy jQuery object of the given element
	 */
	public $element: JQuery;

	/**
	 * The plugins default options extended by given options
	 */
	public options: any;

	/**
	 * A clone of the given element for automated destroy function
	 */
	private _$clone: JQuery;

	/**
	 * Place initialization logic here
	 */
	abstract init(): void;

	/**
	 * JQueryPluginBase constructor
	 *
	 * @param name - The plugins name
	 * @param element - The element the plugin is attached to
	 * @param defaults - The plugins default options
	 * @param options - The plugins custom options, default options are extended by these options
	 */
	constructor(name: string, element: Element, defaults: any, options: any) {
		this.element = element;
		this.$element = $(element);

		// clone DOM element for automated destroy
		this._$clone = this.$element.clone(true);

		// extend default options
		this.options = $.extend({}, defaults, options);

		// set plugins init event
		this.$element.on('init.' + name, () => {
			this.init();
		});

		// set plugins destroy event
		this.$element.on('destroy.' + name, () => {
			this.destroy();
		});
	}

	/**
	 * Automated destruction of the given element
	 */
	destroy(): void {
		this.$element.replaceWith(this._$clone);
	};
}
