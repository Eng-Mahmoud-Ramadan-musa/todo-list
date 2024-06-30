<template>
  <div
    class="bg-gray-200 h-[60vh] sm:h-[55vh] flex-col pt-3 gap-5 px-[5%] overflow-hidden"
  >
    <h1 class="font-bold text-2xl mb-4">the todos list</h1>
    <div class="text-xl w-full lg:px-10 px-5">
      <ul
        class="bg-white flex-col items-center h-[45vh] sm:h-[38vh] w-full lg:px-10 px-5 overflow-y-auto py-5"
      >
        <li
          v-for="(todo, index) in $store.state.addUser.todos"
          :key="index"
          class="bg-gray-300 p-1 flex justify-between my-2 rounded-lg overflow-hidden hover:scale-105 hover:bg-gray-400 ease-linear duration-200 px-3"
        >
          <input
            v-model="todo.done"
            @click="$store.dispatch('theCondition', index)"
            type="checkbox"
            name=""
            id=""
            class="w-[15px]"
          />
          <h3
            v-if="todo.done === true"
            class="text-left font-medium w-6/12 text-nowrap overflow-ellipsis overflow-hidden"
          >
            <del class="text-red-500">{{ todo.todo }}</del>
          </h3>
          <h3
            v-else
            class="text-left font-medium w-6/12 text-nowrap overflow-ellipsis overflow-hidden"
          >
            {{ todo.todo }}
          </h3>
          <div class="w-3/12 flex flex-nowrap gap-1">
            <button
              @click="updateTodo(index)"
              class="bg-green-500 rounded-lg text-base font-bold text-white w-1/2 flex-shrink-0 hover:scale-105 ease-linear duration-200"
            >
              <i class="fa-solid fa-pencil"></i>
            </button>
            <button
              @click="deleteTodo(index)"
              class="bg-red-500 text-white text-base font-bold rounded-lg w-1/2 flex-shrink-0 hover:scale-105 ease-linear duration-200"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      </ul>
      <button
        @click="deleteAllTodo()"
        class="text-white bg-red-500 mt-3 rounded-lg px-3 w-full"
      >
        delete all
      </button>
    </div>
    <!-- <h3 v-else>not todos</h3> -->
  </div>
</template>

<script>
export default {
  name: "TodosList",
  data() {
    return {
      completed: false,
    };
  },
  methods: {
    updateTodo(d) {
      this.$store.dispatch("updatedTodo", d);
    },
    deleteTodo(d) {
      this.$store.dispatch("deletedTodo", d);
    },
    deleteAllTodo() {
      this.$store.dispatch("deletedAllTodo");
    },
  },
};
</script>

<style></style>
