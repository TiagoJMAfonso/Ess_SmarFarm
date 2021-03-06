/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue';
import router from './routes.js';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';
import store from './vuex.js';
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'


window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(Vuelidate);
Vue.use(Toasted);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
Vue.component('vue-layout', require('./components/Layout.vue').default);
Vue.component('navbarmenu', require('./components/NavbarMenu.vue').default);
Vue.component("dashboarda", require("./components/admin/dashboard.vue").default);
Vue.component("dashboard", require("./components/user/dashboard.vue").default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store,
    created() {
        this.$store.commit('loadTokenAndUserFromSession');
    }
});
