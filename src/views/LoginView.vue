<template>
  <div class="flex items-center justify-center w-full h-full px-[5%]">
    <div class="form w-full h-[60vh] sm:w-1/2 lg:w-2/5 sm:h-[70vh] p-5">
      <h2 class="font-bold text-2xl text-white">login</h2>
      <input
        class="w-full"
        type="text"
        v-model="textName"
        placeholder="user name"
      />
      <input
        class="w-full"
        type="password"
        v-model="textPass"
        placeholder="user password"
      />
      <button type="submit" @click="checkDataUser(textName, textPass)">
        login
      </button>
      <div>
        <p>password forget ?</p>
        <router-link
          to="/signup"
          class="hover:scale-105 hover:text-white duration-200 ease-linear"
          >singup</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      textName: "",
      textPass: "",
    };
  },
  methods: {
    checkDataUser(name, password) {
      this.$store.dispatch("checkDataUser", { name, password });
      this.textName = "";
      this.textPass = "";
    },
  },
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    rgb(247, 32, 211) 70%,
    rgba(162, 162, 163, 0.4) 20%
  );
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 500px;
  height: 95%;
  gap: 20px;
  padding-inline: 20px;
  input {
    width: 90%;
    border: 1px solid;
    border-radius: 8px;
    padding-left: 10px;
    transition: 0.4s;
    &:focus,
    &:hover {
      transform: scale(1.1);
      outline: none;
    }
  }
  button {
    border: 1px solid;
    border-radius: 8px;
    padding: 1px 10px;
    background-color: red;
    color: #fff;
    font-weight: bold;
    font-size: 1.3rem;
    transition: 0.4s;
    a {
      color: #fff;
      text-decoration: none;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}

@media (max-width: 550px) {
  .con {
    > div:first-child {
      width: 110%;
      height: 75%;
    }
  }
}
</style>
