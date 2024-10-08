<template>
  <v-app>
    <Header v-if="$store.getters['isLogin']" />
    <Menu v-if="$store.getters['isLogin']" />
    <Content />
  </v-app>
</template>

<script>
import Header from "@/components/core/Header.vue";
import Menu from "./components/core/Menu.vue";
import Content from "./components/core/Content.vue";

export default {
  name: "app",
  components: {
    Header,
    Menu,
    Content,
  },
  mounted() {
    this.$store.dispatch({ type: "restoreLogin" });
  },
  data() {
    return {};
  },
};
</script>

<style></style>
