import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from './components/loginComponent/login.vue'
import DashBoardPage from './components/loginComponent/dashboard.vue'
Vue.use(VueRouter);


const routes = [
    { path: '/', component: loginPage },
    { path: '/dashboard', component: DashBoardPage }
]

export default new VueRouter({mode: 'history', routes})