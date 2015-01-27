(function (factory) {
    factory(jQuery, _, window);
}(function ($, _, window) {
    'use strict';

    function defined(obj){
        return typeof obj !== 'undefined';
    }


    $.widget('packadic.topMenu', {
        version: '1.0.0',
        options: {

        },

        _create: function () {
            var $el = this.element;
        },
        _destroy: function () {
            this.element.off("." + this.widgetName);
            this.element.removeData(this.widgetName);
        },
        show: function () {
            this.element.show();
        },

        hide: function () {
            this.element.hide();
        },

        createFromJSON: function (json) {
            function createEl(tag) {
                return $(document.createElement(tag));
            }

            function loopItems(items, $parentUl, level) {
                $parentUl.attr('data-level', level);
                $.each(items, function (key, item) {
                    /*
                     <li class="active"><a href="index.html">Vertical Menu</a></li>
                     <li><a href="metisFolder.html">Folder View</a></li>
                     <li><a href="hover.html">Hover Option For Desktop</a></li>
                     <li><a href="zurb.html">Foundation | Zurb</a></li>
                     */
                    // LI
                    var $li = createEl('li');
                    if(defined(item.default) && item.default){
                        $li.addClass('active');
                    }


                    // A
                    var $a = createEl('a')
                        .attr('href', defined(item.href) ? item.href : '#')
                        .text(item.name);

                    $li.append($a);
                    $parentUl.append($li);

                    if(defined(item.children)){
                        var $ul = createEl('ul');
                        $li.append($ul);
                        loopItems(item.children, $ul, level + 1);
                    }
                });
            }
            this._destroy();
            this.element.html('');
            loopItems(json, this.element, 0);
            this._create();
        }
    });

    $.test = {
        apply: function(){
            $('#menu').sideMenu('createFromJSON', $.test.menuItems);
        }
    };
    $.test.menuItems = [
        {
            name: 'Home',
            icon: 'fa-home',
            default: true,
            attributes: {
                li: {'data-test-attr': 'awesome'},
                a: {'data-test-attr': 'awesome'},
                icon: {'data-test-attr': 'awesome'},
                name: {'data-test-attr': 'awesome'},
                arrow: {'data-test-attr': 'awesome'}
            }
        }, {
            name: 'About',
            icon: 'fa-user',
            href: 'https://github.com'
        }, {
            name: 'Portfolio',
            icon: 'fa-picture-o',
            href: 'https://github.com'
        }, {
            name: 'Projects',
            icon: 'fa-cubes',
            href: '#',
            children: [
                {
                    name: 'Blade Extensions',
                    icon: 'fa-puzzle-piece font-green',
                    href: '/blade-extensions'
                }, {
                    name: 'Node Radic',
                    icon: 'fa-jsfiddle font-green',
                    href: '/blade-extensions'
                }, {
                    name: 'Grunt',
                    icon: 'fa-css3',
                    children: [
                        {
                            name: 'R.js modular builder',
                            icon: 'fa-legal fa-green',
                            href: '/grunt-rjs-modular-builder'
                        }, {
                            name: 'Radical',
                            icon: 'fa-tasks',
                            href: '/grunt-radical'
                        }
                    ]
                }
            ]
        }, {
            name: 'Posts',
            icon: 'fa-pencil-square-o',
            href: '#'
        }, {
            name: 'Repositories',
            icon: 'fa-github',
            href: 'https://github.com'
        }
    ]
}));
