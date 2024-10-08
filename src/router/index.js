import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Stock from "@/views/Stock.vue";
import StockCreate from "@/views/StockCreate.vue";
import StockEdit from "@/views/StockEdit.vue";
import Report from "@/views/Report.vue";
import About from "@/views/About.vue";
import HashTag from "@/views/HashTag.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/stock",
    name: "stock",
    component: Stock,
  },
  {
    path: "/stock-create",
    name: "stock-create",
    component: StockCreate,
  },
  {
    path: "/stock-edit/:id",
    name: "stock-edit",
    component: StockEdit,
  },
  {
    path: "/report",
    name: "report",
    component: Report,
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
