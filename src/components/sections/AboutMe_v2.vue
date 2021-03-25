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
    <svg
      class="about-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 350"
    >
      <g id="shapes-about">
        <text opacity="0" fill="#88d3d1">&#35;</text>
        <text opacity="0" fill="#dd859c">&#8730;</text>
        <text opacity="0" fill="#dd859c">&#8716;</text>
        <text opacity="0" fill="#a3b2e5">&#123;&#47;&#125;</text>
        <text opacity="0" fill="#f2c5c2">&#37;</text>
        <text opacity="0" fill="#f9e4ac">&#8710;</text>
        <text opacity="0" fill="#88d3d1">&#8712;</text>
        <text opacity="0" fill="#d6a0e0">&#8711;</text>
        <text opacity="0" fill="#a3b2e5">&#8710;</text>
        <text opacity="0" fill="#f9e4ac">&#8713;</text>
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
              scale: 2,
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

  .about-svg {
    display: none;
    z-index: -1;

    #shapes-about {
      transform: translate(100px, 150px);
    }
  }

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

@media (min-width: 800px) {
  #about {
    .about-svg {
      display: block;
      height: 100vh;
      flex-grow: 1;
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
