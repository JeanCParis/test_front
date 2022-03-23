import Vue from "vue";
import Vuex, { ActionTree, GetterTree, MutationTree } from "vuex";
import axios from "axios";
import { TProduct } from "@/types/product";

Vue.use(Vuex);

interface State {
  product: TProduct;
}

const state = () => ({
  product: {
    cui: "",
    cug: "",
    eans: [],
    label: "",
    productFamily: "",
    prize: null,
    isActive: false,
  },
});

const getters: GetterTree<State, TProduct> = {
  product: (state: State) => state.product,
};

const mutations: MutationTree<State> = {
  setProduct(state: State, product: TProduct) {
    state.product = product;
  },
};

const actions: ActionTree<State, TProduct> = {
  getProductInfo: async ({ commit }, cug) => {
    await axios
      .get(`http://localhost:3000/product/${cug}`, {})
      .then((response) => {
        commit("setProduct", response.data);
      });
  },
};

const store = new Vuex.Store({
  modules: {
    product: {
      state,
      getters,
      mutations,
      actions,
    },
  },
});

export default store;
