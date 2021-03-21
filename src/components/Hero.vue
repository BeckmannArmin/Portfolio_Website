<template>
  <div id="hero" class="jumbotron">
    <ShapesMask />
    <SocialsOverlay />
    <!-- My personal logo -->
    <div class="brand">
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol id="logo" viewBox="0 0 848.48 722.27">
          <path
            d="M296 86.74a4.42 4.42 0 006.14 1c95.45-69.14 181.53-44.61 221.56 8.09 40.81 53.72 41.38 145-52.59 219.71a4.42 4.42 0 00-.74 6.17l22.27 28.83a4.13 4.13 0 005.83.73c51.78-41 84.12-90.87 93.63-144.44 8.84-49.85-2.73-98.94-32.57-138.22C530 29.67 486.4 5.63 436.86.87 383.74-4.24 328 13.27 275.31 51.54a4.45 4.45 0 00-1 6.26zM847.74 448.1c-6.32-74-52.48-139.72-120.47-171.43-36.46-17-77.78-23.38-119.47-18.44a4.21 4.21 0 00-3.44 2.7A218.27 218.27 0 01584 301.24a4.2 4.2 0 004.54 6.36c42-10.25 83.22-7.16 119.73 9.86 53.42 24.91 89.73 76.44 94.63 134.47 5.86 68.63-31 134.23-103.75 184.75-2.22 1.47-72.82 47.13-182.89 16.86a4.21 4.21 0 00-5.14 2.89L501 691.59a4.2 4.2 0 002.9 5.21 323.65 323.65 0 0086.52 12.11c81.38 0 131.4-33.19 134.14-35l.17-.12c44.6-30.94 77.86-67.26 98.86-108 19.17-37.28 27.54-77.97 24.15-117.69z"
          />
          <path
            d="M380.91 385.18a4 4 0 00-5.53-.75L101.27 592.78a4 4 0 01-6.1-4.5l152.92-418.54a3.94 3.94 0 016.83-1.05l356.17 462.78a4 4 0 005.53.72L646 609.56a4 4 0 00.72-5.54l-406-527.58a3.94 3.94 0 00-6.83 1.06L.26 717a3.94 3.94 0 006.09 4.49l396.26-301.24a4 4 0 00.76-5.53z"
          />
        </symbol>
      </svg>
      <svg class="logo-white logo-large">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#logo"
        ></use>
      </svg>
    </div>
    <!-- Hero title and subtitle -->
    <div class="main-hero-text">
      <div class="container">
        <div class="text-loading-mask">
          <div class="text-loading-overlay"></div>
          <h2 class="text-color-main">Armin Beckmann</h2>
        </div>
        <div>
          <div class="text-loading-mask">
              <div class="text-loading-overlay"></div>
            <div class="intro">
              <span class="introRipple">{{
                $t("hero.introduction.frontend")
              }}</span>
              <button
                id="rippleBtn"
                type="button"
                class="ripple-btn"
                @click="toggleDarkMode"
              >
                <div class="sun"></div>
                <div class="moon">
                  <div class="star"></div>
                  <div class="star small"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShapesMask from "../components/ShapesMask.vue";
import SocialsOverlay from "../components/SocialsOverlay.vue";
import baffle from "baffle";

export default {
  props: ["mode"],
  components: {
    ShapesMask,
    SocialsOverlay,
  },
  mounted() {
    const b = baffle(".introRipple", {
      characters: "▒█/ ░▓<▓▒ █▓█░▒ █░░ ▒█▓░█ ░▓<▒ ░/█ /█▒█ ░░▓█",
    });

    b.start();
    setTimeout(() => {
      b.reveal(6000);
    }, 4500);
  },
  methods: {
    toggleDarkMode() {
      /**TODO: add them in css */
      const sun = document.querySelector(".sun");
      const moon = document.querySelector(".moon");
      sun.classList.toggle("visible");
      moon.classList.toggle("visible");

      this.$emit("toggle");
    },
    toggleContactModal() {
      const contactModal = document.querySelector(".about-contact");
      contactModal.classList.add("isopen");
    },
  },
};
</script>

