import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import router from './router/index';
import middleware from './middleware';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import en from './locale/en.json';
import es from './locale/es.json';

middleware(router);

const vueRouter = createRouter({
  history: createWebHistory(),
  routes: router.options.routes
});

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: en,
    es: es
  }
});

const app = createApp(App);
app.use(vueRouter);
app.use(i18n);
app.mount('#app');
