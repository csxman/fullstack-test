<template lang="html">
  <v-container>
    <v-row align="center" justify="center" class="pt-10">
      <v-card style="width:95%;">
        <v-img
          class="white--text align-end"
          height="200px"
          src="@/assets/login_header.jpg"
        >
          <v-card-title>Login</v-card-title>
        </v-img>

        <v-card-text>
          <v-form @submit.prevent="submit" v-model="valid" ref="form">
            <!-- Username field -->
            <v-text-field
              label="Username"
              v-model="account.username"
              :rules="emailRules"
              required
            />

            <!-- Password field -->
            <v-text-field
              label="Password"
              v-model="account.password"
              min="8"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              @click:append="e1 = !e1"
              :type="e1 ? 'password' : 'text'"
              counter
              required
            />

            <!-- Buttons  -->
            <v-layout justify-space-between class="mt-5">
              <v-btn text small @click="$router.push('/register')"
                >Register</v-btn
              >

              <v-btn
                type="submit"
                :class="{
                  'blue darken-4 white--text': valid,
                  disabled: !valid,
                }"
                >Login</v-btn
              >
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="js">

import api from "@/services/api";
  export default  {
    name: 'login',
    props: [],
    created() {
    },
    mounted () {
      if (api.isLoggedIn()){
        this.$router.push("/stock")
      }
    },
    data () {
          return {
            account:{
              username:"",
              password:""
            },
            valid: false,
            e1: true,
            password: '',
            passwordRules: [
              (v) => !!v || 'Password is required',
            ],
            email: '',
            emailRules: [
              (v) => !!v || 'E-mail is required',
            ],
          }
        },
        methods: {
          async submit () {
            if (this.$refs.form.validate()) {
               this.$store.dispatch({
                                    type: 'doLogin',
                                    username: this.account.username,
                                    password: this.account.password,
                                  })
            }
          },
          clear () {
            this.$refs.form.reset()
          }
        },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.buttons {
  display: flex;
  justify-content: flex-end;
}
</style>
