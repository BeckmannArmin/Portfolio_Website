<template>
  <div id="master" class="stage-0 h-100 w-100 position-relative isAnimating" :class="mode">
    <div class="welcome-section-wrapper w-100 position-relative">
      <div
        class="welcome-section-animated d-inline-flex w-100 h-100"
        :style="style"
      >
        <Hero />
        <About :yOffset="y" />
      </div>
    </div>
    <div id="app" class="one">
      <!-- Navbar collapsed -->
      <NavBarCollapsed />
      <!-- Navbar main -->
      <Header :mode="mode" @toggle="toggle" />
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
import Projects from "./components/sections/ProjectsV2.vue";
import Header from "./components/Header.vue";
import About from "./components/sections/AboutMe_v2.vue";
import NavBarCollapsed from "./components/HeaderCollapse.vue";
import ContactV2 from "./components/sections/ContactV2.vue";
// eslint-disable-next-line no-unused-vars
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Hero,
    About,
    Experience,
    Projects,
    ContactV2,
    NavBarCollapsed,
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
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const master = document.querySelector("#master");
    const observeElement = document.querySelector(".one");
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    function handleIntersect(entry) {
      if (entry[0].intersectionRatio > 0 && master.classList.contains('stage-1')) {
        master.classList.remove("stage-1");
        master.classList.add("stage-2");
      } else {
        master.classList.remove("stage-2");
      }
    }

    observer.observe(observeElement);
  },
  methods: {
    handleScroll() {
      const navBar = document.querySelector(".navbar");
      const master = document.querySelector("#master");

        /**
        ScrollTrigger.create({
        trigger: "#master.stage-1 #about",
        start: "top top",
        endTrigger: "#experience",
        end: "+=100%",
        onEnter: self => console.log("toggled, isActive:", self.isActive),
        });
        */

       if (window.scrollY > 10) {
            master.classList.add('stage-1');
            master.classList.remove('stage-0')
            navBar.classList.add('bg-nav');
        } else {
           navBar.classList.remove('bg-nav');
            master.classList.remove('stage-1');
            master.classList.add('stage-0');
        }

      if (master.classList.contains("stage-1") && window.scrollY > 100) {
        this.y = -window.scrollY;
      } else {
        this.y = 0;
      }
      this.transformLetters(this.y);
    },
    transformLetters(scroll) {
      const sc = document.querySelector(".sc");
      const r = document.querySelector(".r");
      const o = document.querySelector(".o");
      const l = document.querySelector(".l");
      const l1 = document.querySelector(".l1");

      /** I am */
      sc.style.transform = `translate3d(${-scroll * 0.001}px, ${
        -scroll * 0.01
      }px, 0) rotate(${-scroll * 0.0008}deg)`;

      /** creative */
      r.style.transform = `translate3d(${-scroll * 0.015}px, ${
        -scroll * 0.06
      }px, 0) rotate(${-scroll * 0.0016}deg)`;

      /** and */
      o.style.transform = `translate3d(${-scroll * 0.025}px, ${
        -scroll * 0.08
      }px, 0) rotate(${-scroll * 0.0032}deg)`;

      /** open minded developer */
      l.style.transform = `translate3d(${-scroll * 0.035}px, ${
        -scroll * 0.1
      }px, 0) rotate(${-scroll * 0.0032}deg)`;

      /** and create modern and asthetically websites */
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

/** We split our Welcome section which scrolls horizontally and our #app which scrolls vertically */
.welcome-section-wrapper {
  height: 150vh;
  background-color: $salmon;

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
    box-shadow: 0 -75px 50px $salmon;
  }

  .welcome-section-animated {
    flex-flow: row;
    position: fixed;
    z-index: 3;
    overflow: hidden;
  }
}

body,
html {
  overflow-x: hidden;
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
}

@media screen and (prefers-reduced-motion: reduce) {
	html {
		scroll-behavior: auto;
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
