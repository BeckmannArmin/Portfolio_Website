<template>
  <div id="app">
   <Hero />
   <About />
   <Resume />
   <Projects />
   <Footer :mode="mode" @toggle="toggle"/>
  </div>
</template>

<script>
import Footer from "./components/sections/Footer.vue";
import Hero from "./components/Hero.vue";
import About from "./components/sections/AboutMe.vue";
import Resume from "./components/sections/Resume.vue";
import Projects from "./components/sections/Projects.vue";

export default {
  name: 'App',
  components: {
      Footer,
      Hero,
      About,
      Resume,
      Projects
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
