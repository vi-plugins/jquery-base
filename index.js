///<reference types="jquery"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JQueryModuleBase = (function () {
    function JQueryModuleBase() {
    }
    return JQueryModuleBase;
}());
exports.JQueryModuleBase = JQueryModuleBase;
var JQueryPluginBase = (function (_super) {
    __extends(JQueryPluginBase, _super);
    /**
     * JQueryPluginBase constructor
     *
     * @param name - The plugins name
     * @param element - The element the plugin is attached to
     * @param defaults - The plugins default options
     * @param options - The plugins custom options, default options are extended by these options
     */
    function JQueryPluginBase(name, element, defaults, options) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.$element = $(element);
        // clone DOM element for automated destroy
        _this._$clone = _this.$element.clone(true);
        // extend default options
        _this.options = $.extend(true, {}, defaults, options);
        // set plugins init event
        _this.$element.on('init.' + name, function () {
            _this.init();
        });
        // set plugins destroy event
        _this.$element.on('destroy.' + name, function () {
            _this.destroy();
        });
        return _this;
    }
    /**
     * Automated destruction of the given element
     */
    JQueryPluginBase.prototype.destroy = function () {
        this.$element.replaceWith(this._$clone);
    };
    ;
    return JQueryPluginBase;
}(JQueryModuleBase));
exports.JQueryPluginBase = JQueryPluginBase;
