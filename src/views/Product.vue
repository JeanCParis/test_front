<template>
  <div class="container">
    <v-card class="mb-5">
      <v-card-title>Information Produit</v-card-title>

      <v-card-text>CUI : {{ product.cui }}</v-card-text>
      <v-card-text>CUG : {{ product.cug }}</v-card-text>
      <v-card-text>
        <v-row>
          <div class="ml-3" style="align-self: center">EANS :</div>
          <v-chip-group column>
            <v-chip v-for="eans in product.eans" :key="eans" small>
              {{ eans }}
            </v-chip>
          </v-chip-group>
        </v-row>
      </v-card-text>
      <v-card-text>LIBELLE : {{ product.label }}</v-card-text>
      <v-card-text>FAMILLE : {{ product.productFamily }}</v-card-text>
      <v-card-text>PRIX : {{ product.prize }}</v-card-text>
    </v-card>

    <h3>Rechercher les informations d'un produit</h3>
    <v-row>
      <v-col cols="9">
        <v-text-field
          v-model="cug"
          type="number"
          dense
          outlined
          class="di"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn @click="addProduct()">Rechercher</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { TProduct } from "@/types/product";

@Component<Product>({})
export default class Product extends Vue {
  public cug = "";
  public erreur = "";

  public addProduct(): void {
    this.$store.dispatch("getProductInfo", this.cug);
  }

  get product(): TProduct {
    return this.$store.getters.product;
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
