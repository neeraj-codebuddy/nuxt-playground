import { defineStore } from "pinia";

export const useNameStore = defineStore("name", {
  state: () => ({ name: "John Doe" }),
  getters: {
    getName: (state) => state.name,
  },
  actions: {
    changeName(name: string) {
      this.name = name;
    },
  },
});