<style lang="scss" scoped>
/**
#master.stage-0 {
  transform: translateX(0);
  color: $black;
}
#master.stage-1 #hero,
#master.stage-2 #hero {
  transform: translateX(105vw);
}
*/

.dark {
  #hero {
    background: $hero-bg-gradient;
    .brand {
      .logo-white {
        fill: $white;
      }
    }

    .hero-title {
      .intro {
        color: $white;
      }
    }
  }
}

#hero {
  /** disable transformations */
  position: relative !important;
  transform: none !important;

  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 0;
  font-weight: 400;
  color: #ebebeb;
  background: #ebebeb;
  padding: 0 5.6rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  transition: transform 1s cubic-bezier(1, 0, 0, 1);

  .main-hero-text {
    position: absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    transition: color 0.3s ease, opacity 0.3s ease 0.65s;
    z-index: 7;
  }

  .brand {
    position: absolute;
    left: 50%;
    z-index: 3;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    .logo-white {
      fill: $modal-bg;
    }

    .logo-large {
      transform: scale(2);
    }
  }

  h2 {
    font-size: 6.2rem;
    font-weight: 700;
    -webkit-animation: mainFadeIn 2s forwards;
    -o-animation: mainFadeIn 2s forwards;
    animation: mainFadeIn 2s forwards;
    animation-delay: 3s;
    opacity: 0;

    &.text-color-main {
      background: $hero-title-gradient;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;

      background: -moz-linear-gradient(
        135deg,
        $fuchsia,
        $fuchsia_light
      ); /* FF3.6+ */

      background: -webkit-gradient(
        135deg,
        $fuchsia,
        $fuchsia_light
      ); /* Chrome,Safari4+ */

      background: -webkit-linear-gradient(
        135deg,
        $fuchsia,
        $fuchsia_light
      ); /* Chrome10+,Safari5.1+ */

      background: -o-linear-gradient(
        135deg,
        $fuchsia,
        $fuchsia_light
      ); /* Opera 11.10+ */

      background: -ms-linear-gradient(
        135deg,
        $fuchsia,
        $fuchsia_light
      ); /* IE10+ */
    }
  }

  .text-loading-mask {
    .text-loading-overlay {
      display: none;

      &.reveal {
        opacity: 1;
        -webkit-transform: translateX(105%);
        transform: translateX(105%);
      }
    }
  }

  .intro {
    font-size: 3rem;
    display: inline-flex;
    color: $modal-bg;
    font-weight: 700;

    .ripple-btn {
      width: 42px;
      height: 42px;
      transform: scale(0.85);
      box-sizing: border-box;
      padding: 12px;
      background: none;
      border: none;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .sun {
        width: 50%;
        height: 50%;
        position: absolute;
        pointer-events: none;
        opacity: 0;
        transform: scale(0.6) rotate(0deg);
        transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
        /*  white transparent for Safari  */
      }
      .sun:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background: #ffde00;
        transform: rotate(45deg);
        border-radius: 50%;
        box-shadow: 0 0 0 4.2px #e9b23a80, 0 0 0 8.8px #e9b23a60,
          0 0 0 10.15px #e9b23a40, 0 0 0 12px #e9b23a20, 0 0 0 21px #e9b23a00,
          0 0 8px 21px #e9b23a10;
        animation: sunrise 2s infinite linear forwards,
          rays 2s 2s infinite linear;
      }

      .sun.visible {
        pointer-events: auto;
        opacity: 1;
        transform: scale(1) rotate(180deg);
        transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
      }
      .moon {
        width: 50%;
        height: 50%;
        pointer-events: none;
        position: absolute;
        left: 12.5%;
        top: 18.75%;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 50%;
        box-shadow: 9px 3px 0px 0px rgb(255, 217, 0);
        opacity: 0;
        transform: scale(0.3) rotate(65deg);
        transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
      }
      .moon.visible {
        pointer-events: auto;
        opacity: 1;
        transform: scale(1) rotate(0deg);
        transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
      }
      .star {
        position: absolute;
        top: 25%;
        left: 5%;
        display: block;
        width: 0px;
        height: 0px;
        border-right: 7px solid rgba(0, 0, 0, 0);
        border-bottom: 5px solid #ffcf96;
        border-left: 7px solid rgba(0, 0, 0, 0);
        transform: scale(0.55) rotate(35deg);
        opacity: 0;
        transition: all 0.2s ease-in 0.4s;
      }
      .star:before {
        border-bottom: 5px solid #ffcf96;
        border-left: 3px solid rgba(0, 0, 0, 0);
        border-right: 3px solid rgba(0, 0, 0, 0);
        position: absolute;
        height: 0;
        width: 0;
        top: -3px;
        left: -5px;
        display: block;
        content: "";
        transform: rotate(-35deg);
      }
      .star:after {
        position: absolute;
        display: block;
        color: #ffcf96;
        top: 0px;
        left: -7px;
        width: 0px;
        height: 0px;
        border-right: 7px solid rgba(0, 0, 0, 0);
        border-bottom: 5px solid #ffcf96;
        border-left: 7px solid rgba(0, 0, 0, 0);
        transform: rotate(-70deg);
        content: "";
      }
      .moon.visible .star {
        opacity: 0.8;
      }
      .star.small {
        transform: scale(0.35) rotate(35deg);
        position: relative;
        top: 50%;
        left: 37.5%;
        opacity: 0;
        transition: all 0.2s ease-in 0.45s;
      }
      .moon.visible .star.small {
        opacity: 0.7;
        transform: scale(0.45) rotate(35deg);
      }
    }
  }
}

