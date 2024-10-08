<template>
  <v-container class="py-3">
    <v-row no-gutters class="pb-5">
      <v-col>
        <v-btn outlined color="primary" @click="$router.push(`/hashtag`)"
          >HashTag Page</v-btn
        >
      </v-col>
    </v-row>
    <div class="display-2">Endless scrolling with v-lazy</div>
    <h5>
      <span v-text="visiblePosts"></span> of
      <span>{{ posts.length }}</span> posts shown
    </h5>
    <v-row class="fill-height overflow-y-auto" v-if="posts.length">
      <v-col lg="3" md="4" sm="6" cols="12" v-for="(post, index) in posts">
        <v-sheet min-height="250" class="fill-height" color="transparent">
          <v-lazy
            v-model="post.isActive"
            :options="{
              threshold: 0.5,
            }"
            class="fill-height"
          >
            <v-card class="fill-height" hover>
              <v-card-text>
                <v-row :key="index" @click="">
                  <v-col sm="10" cols="12" class="text-sm-left text-center">
                    #{{ index + 1 }}
                    <h2 v-html="post.title"></h2>
                    <div v-html="post.body"></div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-lazy>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "LazyLoad",
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    visiblePosts() {
      return this.posts.filter((p) => p.isActive).length;
    },
  },
  methods: {
    addPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.posts = response.data;
        });
    },
  },
  mounted() {},
  created() {
    this.addPosts();
  },
};
</script>

<style lang="scss" scoped></style>
