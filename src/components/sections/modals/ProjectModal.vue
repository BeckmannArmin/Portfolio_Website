<template>
  <div :id="project.id" class="project-item">
    <div class="project-parent-container">
      <button class="project-close" @click="closeModal">
        <div class="leftright"></div>
        <div class="rightleft"></div>
      </button>
      <div class="project-container">
        <!-- Project Header -->
        <div class="project-header">
          <div class="text-loading-mask wrapper">
            <div
              class="text-loading-overlay"
              :class="{ reveal: isVisible }"
            ></div>
            <h1
              v-observe-visibility="{
                callback: visibilityChanged,
                throttle: 400,
                once: true,
              }"
              class="title"
            >
              {{ project.name }}
            </h1>
          </div>
          <ul class="technologies-used">
            <li
              v-for="(technology, index) in project.technologies"
              :key="index"
              class="technology"
            >
              {{ technology }}
            </li>
          </ul>
          <div class="work-context">
            <div class="content-wrapper">
              <ul class="work-context-wrapper">
                <li v-for="(context, index) in project.context" :key="index">
                  <strong>{{ context.text }}</strong>
                  <span class="context-baffle">{{ context.roles }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Project Header End -->

        <!-- Project Intro -->
        <div class="project-intro">
          <div class="giga-text">
            {{ project.name }}
          </div>
          <div
            v-observe-visibility="{
              callback: introVisibilityChanged,
              throttle: 200,
              once: true,
            }"
            class="container"
          >
            <div class="text-loading-mask">
              <div
                class="text-loading-overlay"
                :class="{ reveal: isIntroVisible }"
              ></div>
              <h2 class="intro-title">
                {{ $t("projects.theproject") }}
              </h2>
            </div>
            <div class="intro-description-wrapper">
              <p>{{ project.summary }}</p>
            </div>
            <div class="intro-btn-wrapper">
              <a :href="project.href" target="_blank" class="btn cta-btn">
                <span class="button-text">{{ $t("projects.see") }}</span>
              </a>
            </div>
          </div>
        </div>
        <!-- Project Intro End -->

        <!-- Project brand -->
        <div class="project-brand">
          <div class="project-body">
            <div
              v-observe-visibility="{
                callback: brandVisibilityChanged,
                throttle: 200,
                once: true,
              }"
              class="body-header"
            >
              <h2 class="header-sub" :class="{ reveal: isBrandVisible }">
                {{ $t("projects.designing") }}
              </h2>
            </div>
            <div
              class="wrapper-text is-left"
              :class="{ reveal: isBrandVisible }"
            >
              <h3 class="wrapper-subtitle">{{ project.titel }}</h3>
              <div class="seperator"></div>
              <p class="wrapper-content">{{ project.task }}</p>
            </div>
            <div
              class="wrapper-image is-right"
              :class="{ reveal: isBrandVisible }"
            >
              <img class="project-img" :src="project.img" />
            </div>
          </div>
        </div>
        <!-- Project brand End -->
      </div>
    </div>
  </div>
</template>

<script>
import baffle from "baffle";

