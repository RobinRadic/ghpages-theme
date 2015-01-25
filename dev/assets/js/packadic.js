(function(factory){
    factory(jQuery, _, window);
}(function($, _, window){

    function Packadic(options){
        this.config = _.merge({

        }, options);
    }
    window.Packadic = Packadic;

    Packadic.prototype = {

    };

    Packadic.init = function(options){
        window.packadic = new Packadic(options);
    }
}));