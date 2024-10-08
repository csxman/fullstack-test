import Vue from "vue";
import VueRouter from "vue-router";
import About from "@/views/About.vue";
import HashTag from "@/views/HashTag.vue";
import LazyLoad from "@/views/LazyLoad.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/lazyload",
    name: "lazyload",
    component: LazyLoad,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/hashtag",
    name: "hashtag",
    component: HashTag,
  },
  {
    path: "/",
    redirect: "/hashtag",
  },
  {
    path: "*",
    redirect: "/hashtag", // page not found
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
