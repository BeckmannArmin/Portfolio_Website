<template>
  <div id="app">
   <NavBar :mode="mode" @toggle="toggle"/>
   <Hero />
   <About />
   <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/sections/Footer.vue";
import Hero from "./components/Hero.vue";
import About from "./components/sections/AboutMe.vue";

export default {
  name: 'App',
  components: {
      NavBar,
      Footer,
      Hero,
      About
  },
    data() {
    return {
      mode: localStorage.getItem('theme-color'),
      currentTheme: ''
    }
  },
   beforeMount() {
    if (localStorage.getItem('theme-color')) {
      this.currentTheme = localStorage.getItem('theme-color')
    } else {
       this.currentTheme = localStorage.setItem('theme-color', 'light')
    }
    window.addEventListener('DOMContentLoaded', this.onLoad);
  },
   beforeDestroy() {
    window.removeEventListener('DOMContentLoaded', this.onLoad);
  },
  methods: {
    onLoad() {
      const showOnLoad = document.querySelectorAll('.revealOnLoad');
      showOnLoad.forEach((ele) => {
        ele.classList.add('animated');
        ele.classList.add('fadeInLeft');
      });
    },
      toggle() {
      const storedTheme = localStorage.getItem('theme-color');
       if(storedTheme === 'dark') {
        localStorage.setItem('theme-color', 'light');
         this.mode = "light"
        this.currentTheme = localStorage.getItem('theme-color');
      } else {
        localStorage.setItem('theme-color', 'dark');
        this.mode = "dark"
        this.currentTheme = localStorage.getItem('theme-color');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
