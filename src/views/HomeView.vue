<template>
  <div class="main">
    <Create />
    <HeaderTodos />
    <Todos />
  </div>
</template>

<script>
import Create from "./../components/Create.vue";
import HeaderTodos from "./../components/HeaderTodos.vue";
import Todos from "./../components/Todos.vue";
export default {
  components: {
    Create,
    HeaderTodos,
    Todos,
  },
};
</script>

<style></style>
