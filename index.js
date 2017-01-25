///<reference types="jquery"/>
"use strict";
var JQueryPluginBase = (function () {
    /**
     * JQueryPluginBase constructor
     *
     * @param name - The plugins name
     * @param element - The element the plugin is attached to
     * @param defaults - The plugins default options
     * @param options - The plugins custom options, default options are extended by these options
     */
    function JQueryPluginBase(name, element, defaults, options) {
        var _this = this;
        this.element = element;
        this.$element = $(element);
        // clone DOM element for automated destroy
        this._$clone = this.$element.clone(true);
        // extend default options
        this.options = $.extend({}, defaults, options);
        // set plugins init event
        this.$element.on('init.' + name, function () {
            _this.init();
        });
        // set plugins destroy event
        this.$element.on('destroy.' + name, function () {
            _this.destroy();
        });
    }
    /**
     * Automated destruction of the given element
     */
    JQueryPluginBase.prototype.destroy = function () {
        this.$element.replaceWith(this._$clone);
    };
    ;
    return JQueryPluginBase;
}());
exports.JQueryPluginBase = JQueryPluginBase;
