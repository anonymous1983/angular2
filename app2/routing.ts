import {RouteDefinition} from 'angular2/router';

import { Todo } from './components/todo/todo';
import { About } from './components/about/about';
import { Advert } from './advert/advert';


export var Routing = [
    /*
     * Home
     */
    {
        path: '/',
        component: Todo,
        as: 'Home'
    },
    /*
     * About
     */
    {
        path: '/about/:id',
        component: About,
        as: 'About'
    },
    /*
     * Advert
     */
    {
        path: '/advert',
        component: Advert,
        as: 'Advert'
    },
];