import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Chat from '@/pages/Chat';
import Painel from '@/pages/Painel';
import Mkt from '@/pages/Mkt';
import crm from '@/pages/Crm';

const routes = [{
    path:'/',
    component: Chat
},
{
    path:'/Painel',
    component: Painel
},
{
    path:'/mkt',
    component: Mkt
},
{
    path:'/crm',
    component: crm
}


]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;
