(function (factory) {
    factory(jQuery, _, window);
}(function ($, _, window) {

    function defined(obj) {
        return typeof obj !== 'undefined';
    }

    var debug = {
        'sidemenu-apply-test-json': function($el){
            $el.on('click', function(e){
                e.preventDefault();
                window.packadic.$sidemenu.sideMenu('createFromJSON', $.test.menuItems);
            });
        }
    };
    /**
     *
     * @param options
     * @constructor
     * @property {$} $el - used for event handlers within Packadic
     * @property {$} $sidemenu - the side menu
     */
    function Packadic(options) {
        this.options = _.merge({
            debug: true,
            selectors: {
                sidemenu: '#menu'
            },
            sideMenu: {

            }
        }, options);

        this.$el = $(document.createElement('div'));

        $.each(this.options.selectors, function (name, selector) {
            this['$' + name] = $(selector);
        }.bind(this));

        console.log(this);

        this.init();
    }


    Packadic.prototype = {
        init: function(){
            this.$sidemenu.sideMenu(this.options.sideMenu);


            if(this.options.debug === true){
                $('.site-debug').show();
                $('*[data-debug]').each(function(){
                    var $this = $(this);
                    debug[$this.data('debug')]($this);
                });
                this.$sidemenu.sideMenu('createFromJSON', $.test.menuItems);
            } else {
                $('.site-debug').hide();
            }
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
    };
    window.Packadic = Packadic;
}));