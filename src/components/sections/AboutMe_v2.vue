<template>
  <section id="about" class="d-flex position-absolute">
    <div
      class="d-flex justify-content-center flex-column w-100"
      id="about-content"
    >
      <div class="content d-inline-flex flex-row">
        <div class="sc" style="transform: translate3d(0, 0, 0)">
          <span>{{ $t("about.openminded.start") }}</span>
        </div>
        <div class="r" style="transform: translate3d(0, 0, 0)">
          <span class="outline" @mouseover="playShapes">{{
            $t("about.openminded.creative")
          }}</span>
        </div>
        <div class="o" style="transform: translate3d(0, 0, 0)">
          <span>{{ $t("about.openminded.middle") }}</span>
        </div>
        <div class="l" style="transform: translate3d(0, 0, 0)">
          <span class="info-text-colored">{{
            $t("about.openminded.open")
          }}</span>
        </div>
        <div class="l1" style="transform: translate3d(0, 0, 0)">
          <span>{{ $t("about.openminded.try") }}</span>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 350">
      <g id="shapes-about">
        <polygon
          opacity="0"
          points="225.21 302.93 225.12 298.23 229.82 298.13 229.75 294.63 225.05 294.72 224.96 290.02 221.45 290.09 221.54 294.79 216.84 294.88 216.91 298.39 221.61 298.3 221.71 303 225.21 302.93"
          fill="none"
          stroke="#88d3d1"
          stroke-miterlimit="10"
          stroke-width="2"
        ></polygon>
        <polygon
          opacity="0"
          points="233.72 295.83 227.68 294 229.5 287.95 224.99 286.58 223.16 292.63 217.11 290.81 215.75 295.32 221.8 297.15 219.97 303.2 224.48 304.56 226.31 298.51 232.36 300.34 233.72 295.83"
          fill="none"
          stroke="#dd859c"
          stroke-miterlimit="10"
          stroke-width="2"
        ></polygon>
        <circle
          opacity="0"
          cx="220.1"
          cy="293.5"
          r="6.69"
          fill="none"
          stroke="#dd859c"
          stroke-miterlimit="10"
        ></circle>
        <polygon
          opacity="0"
          points="218.94 298.75 229.2 291.98 218.22 286.49 218.94 298.75"
          fill="none"
          stroke="#a3b2e5"
          stroke-miterlimit="10"
          stroke-width="2"
        ></polygon>
        <polygon
          opacity="0"
          points="218.8 294.79 228.32 302.56 230.28 290.44 218.8 294.79"
          fill="none"
          stroke="#f2c5c2"
          stroke-miterlimit="10"
          stroke-width="2"
        ></polygon>
        <polyline
          opacity="0"
          points="205.5 300.65 210.41 302.31 211.13 297.17 216.04 298.83 216.75 293.69 221.67 295.35 222.39 290.21 227.31 291.86 228.03 286.72"
          fill="none"
          stroke="#f9e4ac"
          stroke-miterlimit="10"
        ></polyline>
        <g opacity="0" fill="#a693d1">
          <path
            d="M225.72 300.36v-1.85l5.25-1.88-5.25-1.87v-1.85l7.65 2.81v1.83zM207.71 297.55v-1.83l7.64-2.81v1.85l-5.25 1.87 5.25 1.88v1.85zM222.47 291h1.59l-4.64 11.78h-1.6z"
          ></path>
        </g>
        <g opacity="0" fill="#6fb6c6">
          <path
            d="M216.07 295l-.61 2.58c-.33 1.43 0 2 .91 2.24l.43.12-.67 2.3-1.52-.45a2.88 2.88 0 01-2.19-3.71l.78-3.48c.26-1.2.09-1.63-1-2l.67-2.29c1.14.33 1.52.06 1.94-1.09l1.19-3.32a2.89 2.89 0 013.85-1.94l1.52.45-.67 2.29-.43-.13c-1-.28-1.48 0-2 1.39l-.88 2.51a2.27 2.27 0 01-2.43 1.75 2.29 2.29 0 011.11 2.78zM225.72 292.91l.61-2.59c.33-1.43 0-2-.91-2.23L225 288l.67-2.3 1.52.45a2.88 2.88 0 012.19 3.71l-.78 3.48c-.26 1.2-.09 1.64 1 2l-.67 2.29c-1.15-.33-1.52-.05-1.95 1.1l-1.17 3.27a2.89 2.89 0 01-3.81 2l-1.52-.44.67-2.3.43.13c1 .28 1.48 0 2-1.39l.88-2.51a2.3 2.3 0 012.44-1.75 2.28 2.28 0 01-1.18-2.83z"
          ></path>
        </g>
        <g opacity="0" fill="#88d3d1">
          <path
            d="M218.62 299.26l2.6 1.59a5.12 5.12 0 017-1.89l.42-.69 1.26-2.06a7.82 7.82 0 00-6-.86 8.71 8.71 0 00-5.28 3.91z"
          ></path>
          <path
            d="M218.71 292.2a14.25 14.25 0 00-4.33 4.47l2.6 1.59a10.85 10.85 0 014.74-4.22 9.78 9.78 0 019.24.44l1.68-2.75a13 13 0 00-13.93.47zM222.93 301.9l2.53 1.55 1.64-2.67a3.05 3.05 0 00-4.17 1.12z"
          ></path>
        </g>
        <g
          opacity="0"
          fill="none"
          stroke="#fcebb6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
            d="M219.32 286.24a9.49 9.49 0 01-9.49 9.5M219.32 286.24a9.49 9.49 0 009.49 9.5M219.32 305.29a9.49 9.49 0 00-9.49-9.49M219.32 305.29a9.49 9.49 0 019.49-9.49"
          ></path>
        </g>
        <circle
          opacity="0"
          cx="216.63"
          cy="290.87"
          r="7.06"
          fill="none"
          stroke="#d6a0e0"
          stroke-miterlimit="10"
          stroke-width="2"
        ></circle>
        <polyline
          opacity="0"
          points="220.15 280.66 216.99 289.5 226.3 288.31 223.15 297.14 232.46 295.96 229.31 304.8"
          fill="none"
          stroke="#f9e4ac"
          stroke-miterlimit="10"
          stroke-width="2"
        ></polyline>
        <circle
          opacity="0"
          cx="222.48"
          cy="295.66"
          r="5.77"
          fill="none"
          stroke="#88d3d1"
          stroke-miterlimit="10"
          stroke-width="2"
        ></circle>
        <polygon
          opacity="0"
          points="227.62 300.56 225.05 294.72 230.89 292.15 228.97 287.79 223.13 290.36 220.56 284.52 216.2 286.44 218.77 292.28 212.93 294.85 214.85 299.21 220.69 296.64 223.26 302.48 227.62 300.56"
          fill="none"
          stroke="#88d3d1"
          stroke-miterlimit="10"
          stroke-width="2"
        ></polygon>
        <g opacity="0" fill="#a693d1">
          <path
            d="M224.4 300.1l1.08 1.95c.6 1.07 1.06 1.24 1.78.89l.33-.16.87 1.8-1.15.56A2.36 2.36 0 01224 304l-1.47-2.6c-.51-.89-.85-1.07-1.71-.65l-.88-1.8c.87-.42.94-.8.55-1.75l-1.14-2.77a2.37 2.37 0 011.21-3.33l1.15-.55.87 1.8-.33.16c-.72.35-.87.82-.4 1.95l.87 2.05a1.9 1.9 0 01-.47 2.43 1.89 1.89 0 012.15 1.16zM229 293.48l-1.07-2c-.6-1.07-1.06-1.24-1.78-.89l-.33.16-.88-1.81 1.15-.55a2.37 2.37 0 013.37 1.11l1.46 2.6c.51.89.85 1.07 1.72.65l.87 1.8c-.86.42-.93.8-.55 1.75l1.14 2.76a2.36 2.36 0 01-1.2 3.33l-1.15.56-.88-1.8.33-.16c.72-.35.87-.82.4-2l-.87-2a1.9 1.9 0 01.47-2.43 1.9 1.9 0 01-2.2-1.08z"
          ></path>
        </g>
        <polygon
          opacity="0"
          points="212.8 302.65 223.86 295.35 212.01 289.42 212.8 302.65"
          fill="none"
          stroke="#a3b2e5"
          stroke-miterlimit="10"
        ></polygon>
        <g opacity="0" fill="#f2c5c2">
          <path
            d="M229.4 295.5l-.82-1.66 3.88-4-5.54.64-.82-1.66 8.1-.86.81 1.64zM212 301l-.81-1.64 5.61-5.91.82 1.67-3.88 4 5.54-.64.82 1.66zM222.33 288.54l1.44-.71 1 12.62-1.43.7z"
          ></path>
        </g>
      </g>
    </svg>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      isPlaying: false,
    };
  },
  methods: {
    playShapes() {
      const safeToAnimate = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
      ).matches;

      if (!safeToAnimate || window.innerWidth < 800) {
        return;
      }

      if (!this.isPlaying) {
        this.isPlaying = true;

        /** we can pass an array of keyframes to sequence our shapes */
        gsap.to("#shapes-about > *", {
          ease: "easeOut",
          onComplete: this.isFinished(),
          keyframes: [
            { x: 0, y: 0, opacity: 0 },
            { opacity: 1, duration: 0.001 },
            {
              x: "+=random(-150, 150)",
              y: "+=random(-200, 20)",
              rotate: "+=random(-360, 360)",
              duration: 2,
            },
            { opacity: 0, delay: -0.4, duration: 0.4 },
          ],
        });
      }
      this.isFinished();
    },
    isFinished() {
      this.isPlaying = false;
    },
  },
};
</script>

