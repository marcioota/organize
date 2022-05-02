import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
Vue.use(VueRouter);

import Chat from '@/pages/Chat';
import Painel from '@/pages/Painel';
import Mkt from '@/pages/Mkt';
import crm from '@/pages/Crm';
import test from '@/pages/Test';
import app from '@/pages/app';
import contato from '@/pages/Contato';

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
},
{
    path:'/test',
    component: test
}
,
{
    path:'/app',
    component: app
},
{
    path:'/contato',
    component: contato
}


]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;

