<template>
  <div :id="id" class="project-item enter">
    <div class="project-parent-container">
      <button class="project-close" @click="closeModal">
        <div class="leftright"></div>
        <div class="rightleft"></div>
      </button>
      <div class="project-container">
        <!-- Project Header -->
        <div class="project-header">
          <div class="text-loading-mask">
            <div class="text-loading-overlay"></div>
            <h1 class="title">{{ name }}</h1>
          </div>
          <ul class="technologies-used">
            <li
              v-for="(technology, index) in technologies"
              :key="index"
              class="technology"
            >
              {{ technology }}
            </li>
          </ul>
          <p class="project-message">{{ summary }}</p>
        </div>
        <!-- Project Header End -->

        <!-- Project Intro -->
        <div class="project-intro">
          <div class="giga-text">
            {{ name }}
          </div>
          <div class="container">
            <h2 class="intro-title">
              {{ $t("projects.theproject") }}
            </h2>
            <div class="intro-description-wrapper">
              <p>{{ summary }}</p>
            </div>
            <div class="intro-btn-wrapper">
              <a :href="href" class="animBtn cta-btn">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                <span class="button-text">{{ $t("projects.see") }}</span>
              </a>
            </div>
          </div>
        </div>
        <!-- Project Intro End -->

        <!-- Project brand -->
        <div class="project-brand">
          <div class="project-body">
            <div class="body-header">
              <h2 class="header-sub">{{ $t("projects.designing") }}</h2>
            </div>
            <div class="wrapper-text is-left">
              <h3 class="wrapper-subtitle">{{ titel }}</h3>
              <div class="seperator"></div>
              <p class="wrapper-content">{{ task }}</p>
            </div>
            <div class="wrapper-image is-right">
              <img class="project-img" :src="image" />
            </div>
          </div>
        </div>
        <!-- Project brand End -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    summary: String,
    technologies: Array,
    id: Number,
    image: String,
    href: String,
    task: String,
    titel: String,
  },
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.project-item {
  background: #1c1d25;
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
  transform: scale(0.6);
  opacity: 0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.375s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.375s ease-in-out, border-radius 0.375s ease-in-out;

  &.enter {
    border-radius: 0;
    opacity: 1;
    transform: scale(1);
    transition: transform 0.375s cubic-bezier(1, 0, 0, 1),
      opacity 0.375s ease-in-out, border-radius 0.375s ease-in-out !important;
    overflow-y: auto;
  }

  .project-parent-container {
    width: 100%;
    position: relative;
    margin: auto;
    transform: scale(1);

    .project-close {
      position: absolute;
      top: 30px;
      right: 75px;
      z-index: 5;
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
            .animBtn {
              font-size: 2rem;
              width: 100%;
              line-height: 45px;
              padding: 2rem;
              color: $white;
              position: relative;

              .button-text {
                position: relative;
              }

              &:hover {
                text-decoration: none;
              }
            }

            .cta-btn {
              background: darken(#060c10, 1.5%);
              font-weight: 100;

              svg {
                height: 45px;
                left: 0;
                position: absolute;
                width: 100%;
              }

              rect {
                fill: none;
                stroke: #fff;
                stroke-width: 2;
                stroke-dasharray: 422, 0;
                transition: all 0.35s linear;
              }
            }

            .cta-btn:hover {
              background: rgba(#060c10, 0);
              font-weight: 900;
              letter-spacing: 1px;

              rect {
                stroke-width: 5;
                stroke-dasharray: 15, 310;
                stroke-dashoffset: 48;
                transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
              }
            }
          }
          .intro-description-wrapper {
            width: 48%;
            margin: 0 auto;
            color: $white;
            position: relative;

            p {
              text-align: justify;
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

        .font-images-wrapper {
          float: left;
          clear: none;
          width: 50%;
          margin-left: 0;
          margin-right: 0;
          background-position: 50%;
          background-size: cover;
          background-repeat: no-repeat;
          background-size: contain;
          margin-top: 40px;
          margin-bottom: 40px;
          height: 300px;
        }

        .body-header {
          display: block;

          .header-sub {
            text-align: center;
            margin-bottom: 70px;
            color: $white;
            animation: slideUp 1.2s ease forwards 0.9s;
            opacity: 0;
            font-size: 4rem;
          }
        }

        &.color-palette {
          padding-top: 85px;
          padding-bottom: 85px;
          padding-left: 200px;

          .color-palette-wrapper {
            float: left;
            clear: none;
            width: 15%;
            margin-left: 0;
            margin-right: 5%;
            text-align: center;

            .color {
              display: block;
              width: 145px;
              height: 145px;
              margin: 0 auto;
              background-color: #fff;
              box-shadow: 0 5px 20px 0 rgb(0, 0, 0 / 33%);
              border-radius: 50%;
              transition: all 0.3s;
            }
          }
        }

        .wrapper-image {
          animation: slideUp 0.95s ease forwards 2s;
          opacity: 0;
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
          animation: slideUp 0.95s ease forwards 2s;
          opacity: 0;

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
            font-weight: er;
            letter-spacing: 1px;
            font-size: 1.3rem;
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
  .project-item
    .project-parent-container
    .project-container
    .project-header
    .text-loading-mask {
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
  .project-item .project-parent-container .project-container .project-body {
    .font-images-wrapper {
      height: 200px;
    }
    &.color-palette {
      padding-left: 0;

      .color-palette-wrapper {
        .color {
          width: 90px;
          height: 90px;
        }
      }
    }

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

  p {
    font-size: 1.6rem !important;
  }

  h1.title {
    font-size: 2.5rem !important;
    padding: 0 2rem;
  }

  img.project-img {
    width: 80% !important;
  }
}

@media (max-width: 37.5em) {
  .project-item .project-parent-container .project-container .project-body {
    .font-images-wrapper {
      display: none;
    }

    .body-header {
      .header-sub {
        font-size: 3.2rem;
      }
    }
    &.color-palette .color-palette-wrapper {
      float: left;
      clear: none;
      width: 45%;
      margin-left: 0;
      margin-right: 3%;
      margin-bottom: 40px;

      .color {
        width: 125px;
        height: 125px;
      }
    }
  }
}

@media (max-width: 29em) {
  .project-item
    .project-parent-container
    .project-container
    .project-body.color-palette
    .color-palette-wrapper {
    display: block;
    clear: both;
    float: none;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    &:first-child {
      margin-left: auto;
    }
    .color {
      width: 125px;
      height: 125px;
    }
  }
}
</style>