@keyframes sunrise {
  0% {
    box-shadow: none;
  }
}

@keyframes rays {
  0% {
    box-shadow: 0 0 0 0px #e9b23a80, 0 0 0 4.4px #e9b23a40,
      0 0 0 5.05px #e9b23a20, 0 0 0 8px #e9b23a10, 0 0 0 18px #e9b23a00,
      0 0 8px 21px #e9b23a10;
  }

  100% {
    box-shadow: 0 0 0 4.2px #e9b23a80, 0 0 0 8.8px #e9b23a60,
      0 0 0 10.15px #e9b23a40, 0 0 0 12px #e9b23a20, 0 0 0 21px #e9b23a00,
      0 0 8px 21px #e9b23a10;
  }
}

@keyframes animate {
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/** Media queries */
@media (max-width: 75em) {
  #hero {
    .hero-title {
      font-size: 4rem;

      .title {
        width: 100%;
        h2 {
          font-size: 5rem;
        }
      }
    }
  }
}

@media (min-width: 64em) {
  #hero .text-loading-mask {
    display: inline-block;
    position: relative;
    padding-top: 10px;
    padding-right: 10px;
    overflow: hidden;
    transition: all 0.2s ease;
    .text-loading-overlay {
      display: block;
      position: absolute;
      top: -10px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      -webkit-transform: translateX(0);
      transform: translateX(0);
      transition: -webkit-transform 0.65s cubic-bezier(0.694, 0.048, 0.335, 1);
      transition: transform 0.65s cubic-bezier(0.694, 0.048, 0.335, 1);
      transition: transform 0.65s cubic-bezier(0.694, 0.048, 0.335, 1),
        -webkit-transform 0.65s cubic-bezier(0.694, 0.048, 0.335, 1);
      z-index: 60;
    }
  }
}

@media (max-width: 56.25em) {
  #hero {
    .brand {
      .logo-large {
        transform: scale(1);
      }
      svg {
        width: 100%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    h2 {
      font-size: 4.4rem;
    }
  }
}
@media (max-width: 37.5em) {
  #hero {
    padding: 0 1.6rem;
    font-size: 3.5rem;
    line-height: 1.5;

    h2 {
      font-size: 3.5rem;
    }

    .intro {
      font-size: 2.5rem;
    }
  }
}

@media (max-width: 20em) {
  #hero {
    font-size: 2.8rem;
    h2.text-color-main {
      font-size: 2.8rem;
    }
    .intro {
      font-size: 2rem;
    }
  }
}
</style>
