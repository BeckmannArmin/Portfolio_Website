<template>
  <div class="project-bg position-fixed w-100 h-100">
    <div class="project-modal position-absolute">
      <button class="project-close" @click="closeModal"></button>
      <div class="project-left p-4">
        <img class="img-fluid" :src='image' />
      </div>
      <div class="project-right p-4 text-left">
        <div class="project-label">Project</div>
        <h3 class="project-name">{{name}}</h3>
        <ul class="technologies-used">
          <li v-for="(technology,index) in technologies" :key="index" class="technology">{{technology}}</li>
        </ul>
        <div class="project-label">About</div>
        <p class="project-summary">{{name}} {{summary}}</p>
        <a
          class="cta-btn cta-btn-project"
          href="https://github.com/BuchholzTim/Whitebird"
          target="_blank"
          >{{ $t("projects.view") }}</a
        >
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
    },
    data() {
        return {

        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    }
}
</script>

<style lang="scss" scoped>
.project-bg {
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
    visibility: visible;
  top: 0;
  left: 0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -webkit-transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);


  .project-modal {
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 500px;
     opacity: 1;
    background-color: $modal-bg;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    -webkit-box-shadow: 0 0 5px #000;
    box-shadow: 0 0 5px #000;
    -webkit-transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;

    .project-left {
      width: 50rem;
      height: 100%;
      display: inline-block;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .project-right {
      width: calc(100% - 60.5rem);
      display: inline-block;
      vertical-align: top;
      color: $white;

      .project-label {
        font-size: 1.6rem;
        color: $frog-green-light;
        letter-spacing: 1px;
      }

      .project-name {
        font-size: 3rem;
        letter-spacing: 1px;
        font-weight: bold;
      }

      .technologies-used {
        list-style: none;
        margin-bottom: 2rem;

        .technology {
          display: inline-block;
          margin: 0.5rem;
          border: 1px solid $frog-green;
          border-radius: 4px;
          padding: 0.5rem;
          color: $frog-green-light;
          font-weight: lighter;
          letter-spacing: 1px;
          font-size: 1.3rem;
        }
      }

      .project-summary {
        margin-top: 1rem;
        font-size: 1.6rem;
        line-height: 1.5;
        color: #fff;
        overflow-y: scroll;
        height: 22rem;
        white-space: pre-line;

        &::-webkit-scrollbar-track {
          background-color: #252a2e;
        }

        &::-webkit-scrollbar {
          width: 6px;
          background-color: #171a1d;
          border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 12px;
          background-color: #97bfd3;
        }
      }

      .cta-btn {
        display: inline-block;
        position: relative;
        padding: 0.8rem 1.6rem;
        font-weight: 600;
        line-height: 1;
        font-size: 1.4rem;
        z-index: 1;
        transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);

        &:after {
          background: $frog-green;
        }
      }

      .cta-btn-project {
        color: $frog-green;
        border: 2px solid $frog-green;
        border-radius: 4px;

        &:hover {
          color: $white;
          text-decoration: none;

          &:after {
            width: 100%;
          }
        }

        &:after {
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

      a:hover {
        transition: all 0.3s ease-in-out;
      }
    }

    .project-close {
      position: absolute;
      top: 0;
      right: .2rem;
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
  }
}
</style>
