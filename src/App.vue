<template>
    <div id="master" class="stage-1">
        <div class="hybrid-section-container">
            <div class="hybrid-section" style="transform: translate3d(10px, 1000px, 10px);">
                <Hero />
                <AboutV2 />
            </div>
        </div>
  <div id="app">
    <Header />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer :mode="mode" @toggle="toggle" />
  </div>
    </div>
</template>

<script>
import Footer from "./components/sections/Footer.vue";
import Hero from "./components/Hero.vue";
import About from "./components/sections/AboutMe.vue";
import Experience from "./components/sections/Experience.vue";
import Projects from "./components/sections/ProjectsV2.vue";
import Header from "./components/Header.vue";
import Contact from "./components/sections/Contact.vue";
import AboutV2 from "./components/sections/AboutMe_v2.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Hero,
    About,
    Experience,
    Projects,
    Contact,
    AboutV2
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
      handleAnim: function (evt, el) {
      if (window.scrollY > 10) {
        el.setAttribute(
          'style',
          'transform: translate3d(0, 0px, 0)'
        )
      }
      return window.scrollY > 100
    },
    handleScroll() {
        const navBar = document.querySelector('.navbar');
        const master = document.querySelector('#master');
        if (window.scrollY > 10) {
            master.classList.add('stage-1');
            master.classList.remove('stage-0')
            navBar.classList.add('bg-nav');
        } else {
           navBar.classList.remove('bg-nav');
            master.classList.remove('stage-1');
            master.classList.add('stage-0');
        }
    },
    onLoad() {
      const showOnLoad = document.querySelectorAll(".revealOnLoad");
      const showMaster = document.querySelector('#master');
      showMaster.classList.add('enter');
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

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap");

.hybrid-section-container {
    position: relative;
    height: 200vh;
    width: 100%;

    &:after {
        content: "";
    background-image: url(./assets/background.svg),linear-gradient(
0deg
,#fff,#fff);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    height: 8vw;
    width: 100%;
    display: block;
    position: absolute;
    bottom: -1px;
    z-index: 3;
    box-shadow: 0 -75px 50px #e91e63;

    }

    .hybrid-section {
        position: fixed;
        display: inline-flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        z-index: 3;
        overflow: hidden;
    }
}

html {
 font-size: 62.5%;
}
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 62.5%;

}

#master {
    height: 100%;
    width: 100%;
    position: relative;
        transition: opacity .475s ease-in-out,transform .45s cubic-bezier(1,0,0,1),border-radius .35s ease-in-out!important;
    opacity: 0;
    border-radius: 6px;
    z-index: 972;
}

#master.enter {
    opacity: 1;
}
</style>
