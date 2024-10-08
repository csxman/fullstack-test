<template>
  <v-container>
    <v-row class="justify-center pt-5">
      <v-col cols="8">
        <v-card class="mx-auto  pa-5" outlined>
          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="product.name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="product.price"
              type="number"
              suffix="THB"
              label="Price"
              required
            ></v-text-field>

            <v-text-field
              v-model="product.stock"
              type="number"
              suffix="PCS"
              label="Stock"
              required
            ></v-text-field>

            <input type="file" @change="onFileSelected" />
            <br />
            <img
              v-if="imageURL"
              :src="imageURL"
              height="200"
              width="200"
              class="mt-3"
            />
            <br />
            <br />

            <v-row>
              <v-spacer></v-spacer>
              <v-btn class="mr-4" @click.prevent="cancel">
                Cancel
              </v-btn>

              <v-btn color="success" type="submit">
                Confirm
              </v-btn>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/services/api";
export default {
  name: "stock-create",
  data: () => ({
    product: {
      name: "",
      price: "",
      stock: "",
      image: null,
    },
    imageURL: null,
  }),
  methods: {
    onFileSelected(event) {
      const reader = new FileReader();
      reader.onload = (event) => {
        // for preview image
        this.imageURL = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);

      // for upload image
      this.product.image = event.target.files[0];
    },
    async submit() {
      let formData = new FormData();
      const { name, price, stock } = this.product;
      formData.append("name", name);
      formData.append("stock", stock);
      formData.append("price", price);
      formData.append("image", this.product.image);
      await api.addProduct(formData);
      this.$router.back();
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>

<style></style>
