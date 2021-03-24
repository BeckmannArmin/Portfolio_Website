<template>
  <div id="master" class="stage-0 h-100 w-100 position-relative" :class="mode">
    <Preloader />
    <div class="welcome-section-wrapper w-100 position-relative">
      <div class="welcome-section-animated d-inline-flex w-100 h-100">
        <Hero @toggle="toggle" />
        <About />
      </div>
    </div>
    <div id="app">
     <Header />
      <!-- NavBarCollapse collapsed -->
      <NavBarCollapse />
      <Experience />
      <Projects />
      <ContactV2 />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./components/sections/Footer.vue";
import Hero from "./components/Hero.vue";
import Experience from "./components/sections/Experience.vue";
import Projects from "./components/sections/Projects.vue";
import About from "./components/sections/AboutMe_v2.vue";
import NavBarCollapse from "./components/HeaderCollapse.vue";
import ContactV2 from "./components/sections/modals/ContactModal.vue";
import Preloader from "./components/Preloader.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Footer,
    Hero,
    About,
    Experience,
    Projects,
    ContactV2,
    NavBarCollapse,
    Preloader,
    Header
  },
  data() {
    return {
      mode: localStorage.getItem("theme-color"),
      currentTheme: "",
      y: 0,
    };
  },
  computed: {
    style() {
      return {
        transform: "translateY(" + this.y + "px)",
      };
    },
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
  mounted() {
this.setToggleBtnState();
  },
  methods: {
         setToggleBtnState() {
      const sun = document.querySelector(".sun");
      const moon = document.querySelector(".moon");
      sun.classList.toggle("visible");
      moon.classList.toggle("visible");
      if (localStorage.getItem("theme-color") === "light") {
        sun.classList.add("visible");
        moon.classList.remove("visible");
      } else {
        moon.classList.add("visible");
        sun.classList.remove("visible");
      }
    },
    onLoad() {
      const header = document.querySelector(".main-nav");
      const loader = document.querySelector("#preloader");
      const wrapper = document.querySelector(".welcome-section-wrapper");
      const shapes = document.querySelector("#shapes");
      setTimeout(() => {
        loader.classList.add("leave");
        wrapper.classList.add("enter");
      }, 1500);

      setTimeout(() => {
        shapes.classList.add("loaded");
        header.classList.add("loaded");
      }, 3500);
    },
    handleScroll() {
      const header = document.querySelector(".main-nav");
      var elmnt = document.querySelector("#hero");
      var offSet = elmnt.offsetHeight;
      const master = document.querySelector("#master");

      if (window.scrollY > 10) {
          header.classList.add("hidden");
      } else {
          header.classList.remove("hidden");
      }

      if (window.scrollY > offSet) {
        master.classList.add("stage-1");
        master.classList.remove("stage-0");
      } else {
        master.classList.remove("stage-1");
        master.classList.add("stage-0");
      }

      if (master.classList.contains("stage-1")) {
        this.y = -window.scrollY;
      } else {
        this.y = -window.scrollY;
      }
      let secondSectionScroll = this.y + offSet;
      if (secondSectionScroll < 0) {
        //this.transformLetters(secondSectionScroll);
        //this.transformAboutContent(secondSectionScroll);
      }
    },
    transformAboutContent(scroll) {
      const aboutContent = document.querySelector("#about-content");
      aboutContent.style.transform = `translate3d(0, ${-scroll}px, 0)`;
    },
    transformLetters(scroll) {
      const sc = document.querySelector(".sc");
      const r = document.querySelector(".r");
      const o = document.querySelector(".o");
      const l = document.querySelector(".l");
      const l1 = document.querySelector(".l1");
      sc.style.transform = `translate3d(${-scroll * 0.001}px, ${
        -scroll * 0.01
      }px, 0) rotate(${-scroll * 0.0008}deg)`;
      r.style.transform = `translate3d(${-scroll * 0.015}px, ${
        -scroll * 0.06
      }px, 0) rotate(${-scroll * 0.0016}deg)`;
      o.style.transform = `translate3d(${-scroll * 0.025}px, ${
        -scroll * 0.08
      }px, 0) rotate(${-scroll * 0.0032}deg)`;
      l.style.transform = `translate3d(${-scroll * 0.035}px, ${
        -scroll * 0.1
      }px, 0) rotate(${-scroll * 0.0032}deg)`;
      l1.style.transform = `translate3d(${-scroll * 0.045}px, ${
        -scroll * 0.1
      }px, 0) rotate(${-scroll * 0.0032}deg)`;
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
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap");

/** We split our Welcome section which scrolls horizontally and our #app which scrolls vertically */
.welcome-section-wrapper {
  height: 150vh;
  background-color: $fuchsia;

  transition: opacity 0.475s ease-in-out,
    transform 0.45s cubic-bezier(1, 0, 0, 1), border-radius 0.35s ease-in-out !important;
  opacity: 0;

  &.enter {
    opacity: 1;
  }

  &:after {
    content: "";
    background-image: url(./assets/background.svg),
      linear-gradient(0deg, #fff, #fff);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    height: 8vw;
    width: 100%;
    display: block;
    position: absolute;
    bottom: -1px;
    z-index: 3;
    box-shadow: 0 -75px 50px $fuchsia;
  }

  .welcome-section-animated {
    flex-flow: row;
    position: fixed;
    z-index: 3;
    overflow: hidden;
  }
}

body::-webkit-scrollbar {
  width: 6px;
  background-color: #171a1d;
  border-radius: 3px;
}
body::-webkit-scrollbar-track {
  background-color: #171a1d;
}
body::-webkit-scrollbar-thumb {
  border-radius: 6px;
  border: 0;
  background-color: $frog-green;
}

body {
  background-color: $fuchsia !important;
}

body,
html {
  overflow-x: hidden;
  font-family: "Poppins", sans-serif !important;
}

/** We set a font size of 62.5% what gives us 10px in relation */
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  overflow-y: scroll;
}
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-main;
  font-size: 62.5%;

  p {
    font-family: "Roboto Slab", serif;
  }
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
.welcome-section-wrapper {
  height: auto !important;
  .welcome-section-animated {
    position: relative !important;
    flex-direction: column !important;
  }
}

@media (max-width: 56.25em) {
  .welcome-section-wrapper {
    height: auto !important;
    &:after {
      display: none;
      content: none;
    }
    .welcome-section-animated {
      position: relative !important;
      transform: translateZ(0) !important;
      flex-direction: column !important;

      #hero,
      #about {
        transform: none !important;
        position: relative !important;
      }
    }
  }
}

/** Dark mode */
.dark {
  .welcome-section-wrapper {
    background: $bg-black;
    &:after {
      background-image: url(./assets/background-dark.svg),
        linear-gradient(135deg, #191919, #181818);
      box-shadow: 0 -75px 50px #111111;
    }
  }
  #app {
    color: $text-color-dark;
  }
}
</style>
