<template>
  <section id="projects">
    <div class="container">
      <h2 class="section-title">
        {{ $t("projects.projects") }}
      </h2>
      <div
        class="center align-items-center w-100 d-flex flex-column justify-content-center"
      >
        <div
          id="button-container"
          class="project-categories position-relative"
        >
          <button class="btn active" @click="filterProjects('all')">
            {{ $t("projects.all") }}
          </button>
          <button class="btn" @click="filterProjects('frontend')">
            Frontend
          </button>
          <button class="btn" @click="filterProjects('backend')">
            Backend
          </button>
          <button class="btn" @click="filterProjects('design')">Design</button>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="project-list row-inner">
            <div v-for="(project, index) in projects" :key="index" class="project" :class="project.classes">
                <div class="project-inner-container d-flex align-items-center justify-content-center flex-column position-relative h-100 w-100">
                    <img class="image img-fluid" :src="project.img"/>
                    <b>{{ project.name }}</b>
                </div>
                  <div
                class="overlay d-flex position-absolute justify-content-center align-items-center"
              >
                <a @click="showModalFor(project)">{{ $t("projects.view") }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(project, index) in projects" :key="index">
        <ProjectModal v-if="project.showModal" @closeModal="project.showModal = false" :id="project.id" :name="project.name" :summary="project.summary" :technologies="project.technologies" :href="project.href" :image="project.img"/>
    </div>
  </section>
</template>

<script>
import ProjectModal from "./modals/ProjectModal.vue";
export default {
  components: {
    ProjectModal,
  },
  data()
  {
      return {
        projects: [
            {id: 1, name: 'Whitebird', summary: `${this.$t('projects.whitebird')}`, technologies: ['NestJs','NuxtJs','MongoDB','FabricJS'], classes: ['frontend', 'backend'], img: require('../../assets/whitebird_logo.svg'), href: 'https://github.com/BuchholzTim/Whitebird', showModal: false},
            {id: 2, name: 'Hly', summary: `${this.$t('projects.hly')}`, technologies: ['Photoshop'], classes: ['design'], img: require('../../assets/hly_logo.png'), href: 'https://www.youtube.com/watch?v=bZbDIigXlNc', showModal: false},
            {id: 3, name: 'conForm', summary: `${this.$t('projects.conForm')}`, technologies: ['Laravel','VueJs'],classes: ['frontend', 'backend'], img: require('../../assets/conForm_logo.png'),href: 'https://github.com/BeckmannArmin/conForm', showModal: false},
            {id: 4, name: 'Menschen.Helfen.Leben', summary: `${this.$t('projects.menschenhelfen')}`, technologies: ['Wordpress', 'CSS'],classes: ['design'], img: require('../../assets/menschen.jpg'), href: 'https://menschen-helfen-leben.de/', showModal: false}
        ],
      }
    },
  mounted() {
    this.highlightActiveBtn();
  },
  methods: {
    /**
     * Source: https://www.w3schools.com/howto/howto_js_filter_elements.asp
     */
    filterProjects(c) {
      var x, i;
      x = document.getElementsByClassName("project");
      if (c == "all") {
        c = "";
      }
      for (i = 0; i < x.length; i++) {
        this.removeClassFromProject(x[i], "enter");
        this.addClassToProject(x[i], "leave");
        if (x[i].className.indexOf(c) > -1) {
          this.addClassToProject(x[i], "enter");
          this.removeClassFromProject(x[i], "leave");
        }
      }
    },
    addClassToProject(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    },
    removeClassFromProject(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    },
    highlightActiveBtn() {
      var btnContainer = document.getElementById("button-container");
      var btns = btnContainer.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace("active", "");
          this.className += " active";
        });
      }
    },
    showModalFor(project) {
        project.showModal = true;
    }
  },
};
</script>

<style lang="scss" scoped>

.dark {
    #projects {
        background: $bg-dark;
        .section-title {
            color: $section-title-dark;
            &:after {
                color: $fuchsia;
            }
        }

        .project-categories {
            background: $bg-dark;

            .btn {
                color: $section-title-dark;
            }
        }
    }
}
section {
  width: 100%;
}

.btn,
b,
a {
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

#projects {
  background: $white;
  text-align: center;
  position: relative;
  padding-bottom: 180px;
  padding-top: 90px;

  .section-title {
    margin: 0 0 4.5rem;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;

    &:after {
      content: ".";
      color: $frog-green;
    }
  }

  .project-categories {
    margin-top: 24px;
    margin-bottom: 12px;
    padding: 4px;
    display: flex;

    .btn {
      padding: 10px 26px;
      position: relative;
      z-index: 1;
      transition: opacity 0.375s ease-in-out,
        color 0.375s cubic-bezier(1, 0, 0, 1);
    }

    .btn.active {
      color: $white;
      background: $fuchsia;
      border-radius: 6px;
    }
  }

  .project-categories,
  .project img {
    border-radius: 6px;
    background: $white;
  }

  .row {
    width: 75%;
    margin: 28px auto auto;
    text-align: center;
  }

  .row-inner {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    align-items: center;
    justify-content: center;
  }

  .project.enter {
    opacity: 1;
    visibility: visible;
  }

  .project.leave {
    opacity: 0;
    min-width: 0;
    flex: 0;
    margin-left: 0;
    margin-right: 0;
    visibility: hidden;
  }

  .project {
    overflow: hidden;
    user-select: none;
    display: flex;
    box-sizing: border-box;
    min-height: 275px;
    min-width: 250px;
    margin: 16px 12px 0;
    background: $fuchsia;
    border-radius: 6px;
    position: relative;
    flex: 1;
    opacity: 1;
    text-align: center;
    transition: all 0.375s $project-transition;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .project-inner-container {
    transition: margin 0.475s $project-transition;
    flex: auto;
    margin: 24px;
  }

  .project img {
    position: absolute;
    top: -6px;
    z-index: 1;
    object-fit: cover;
    height: 90%;
    width: 85%;
    transition: height 0.375s $project-transition,
      width 0.375s $project-transition, flex 0.375s $project-transition,
      top 0.375s $project-transition;
    box-shadow: 0 3px 7px 0 rgb(0, 0, 0 / 25%);
  }

  .project b {
    position: absolute;
    bottom: -6px;
    color: $white;
    opacity: 0.65;
    font-size: 14px;
    transition: max-height 0.375s $project-transition,
      bottom 0.375s $project-transition;
    max-height: 24px;
    overflow: hidden;
  }

  .project .overlay {
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
    z-index: 5;
    background: $background-overlay;
    transition: opacity 0.375s cubic-bezier(1, 0, 0, 1);
    overflow: hidden;
    border-radius: 6px;

    &:hover {
      opacity: 1;
    }

    a {
      padding: 10px 26px;
      color: $white;
      border: 2px solid $fuchsia;
      transition: all 0.375s $project-transition;
      z-index: 3;
    }
  }
}

@media (max-width: 56.25em) {
    #projects {
        .project-categories {
            margin: 0 auto;
            overflow-x: auto;
            max-width: none;
            width: 80%;
        }
    }
}

</style>
