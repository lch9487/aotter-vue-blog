import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import VuePaginate from "vue-paginate";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "swiper/dist/css/swiper.css";

import App from "./App.vue";
import Blog from "./components/Blog.vue";
import PostList from "./components/PostList.vue";
import PostDetail from "./components/PostDetail.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VuePaginate);
Vue.use(VueAwesomeSwiper);

const routes = [
  { path: "/", component: Blog },
  { path: "/posts", component: PostList },
  { path: "/post/:id", component: PostDetail }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
