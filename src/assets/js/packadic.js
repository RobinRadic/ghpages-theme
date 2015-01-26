(function (factory) {
    factory(jQuery, _, window);
}(function ($, _, window) {

    function defined(obj) {
        return typeof obj !== 'undefined';
    }

    /**
     *
     * @param options
     * @constructor
     * @property {$} $el - used for event handlers within Packadic
     * @property {$} $sidemenu - the side menu
     */
    function Packadic(options) {
        this.config = _.merge({
            selectors: {
                sidemenu: '#menu'
            },
            sideMenu: {

            }
        }, options);

        this.$el = $(document.createElement('div'));

        $.each(this.config.selectors, function (name, selector) {
            this['$' + name] = $(selector);
        }.bind(this));

        console.log(this);

        this.init();
    }

    window.Packadic = Packadic;

    Packadic.prototype = {
        init: function(){
            this.$sidemenu.sideMenu(this.options.sideMenu);
        },
        destroy: function(){

        },
        //_eventHandlers: {},
        _trigger: function (type, data) {
            this.$el.trigger(_.merge({type: type}, data));
        },
        on: function (type, cb) {
            /*if (!defined(this._eventHandlers[type])) {
                this._eventHandlers[type] = [];
            }
            this._eventHandlers[type].push();*/
            this.$el.on(type, cb);
        }
    };

    Packadic.init = function (options) {
        return window.packadic = new Packadic(options);
    }
}));