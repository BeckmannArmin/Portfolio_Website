<template>
  <div :id="id" class="project-item enter">
    <div class="project-parent-container">
      <button class="project-close" @click="closeModal"></button>
      <div class="project-container">
        <div class="project-header">
          <h1 class="title">{{ name }}</h1>
          <ul class="technologies-used">
            <li
              v-for="(technology, index) in technologies"
              :key="index"
              class="technology"
            >
              {{ technology }}
            </li>
          </ul>
          <button class="cta-btn cta-btn-project">
            <a :href="href" target="_blank"> {{ $t("projects.view") }}</a>
          </button>
        </div>
        <p class="project-message">{{ name }} {{ summary }}</p>
        <div class="project-body">
          <div class="wrapper-text is-left">
            <h3 class="wrapper-subtitle">{{ $t('projects.designing')}}</h3>
            <div class="seperator"></div>
            <p class="wrapper-content">{{ task }}</p>
          </div>
          <div class="wrapper-image is-right">
            <img class="project-img" :src="image" />
          </div>
        </div>
        <div v-if="colors" class="project-body color-palette">
          <div
            v-for="(color, index) in colors"
            :key="index"
            class="color-palette-wrapper"
          >
            <div :style="`background-color: ${color}`" class="color"></div>
          </div>
        </div>
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
    colors: Array,
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
  background-color: $modal-bg;
  z-index: 99999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
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
    width: 80%;
    margin: auto;
    transform: scale(1);

    .project-close {
      position: absolute;
      top: 30px;
      right: 30px;
      z-index: 5;
      background-color: transparent;
      border: none;
      color: #94a4b4;
      font-size: 3rem;
      cursor: pointer;
      -webkit-transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        color: $frog-green-light;
      }

      &:after {
        content: "x";
        font-weight: 600;
      }
    }

    .project-container {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;

      .project-body {
        width: 100%;
        position: relative;
        padding-top: 30px;
        text-align: left;

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
            transition: -webkit-transform 0.3s;
            transition: transform 0.3s;
            transition: transform 0.3s, -webkit-transform 0.3s;
          }
        }

        .wrapper-text {
          float: left;
          clear: none;
          width: 50%;
          margin-left: 0;
          margin-right: 3%;

          .seperator {
            width: 33%;
            height: 3px;
            margin: 2.6rem 0;
            background-color: $fuchsia;
          }

          .wrapper-subtitle {
            font-size: 3rem;
            color: $frog-green-light;
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
        margin-top: 50px;
        margin-bottom: 50px;
        width: 100%;

        .title {
          margin-left: 25px;
          margin-right: 25px;
          color: #dbe8d4;
          margin-top: 50px;
          font-size: 5.6rem;
          font-weight: 600;

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

          .technology {
            display: inline-block;
            margin: 0.5rem;
            border: 1px solid $frog-green;
            border-radius: 4px;
            padding: 0.75rem;
            color: $frog-green-light;
            font-weight: lighter;
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
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .cta-btn-project {
          border: 1px solid $frog-green;
        }

        a {
          color: $frog-green-light;
          text-decoration: none;
        }

        a:hover {
          transition: all 0.3s ease-in-out;
          color: $frog-green;
        }

        .cta-btn-project:hover {
          color: $frog-green;
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
        color: #dbe8d4;
      }
      .project-message {
        width: 90%;
        margin: auto auto 25px;
        text-align: center;
      }

      /**
      img.project-img {
        width: 35%;
        border-radius: 8px;
        margin: 42px auto 75px;
        background: #fff;
        padding: 24px;
        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4);
      }
      */
    }
  }
}

@media (max-width: 56.25em) {
  .project-item .project-parent-container .project-container .project-body {
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
  .project-item
    .project-parent-container
    .project-container
    .project-body.color-palette
    .color-palette-wrapper {
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
