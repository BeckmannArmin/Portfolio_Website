<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer :mode="mode" @toggle="toggle" />
  </div>
</template>

<script>
import Footer from "./components/sections/Footer.vue";
import Hero from "./components/Hero.vue";
import About from "./components/sections/AboutMe.vue";
import Experience from "./components/sections/Experience.vue";
import Projects from "./components/sections/Projects.vue";
import Header from "./components/Header.vue";
import Contact from "./components/sections/Contact.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Hero,
    About,
    Experience,
    Projects,
    Contact
  },
  data() {
    return {
      mode: localStorage.getItem("theme-color"),
      currentTheme: "",
    };
  },
  beforeMount() {
    if (localStorage.getItem("theme-color")) {
      this.currentTheme = localStorage.getItem("theme-color");
    } else {
      this.currentTheme = localStorage.setItem("theme-color", "light");
    }
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("DOMContentLoaded", this.onLoad);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("DOMContentLoaded", this.onLoad);
  },
  methods: {
    handleScroll() {
        const navBar = document.querySelector('.navbar');
        if (window.scrollY > 10) {
            navBar.classList.add('bg-nav');
        } else {
            navBar.classList.remove('bg-nav')
        }
    },
    onLoad() {
      const showOnLoad = document.querySelectorAll(".revealOnLoad");
      showOnLoad.forEach((ele) => {
        ele.classList.add("animated");
        ele.classList.add("fadeInLeft");
      });
    },
    toggle() {
      const storedTheme = localStorage.getItem("theme-color");
      if (storedTheme === "dark") {
        localStorage.setItem("theme-color", "light");
        this.mode = "light";
        this.currentTheme = localStorage.getItem("theme-color");
      } else {
        localStorage.setItem("theme-color", "dark");
        this.mode = "dark";
        this.currentTheme = localStorage.getItem("theme-color");
      }
    },
  },
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
