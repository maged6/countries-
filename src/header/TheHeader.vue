<template>

<header class="head">

  <div class="container"> 

    <div class="item"> <h3 class="font-header">Where in the world? </h3>  </div>


    <div class="item1">
          <button class="btn-darkMode" @click="darkModeToggling"> 
            <strong>    <font-awesome-icon icon="fa-solid fa-moon"></font-awesome-icon>
          Dark mode  </strong>
            </button> 
    </div>

  </div>

</header>

</template>


<script>
export default {
  methods: {
    darkModeToggling() {
      const theme = localStorage.getItem("theme");
      if (theme === "light") {
        this.enableDarkMode();
      } else {
        this.disableDarkMode();
      }
    },
    enableDarkMode() {
      window.localStorage.setItem("theme", "dark");
      document.body.classList.add("dark-mode");
    },

    disableDarkMode() {
      window.localStorage.setItem("theme", "light");
      document.body.classList.remove("dark-mode");
    },
    enableThemeOnreload() {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        this.enableDarkMode();
      } else {
        this.disableDarkMode();
      }
    },
  },
  mounted() {
    this.enableThemeOnreload();
  },
};
</script>