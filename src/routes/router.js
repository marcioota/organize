import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta'
import AxiosPlugin from 'vue-axios-cors';


Vue.use(VueMeta)
Vue.use(VueRouter);
Vue.use(AxiosPlugin);

import Chat from '@/pages/Chat';
import Painel from '@/pages/Painel';
import Mkt from '@/pages/Mkt';
import crm from '@/pages/Crm';
import test from '@/pages/Test';
import app from '@/pages/app';
import contato from '@/pages/Contato';
import meupai from '@/pages/MeuPai';

const routes = [{
    path:'/',
    component: Chat
},
{
    path:'/Painel',
    component: Painel
},
{
    path:'/meupai',
    component: meupai
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