export default {
  props: ["project"],
  data() {
    return {
      isVisible: false,
      isIntroVisible: false,
      isBrandVisible: false,
    };
  },
  mounted() {
    const html = document.querySelector("html");
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    if (window.innerWidth > 1025) {
      this.startBaffle();
    }
  },
  destroyed() {
    const html = document.querySelector("html");
    html.style.overflow = "";
    document.body.style.overflow = "";
  },
  methods: {
    startBaffle() {
      const b = baffle(".context-baffle", {
        characters: "▒█/ ░▓<▓▒ █▓█░▒ █░░ ▒█▓░█ ░▓<▒ ░/█",
      });
      setTimeout(() => {
        b.start();
      }, 1000);

      setTimeout(() => {
        b.reveal(6000);
      }, 2000);
    },
    closeModal() {
      this.$emit("closeProject");
    },
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    },
    introVisibilityChanged(isVisible) {
      this.isIntroVisible = isVisible;
    },
    brandVisibilityChanged(isVisible) {
      this.isBrandVisible = isVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.project-item {
  z-index: 99999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::-webkit-scrollbar-track {
    background-color: #171a1d;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #171a1d;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 0;
    background-color: $frog-green;
  }

  &.enter {
    overflow-y: auto;

    .text-loading-mask {
      .text-loading-overlay {
        &.reveal {
          opacity: 1;
          -webkit-transform: translateX(105%);
          transform: translateX(105%);
        }
      }
    }
  }

  .project-parent-container {
    background: #1c1d25;
    width: 100%;
    position: relative;
    margin: auto;

    .project-close {
      position: absolute;
      top: 30px;
      right: 75px;
      z-index: 5;
      width: 65px;
      height: 65px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      -webkit-transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        .leftright {
          transform: rotate(-45deg);
          background-color: $fuchsia;
        }

        .rightleft {
          transform: rotate(45deg);
          background-color: $fuchsia;
        }
      }

      .leftright {
        height: 4px;
        width: 40px;
        position: absolute;
        margin-top: 24px;
        background-color: $fuchsia_light;
        border-radius: 2px;
        transform: rotate(45deg);
        transition: all 0.3s ease-in;
      }

      .rightleft {
        height: 4px;
        width: 40px;
        position: absolute;
        margin-top: 24px;
        background-color: $fuchsia_light;
        border-radius: 2px;
        transform: rotate(-45deg);
        transition: all 0.3s ease-in;
      }
    }

    .project-container {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;

      .project-intro {
        padding: 85px 0;
        text-align: center;
        overflow: hidden;
        background-color: #060c10;
        .giga-text {
          color: $white;
          font-weight: bold;
          font-size: 10rem;
          position: absolute;
          left: 6%;
          opacity: 0.05;
          z-index: 0;
        }

        .container {
          .intro-btn-wrapper {
            padding: 40px 0;

            .btn {
              pointer-events: auto;
              cursor: pointer;
              background: #e7e7e7;
              border: none;
              padding: 1.5rem 3rem;
              margin: 0;
              font-size: 2rem;
              position: relative;
              display: inline-block;

              &::before,
              &::after {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            }

            .cta-btn {
              background: #37a5eb;
              font-weight: 700;
              padding: 0;
              border-radius: 5px;

              &:hover {
                span {
                  transform: translate3d(-8px, -8px, 0);
                }
              }

              span {
                display: block;
                color: $text-main;
                background: #ece9f1;
                padding: 1.5rem 2rem;
                border: 1px solid #000;
                border-radius: 5px;
                transform: translate3d(-4px, -4px, 0);
                transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
              }
            }
          }
          .intro-description-wrapper {
            width: 48%;
            margin: 0 auto;
            color: $white;
            position: relative;

            p {
              text-align: center;
            }
          }
          .intro-title {
            display: inline-block;
            font-size: 5.5rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: $white;
            overflow: hidden;
            position: relative;
            line-height: 1.3;
          }
        }
      }

      .project-brand {
        padding: 85px 0;
      }
      .project-body {
        width: 100%;
        position: relative;
        padding-top: 30px;
        text-align: left;

        .body-header {
          display: block;

          .header-sub {
            text-align: center;
            margin-bottom: 70px;
            color: $white;
            opacity: 0;
            font-size: 4.2rem;
            font-weight: bold;

            &.reveal {
              animation: slideUp 0.95s ease forwards;
            }
          }
        }

        .wrapper-image {
          opacity: 0;

          &.reveal {
            animation: slideUp 0.95s ease forwards;
          }
          &:last-child {
            margin-right: 0;
          }

          float: left;
          clear: none;
          width: 45%;
          margin-left: 0;
          margin-right: 3%;

          img {
            display: block;
            width: 55%;
            margin-left: 10%;
          }
        }

        .wrapper-text {
          float: left;
          clear: none;
          width: 50%;
          margin-left: 0;
          margin-right: 3%;
          opacity: 0;

          &.reveal {
            animation: slideUp 0.95s ease forwards;
          }

          .seperator {
            width: 33%;
            height: 3px;
            margin: 2.6rem 0;
            background-color: $fuchsia;
          }

          .wrapper-subtitle {
            font-size: 3rem;
            color: $white;
          }

          &.is-left {
            padding-left: 200px;
          }

          .wrapper-content {
            text-align: justify;
          }
        }
      }

      .project-header {
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;

        .wrapper {
          width: 100%;
          word-break: break-word;
        }

        .title {
          margin-left: 25px;
          margin-right: 25px;
          color: $white;
          font-size: 6rem;
          font-weight: 600;
          animation: slideUp 0.95s ease forwards 0.5s;
          opacity: 0;

          &::after {
            content: ".";
            color: $fuchsia;
          }
        }

        .technologies-used {
          list-style: none;
          margin-bottom: 2rem;
          margin-top: 1rem;
          padding: 0;
          opacity: 0;
          animation: slideUp 0.95s ease forwards 0.75s;

          .technology {
            display: inline-block;
            margin: 0.5rem;
            border: 1px solid $white;
            border-radius: 4px;
            padding: 0.75rem;
            color: $white;
            letter-spacing: 1px;
            font-size: 1.3rem;
          }
        }

        .work-context {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding-bottom: 65px;
          color: $white;

          .content-wrapper {
            margin: 0 auto;
            max-width: 1170px;
            .work-context-wrapper {
              margin: 0;
              padding: 0;
              list-style: none;
              opacity: 0;
              animation: slideUp 0.95s ease forwards 0.75s;

              li {
                display: inline-block;
                clear: none;
                width: 33%;
                margin-left: 0;
                vertical-align: middle;
                text-transform: uppercase;
                font-size: 1.6rem;
                font-weight: bold;
                letter-spacing: 2px;

                strong {
                  color: #37a5eb;
                  padding-right: 5px;
                }
              }
            }
          }
        }

        .cta-btn {
          display: inline-block;
          position: relative;
          padding: 1.5rem 2rem;
          font-weight: 700;
          border-radius: 6px;
          background: none;
          line-height: 1;
          font-size: 1.6rem;
          z-index: 1;
          animation: slideUp 0.95s ease forwards 1s;
          opacity: 0;
        }
        .cta-btn-project {
          border: 1px solid $white;
        }

        a {
          color: $white;
          text-decoration: none;
        }

        a:hover {
          transition: all 0.3s ease-in-out;
          color: $white;
        }

        .cta-btn-project:hover {
          color: $white;
        }

        .cta-btn:after {
          background: #fff;
        }

        .cta-btn-project:hover:after {
          width: 100%;
        }

        .cta-btn-project:after {
          content: "";
          display: block;
          position: absolute;
          width: 0;
          height: 100%;
          left: 0;
          bottom: 0;
          z-index: -1;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        }
      }
      p {
        font-weight: 400;
        font-size: 2rem;
        color: $white;
      }
      .project-message {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        animation: slideUp 0.95s ease forwards 1.05s;
        opacity: 0;
      }
    }
  }
}

.text-loading-mask {
  .text-loading-overlay {
    display: none;
  }
}

/** keyframes */
@keyframes slideUp {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@media (min-width: 56.25em) {
  .text-loading-mask {
    display: inline-block;
    position: relative;
    padding-top: 10px;
    padding-right: 10px;
    overflow: hidden;

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
  .project-item .project-parent-container .project-container {
    .project-header {
      .technologies-used {
        .technology {
          padding: 0.5rem;
        }
      }
      .work-context .content-wrapper {
        max-width: none;
        width: 95%;

        .work-context-wrapper {
          text-align: center;
          li {
            display: block;
            clear: both;
            float: none;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            font-size: 1.2rem;
            display: inline-block;
            text-align: center;
            margin-right: 20px;
            &:first-child {
              margin-left: auto;
            }
          }
        }
      }
    }
    .project-intro .container {
      .intro-btn-wrapper {
        .btn {
          font-size: 1.5rem;
        }
      }
      .intro-title {
        font-size: 2.5rem;
      }
    }
    .project-body {
      .wrapper-text {
        &:first-child {
          margin-left: auto;
        }
        display: block;
        clear: both;
        float: none;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 35px;
        &.is-left {
          padding-left: 0;
          padding: 0 8%;
          text-align: center;
        }

        .seperator {
          opacity: 0;
        }

        .wrapper-subtitle {
          font-size: 2.5rem;
        }

        .wrapper-content {
          text-align: left !important;
        }
      }
      .wrapper-image {
        display: block;
        clear: both;
        float: none;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        &:last-child {
          margin-right: auto;
        }

        img {
          display: block;
          width: 90%;
          margin: 0 auto;
          transition: none;
        }
      }

      .body-header {
        .header-sub {
          font-size: 3.4rem;
        }
      }
    }
  }

  p {
    font-size: 1.6rem !important;
  }

  h1.title {
    font-size: 3.8rem !important;
  }

  img.project-img {
    width: 80% !important;
  }
}

@media (max-width: 37.5em) {
  .project-item .project-parent-container .project-container {
    .project-intro .container {
      .intro-btn-wrapper {
        .btn {
          font-size: 1.2rem;
        }
      }
    }

    h1.title {
      font-size: 3.2rem !important;
    }

    .project-body {
      .body-header {
        .header-sub {
          font-size: 3.2rem;
        }
      }
    }
  }
}
</style>
