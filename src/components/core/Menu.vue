<template lang="html">
  <v-navigation-drawer
    app
    permanent
    absolute
    dark
    src="@/assets/background_menu.jpg"
  >
    <router-link to="/" exact>
      <!-- <img src="@/assets/vue_display.jpg" alt="" width="100%" /> -->
      <img src="@/assets/logo.png" alt="" width="100%" />
    </router-link>

    <v-list shaped>
      <v-subheader>MENUS</v-subheader>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item
          class="tile"
          v-for="([icon, text, route], i) in menus"
          :key="i"
          link
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="js">

  export default  {
    name: 'Menu',
    props: [],
    mounted () {
      this.selectedMenu = this.menus.findIndex(menu=> menu[2] == this.$route.path)
    },
    data () {
      return {
        selectedMenu:0,
        menus: [
        ['mdi-apps-box', 'Stock', '/stock'],
        ['mdi-chart-areaspline', 'Report', '/report'],
        ['mdi-clipboard-text', 'About', '/about'],

      ],
      }
    },
    methods: {
      onClickMenu(link){
        this.$router.push(link).catch(err => {})
      }
    },
    watch:{
     $route(to, from) {
       // ชั้นของ Array || menu[2]
       this.selectedMenu = this.menus.findIndex(menu=> menu[2] == to.path)
      }
    },
    computed: {

    }
}
</script>

<style>
.v-list-item-group .v-list-item--active {
  color: #fff !important;
  font-weight: bold;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  opacity: 0.7;
}

.tile {
  color: #fff;
}
.tile:hover {
  background: green;
}
.tile:active {
  background: #05ab71;
}
</style>
