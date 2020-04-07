import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage'

Vue.use(VueRouter);

const router = new VueRouter({
    base:  process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePage,            
        }
    ]
})

export default router