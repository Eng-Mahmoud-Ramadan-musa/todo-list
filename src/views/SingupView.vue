<template>
  <div class="flex items-center justify-center w-full h-full px-[5%]">
    <div class="form w-full h-[60vh] sm:w-1/2 sm:h-[70vh] lg:w-2/5 p-5">
      <h2 class="font-bold text-2xl text-white">signup</h2>
      <input type="text" v-model="textName" placeholder="user name" />
      <input type="email" v-model="textEmail" placeholder="user email" />
      <input type="password" v-model="textPass" placeholder="user password" />
      <div
        class="relative flex justify-content-center align-items-center w-75 p-1 hover:scale-105 duration-200 ease-linear"
        @change="handleFileSelect"
      >
        <input
          type="file"
          id="image"
          accept="image/*"
          required
          class="border-0 ml-4 hover:scale-90"
        />
        <i
          class="fa-solid fa-image absolute top-[6px] px-1 right-[7%] sm:right-[10%] text-xl z-40"
        ></i>
      </div>
      <button
        type="submit"
        @click="saveDataUser(textName, textEmail, textPass, this.image)"
      >
        Create User
      </button>
      <div>
        <p>password forget ?</p>
        <router-link
          to="/login"
          class="hover:scale-105 hover:text-white duration-200 ease-linear"
          >login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
      textName: "",
      textPass: "",
      textEmail: "",
    };
  },
  methods: {
    saveDataUser(name, email, password, image) {
      this.$store.dispatch("saveDataUser", { name, email, password, image });
      this.textName = "";
      this.textPass = "";
      this.textEmail = "";
    },
    handleFileSelect(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
          const imageLocation = file.name;
          console.log("Image location:", imageLocation);
        };
        image.onerror = () => {
          console.error("Failed to load image.");
        };
        image.src = event.target.result;
        this.image = image.src;
      };

      reader.onerror = () => {
        console.error("Failed to read file.");
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="scss" scoped></style>