<style lang="scss" scoped>
/**
#master.stage-0 #about {
  transform: translateX(-100vw);
}
#master.stage-1 #about,
#master.stage-2 #about {
  transform: translateX(0);
}
*/

.dark {
  #about {
    background-color: $bg-black;
    #about-content {
      div.content {
        .l1:after {
          color: $fuchsia;
        }
        div {
          span {
            color: $white;
            &.info-text-colored {
              color: $section-title-dark !important;
            }
          }

          .outline {
            color: $white;
            -webkit-text-stroke-color: $white;

            &:hover {
              -webkit-text-fill-color: $white;
            }
          }
        }
      }
    }
  }
}
#about {
  background-color: $lighter-blue;
  width: 100%;
  height: 100vh;
  opacity: 1;
  z-index: 1;

  /** disable transformations */
  position: relative !important;

  #about-content {
    align-self: center;
    position: absolute;
    left: 5%;

    div.content {
      margin-left: auto;
      margin-right: auto;
      flex-wrap: wrap;
      font-size: 5rem;
      font-weight: 700;
      width: 60%;

      .l1:after {
        content: ".";
        color: $fuchsia;
      }

      div {
        position: relative;
        margin-right: 16px;

        span {
          color: hsl(0, 0%, 20%);
        }

        span.info-text-colored {
          color: $fuchsia_light !important;
          font-weight: 800;
        }

        .outline {
          color: hsl(0, 0%, 20%);
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: hsl(0, 0%, 20%);

          &:hover {
            -webkit-text-fill-color: hsl(0, 0%, 20%);
          }
        }
      }
    }
  }
}

/** Media queries */
@media (max-width: 800px) {
  #about-content {
    opacity: 1 !important;
    transform: none !important;

    .content {
      div {
        opacity: 1 !important;
        transform: none !important;
      }
    }
  }
}

@media (max-width: 75em) {
  #about {
    #about-content {
      left: 0;
      div.content {
        font-size: 4.5rem;
      }
    }
  }
}

@media (max-width: 56.25em) {
  #about {
    #about-content {
      transform: none !important;
      left: 0;
      div.content {
        justify-content: flex-start !important;
        width: 90% !important;

        div {
          transform: none !important;

          span {
            font-size: 4rem !important;
          }
        }
      }
    }
  }
}
@media (max-width: 37.5em) {
  #about {
    #about-content {
      div.content {
        div {
          span {
            font-size: 3.2rem !important;
          }
        }
      }
    }
  }
}

@media (max-width: 20em) {
  #about {
    #about-content {
      div.content {
        font-size: 3.2rem;
      }
    }
  }
}
</style>
