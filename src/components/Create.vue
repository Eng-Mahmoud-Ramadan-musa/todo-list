<template>
  <div class="bg-gray-200 h-28 flex justify-center items-center">
    <div
      class="px-[5%] flex gap-4 justify-center items-center rounded-xl bg-gray-400 w-5/6 h-4/6"
    >
      <input
        v-model="this.$store.state.text"
        type="text"
        class="hover:scale-105 ease-linear duration-200 w-3/4 sm:w-2/3 lg:w-1/2 border-2 rounded-xl pl-3 border-gray-400 outline-none"
      /><button
        @click="addTodo($store.state.text)"
        class="hover:scale-105 ease-linear duration-200 border-2 px-2 border-gray-400 bg-green-500 text-white overflow-hidden h-7 rounded-full"
      >
        <i
          v-if="$store.state.mode === 'create'"
          class="fa-solid fa-circle-plus text-2xl -mt-1"
        ></i>
        <i v-else class="fa-solid fa-pencil text-2xl -mt-1"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateTodo",
  data() {
    return {};
  },
  methods: {
    addTodo(text) {
      this.$store.dispatch("addTodo", text);
    },
  },
};
</script>

<style></style>
