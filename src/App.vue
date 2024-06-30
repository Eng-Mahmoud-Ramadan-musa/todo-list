<template>
  <Header />
  <section
    class="w-full bg-slate-300 h-[83vh] sm:h-[85vh] overflow-hidden text-center"
  >
    <router-view />
  </section>
  <footer>
    <p class="text-lg text-center sm:text-left">
      copyright @
      <strong class="text-red-500 font-extrabold">mahmoud ramadan</strong>
    </p>
    <ul class="flex justify-center gap-5">
      <li class="hover:scale-105 ease-linear duration-200">
        <a href="https://www.facebook.com/profile.php?id=100007283614477"
          ><i class="fa-brands fa-facebook icon text-blue-700 text-xl"></i
        ></a>
      </li>
      <li class="hover:scale-105 ease-linear duration-200">
        <a href="mailto:hodaramadan199@gmail.com">
          <i class="fa-solid fa-envelope text-xl text-black"></i>
        </a>
      </li>
      <li class="hover:scale-105 ease-linear duration-200">
        <a href="https://wa.me/+201129780862"
          ><i
            class="fa-brands fa-whatsapp font-extrabold text-xl text-green-600"
          ></i>
        </a>
      </li>
    </ul>
  </footer>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
};
</script>

<style>
footer {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
}
@media (min-width: 640px) {
  footer {
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 5%;
  }
}
</style>
