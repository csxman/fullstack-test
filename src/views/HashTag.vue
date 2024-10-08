<template>
  <v-container fluid class="pa-5">
    <v-row no-gutters class="pb-5">
      <v-col>
        <v-btn outlined color="primary" @click="$router.push(`/lazyload`)"
          >Lazy Load Page</v-btn
        >
      </v-col>
    </v-row>

    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Input to Search HashTag"
          ></v-text-field>
          <template>
            <v-spacer></v-spacer>
            <v-select
              v-model="search"
              flat
              solo-inverted
              hide-details
              :items="tags"
              prepend-inner-icon="mdi-magnify"
              label="Search by HashTag"
              clearable
            ></v-select>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.tags"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-lazy>
              <div>
                <v-img :src="item.url" class="grey lighten-2">
                  <div justify="end" align="center">
                    <p>Hashtag :</p>
                    <v-chip
                      v-for="(tag, index) in item.tags"
                      :key="index"
                      class="mr-2"
                      color="blue"
                      dark
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-img>
              </div>
            </v-lazy>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "id",
      tags: [
        "nature",
        "city",
        "beach",
        "forest",
        "night",
        "sunset",
        "keyword_a",
        "keyword_b",
        "keyword_c",
        "keyword_d",
        "keyword_e",
      ], // คำสำคัญทั้งหมด
      items: [
        {
          id: 1,
          url: "https://placehold.co/300x300",
          tags: ["keyword_a", "keyword_b"],
        },
        {
          id: 2,
          url: "https://placehold.co/400x400",
          tags: ["keyword_b", "keyword_c"],
        },
        {
          id: 3,
          url: "https://placehold.co/300x400",
          tags: ["keyword_a", "keyword_c"],
        },
        {
          id: 4,
          url: "https://placehold.co/200x200",
          tags: ["keyword_c", "keyword_e"],
        },
        {
          id: 5,
          url: "https://placehold.co/250x350",
          tags: ["keyword_b", "keyword_c"],
        },
        {
          id: 6,
          url: "https://placehold.co/350x300",
          tags: ["keyword_c", "keyword_d"],
        },
        {
          id: 7,
          url: "https://placehold.co/300x500",
          tags: ["keyword_e", "keyword_d"],
        },
        {
          id: 8,
          url: "https://placehold.co/200x300",
          tags: ["keyword_a", "keyword_b"],
        },
        {
          id: 9,
          url: "https://placehold.co/250x250",
          tags: ["keyword_c", "keyword_e"],
        },
        {
          id: 10,
          url: "https://placehold.co/300x300",
          tags: ["nature", "forest"],
        },
        {
          id: 11,
          url: "https://placehold.co/300x300",
          tags: ["nature", "forest"],
        },
        {
          id: 12,
          url: "https://placehold.co/300x400",
          tags: ["city", "night"],
        },
        {
          id: 13,
          url: "https://placehold.co/400x300",
          tags: ["beach", "sunset"],
        },
        {
          id: 14,
          url: "https://placehold.co/400x400",
          tags: ["nature", "sunset"],
        },
        {
          id: 15,
          url: "https://placehold.co/300x300",
          tags: ["city", "night"],
        },
        {
          id: 16,
          url: "https://placehold.co/300x400",
          tags: ["forest", "night"],
        },
        {
          id: 17,
          url: "https://placehold.co/400x300",
          tags: ["beach", "sunset"],
        },
        {
          id: 18,
          url: "https://placehold.co/400x400",
          tags: ["nature", "sunset"],
        },

        // สามารถเพิ่มรูปภาพได้อีกตามต้องการ
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "tags");
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>
