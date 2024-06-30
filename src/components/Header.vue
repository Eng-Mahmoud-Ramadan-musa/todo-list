<template>
  <div class="flex justify-between items-center py-2 bg-white text-black px-5">
    <span
      class="text-red-500 font-bold hover:scale-105 duration-200 cursor-pointer text-2xl uppercase w-full"
      >Todo-List</span
    >
    <div class="flex gap-4 items-center text-lg font-medium">
      <router-link
        to="/"
        class="flex gap-1 hover:scale-105 duration-200 items-center"
      >
        <span>Home</span>
        <i class="fas fa-home"></i>
      </router-link>
      <router-link
        v-if="$store.state.addUser == ''"
        to="/login"
        class="flex gap-1 hover:scale-105 duration-200 items-center"
      >
        <span class="hidden sm:block">Login</span>
        <i class="fas fa-user-circle"></i>
      </router-link>
      <router-link
        v-else
        to="/login"
        class="relative flex-col gap-1 hover:scale-105 duration-200 items-center"
      >
        <div class="h-8 w-8 overflow-hidden">
          <img
            v-if="$store.state.addUser !== ''"
            class="p-px h-full w-full rounded-full border-2 border-white"
            :src="$store.state.addUser.image"
            alt="User Image"
          />
          <i v-else class="fas fa-user-circle"></i>
        </div>
      </router-link>
      <span
        class="cursor-pointer flex flex-nowrap justify-center items-center gap-1"
        @click="$store.dispatch('logout')"
      >
        <i class="fas fa-right-from-bracket"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

<style lang="scss">
a {
  text-transform: capitalize;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  text-align: start;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
