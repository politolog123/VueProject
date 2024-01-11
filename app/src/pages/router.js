import { createRouter,
    createWebHashHistory } from "vue-router";

import Major from "@/pages/Major";
import UserPage from '@/pages/UserPage';
import About from '@/pages/About';
import PostIDPage from '@/pages/PostIDPage';
import PostPageWithStore from '@/pages/PostPageWithStore';

export default createRouter({
    history : createWebHashHistory(),
    routes :[
        {
            path: '/major',
        component : Major 
         },
         {
            path: '/posts',
        component : UserPage
         },
         {
            path: '/about',
        component : About
         },
         {
            path: '/posts/:id',
        component : PostIDPage
         },
         {
            path : '/store',
            component : PostPageWithStore
         }
    ]
})