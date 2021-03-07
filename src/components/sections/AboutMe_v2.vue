<template>
  <section id="about" class="d-flex position-absolute">
    <div
      class="container d-flex justify-content-center flex-column w-100"
      id="about-content"
      :style="style"
    >
      <div class="container">
        <div class="content d-inline-flex flex-row">
          <p class="about-wrapper-info-text">
              <span :style="style">{{ $t("about.openminded.start") }}</span>
              <span :style="style" class="info-text-colored">{{ $t("about.openminded.creative") }}</span>
              <span :style="style">{{ $t("about.openminded.middle") }}</span>
              <span :style="style" class="info-text-colored">{{ $t("about.openminded.open") }}</span>
              <span :style="style">{{ $t("about.openminded.try") }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        yOffset: Number
    },
    computed: {
        style() {
            return {
                transform: 'translate3d('+ -(this.yOffset/2) + 'px,' + -(this.yOffset) + 'px, 0)'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#master.stage-0 #about {
  transform: translateX(-100vw);
}

#master.stage-1 #about,
#master.stage-2 #about {
  transform: translateX(0);
}

#master.stage-1 #about-content {
    opacity: 1;
}

#about {
  transition: transform 1s cubic-bezier(1, 0, 0, 1);
  background: none;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  z-index: 1;

  #about-content {
    align-items: center;
    opacity: 0;
    transition: opacity 2.5s cubic-bezier(0.645, 0.045, 0.355, 1);

    .content {
      margin: 0 auto;
      display: inline-flex;
      flex-direction: row;
      flex-wrap: wrap;

      .about-wrapper-info-text {
        font-size: 5rem;
        font-weight: 700;
        text-align: left;
        color: $white;

        &:after {
            content: ".";
            color: $frog-green;
        }

        .info-text-colored {
            color: $text-main;
            font-weight: 800;
        }
      }
    }
  }
}
</style>
