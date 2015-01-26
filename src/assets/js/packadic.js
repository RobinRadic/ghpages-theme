(function(factory){
    factory(jQuery, _, window);
}(function($, _, window){

    function Packadic(options){
        this.config = _.merge({
            selectors: {
                sidemenu: '#menu'
            }
        }, options);

        $.each(this.config.selectors, function(selector, name){
            this['$' + name] = $(selector);
        });


        console.log(this);
    }
    window.Packadic = Packadic;

    Packadic.prototype = {

    };

    Packadic.init = function(options){
        window.packadic = new Packadic(options);
    }
}));