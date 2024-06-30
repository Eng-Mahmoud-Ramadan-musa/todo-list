<template>
  <div class="bg-gray-300 flex py-4 justify-end px-[5%] gap-5 relative">
    <input
      v-if="$store.state.disaplySearch"
      type="text"
      v-model="$store.state.textSearch"
      @keyup="$store.dispatch('filteredData', $store.state.textSearch)"
      class="hover:scale-105 ease-linear duration-200 w-4/6 sm:w-7-12 lg:w-1/2 scale-x-100 rounded-lg outline-none px-4 border border-black"
    />
    <input v-else type="text" class="scale-x-0 w-0" />
    <button
      @click="
        ($store.state.disaplySearch = !$store.state.disaplySearch) &&
          ($store.state.disaplyFilter = false)
      "
      class="hover:scale-105 ease-linear duration-200"
    >
      <i class="fa-solid fa-search"></i>
    </button>
    <button
      @click="
        ($store.state.disaplyFilter = !$store.state.disaplyFilter) &&
          ($store.state.disaplySearch = false)
      "
      class="hover:scale-105 ease-linear duration-200"
    >
      <i class="fa-solid fa-filter"></i>
    </button>
    <ul
      v-if="$store.state.disaplyFilter"
      class="absolute top-10 bg-gray-400 right-5 px-3 py-1 rounded-lg z-40"
    >
      <li
        @click="$store.dispatch('theCompleted')"
        class="flex gap-2 hover:scale-105 ease-linear duration-200"
      >
        <input type="radio" name="1" id="1" />
        <label for="1">complete</label>
      </li>
      <li
        @click="$store.dispatch('theNotCompleted')"
        class="flex gap-2 hover:scale-105 ease-linear duration-200"
      >
        <input type="radio" name="1" id="2" />
        <label for="2">not complete</label>
      </li>
    </ul>
    <ul v-else class="hidden">
      <li class="flex gap-2">
        <label for="1">complete</label><input type="radio" name="1" id="1" />
      </li>
      <li class="flex gap-2">
        <label for="2">not complete</label
        ><input type="radio" name="1" id="2" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderTodos",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
