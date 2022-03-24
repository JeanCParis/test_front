import Vue from "vue";
import Vuex, { ActionTree, GetterTree, MutationTree } from "vuex";
import axios, { AxiosResponse } from "axios";
import { TProduct } from "@/types/product";

Vue.use(Vuex);

interface State {
  product: TProduct;
  error: boolean;
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
  error: false,
});

const getters: GetterTree<State, TProduct> = {
  product: (state: State) => state.product,
  error: (state: State) => state.error,
};

const mutations: MutationTree<State> = {
  setProduct(state: State, product: TProduct) {
    state.product = product;
  },

  setError(state: State, error: AxiosResponse) {
    state.error = error.status === 404;
  },
};

const actions: ActionTree<State, TProduct> = {
  getProductInfo: async ({ commit }, cug) => {
    await axios
      .get(`http://localhost:3000/product/${cug}`, {})
      .then((response) => {
        commit("setProduct", response.data);
      })
      .catch((err) => {
        commit("setError", err.response);
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
