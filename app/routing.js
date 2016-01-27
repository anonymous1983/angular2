System.register(['./components/todo/todo', './components/about/about', './advert/advert'], function(exports_1) {
    var todo_1, about_1, advert_1;
    var Routing;
    return {
        setters:[
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (advert_1_1) {
                advert_1 = advert_1_1;
            }],
        execute: function() {
            exports_1("Routing", Routing = [
                /*
                 * Home
                 */
                {
                    path: '/',
                    component: todo_1.Todo,
                    as: 'Home'
                },
                /*
                 * About
                 */
                {
                    path: '/about/:id',
                    component: about_1.About,
                    as: 'About'
                },
                /*
                 * Advert
                 */
                {
                    path: '/advert',
                    component: advert_1.Advert,
                    as: 'Advert'
                },
            ]);
        }
    }
});

//# sourceMappingURL=routing.js.map
