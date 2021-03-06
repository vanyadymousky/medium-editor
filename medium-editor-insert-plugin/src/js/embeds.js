; (function ($, window, document, undefined) {

    'use strict';

    /** Default values */
    var pluginName = 'mediumInsert',
        addonName = 'Embeds'; // first char is uppercase

    /**
     * @constructor
     */
    var commonEmbedsAddon = getCommonEmbedsAddon(pluginName, addonName, $, window, document);

    /**
     * Embeds object
     * @inheritDoc
     */

    function Embeds(el, options) {
        commonEmbedsAddon.apply(this, arguments);
    }

    Embeds.prototype = Object.create(commonEmbedsAddon.prototype);
    Embeds.prototype.constructor = Embeds;


    /** Plugin initialization */

    $.fn[pluginName + addonName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName + addonName)) {
                $.data(this, 'plugin_' + pluginName + addonName, new Embeds(this, options));
            }
        });
    };

})(jQuery, window, document);
