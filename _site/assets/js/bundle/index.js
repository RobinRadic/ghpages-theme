var moment = require('moment'),
    $ = require('jquery'),
    _ = require('lodash');

module.exports = function(){
    $('body').addClass('testbrowserify');
    moment(new Date());
};