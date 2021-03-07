<template>
  <section id="about" class="d-flex position-absolute">
    <div
      class="d-flex justify-content-center flex-column w-100"
      id="about-content"
      :style="style"
    >
      <div class="content d-inline-flex flex-row">
          <!--  -->
        <div class="sc">
          <span>{{ $t("about.openminded.start") }}</span>
        </div>
            <!-- -->
        <div class="r">
          <span class="info-text-colored">{{
            $t("about.openminded.creative")
          }}</span>
        </div>
            <!-- -->
        <div class="o">
          <span>{{ $t("about.openminded.middle") }}</span>
        </div>
            <!-- -->
        <div class="l">
          <span class="info-text-colored">{{
            $t("about.openminded.open")
          }}</span>
        </div>
            <!-- -->
        <div class="l1">
          <span>{{ $t("about.openminded.try") }}</span>
        </div>
        <div class="l2">
          <span>{{ $t("about.openminded.astehtic") }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    yOffset: Number,
  },
  computed: {
    style() {
      return {
        transform: "translate3d(0, " + -this.yOffset + "px, 0)",
      };
    },
  },
};
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

    div.content {
      margin: 0 auto;
      flex-wrap: wrap;
      font-size: 5rem;
      font-weight: 700;
      text-align: left;
      width: 80%;

      .l2:after {
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
</style>
