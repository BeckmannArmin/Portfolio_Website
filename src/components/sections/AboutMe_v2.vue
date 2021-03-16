<template>
  <section id="about" class="d-flex position-absolute">
    <div
      class="d-flex justify-content-center flex-column w-100"
      id="about-content"
    >
      <div class="content d-inline-flex flex-row">
        <div class="sc" style="transform: translate3d(0,0,0)">
          <span>{{ $t("about.openminded.start") }}</span>
        </div>
        <div class="r" style="transform: translate3d(0,0,0)">
          <span class="info-text-colored">{{
            $t("about.openminded.creative")
          }}</span>
        </div>
        <div class="o" style="transform: translate3d(0,0,0)">
          <span>{{ $t("about.openminded.middle") }}</span>
        </div>
        <div class="l" style="transform: translate3d(0,0,0)">
          <span class="info-text-colored">{{
            $t("about.openminded.open")
          }}</span>
        </div>
        <div class="l1" style="transform: translate3d(0,0,0)">
          <span>{{ $t("about.openminded.try") }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

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
    #about-content {
      div.content {
        .l1:after {
          color: $fuchsia;
        }
        div {
          span.info-text-colored {
            color: $section-title-dark !important;
          }
        }
      }
    }
  }
}
#about {
  background: none;
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
        color: $frog-green;
      }

      div {
        position: relative;
        margin-right: 16px;

        span {
          color: $white;
        }

        span.info-text-colored {
          color: $text-main !important;
          font-weight: 800;
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
